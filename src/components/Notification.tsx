import React, { useEffect, useState } from "react";
import "../styles/global.css";
import { Button } from "@/components/ui/button";
import { Bell, Dot, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getNotificationFormatted } from "@/pages/api/notification";

interface NotificationItem {
  id: string;
  name: string;
  email: string;
  description: string;
  isRead: boolean;
  created_at: string;
}

export function Notification() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  useEffect(() => {
    async function fetchNotifications() {
      const data = await getNotificationFormatted();
      setNotifications(data);
    }

    fetchNotifications();
  }, []);

  // Count unread notifications
  const unreadCount = notifications.filter((notif) => !notif.isRead).length;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell />
          {unreadCount > 0 && (
            <Dot
              size={28}
              className="absolute top-0 right-0 text-(--destructive) stroke-[3]"
            />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notification</SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {notifications.map((notif) => (
            <a
              href="#"
              className="px-3 py-2.5 rounded-md hover:bg-elevated/50 flex items-center gap-3 relative -mx-3 first:-mt-3 last:-mb-3 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
            >
              <div className="relative inline-flex items-center justify-center shrink-0">
                <div className="relative">
                  <Mail />
                  {!notif.isRead && ( // Check the specific notification
                    <Dot
                      size={28} // smaller size to sit nicely on the icon
                      className="absolute -top-3 -right-3 text-(--destructive) stroke-[3]"
                    />
                  )}
                </div>
              </div>
              <div className="text-sm flex-1">
                <p className="flex items-center justify-between">
                  <span className="text-foreground font-semibold">
                    {notif.name}
                  </span>
                  <time className="text-xs text-(--muted-foreground)"> {notif.created_at}</time>
                </p>
                <p className="truncate w-48 text-(--muted-foreground)"> Sent you a message. </p>
              </div>
            </a>
          ))}
        </div>
        <SheetFooter>
          {/* <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
