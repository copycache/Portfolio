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

    const formattedDate = project.date
      ? new Date(project.date).toLocaleString("default", { month: "long", year: "numeric" })
      : "Unknown";

    return {
      title: project.title,
      date: formattedDate,
      description: project.description,
      image: project.image,
      tech: projectTech,
      url: project.url || "#",
      github_url: project.github_url || "#",
    };
  });

  return formattedProjects;
}

export async function getProjectLicense(githubUrl: string) {
  try {
    const repoPath = githubUrl
      .replace("https://github.com/", "")
      .replace(/\/$/, ""); // e.g., "username/repo"

    const res = await fetch(`https://api.github.com/repos/${repoPath}/license`);
    if (!res.ok) return null;

    const data = await res.json();
    return data.license?.name || null;
  } catch (error) {
    console.error("Failed to fetch license:", error);
    return null;
  }
}