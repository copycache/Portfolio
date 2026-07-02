import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_BRyxW-Qo.mjs";
//#region src/pages/api/uptime.ts
var uptime_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	getUptime: () => getUptime,
	updateUptimeStatus: () => updateUptimeStatus
});
async function getUptime() {
	const { data: uptime, error } = await supabase.from("uptime").select("id, status, created_at").order("created_at", { ascending: false });
	if (error) {
		console.error(error);
		return [];
	}
	return uptime;
}
async function updateUptimeStatus(id, status) {
	const { data, error } = await supabase.from("uptime").update({ status }).eq("id", id).limit(1);
	if (error) {
		console.error(error);
		return null;
	}
	return data;
}
var GET = async () => {
	try {
		const [uptime] = await Promise.all([getUptime()]);
		const item = uptime[0];
		const newStatus = item.status ? "FALSE" : "TRUE";
		const updated = await updateUptimeStatus(item.id, newStatus);
		return new Response(JSON.stringify({ updated }), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		console.error("Error:", error);
		return new Response(JSON.stringify({ message: "Internal server error" }), { status: 500 });
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/uptime@_@ts
var page = () => uptime_exports;
//#endregion
export { page };
