import { useMemo } from "react";
import * as Icons from "@thesvg/react";

import { getTechstack } from "../../../pages/api/techstack.ts";

interface TechItem {
  name: string;
  icon: React.ElementType;
  url: string;
}

const techStack: TechItem[] = [
  {
    name: "JavaScript",
    icon: Icons.Javascript,
    url: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    icon: Icons.Typescript,
    url: "https://www.typescriptlang.org/",
  },
  { name: "Node.js", icon: Icons.Nodejs, url: "https://nodejs.org/en" },
  { name: "Vue.js", icon: Icons.Vue, url: "https://vuejs.org/" },
  { name: "Nuxt.js", icon: Icons.Nuxt, url: "https://nuxt.com/" },
  { name: "React", icon: Icons.React, url: "https://react.dev/" },
  { name: "Next.js", icon: Icons.Nextjs, url: "https://nextjs.org/" },
  {
    name: "Angular",
    icon: Icons.Angular,
    url: "https://angularjs.org/",
  },
  {
    name: "Tailwind CSS",
    icon: Icons.Tailwindcss,
    url: "https://tailwindcss.com/",
  },
  { name: "Sass", icon: Icons.Sass, url: "https://sass-lang.com/" },
  { name: "PHP", icon: Icons.Php, url: "https://www.php.net/" },
  { name: "Laravel", icon: Icons.Laravel, url: "https://laravel.com/" },
  { name: "Python", icon: Icons.Python, url: "https://www.python.org/" },
  {
    name: "Flask",
    icon: Icons.Flask,
    url: "https://flask.palletsprojects.com/",
  },
  {
    name: "Django",
    icon: Icons.Django,
    url: "https://www.djangoproject.com/",
  },
  { name: "MySQL", icon: Icons.Mysql, url: "https://www.mysql.com/" },
  {
    name: "Supabase",
    icon: Icons.Supabase,
    url: "https://supabase.com/",
  },
  {
    name: "Firebase",
    icon: Icons.Firebase,
    url: "https://firebase.google.com/",
  },
  { name: "Kotlin", icon: Icons.Kotlin, url: "https://kotlinlang.org/" },
  { name: "Git", icon: Icons.Git, url: "https://git-scm.com/" },
  {
    name: "NVM",
    icon: Icons.Nvm,
    url: "https://www.nvmnode.com/guide/download.html",
  },
  { name: "Docker", icon: Icons.Docker, url: "https://www.docker.com/" },
  { name: "Linux", icon: Icons.Linux, url: "https://www.linux.org/" },
  { name: "Debian", icon: Icons.Debian, url: "https://www.debian.org/" },
  { name: "Figma", icon: Icons.Figma, url: "https://www.figma.com/" },
];

export default function TechStack() {
  const marqueeItems = useMemo(() => [...techStack, ...techStack], []);

  console.log(getTechstack);
  return (
    <div className="space-y-4">
      <p className="font-semibold text-black dark:text-white text-xl">
        Tech Stack
      </p>

      <div className="relative overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white dark:from-neutral-950 via-white/90 dark:via-neutral-950/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white dark:from-neutral-950 via-white/90 dark:via-neutral-950/90 to-transparent" />

        <ul className="tech-marquee flex w-max gap-4 pr-4">
          {marqueeItems.map((tech, index) => (
            <li key={`${tech.name}-${index}`} className="shrink-0">
              <a href={tech.url} target="_blank" rel="noreferrer" className="group">
                <div className="flex items-center justify-center gap-2 w-28 transition-all duration-200">
                  <tech.icon
                    variant="default"
                    className="h-6 w-6"
                  />
                  <p className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {tech.name}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .tech-marquee {
          animation: tech-marquee-scroll 40s linear infinite;
          animation-play-state: running;
        }

        .tech-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes tech-marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}