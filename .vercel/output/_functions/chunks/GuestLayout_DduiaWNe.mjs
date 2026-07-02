import { C as createComponent, S as createAstro, _ as addAttribute, c as renderSlot, d as renderTemplate, g as renderHead, i as renderComponent } from "./server_BLhln1JW.mjs";
import "./compiler_H5AmNzHh.mjs";
import { t as Button } from "./button_DCpAPFOI.mjs";
import { t as ModeToggle } from "./ModeToggle_gxRmsuQc.mjs";
import { useEffect, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { ChevronUp } from "lucide-react";
//#region src/components/Navbar.tsx
function Navigation() {
	const links = [
		{
			label: "Home",
			href: "/"
		},
		{
			label: "Work",
			href: "/work"
		},
		{
			label: "Projects",
			href: "/projects"
		}
	];
	const [hidden, setHidden] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setHidden(currentScrollY > lastScrollY && currentScrollY > 80);
			setLastScrollY(currentScrollY);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", { className: "h-24" }), /* @__PURE__ */ jsx("nav", {
		className: `fixed left-1/2 top-4 z-50 -translate-x-1/2 w-[calc(100%-2rem)] max-w-2xl rounded-full border border-white/10 bg-black/30 px-4 py-2 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition-all duration-300 ease-out ${hidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 flex items-center justify-between gap-3",
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "/",
					className: "text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-white/90",
					children: "Andre Austria"
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "hidden items-center gap-2 text-sm font-medium md:flex",
					children: links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: link.href,
						className: "rounded-full px-3 py-1.5 text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white",
						children: link.label
					}) }, link.label))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ jsx(ModeToggle, {})
				})
			]
		})
	})] });
}
//#endregion
//#region src/layouts/GuestLayout.astro
createAstro("https://astro.build");
var $$GuestLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$GuestLayout;
	const { content } = Astro.props;
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro.generator, "content")}><title>${content.title}</title>${renderHead($$result)}</head><body><div class="relative isolate overflow-x-hidden"><header class="fixed top-0 left-0 z-50 w-full">${renderComponent($$result, "Navigation", Navigation, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/andre/Documents/Solo Projects/Portfolio/src/components/Navbar",
		"client:component-export": "Navigation"
	})}</header><main class="relative pt-6">${renderSlot($$result, $$slots["default"])}</main><footer class="mt-24 border-t border-white/10 bg-black/20 backdrop-blur-sm"><div class="mx-auto flex max-w-6xl flex-col px-5"><div class="flex flex-col gap-4 border-b border-white/10 py-4 sm:flex-row sm:items-center sm:justify-between"><p class="text-sm text-white/45">Andre Austria</p><a onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">${renderComponent($$result, "Button", Button, {
		"variant": "outline",
		"size": "sm",
		"className": "rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
	}, { "default": ($$result) => renderTemplate`BACK TO TOP ${renderComponent($$result, "ChevronUp", ChevronUp, { "className": "size-4" })}` })}</a></div><div class="border-b border-white/10 py-8 sm:py-10"><p class="text-xs font-semibold uppercase tracking-[0.35em] text-white/40">Have a project in mind?</p><div class="-mx-5 mt-4 overflow-hidden px-5"><h2 class="select-none whitespace-nowrap text-[18vw] font-black uppercase leading-[0.82] tracking-[-0.03em] text-transparent sm:text-[13vw] lg:text-[9rem]" style="-webkit-text-stroke: 1px rgba(255,255,255,0.18); text-stroke: 1px rgba(255,255,255,0.18);">Let&rsquo;s Talk</h2></div></div><div class="flex items-center justify-center py-4"><p class="text-center text-xs text-white/40"><a href="" class="transition-colors duration-300 ease-in-out hover:text-white">Terms</a><span class="mx-1">|</span><a href="" class="transition-colors duration-300 ease-in-out hover:text-white">Privacy Policy</a><span class="mx-1">|</span>© ${currentYear} Andre Austria. All rights reserved.</p></div></div></footer></div></body></html>`;
}, "C:/Users/andre/Documents/Solo Projects/Portfolio/src/layouts/GuestLayout.astro", void 0);
//#endregion
export { $$GuestLayout as t };
