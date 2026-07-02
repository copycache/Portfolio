import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createComponent, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_BLhln1JW.mjs";
import "./compiler_H5AmNzHh.mjs";
import { t as Button } from "./button_DCpAPFOI.mjs";
import { a as CardHeader, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card_aC2iuWh1.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ErrorPage.tsx
function ErrorPage() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen flex-col items-center justify-center --background p-4",
		children: /* @__PURE__ */ jsxs(Card, {
			className: "max-w-md w-full text-center shadow-lg",
			children: [/* @__PURE__ */ jsxs(CardHeader, { children: [/* @__PURE__ */ jsx(CardTitle, {
				className: "text-6xl font-extrabold",
				children: "404"
			}), /* @__PURE__ */ jsx(CardDescription, { children: "Oops! Page not found." })] }), /* @__PURE__ */ jsxs(CardContent, {
				className: "mt-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "mb-6",
					children: "The page you are looking for might have been removed or is temporarily unavailable."
				}), /* @__PURE__ */ jsx(Button, {
					variant: "default",
					onClick: () => window.location.href = "/",
					children: "Go Back Home"
				})]
			})]
		})
	});
}
//#endregion
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<script>
  const getThemePreference = () => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };
  const isDark = getThemePreference() === "dark";
  document.documentElement.classList[isDark ? "add" : "remove"]("dark");

  if (typeof localStorage !== "undefined") {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }
<\/script><div>${renderComponent($$result, "NewErrorPage", ErrorPage, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/components/ErrorPage",
		"client:component-export": "ErrorPage"
	})}</div>`;
}, "C:/Users/andre/Documents/Solo Projects/Portfolio/src/pages/404.astro", void 0);
var $$file = "C:/Users/andre/Documents/Solo Projects/Portfolio/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
