import { ModeToggle } from "@/components/ModeToggle";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

export function Navigation() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Projects", href: "/projects" },
  ];

  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Spacer so content doesn't hide behind fixed nav */}
      <div className="h-24" />

      <nav
        className={`
          fixed top-5 left-1/2 z-50
          -translate-x-1/2
          w-[calc(100%-3rem)] max-w-lg
          rounded-full px-5 py-2.5
          backdrop-blur-xl backdrop-saturate-150
          bg-background/30 dark:bg-background/10
          border border-white/40 dark:border-white/20
          shadow-[0_4px_24px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]
          transition-all duration-300 ease-out
          ${hidden ? "-translate-y-20 opacity-0" : "translate-y-0 opacity-100"}
        `}
      >
        {/* Liquid light layer */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-full
            bg-gradient-to-br from-white/40 via-white/10 to-transparent
            dark:from-white/20 dark:via-white/5
          "
        />

        <div className="relative z-10 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="/"
            className="text-sm font-bold tracking-tight shrink-0"
          >
            Andre Austria
          </a>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            {links.map((link) => (
              <li key={link.label}>
                
                  <a
                    href={link.href}
                    className="
                      text-black/70 dark:text-white/70
                      hover:text-black dark:hover:text-white
                      transition-colors
                    "
                  >
                    {link.label}
                  </a>
                </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <Separator
              orientation="vertical"
              className="hidden md:block h-4 bg-black/10 dark:bg-white/15"
            />
            <ModeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}