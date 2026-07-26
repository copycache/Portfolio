import { supabase } from "../../lib/supabase";

export async function getTechstack() {
  const { data: techstack, error } = await supabase
    .from("techstack")
    .select("*")
    .order("techstack", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }
  return techstack;
}