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

      // Hide when scrolling down, show when scrolling up
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
          fixed top-4 left-1/2 z-50
          -translate-x-1/2
          w-[calc(100%-3rem)] max-w-lg
          rounded-2xl px-6 py-3
          backdrop-blur-xl backdrop-saturate-150
          bg-background/30 dark:bg-background/10
          border border-white/40 dark:border-white/20
          shadow-[0_8px_32px_rgba(0,0,0,0.12)]
          transition-all duration-300 ease-out
          ${hidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"}
        `}
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

    // <>
    //   <nav
    //     className={`
    //       fixed top-0 left-0 right-0 z-50
    //       flex items-center justify-between
    //       px-6 py-3
    //       transition-all duration-300 ease-out
    //       ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
    //     `}
    //   >
    //     {/* Logo */}
    //     {/* <div className="text-sm font-bold tracking-tight">
    //       <a href="/">Andre Austria</a>
    //     </div> */}

    //     {/* Center pill nav */}
    //     <div
    //       className="
    //         flex items-center gap-1
    //         rounded-xl px-2 py-1.5
    //         backdrop-blur-xl backdrop-saturate-150
    //         bg-background/30 dark:bg-background/20
    //         border border-white/20 dark:border-white/10
    //         shadow-[0_4px_24px_rgba(0,0,0,0.12)]
    //       "
    //     >
    //       <ul className="flex items-center gap-1 text-sm font-medium">
    //         {links.map((link) => (
    //           <li key={link.label}>
    //             <a
    //               href={link.href}
    //               className="
    //                 px-3 py-1.5 rounded-lg
    //                 text-black/70 dark:text-white/70
    //                 hover:text-black dark:hover:text-white
    //                 hover:bg-white/10
    //                 transition-all
    //               "
    //             >
    //               {link.label}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>

    //       {/* Divider */}
    //       <div className="w-px h-4 bg-white/20 mx-1" />

    //       {/* Dark mode toggle */}
    //       <ModeToggle />
    //     </div>

    //     {/* Available for work */}
    //     {/* <div
    //       className="
    //         flex items-center gap-2
    //         text-sm
    //         rounded-xl px-4 py-1.5
    //         border border-white/20 dark:border-white/10
    //         text-black/70 dark:text-white/70
    //       "
    //     >
    //       Available for work
    //       <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_2px_rgba(74,222,128,0.4)]" />
    //     </div> */}
    //   </nav>
    // </>
  );
}
