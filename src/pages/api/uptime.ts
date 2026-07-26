import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export async function getUptime() {
  const { data: uptime, error } = await supabase
    .from("uptime")
    .select("id, status, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }
  return uptime;
}

export async function updateUptimeStatus(id: number, status: string) {
  const { data, error } = await supabase
    .from("uptime")
    .update({ status })
    .eq("id", id)
    .limit(1);

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

export const GET: APIRoute = async () => {
  try {
    const [uptime] = await Promise.all([getUptime()]);
    const item = uptime[0];
    const newStatus = item.status ? "FALSE" : "TRUE";
    const updated = await updateUptimeStatus(item.id, newStatus);
    return new Response(JSON.stringify({ updated }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), { status: 500 });
  }
};
