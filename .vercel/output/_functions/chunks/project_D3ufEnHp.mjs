import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_BRyxW-Qo.mjs";
//#region src/pages/api/project.ts
var project_exports = /* @__PURE__ */ __exportAll({
	getProjectLicense: () => getProjectLicense,
	getProjects: () => getProjects,
	getProjectsFormatted: () => getProjectsFormatted,
	getTechstack: () => getTechstack
});
async function getProjects() {
	const { data: projects, error } = await supabase.from("project").select("*").order("date", { ascending: false });
	if (error) {
		console.error("Error fetching projects:", error);
		return [];
	}
	return projects;
}
async function getTechstack() {
	const { data: techstack, error } = await supabase.from("techstack").select("*");
	if (error) {
		console.error("Error fetching tech stack:", error);
		return [];
	}
	return techstack;
}
async function getProjectsFormatted() {
	const [projects, techstack] = await Promise.all([getProjects(), getTechstack()]);
	return projects.map((project) => {
		const projectTech = techstack.filter((t) => t.project_id === project.id).map((t) => t.techstack);
		const formattedDate = project.date ? new Date(project.date).toLocaleString("default", {
			month: "long",
			year: "numeric"
		}) : "Unknown";
		return {
			title: project.title,
			date: formattedDate,
			description: project.description,
			image: project.image,
			tech: projectTech,
			url: project.url || "#",
			github_url: project.github_url || "#"
		};
	});
}
async function getProjectLicense(githubUrl) {
	try {
		const repoPath = githubUrl.replace("https://github.com/", "").replace(/\/$/, "");
		const res = await fetch(`https://api.github.com/repos/${repoPath}/license`);
		if (!res.ok) return null;
		return (await res.json()).license?.name || null;
	} catch (error) {
		console.error("Failed to fetch license:", error);
		return null;
	}
}
//#endregion
export { getProjectsFormatted as n, project_exports as r, getProjectLicense as t };
