import { ModeToggle } from "@/components/ModeToggle";
import { Separator } from "@/components/ui/separator";

export function Navigation() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/ErrorPage" },
    { label: "Projects", href: "/ErrorPage" }
  ];

  return (
    <>
      {/* Spacer so content doesn't hide behind fixed nav */}
      <div className="h-24" />

      <nav
        className="
          fixed top-4 left-1/2 z-50
          -translate-x-1/2
          w-md max-w-6xl
          rounded-2xl px-6 py-3
          backdrop-blur-xl backdrop-saturate-150
          bg-background/30 dark:bg-background/10
          border border-white/40 dark:border-white/20
          shadow-[0_8px_32px_rgba(0,0,0,0.12)]
        "
      >
        {/* Liquid light layer */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-2xl
            bg-gradient-to-br from-white/40 via-white/10 to-transparent
            dark:from-white/20
          "
        />

        <div className="relative z-10 flex items-center justify-between">
          {/* Logo */}
          <div className="text-md font-bold tracking-tight">
            <a href="/">Andre Austria</a>
          </div>

          {/* Links */}
          <ul className="hidden md:flex gap-6 text-sm font-medium">
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
          <div className="flex gap-2">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
