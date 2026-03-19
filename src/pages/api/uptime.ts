import { supabase } from "../../lib/supabase";

// Fetch all Uptime
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

// Update Uptime status
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
