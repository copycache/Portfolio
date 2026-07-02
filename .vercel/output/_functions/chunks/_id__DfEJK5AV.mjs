import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createComponent, S as createAstro, _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_BLhln1JW.mjs";
import "./compiler_H5AmNzHh.mjs";
import { t as Button } from "./button_DCpAPFOI.mjs";
import { n as CardContent, t as Card } from "./card_aC2iuWh1.mjs";
import { t as Separator } from "./separator_BjWyXZK_.mjs";
import { n as getProjectsFormatted, t as getProjectLicense } from "./project_D3ufEnHp.mjs";
import { t as $$GuestLayout } from "./GuestLayout_DduiaWNe.mjs";
//#region src/pages/project/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Id = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const { id } = Astro.params;
	const [projects] = await Promise.all([getProjectsFormatted()]);
	const project = projects.find((p) => String(p.title) === id);
	if (!project) throw new Error(`Project with id "${id}" not found`);
	const license = await getProjectLicense(project.github_url);
	return renderTemplate`${renderComponent($$result, "GuestLayout", $$GuestLayout, { "content": { title: `${id} | Andre Austria` } }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div><section class="pt-36 pb-5"><div class="w-full h-full mx-auto px-5 max-w-5xl"><h1 class="text-4xl md:text-4xl font-bold text-black dark:text-white">${project.title}</h1><p class="text-gray-600 dark:text-gray-300">${project.description}</p><div class="flex flex-wrap gap-4 mb-10">${renderComponent($$result, "Button", Button, { "className": "mt-3" }, { "default": ($$result) => renderTemplate`Live Demo` })}${renderComponent($$result, "Button", Button, { "className": "mt-3" }, { "default": ($$result) => renderTemplate`Source Code` })}</div></div></section><section class="pt-6 pb-5"><div class="w-full h-full mx-auto px-5 max-w-5xl">${project.image ? renderTemplate`<img${addAttribute(project.image, "src")}${addAttribute(project.title, "alt")} class="w-full">` : renderTemplate`${renderComponent($$result, "Card", Card, { "className": "w-full h-64 flex items-center justify-center" }, { "default": ($$result) => renderTemplate`No preview available` })}`}</div></section></div>${renderComponent($$result, "Separator", Separator, {
		"className": "w-full h-full mx-auto px-5 max-w-5xl",
		"orientation": "horizontal"
	})}<section class="pt-5 pb-5"><div class="w-full h-full mx-auto px-5 max-w-5xl"><h2 class="text-2xl font-semibold mb-3">Features</h2><!-- <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
        {project.features 
          ? project.features.map((feature) => <li key={feature}>{feature}</li>) 
          : <li>Feature details coming soon...</li>}
      </ul> --></div></section>${renderComponent($$result, "Separator", Separator, {
		"className": "w-full h-full mx-auto px-5 max-w-5xl",
		"orientation": "horizontal"
	})}<section class="pt-6 pb-5"><div class="w-full h-full mx-auto px-5 max-w-5xl"><h2 class="text-2xl font-semibold mb-3">Tech Stack</h2><ul class="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1">${project.tech.map((tech) => renderTemplate`<li${addAttribute(tech, "key")}>${tech}</li>`)}</ul></div></section>${renderComponent($$result, "Separator", Separator, {
		"className": "w-full h-full mx-auto px-5 max-w-5xl",
		"orientation": "horizontal"
	})}<section class="pt-6 pb-5"><div class="w-full h-full mx-auto px-5 max-w-5xl"><h2 class="text-2xl font-semibold mb-3">🛠 Getting Started</h2><p class="text-neutral-600 dark:text-neutral-400 mb-2">1. Clone the project and install dependencies:</p>${renderComponent($$result, "Card", Card, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "CardContent", CardContent, {}, { "default": ($$result) => renderTemplate`<pre class="whitespace-pre-wrap break-words">git clone ${project.url}</pre><pre class="whitespace-pre-wrap break-words">cd ${project.title}</pre><pre class="whitespace-pre-wrap break-words">npm install</pre>` })}` })}</div></section>${renderComponent($$result, "Separator", Separator, {
		"className": "w-full h-full mx-auto px-5 max-w-5xl",
		"orientation": "horizontal"
	})}<section class="pt-6 pb-5"><div class="w-full h-full mx-auto px-5 max-w-5xl"><h2 class="text-2xl font-semibold mb-3">⚙️ Setup Dependencies</h2><p class="text-neutral-600 dark:text-neutral-400 mb-2">2. Run the following command to install and build the project dependencies:</p>${renderComponent($$result, "Card", Card, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "CardContent", CardContent, {}, { "default": ($$result) => renderTemplate`<pre class="whitespace-pre-wrap break-words">npm run install</pre><pre class="whitespace-pre-wrap break-words">npm run build</pre>` })}` })}</div></section>${renderComponent($$result, "Separator", Separator, {
		"className": "w-full h-full mx-auto px-5 max-w-5xl",
		"orientation": "horizontal"
	})}<section class="pt-6 pb-5"><div class="w-full h-full mx-auto px-5 max-w-5xl"><h2 class="text-2xl font-semibold mb-3">🗂 Project Configuration (Optional if the project has a server side)</h2><p class="text-sm text-neutral-600 dark:text-neutral-400 mb-2">(Optional if your project does not require server-side environment variables)</p><p class="text-neutral-600 dark:text-neutral-400 mb-2">3. Create environment variables and configure other settings in a <code>.env</code> file located in your project root.</p>${renderComponent($$result, "Card", Card, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "CardContent", CardContent, {}, { "default": ($$result) => renderTemplate`<pre class="whitespace-pre-wrap break-words"><code>
my-project/
├─ public/
├─ src/
│  ├─ components/
│  ├─ pages/
│  └─ layouts/
├─ package.json
├─ astro.config.mjs
└─ .env
        </code></pre>` })}` })}</div></section>${renderComponent($$result, "Separator", Separator, {
		"className": "w-full h-full mx-auto px-5 max-w-5xl",
		"orientation": "horizontal"
	})}${renderComponent($$result, "Separator", Separator, {
		"className": "w-full h-full mx-auto px-5 max-w-5xl",
		"orientation": "horizontal"
	})}<section class="pt-6 pb-5"><div class="w-full h-full mx-auto px-5 max-w-5xl"><h2 class="text-2xl font-semibold mb-3">License</h2><p class="text-neutral-600 dark:text-neutral-400">${license ? renderTemplate`<p class="text-neutral-600 dark:text-neutral-400">This project is licensed under the ${license}.</p>` : renderTemplate`<p class="text-neutral-600 dark:text-neutral-400">License information not available.</p>`}</p></div></section>` })}`;
}, "C:/Users/andre/Documents/Solo Projects/Portfolio/src/pages/project/[id].astro", void 0);
var $$file = "C:/Users/andre/Documents/Solo Projects/Portfolio/src/pages/project/[id].astro";
var $$url = "/project/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/project/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };
