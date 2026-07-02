import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createComponent, S as createAstro, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_BLhln1JW.mjs";
import "./compiler_H5AmNzHh.mjs";
import { t as Button } from "./button_DCpAPFOI.mjs";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card_aC2iuWh1.mjs";
import { t as Input } from "./input_2UZkGr0H.mjs";
import { t as Label } from "./label_BVe4duuv.mjs";
import { useEffect } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { OctagonXIcon } from "lucide-react";
import { Toaster, toast } from "sonner";
//#region src/components/LoginForm.tsx
function LoginForm() {
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const res = await fetch("/api/auth/signin", {
			method: "POST",
			body: formData
		});
		if (!res.ok) {
			const data = await res.json();
			toast.error(data.message, {
				description: "Please check your input and try again",
				icon: /* @__PURE__ */ jsx(OctagonXIcon, { className: "w-5 h-5 text-red-500" }),
				duration: 3e3
			});
			return;
		}
		window.location.href = "./admin/dashboard";
	};
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const isDark = savedTheme ? savedTheme === "dark" : prefersDark;
		document.documentElement.classList.toggle("dark", isDark);
		const observer = new MutationObserver(() => {
			const isDarkNow = document.documentElement.classList.contains("dark");
			localStorage.setItem("theme", isDarkNow ? "dark" : "light");
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"]
		});
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Toaster, { position: "top-center" }), /* @__PURE__ */ jsxs(Card, {
		className: "w-full max-w-md",
		children: [
			/* @__PURE__ */ jsxs(CardHeader, { children: [/* @__PURE__ */ jsx(CardTitle, { children: "Login to your account" }), /* @__PURE__ */ jsx(CardDescription, { children: "Enter your email below to login to your account" })] }),
			/* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("form", {
				id: "login",
				onSubmit: handleSubmit,
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "email",
							children: "Email"
						}), /* @__PURE__ */ jsx(Input, {
							id: "email",
							type: "email",
							name: "email",
							placeholder: "Email"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex items-center",
							children: /* @__PURE__ */ jsx(Label, {
								htmlFor: "password",
								children: "Password"
							})
						}), /* @__PURE__ */ jsx(Input, {
							id: "password",
							type: "password",
							name: "password"
						})]
					})]
				})
			}) }),
			/* @__PURE__ */ jsxs(CardFooter, {
				className: "flex-col gap-2",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "submit",
					form: "login",
					className: "w-full",
					children: "Login"
				}), /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					className: "w-full",
					children: "Continue with Google"
				})]
			})
		]
	})] });
}
//#endregion
//#region src/pages/signin.astro
var signin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Signin,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Signin = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Signin;
	const { cookies, redirect } = Astro;
	const accessToken = cookies.get("sb-access-token");
	const refreshToken = cookies.get("sb-refresh-token");
	if (accessToken && refreshToken) return redirect("./admin/dashboard");
	return renderTemplate`${maybeRenderHead($$result)}<div><section class="grid place-items-center h-screen content-center">${renderComponent($$result, "LoginForm", LoginForm, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/components/LoginForm",
		"client:component-export": "LoginForm"
	})}</section></div>`;
}, "C:/Users/andre/Documents/Solo Projects/Portfolio/src/pages/signin.astro", void 0);
var $$file = "C:/Users/andre/Documents/Solo Projects/Portfolio/src/pages/signin.astro";
var $$url = "/signin";
//#endregion
//#region \0virtual:astro:page:src/pages/signin@_@astro
var page = () => signin_exports;
//#endregion
export { page };
