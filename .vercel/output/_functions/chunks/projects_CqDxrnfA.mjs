import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createComponent, _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_BLhln1JW.mjs";
import "./compiler_H5AmNzHh.mjs";
import { n as cn, t as Button } from "./button_DCpAPFOI.mjs";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card_aC2iuWh1.mjs";
import { n as getProjectsFormatted } from "./project_D3ufEnHp.mjs";
import { t as $$GuestLayout } from "./GuestLayout_DduiaWNe.mjs";
import { t as Badge } from "./badge_DoFTh8a_.mjs";
import { t as Label } from "./label_BVe4duuv.mjs";
import "react";
import { jsx } from "react/jsx-runtime";
import { CheckIcon } from "lucide-react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
//#region src/components/ui/checkbox.tsx
function Checkbox({ className, ...props }) {
	return /* @__PURE__ */ jsx(CheckboxPrimitive.Root, {
		"data-slot": "checkbox",
		className: cn("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none",
			children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-3.5" })
		})
	});
}
//#endregion
//#region src/pages/projects.astro
var projects_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Projects,
	file: () => $$file,
	url: () => $$url
});
var $$Projects = createComponent(async ($$result, $$props, $$slots) => {
	const [projects] = await Promise.all([getProjectsFormatted()]);
	const allTags = [
		"AI",
		"AngularJs",
		"Bootstrap",
		"C++",
		"CSS",
		"Frappe",
		"HTML",
		"Laravel",
		"MySQL",
		"Node.js",
		"PHP",
		"Python",
		"React",
		"Sass",
		"TypeScript"
	];
	return renderTemplate`${renderComponent($$result, "GuestLayout", $$GuestLayout, { "content": { title: "Projects | Andre Austria" } }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="min-h-screen"><div class="mx-auto max-w-5xl px-5 pt-28 pb-20"><div class="mb-2"><h1 class="text-3xl font-bold tracking-tight">Projects</h1></div><p class="text-sm text-neutral-400 mb-8">A curated collection highlighting projects I've built, the technologies used, and their impact.</p><div class="grid lg:grid-cols-4 gap-8"><aside class="lg:sticky"><ul class="flex flex-wrap gap-2 lg:flex-col">${allTags.map((tag) => renderTemplate`<li>${renderComponent($$result, "Label", Label, {
		"htmlFor": tag,
		"className": "\r\n                      flex items-center gap-2\r\n                      rounded-md border\r\n                      px-3 py-2\r\n                      whitespace-nowrap\r\n                      cursor-pointer\r\n                    "
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Checkbox", Checkbox, {
		"id": tag,
		"name": tag
	})}<span>${tag}</span>` })}</li>`)}</ul></aside><main class="col-span-3 space-y-6">${projects.map((project) => renderTemplate`${renderComponent($$result, "Card", Card, { "className": "rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300" }, { "default": ($$result) => renderTemplate`<div class="flex flex-col md:flex-row">${renderComponent($$result, "CardContent", CardContent, { "className": "p-0 md:w-1/2 relative group" }, { "default": ($$result) => renderTemplate`${project.image ? renderTemplate`<img${addAttribute(project.image, "src")}${addAttribute(project.title, "alt")} class="w-full"><a href="" target="_blank" class="absolute inset-0 rounded-md opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center
            bg-black bg-opacity-40"><span class="text-white font-medium text-sm">Live Preview</span></a>` : renderTemplate`${renderComponent($$result, "Card", Card, { "className": "w-full h-full flex items-center justify-center" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "CardContent", CardContent, { "className": "flex flex-col items-center justify-center text-center gap-3" }, { "default": ($$result) => renderTemplate`<p>No preview available</p><a${addAttribute(`${project.github_url}`, "href")} target="_blank" class="hover:underline">See Repository Instead</a>` })}` })}`}` })}<div class="flex flex-col justify-between md:w-2/3 p-6 gap-3">${renderComponent($$result, "CardHeader", CardHeader, { "className": "p-0" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "CardTitle", CardTitle, { "className": "text-lg md:text-xl font-bold" }, { "default": ($$result) => renderTemplate`${project.title}` })}<p class="text-sm text-neutral-500 dark:text-neutral-400">${project.date}</p>` })}${renderComponent($$result, "CardDescription", CardDescription, { "className": "text-sm text-neutral-600 dark:text-neutral-400" }, { "default": ($$result) => renderTemplate`${project.description}` })}<div class="flex flex-wrap gap-2 mt-2">${project.tech.map((tech) => renderTemplate`${renderComponent($$result, "Badge", Badge, { "variant": "outline" }, { "default": ($$result) => renderTemplate`${tech}` })}`)}</div>${renderComponent($$result, "CardFooter", CardFooter, { "className": "p-0 mt-4" }, { "default": ($$result) => renderTemplate`<a${addAttribute(`/project/${project.title}`, "href")}>${renderComponent($$result, "Button", Button, {}, { "default": ($$result) => renderTemplate`Explore More` })}</a>` })}</div></div>` })}`)}</main></div></div></div>` })}`;
}, "C:/Users/andre/Documents/Solo Projects/Portfolio/src/pages/projects.astro", void 0);
var $$file = "C:/Users/andre/Documents/Solo Projects/Portfolio/src/pages/projects.astro";
var $$url = "/projects";
//#endregion
//#region \0virtual:astro:page:src/pages/projects@_@astro
var page = () => projects_exports;
//#endregion
export { page };
