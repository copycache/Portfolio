import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_BRyxW-Qo.mjs";
//#region src/pages/api/auth/register.ts
var register_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request, redirect }) => {
	const formData = await request.formData();
	const email = formData.get("email")?.toString();
	const password = formData.get("password")?.toString();
	if (!email || !password) return new Response("Email and password are required", { status: 400 });
	const { error } = await supabase.auth.signUp({
		email,
		password
	});
	if (error) return new Response(error.message, { status: 500 });
	return redirect("/signin");
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/auth/register@_@ts
var page = () => register_exports;
//#endregion
export { page };
