import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

// 24 hours in milliseconds
const COOLDOWN = 24 * 60 * 60 * 1000;

// In-memory store (NO DB)
const ipSubmissions = new Map<string, number>();

export const POST: APIRoute = async ({ request }) => {
  // Get IP address
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const now = Date.now();
  const lastSubmission = ipSubmissions.get(ip);

  // Check cooldown
  if (lastSubmission && now - lastSubmission < COOLDOWN) {
    const hoursLeft = Math.ceil(
      (COOLDOWN - (now - lastSubmission)) / (60 * 60 * 1000),
    );

    return new Response(
      JSON.stringify({
        message: `Sorry, you can only submit once every 24 hours. Try again in ${hoursLeft} hour(s). Worry not, I will reach you out as soon as possible. Thank you for your patience!`,
      }),
      { status: 429 },
    );
  }

  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const description = formData.get("description")?.toString();

  if (!name || !email || !description) {
    return new Response(
      JSON.stringify({ message: "Name, email, and message are required" }),
      { status: 400 },
    );
  }

  const { error } = await supabase.from("notification").insert({
    name,
    email,
    description,
  });

  if (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }

  // Save submission time
  ipSubmissions.set(ip, now);

  return new Response(null, { status: 200 });
};
