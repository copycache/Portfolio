import { supabase } from "../../lib/supabase";

// Fetch all projects
export async function getProjects() {
  const { data: projects, error } = await supabase.from("project").select("*").order("date", { ascending: false });
  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
  return projects;
}

// Fetch all tech stack items
export async function getTechstack() {
  const { data: techstack, error } = await supabase.from("techstack").select("*");
  if (error) {
    console.error("Error fetching tech stack:", error);
    return [];
  }
  return techstack;
}

// Format projects with tech stack names
export async function getProjectsFormatted() {
  const projects = await getProjects();
  const techstack = await getTechstack();

  const formattedProjects = projects.map((project) => {
    // Filter techstack items that belong to this project
    const projectTech = techstack
      .filter((t) => t.project_id === project.id)
      .map((t) => t.techstack);

    return {
      title: project.title,
      date: project.date,
      description: project.description,
      image: project.image || "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png",
      tech: projectTech,
      url: project.url || "#",
    };
  });

  return formattedProjects;
}
