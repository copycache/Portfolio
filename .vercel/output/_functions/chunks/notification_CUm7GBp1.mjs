import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_BRyxW-Qo.mjs";
//#region src/pages/api/notification.ts
var notification_exports = /* @__PURE__ */ __exportAll({
	getNotification: () => getNotification,
	getNotificationFormatted: () => getNotificationFormatted
});
async function getNotification() {
	const { data: notification, error } = await supabase.from("notification").select("id, name, email, description, isRead, created_at").order("created_at", { ascending: false });
	if (error) {
		console.error(error);
		return [];
	}
	return notification;
}
function timeAgo(dateString) {
	const now = /* @__PURE__ */ new Date();
	const past = new Date(dateString);
	const seconds = Math.floor((now.getTime() - past.getTime()) / 1e3);
	for (const interval of [
		{
			label: "year",
			seconds: 31536e3
		},
		{
			label: "month",
			seconds: 2592e3
		},
		{
			label: "day",
			seconds: 86400
		},
		{
			label: "hour",
			seconds: 3600
		},
		{
			label: "minute",
			seconds: 60
		}
	]) {
		const count = Math.floor(seconds / interval.seconds);
		if (count >= 1) return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
	}
	return "just now";
}
async function getNotificationFormatted() {
	try {
		const [notifications] = await Promise.all([getNotification()]);
		return notifications.map((notification) => {
			return {
				id: notification.id,
				name: notification.name,
				email: notification.email,
				description: notification.description,
				isRead: notification.isRead,
				created_at: timeAgo(notification.created_at)
			};
		});
	} catch (error) {
		console.error("Error fetching notifications:", error);
		return [];
	}
}
//#endregion
export { notification_exports as n, getNotificationFormatted as t };
