import "../styles/global.css";

import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

// UI
import { AppSidebar } from "@/components/Sidebar";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

// Icons
import { Search } from "lucide-react";

// Custom Pages
import { ModeToggle } from "@/components/ModeToggle";
import { Notification } from "@/components/Notification";

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AuthenticatedLayout({
  children,
  title,
}: AuthenticatedLayoutProps) {
  useEffect(() => {
    /* ---------- TITLE ---------- */
    document.title = title;

    /* ---------- META: CHARSET ---------- */
    if (!document.querySelector("meta[charset]")) {
      const metaCharset = document.createElement("meta");
      metaCharset.setAttribute("charset", "UTF-8");
      document.head.appendChild(metaCharset);
    }

    /* ---------- META: VIEWPORT ---------- */
    if (!document.querySelector('meta[name="viewport"]')) {
      const metaViewport = document.createElement("meta");
      metaViewport.name = "viewport";
      metaViewport.content = "width=device-width";
      document.head.appendChild(metaViewport);
    }

    /* ---------- FAVICON ---------- */
    if (!document.querySelector('link[rel="icon"]')) {
      const favicon = document.createElement("link");
      favicon.rel = "icon";
      favicon.type = "image/svg+xml";
      favicon.href = "/favicon.svg";
      document.head.appendChild(favicon);
    }
  }, [title]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header */}
        <header className="flex items-center justify-between border-b px-4 py-2">
          {/* Left: Sidebar trigger + Search */}
          <div className="flex items-center gap-3 text-sm">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-5" />
            <InputGroup className="max-w-xs">
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* Right: Notifications + Mode toggle */}
          <div className="flex items-center gap-3">
            <Notification />

            <Separator orientation="vertical" className="h-5" />
            <ModeToggle />
          </div>
        </header>

        <main className="p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
