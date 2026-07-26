// https://api.github.com/users/copycache/repos

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  created_at: string;
  pushed_at: string;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

const PINNED_ORDER = [
  "Goodbaker",
  "Portfolio",
  "ctrl-collection",
  "Loyalty-Reward-System",
  "xampp-version-control",
];

export async function getProjects() {
  try {
    const res = await fetch("https://api.github.com/users/copycache/repos?per_page=100", {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "Portfolio-App",
      },
    });

    if (!res.ok) {
      console.error("Error fetching projects from GitHub:", res.statusText);
      return [];
    }

    const repos = (await res.json()) as GitHubRepo[];
    return repos;
  } catch (error) {
    console.error("Failed to fetch projects from GitHub:", error);
    return [];
  }
}

export async function getTechstack() {
  const repos = await getProjects();

  return repos.flatMap((repo) => {
    const techstack = [repo.language, ...repo.topics].filter(Boolean) as string[];
    return techstack.map((tech) => ({
      project_id: repo.id,
      techstack: tech,
    }));
  });
}

export async function getProjectsFormatted() {
  const [projects, techstack] = await Promise.all([
    getProjects(),
    getTechstack(),
  ]);

  const formattedProjects = projects.map((project) => {
    const projectTech = techstack
      .filter((t) => t.project_id === project.id)
      .map((t) => t.techstack);

    const formattedDate = project.created_at
      ? new Date(project.created_at).toLocaleString("default", {
          month: "long",
          year: "numeric",
        })
      : "Unknown";

    const pinIndex = PINNED_ORDER.indexOf(project.name);

    return {
      title: project.name,
      date: formattedDate,
      description: project.description || "No description available",
      image: project.homepage || "",
      tech: projectTech,
      url: project.homepage || project.html_url || "#",
      github_url: project.html_url || "#",
      isPinned: pinIndex !== -1,
      pinIndex,
      pushedAt: project.pushed_at,
    };
  });

  formattedProjects.sort((a, b) => {
    if (a.isPinned && b.isPinned) {
      return a.pinIndex - b.pinIndex;
    }
    if (a.isPinned) return -1;
    if (b.isPinned) return 1;
    return new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime();
  });

  return formattedProjects;
}

export async function getProjectLicense(githubUrl: string) {
  try {
    const repoPath = githubUrl
      .replace("https://github.com/", "")
      .replace(/\/$/, "");

    const res = await fetch(`https://api.github.com/repos/${repoPath}/license`);
    if (!res.ok) return null;

    const data = await res.json();
    return data.license?.name || null;
  } catch (error) {
    console.error("Failed to fetch license:", error);
    return null;
  }
}