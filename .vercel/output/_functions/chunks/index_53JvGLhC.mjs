import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createComponent, _ as addAttribute, a as Fragment, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_BLhln1JW.mjs";
import { n as $$Image } from "./_astro_assets_BHEvqCUe.mjs";
import "./compiler_H5AmNzHh.mjs";
import { t as Button } from "./button_DCpAPFOI.mjs";
import { n as getProjectsFormatted } from "./project_D3ufEnHp.mjs";
import { t as $$GuestLayout } from "./GuestLayout_DduiaWNe.mjs";
import { ArrowRight, FileText } from "lucide-react";
//#region src/components/layouts/index/Getintouchsection.astro
var $$Getintouchsection = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div id="getInTouch" class="mx-auto my-24 flex max-w-5xl flex-col gap-10 px-5 md:flex-row md:items-start"><div class="space-y-6 md:w-1/2"><div><p class="text-sm font-semibold uppercase tracking-[0.35em] text-white/45">Get in touch</p><h2 class="mt-2 text-2xl font-semibold text-white">Let&apos;s build something meaningful.</h2></div><p class="max-w-xl text-sm leading-7 text-white/70 sm:text-base">Whether you have a project, a collaboration idea, or just want to connect, I would love to hear from you.</p><div class="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl"><p class="text-sm font-semibold uppercase tracking-[0.35em] text-white/45">Connect</p><div class="mt-4 grid gap-3 sm:grid-cols-2">${[
		{
			label: "Email",
			url: "mailto:austria.andrecarl@gmail.com",
			name: "austria.andrecarl@gmail.com"
		},
		{
			label: "Facebook",
			url: "https://www.facebook.com/andre.austria.353794",
			name: "Andre.Austria"
		},
		{
			label: "Instagram",
			url: "https://www.instagram.com/knetic_404/",
			name: "Andre"
		},
		{
			label: "Github",
			url: "https://github.com/copycache",
			name: "Copycache"
		},
		{
			label: "LinkedIn",
			url: "https://www.linkedin.com/in/andreaustria/",
			name: "Andre Carl Austria"
		}
	].map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" class="rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"><p class="text-[0.7rem] uppercase tracking-[0.3em] text-white/45">${link.label}</p><p class="mt-1 text-sm font-medium text-white">${link.name}</p></a>`)}</div></div></div><div class="md:w-1/2"><div class="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl"><div class="flex items-center gap-2"><span class="relative flex h-2.5 w-2.5"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span></span><span class="text-sm font-semibold text-white">Available for new opportunities</span></div><p class="mt-4 text-sm leading-7 text-white/70">I&apos;m currently open to full-time roles, freelance projects, and internships. Based in the Philippines and open to remote collaboration worldwide.</p><div class="mt-6 grid gap-3 sm:grid-cols-2"><div class="rounded-2xl border border-white/10 bg-black/20 p-4"><p class="text-[0.65rem] uppercase tracking-[0.3em] text-white/45">Preferred work</p><p class="mt-1 text-sm font-semibold text-white">Remote / Hybrid</p></div><div class="rounded-2xl border border-white/10 bg-black/20 p-4"><p class="text-[0.65rem] uppercase tracking-[0.3em] text-white/45">Role type</p><p class="mt-1 text-sm font-semibold text-white">Full-time / Freelance</p></div><div class="rounded-2xl border border-white/10 bg-black/20 p-4"><p class="text-[0.65rem] uppercase tracking-[0.3em] text-white/45">Response time</p><p class="mt-1 text-sm font-semibold text-white">Within 24 hours</p></div><div class="rounded-2xl border border-white/10 bg-black/20 p-4"><p class="text-[0.65rem] uppercase tracking-[0.3em] text-white/45">Time zone</p><p class="mt-1 text-sm font-semibold text-white">PHT (UTC+8)</p></div></div></div></div></div>`;
}, "C:/Users/andre/Documents/Solo Projects/Portfolio/src/components/layouts/index/Getintouchsection.astro", void 0);
//#endregion
//#region src/components/layouts/index/Projectsection.astro
var $$Projectsection = createComponent(async ($$result, $$props, $$slots) => {
	const [projects] = await Promise.all([getProjectsFormatted()]);
	return renderTemplate`${maybeRenderHead($$result)}<div class="mx-auto max-w-5xl px-5"><div class="mb-8 flex items-center justify-between"><div><p class="text-sm font-semibold uppercase tracking-[0.35em] text-white/45">Featured work</p><p class="mt-2 text-2xl font-semibold text-white">Projects</p></div><a href="./projects">${renderComponent($$result, "Button", Button, {
		"variant": "link",
		"className": "px-0 text-white/70 hover:text-white"
	}, { "default": ($$result) => renderTemplate`View All Projects` })}</a></div><div class="grid gap-6">${projects.map((project) => renderTemplate`<article class="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"><div class="flex flex-col md:flex-row"><div class="relative group md:w-1/2">${project.image ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<img${addAttribute(project.image, "src")}${addAttribute(project.title, "alt")} class="h-full w-full object-cover"><div class="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100"><span class="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">Live Preview</span></div>` })}` : renderTemplate`<div class="flex h-full min-h-56 items-center justify-center border-b border-white/10 bg-white/5 p-8 text-center md:border-b-0 md:border-r md:border-white/10"><div class="space-y-3"><p class="text-white/70">No preview available</p><a${addAttribute(`${project.github_url}`, "href")} target="_blank" class="inline-flex text-sm font-medium text-white/80 underline-offset-4 hover:underline">See Repository Instead</a></div></div>`}</div><div class="flex flex-col justify-between gap-4 p-6 md:w-2/3 md:p-8"><div class="space-y-3"><div><h3 class="text-xl font-semibold text-white">${project.title}</h3><p class="mt-1 text-sm text-white/45">${project.date}</p></div><p class="text-sm leading-7 text-white/70">${project.description}</p></div><div class="flex flex-wrap gap-2">${project.tech.map((tech) => renderTemplate`<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">${tech}</span>`)}</div><div class="pt-2"><a${addAttribute(`/project/${project.title}`, "href")}>${renderComponent($$result, "Button", Button, { "className": "rounded-full border border-white/15 bg-white/10 text-white hover:bg-white/15" }, { "default": ($$result) => renderTemplate`Explore More` })}</a></div></div></div></article>`)}</div></div>`;
}, "C:/Users/andre/Documents/Solo Projects/Portfolio/src/components/layouts/index/Projectsection.astro", void 0);
//#endregion
//#region src/components/layouts/index/Techstack.astro
var $$Techstack = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="space-y-5"><div class="flex items-center justify-between"><p class="text-xl font-semibold text-white">Tech Stack</p><p class="text-sm text-white/45">Selected tools and technologies</p></div><div class="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">${[
		{
			name: "JavaScript",
			icon: "/icons/Javascript.png",
			url: "https://www.javascript.com/"
		},
		{
			name: "TypeScript",
			icon: "/icons/Typescript.png",
			url: "https://www.typescriptlang.org/"
		},
		{
			name: "Node.js",
			icon: "/icons/NodeJS.svg",
			url: "https://nodejs.org/en"
		},
		{
			name: "Vue.js",
			icon: "/icons/VueJS.svg",
			url: "https://vuejs.org/"
		},
		{
			name: "Nuxt.js",
			icon: "/icons/NuxtJS.svg",
			url: "https://nuxt.com/"
		},
		{
			name: "React",
			icon: "/icons/ReactJS.svg",
			url: "https://react.dev/"
		},
		{
			name: "Next.js",
			icon: "/icons/NextJS.svg",
			url: "https://nextjs.org/"
		},
		{
			name: "Angular",
			icon: "/icons/AngularJS.svg",
			url: "https://angularjs.org/"
		},
		{
			name: "Tailwind CSS",
			icon: "/icons/TailwindCSS.svg",
			url: "https://tailwindcss.com/"
		},
		{
			name: "Bootstrap",
			icon: "/icons/Bootstrap.svg",
			url: "https://getbootstrap.com/"
		},
		{
			name: "Sass",
			icon: "/icons/Sass.svg",
			url: "https://sass-lang.com/"
		},
		{
			name: "PHP",
			icon: "/icons/PHP.svg",
			url: "https://www.php.net/"
		},
		{
			name: "Laravel",
			icon: "/icons/Laravel.svg",
			url: "https://laravel.com/"
		},
		{
			name: "Python",
			icon: "/icons/Python.svg",
			url: "https://www.python.org/"
		},
		{
			name: "Flask",
			icon: "/icons/Flask.svg",
			url: "https://flask.palletsprojects.com/"
		},
		{
			name: "Django",
			icon: "/icons/Django.svg",
			url: "https://www.djangoproject.com/"
		},
		{
			name: "MySQL",
			icon: "/icons/MySQL.svg",
			url: "https://www.mysql.com/"
		},
		{
			name: "Supabase",
			icon: "/icons/Supabase.png",
			url: "https://supabase.com/"
		},
		{
			name: "Firebase",
			icon: "/icons/Firebase.svg",
			url: "https://firebase.google.com/"
		},
		{
			name: "Kotlin",
			icon: "/icons/Kotlin.svg",
			url: "https://kotlinlang.org/"
		},
		{
			name: "Git",
			icon: "/icons/Git.svg",
			url: "https://git-scm.com/"
		},
		{
			name: "NVM",
			icon: "/icons/Nvm.svg",
			url: "https://www.nvmnode.com/guide/download.html"
		},
		{
			name: "Docker",
			icon: "/icons/Docker.svg",
			url: "https://www.docker.com/"
		},
		{
			name: "Linux",
			icon: "/icons/Linux.svg",
			url: "https://www.linux.org/"
		},
		{
			name: "Debian",
			icon: "/icons/Debian.svg",
			url: "https://www.debian.org/"
		},
		{
			name: "Figma",
			icon: "/icons/Figma.svg",
			url: "https://www.figma.com/"
		}
	].map((tech) => renderTemplate`<a${addAttribute(tech.url, "href")} target="_blank" class="group"><div class="flex aspect-square flex-col items-center justify-center gap-2 rounded-[1.1rem] border border-white/10 bg-white/5 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]">${renderComponent($$result, "Image", $$Image, {
		"src": tech.icon,
		"alt": tech.name,
		"width": "40",
		"height": "40",
		"class": "object-contain"
	})}<p class="text-center text-xs font-medium text-white/80 sm:text-sm">${tech.name}</p></div></a>`)}</div></div>`;
}, "C:/Users/andre/Documents/Solo Projects/Portfolio/src/components/layouts/index/Techstack.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "GuestLayout", $$GuestLayout, { "content": { title: "Home | Andre Austria" } }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="relative"><section class="flex min-h-screen items-center justify-center px-5 py-24 sm:py-32"><div class="mx-auto flex w-full max-w-5xl flex-col items-center text-center"><div class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-white/70 backdrop-blur-md">Available for select freelance work</div><div class="mt-8 space-y-4"><p class="text-lg font-medium text-white/70 md:text-xl">Hello, I am</p><h1 class="text-5xl font-black uppercase tracking-[0.15em] text-white sm:text-6xl lg:text-8xl">Andre Austria</h1><p class="mx-auto max-w-2xl text-base leading-8 text-white/70 sm:text-lg">Software developer crafting elegant, high-performing web experiences with TypeScript, React, and modern backend tools.</p></div><div class="mt-8 flex flex-wrap justify-center gap-3">${renderComponent($$result, "Button", Button, { "className": "rounded-full border border-white/15 bg-white/10 px-5 text-white hover:bg-white/15" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "FileText", FileText, { "className": "mr-2 size-4" })}Download CV` })}<a href="#getInTouch">${renderComponent($$result, "Button", Button, {
		"variant": "outline",
		"className": "rounded-full border-white/15 bg-transparent px-5 text-white hover:bg-white/10"
	}, { "default": ($$result) => renderTemplate`Get in Touch ${renderComponent($$result, "ArrowRight", ArrowRight, { "className": "ml-2 size-4" })}` })}</a></div></div></section><div class="mx-auto max-w-5xl px-5 pb-24"><div class="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-10"><p class="text-sm font-semibold uppercase tracking-[0.35em] text-white/45">About</p><p class="mt-4 text-base leading-8 text-white/75 sm:text-lg">Junior Full Stack Web Developer specializing in <span class="font-semibold text-white">TypeScript and JavaScript</span> with hands-on experience in <span class="font-semibold text-white">React.js, Next.js, Vue.js/Nuxt.js, and Node.js</span>. Passionate about building <span class="font-semibold text-white">responsive, user-friendly interfaces</span> with Tailwind CSS, Bootstrap, shadcn/ui, and Radix UI, while developing <span class="font-semibold text-white">robust backend solutions</span> with MySQL, Firebase, and Supabase.</p></div><div class="mt-24">${renderComponent($$result, "Techstack", $$Techstack, {})}</div></div>${renderComponent($$result, "Projectsection", $$Projectsection, {})}${renderComponent($$result, "Getintouchsection", $$Getintouchsection, {})}</div>` })}`;
}, "C:/Users/andre/Documents/Solo Projects/Portfolio/src/pages/index.astro", void 0);
var $$file = "C:/Users/andre/Documents/Solo Projects/Portfolio/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
