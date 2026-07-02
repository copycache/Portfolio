import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_BRyxW-Qo.mjs";
//#region src/pages/api/getintouch.ts
var getintouch_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var COOLDOWN = 1440 * 60 * 1e3;
var ipSubmissions = /* @__PURE__ */ new Map();
var POST = async ({ request }) => {
	const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || "unknown";
	const now = Date.now();
	const lastSubmission = ipSubmissions.get(ip);
	if (lastSubmission && now - lastSubmission < COOLDOWN) {
		const hoursLeft = Math.ceil((COOLDOWN - (now - lastSubmission)) / (3600 * 1e3));
		return new Response(JSON.stringify({ message: `Sorry, you can only submit once every 24 hours. Try again in ${hoursLeft} hour(s). Worry not, I will reach you out as soon as possible. Thank you for your patience!` }), { status: 429 });
	}
	const formData = await request.formData();
	const name = formData.get("name")?.toString();
	const email = formData.get("email")?.toString();
	const description = formData.get("description")?.toString();
	if (!name || !email || !description) return new Response(JSON.stringify({ message: "Name, email, and message are required" }), { status: 400 });
	const { error } = await supabase.from("notification").insert({
		name,
		email,
		description
	});
	if (error) return new Response(JSON.stringify({ message: error.message }), { status: 500 });
	ipSubmissions.set(ip, now);
	return new Response(null, { status: 200 });
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/getintouch@_@ts
var page = () => getintouch_exports;
//#endregion
export { page };
