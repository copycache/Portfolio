import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createComponent, d as renderTemplate, h as maybeRenderHead } from "./server_BLhln1JW.mjs";
import "./compiler_H5AmNzHh.mjs";
//#region src/pages/register.astro
var register_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Register,
	file: () => $$file,
	url: () => $$url
});
var $$Register = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div><h1>Register</h1><p>Already have an account? <a href="/signin">Sign in</a></p><form action="/api/auth/register" method="post"><label for="email">Email</label><input type="email" name="email" id="email"><label for="password">Password</label><input type="password" name="password" id="password"><button type="submit">Register</button></form></div>`;
}, "C:/Users/andre/Documents/Solo Projects/Portfolio/src/pages/register.astro", void 0);
var $$file = "C:/Users/andre/Documents/Solo Projects/Portfolio/src/pages/register.astro";
var $$url = "/register";
//#endregion
//#region \0virtual:astro:page:src/pages/register@_@astro
var page = () => register_exports;
//#endregion
export { page };
