import { supabase } from "../../lib/supabase";

// Fetch all Notification
export async function getNotification() {
  const { data: notification, error } = await supabase.from("notification").select("*");

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
  return notification;
}

function timeAgo(dateString: string) {
  const now = new Date();
  const past = new Date(dateString);
  const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

export async function getNotificationFormatted() {
  const notifications = await getNotification();

  const notification = notifications.map((notification) => {
    return {
      id:notification.id,
      name: notification.name,
      email: notification.email,
      description: notification.description,
      isRead: notification.isRead,
      created_at: timeAgo(notification.created_at),
    };
  });

  return notification;
}