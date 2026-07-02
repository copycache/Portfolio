import { t as Button } from "./button_DCpAPFOI.mjs";
import * as React$1 from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Moon, Sun } from "lucide-react";
//#region src/components/ModeToggle.tsx
function ModeToggle() {
	const [isDark, setIsDark] = React$1.useState(false);
	React$1.useEffect(() => {
		const saved = localStorage.getItem("theme");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const enabled = saved ? saved === "dark" : prefersDark;
		setIsDark(enabled);
		document.documentElement.classList.toggle("dark", enabled);
	}, []);
	const toggleTheme = () => {
		const next = !isDark;
		setIsDark(next);
		document.documentElement.classList.toggle("dark", next);
		localStorage.setItem("theme", next ? "dark" : "light");
	};
	return /* @__PURE__ */ jsxs(Button, {
		variant: "ghost",
		size: "icon",
		onClick: toggleTheme,
		"aria-label": "Toggle theme",
		children: [/* @__PURE__ */ jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" }), /* @__PURE__ */ jsx(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" })]
	});
}
//#endregion
export { ModeToggle as t };
