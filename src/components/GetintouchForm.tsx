import "../styles/global.css";
import { useEffect } from "react";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function GetintouchForm() {
  // Handle Submition
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/getintouch", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const data = await res.json();

      toast.error(data.description, {
        description: "Please check your input and try again",
        // icon: <OctagonXIcon className="w-5 h-5 text-red-500" />,
        // style: {
        //   "--normal-bg": "var(--popover)",
        //   "--normal-text": "var(--popover-foreground)",
        //   "--normal-border": "var(--border)",
        //   "--border-radius": "var(--radius)",
        // },
        duration: 3000,
        closeButton: true,
      });

      return;
    }

    toast.success("Message sent successfully!", {
      description: "Thank you for getting in touch. We'll respond soon.",
      duration: 3000,
      closeButton: true,
    });

    // Optionally reset the form
    form.reset();
  };

  // Get theme
  useEffect(() => {
    // Get saved theme or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = savedTheme ? savedTheme === "dark" : prefersDark;

    // Set initial theme
    document.documentElement.classList.toggle("dark", isDark);

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      const isDarkNow = document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isDarkNow ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Toaster position="top-right" closeButton />

      <Card className="w-full max-w-lg py-8 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <CardContent>
          {/* Attach onSubmit to the form */}
          <form id="submit" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="name"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Message</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Write your message here..."
                  className="resize-none h-50"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          {/* Make the button type="submit" so it triggers form submit */}
          <Button type="submit" form="submit" className="w-full">
            Send Message
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
