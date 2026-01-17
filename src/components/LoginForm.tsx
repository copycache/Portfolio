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
import { OctagonXIcon } from "lucide-react";

export function LoginForm() {
  // Handle Submition
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/auth/signin", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const data = await res.json();

      toast.error(data.message, {
        description: "Please check your input and try again",
        icon: <OctagonXIcon className="w-5 h-5 text-red-500" />,
        // style: {
        //   "--normal-bg": "var(--popover)",
        //   "--normal-text": "var(--popover-foreground)",
        //   "--normal-border": "var(--border)",
        //   "--border-radius": "var(--radius)",
        // },
        duration: 3000,
      });

      return;
    }

    window.location.href = "/dashboard";
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
      <Toaster position="top-center" />

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Attach onSubmit to the form */}
          <form id="login" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" name="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          {/* Make the button type="submit" so it triggers form submit */}
          <Button type="submit" form="login" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Continue with Google
          </Button>
          {/* <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a
              href="#"
              className="underline underline-offset-4 dark:text-white"
            >
              Sign up
            </a>
          </div> */}
        </CardFooter>
      </Card>
    </>
  );
}
