import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_BRyxW-Qo.mjs";
//#region src/pages/api/auth/signin.ts
var signin_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request, cookies, redirect }) => {
	const formData = await request.formData();
	const email = formData.get("email")?.toString();
	const password = formData.get("password")?.toString();
	if (!email || !password) return new Response(JSON.stringify({ message: "Email and password are required" }), { status: 400 });
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password
	});
	if (error) return new Response(JSON.stringify({ message: error.message }), { status: 401 });
	const { access_token, refresh_token } = data.session;
	cookies.set("sb-access-token", access_token, { path: "/" });
	cookies.set("sb-refresh-token", refresh_token, { path: "/" });
	return redirect("/admin/dashboard");
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/auth/signin@_@ts
var page = () => signin_exports;
//#endregion
export { page };
