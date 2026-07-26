import { supabase } from "../../lib/supabase";

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "Present";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export async function getWorkExperiences() {
  const { data: work, error } = await supabase
    .from("work")
    .select("*")
    .order("start_date", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }
  return work;
}

export async function getTechstackByWork(workId: number) {
  const { data, error } = await supabase
    .from("techstack")
    .select("id, techstack, url, work_technologies!inner(work_id)")
    .eq("work_technologies.work_id", workId)
    .order("techstack", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function getImagesByWork(workId: number) {
  const { data: images, error } = await supabase
    .from("images")
    .select("*")
    .eq("work_id", workId);

  if (error) {
    console.error(error);
    return [];
  }
  return images;
}

export async function getExperiences() {
  const work = await getWorkExperiences();

  const experiences = await Promise.all(
    work.map(async (item) => {
      const [techstackRows, imageRows] = await Promise.all([
        getTechstackByWork(item.id),
        getImagesByWork(item.id),
      ]);

      return {
        startDate: formatDate(item.start_date),
        endDate: formatDate(item.end_date),
        title: item.title,
        company: item.company,
        status: item.status,
        description: item.description,
        techstack: techstackRows.map((t) => t.techstack),
        images: imageRows.map((img) => ({
          src: img.src,
          caption: img.caption,
        })),
      };
    })
  );

  return experiences;
}