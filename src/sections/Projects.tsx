"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import CardSwap, { Card } from "../components/CardSwap";
import { Caveat, Permanent_Marker } from "next/font/google";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiVercel } from "react-icons/si";

const graffiti = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

const mobileQuery = "(max-width: 767px)";

const subscribeToMobileViewport = (onStoreChange: () => void) => {
  const mediaQuery = window.matchMedia(mobileQuery);
  mediaQuery.addEventListener("change", onStoreChange);

  return () => mediaQuery.removeEventListener("change", onStoreChange);
};

const getMobileViewportSnapshot = () => window.matchMedia(mobileQuery).matches;

const projects = [
  {
    title: "Persephone",
    subtitle: "Developer hiring ecosystem",
    description:
      "A developer-first hiring platform focused on live coding, WebRTC interviews, recommendation engine, DSA rounds, and seamless recruitment. Also Available on the Microsoft Store!",
    liveUrl: "https://apps.microsoft.com/detail/9P85NCFS9MDM?hl=en&gl=IN&ocid=pdpshare",
    githubUrl: "https://github.com/AadarshVerma7/persephone.git",
    image: "/images/Persephone.png",
  },
  {
    title: "Trackio",
    subtitle: "Task tracking workspace",
    description:
      "A focused productivity tracker for organizing tasks, monitoring progress, and keeping work visible at a glance.",
    liveUrl: "https://trackio-byti.vercel.app/",
    githubUrl: "https://github.com/AadarshVerma7/Trackio",
    image: "/images/Trackio.png",
  },
  {
    title: "Epiphany",
    subtitle: "Learning & Institution Management Platform",
    description:
      "A Full Stack Project that simplifies academic and administrative management for educational institutions.",
    liveUrl: "https://epiphany-client.vercel.app/",
    githubUrl: "https://github.com/AadarshVerma7/Epiphany",
    image: "/images/Epiphany.png",
  },
];

const techStack = [
  {
    id: "react",
    name: "Next.js + React",
    icon: FaReact,
    accent: "#d6b06f",
    tagline: "UI library",
    content:
      "Component-driven interfaces with hooks and context for state management.",
  },
  {
    id: "node",
    name: "Node.js",
    icon: FaNodeJs,
    accent: "#3f9c9c",
    tagline: "Runtime",
    content:
      "Handles the API layer, auth, and business logic behind every project.",
  },
  {
    id: "mongo",
    name: "MongoDB",
    icon: SiMongodb,
    accent: "#d6b06f",
    tagline: "Database",
    content:
      "Flexible document storage for fast-moving schemas across projects.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    accent: "#3f9c9c",
    tagline: "Styling",
    content:
      "Utility-first styling that keeps design consistent without leaving markup.",
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: SiVercel,
    accent: "#d6b06f",
    tagline: "Deployment",
    content:
      "Zero-config deploys with previews for every branch and pull request.",
  },
];

const TechStackList = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full max-w-[380px] shrink-0">
      <p className={`text-[1.5rem] ${caveat.className} uppercase tracking-[0.25em] text-[#3f9c9c] mb-8`}>
        Built with
      </p>

      <div className="flex flex-col">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          const isHovered = hoveredId === tech.id;

          return (
            <div
              key={tech.id}
              onMouseEnter={() => setHoveredId(tech.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative cursor-pointer border-b border-[#d6b06f]/10 py-5 transition-all ease-out"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                transitionDuration: "500ms",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div
                className="absolute left-0 top-0 h-full w-[2px] transition-all duration-300"
                style={{
                  backgroundColor: tech.accent,
                  opacity: isHovered ? 1 : 0,
                }}
              />

              <div
                className="flex items-center justify-between pl-5 pr-2 transition-transform duration-300"
                style={{
                  transform: isHovered ? "translateX(6px)" : "translateX(0px)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      border: `1.5px solid ${tech.accent}`,
                      backgroundColor: isHovered
                        ? `${tech.accent}1a`
                        : "transparent",
                      transform: isHovered ? "scale(1.08)" : "scale(1)",
                    }}
                  >
                    <Icon size={18} color={tech.accent} />
                  </div>

                  <div>
                    <p
                      className={`${graffiti.className} text-xl leading-none`}
                      style={{ color: isHovered ? tech.accent : "#e7dcc6" }}
                    >
                      {tech.name}
                    </p>

                    <div
                      className="overflow-hidden transition-all duration-300 ease-out"
                      style={{
                        maxHeight: isHovered ? "60px" : "20px",
                        marginTop: "6px",
                      }}
                    >
                      {isHovered ? (
                        <p
                          className={`${caveat.className} text-lg leading-snug text-zinc-300`}
                        >
                          {tech.content}
                        </p>
                      ) : (
                        <p className="text-[11px] uppercase tracking-[0.15em] text-[#c39a58]/70">
                          {tech.tagline}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <span
                  className="text-[10px] uppercase tracking-[0.2em] text-[#e7dcc6]/40 transition-opacity duration-300"
                  style={{ opacity: isHovered ? 1 : 0 }}
                >
                  0{index + 1}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Projects = () => {
  const isMobile = useSyncExternalStore(
    subscribeToMobileViewport,
    getMobileViewportSnapshot,
    () => false
  );

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-x-clip bg-transparent px-4 pb-16 pt-28 sm:px-6 sm:pb-24 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <h2
          className={`
            ${graffiti.className}
            text-5xl
            sm:text-7xl
            lg:text-8xl
            leading-none
            uppercase
            bg-linear-to-b
            from-[#f0ddb0]
            via-[#d4bc85]
            to-[#9f8450]
            bg-clip-text
            text-transparent
            sm:-translate-x-4
          `}
        >
          Projects
        </h2>

        <div className="mt-12 flex flex-col items-start justify-between gap-10 sm:mt-16 lg:mt-20 lg:flex-row lg:gap-12">
          <div className="hidden md:block">
            <TechStackList />
          </div>

          <div className="flex justify-center lg:justify-end w-full">
            <CardSwap
              width="min(100%, 860px)"
              height={isMobile ? 680 : 540}
              cardDistance={isMobile ? 0 : 96}
              verticalDistance={isMobile ? 0 : 102}
              delay={3000}
              pauseOnHover
            >
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  className="overflow-hidden rounded-[28px] border border-[#d6b06f]/20 bg-[#0d0d0c]/92 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-8"
                >
                  <div className="grid h-full grid-cols-1 gap-5 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <p className="font-handwritten text-sm uppercase tracking-[0.35em] text-[#3f9c9c]">
                          Featured Project
                        </p>

                        <div className="mt-3 h-px w-28 bg-[#3f9c9c]/50" />
                        <p className="font-handwritten text-[0.6rem] uppercase tracking-[0.35em] text-[#3f9c9c]">Hover to Stop!</p>
                        <h3
                          className={`${graffiti.className} mt-5 text-4xl uppercase leading-none tracking-wide text-[#d6b06f] sm:mt-8 sm:text-5xl lg:text-6xl`}
                        >
                          {project.title}
                        </h3>

                        <p className="mt-3 text-sm uppercase leading-6 tracking-[0.18em] text-[#c39a58]">
                          {project.subtitle}
                        </p>

                        <p
                          className={`
                            ${caveat.className}
                            mt-5
                            sm:mt-8
                            max-w-97.5
                            text-2xl
                            leading-relaxed
                            text-zinc-200
                          `}
                        >
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md border border-[#3f9c9c] px-6 py-3 text-sm uppercase tracking-[0.18em] text-[#3f9c9c] transition hover:bg-[#3f9c9c] hover:text-black"
                        >
                          Live Link
                        </Link>

                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md border border-[#d6b06f]/30 px-6 py-3 text-sm uppercase tracking-[0.18em] text-[#d6b06f] transition hover:border-[#d6b06f] hover:text-[#efdcb0]"
                        >
                          GitHub Link
                        </Link>
                      </div>
                    </div>

                    <div className="relative min-h-52 overflow-hidden rounded-3xl border border-[#d6b06f]/15 bg-black/35 sm:min-h-75">
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        className="object-contain opacity-90"
                      />

                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.35))]" />

                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                        <span className="rounded-full border border-[#3f9c9c]/35 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#3f9c9c]">
                          Image Slot
                        </span>

                        <span className="text-[10px] uppercase tracking-[0.3em] text-[#e7dcc6]/70">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
