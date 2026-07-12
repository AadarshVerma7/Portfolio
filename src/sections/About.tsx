"use client"
import { Caveat, Permanent_Marker } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
const graffiti = Permanent_Marker({
  weight: "400",
  subsets: ["latin"]
})

const handwritten = Caveat({
  weight: "400",
  subsets: ["latin"]
})

const journeyItems = [
  {
    year: "2023",
    title: "Beginning",
    details: "Foundations, early experiments, and the first version of how I like to build.",
    highlights: ["First projects", "Learning fundamentals", "Getting comfortable with code"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="m12 7 2 4 4 2-4 2-2 4-2-4-4-2 4-2z" />
      </svg>
    ),
  },
  {
    year: "2023/24",
    title: "Exploring",
    details: "Focused on exploring more things about development and developing basic skills.",
    highlights: ["UI experiments", "Responsive layouts", "Frontend systems"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="1.8" />
        <path d="M7 8h10" />
        <path d="M7 12h4" />
        <path d="m9 16 2-4 2 2 2-3" />
      </svg>
    ),
  },
  {
    year: "2024",
    title: "Learning",
    details: "Moved toward full stack thinking with APIs, persistence, and architecture basics.",
    highlights: ["Backend logic", "Database design", "System thinking"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
      </svg>
    ),
  },
  {
    year: "2025+",
    title: "Building",
    details: "Now shaping more complete products and focusing on building things that scale.",
    highlights: ["Full stack flow", "Shipping features", "Product mindset"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 19a7 7 0 0 1 7-7h2a4 4 0 0 0 4-4V5h1v3a6 6 0 0 1-6 6h-1" />
        <path d="M11 12 7 8" />
        <path d="M14 15 18 19" />
      </svg>
    ),
  },
]

const coreAbilities = [
  {
    title: "Frontend",
    subtitle: "React & Next.js",
    stars: 4,
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 4 14h6l-1 8 11-14h-7l0-6Z" />
      </svg>
    ),
  },
  {
    title: "Backend",
    subtitle: "Node.js & Express",
    stars: 4,
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="6" rx="1.6" />
        <rect x="4" y="14" width="16" height="6" rx="1.6" />
        <circle cx="8" cy="7" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="8" cy="17" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Databases",
    subtitle: "MongoDB & SQL",
    stars: 3,
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v5c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 10v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
      </svg>
    ),
  },
  {
    title: "System Design",
    subtitle: "Architecture & Scalability",
    stars: 4,
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="3" width="6" height="6" rx="1.2" />
        <rect x="3" y="15" width="6" height="6" rx="1.2" />
        <rect x="15" y="15" width="6" height="6" rx="1.2" />
        <path d="M12 9v4" />
        <path d="M12 13H6v2" />
        <path d="M12 13h6v2" />
      </svg>
    ),
  },
  {
    title: "Problem Solving",
    subtitle: "DSA & Core CS",
    stars: 5,
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4a6 6 0 0 0 0 12h1v2a1 1 0 0 0 1.6.8l2.4-1.8h2A6 6 0 0 0 8 4Z" />
        <path d="M9 8h6" />
        <path d="M9 11h4" />
      </svg>
    ),
  },
  {
    title: "Tools & Tech",
    subtitle: "Git, Postman, VS Code & More",
    stars: 5,
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19h16" />
        <path d="M6 19V9h4v10" />
        <path d="M14 19V7h4v12" />
        <path d="M8 7l2-3 2 3" />
        <path d="M16 5l2-2 2 2" />
      </svg>
    ),
  },
]

const techItems = [
  { label: "React", accent: "text-[#3fb0ae]", src: "/icons/react.svg" },
  { label: "Next.js", accent: "text-[#d8cdb4]", src: "/icons/nextjs_blue.svg" },
  { label: "Node.js", accent: "text-[#9cb36c]", src: "/icons/nodejs.svg" },
  // { label: "TS", accent: "text-[#5fa2e6]", src: "/icons/typescript.svg" },
  { label: "Mongo", accent: "text-[#6ea556]", src: "/icons/mongo.svg" },
  // { label: "Postgres", accent: "text-[#d0c2aa]", src: "/icons/mongo.svg" },
  { label: "Tailwind", accent: "text-[#53b7c6]", src: "/icons/tailwind.svg" },
  { label: "Git", accent: "text-[#d7c0a0]", src: "/icons/github_blue.svg" },
  // { label: "Docker", accent: "text-[#d2b485]", src: "/icons/mongo.svg" },
]

const About = () => {
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0);
  const activeJourney = journeyItems[activeJourneyIndex];

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,158,56,0.10)_0%,rgba(214,158,56,0.04)_28%,transparent_60%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-310 flex-col gap-3">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <div className="lg:col-start-1">
            <div className="mb-1 flex flex-col items-start">
              <p className={`${handwritten.className} text-[1.8rem] tracking-[0.12em] text-[#31908f] uppercase sm:text-[2rem]`}>
                GET TO KNOW 
              </p>
              <Image src="/textures/underline.png" alt="underline" width={150} height={16} className="-mt-1" />
            </div>

            <h1
              className={`${graffiti.className} w-fit whitespace-nowrap text-[3.6rem] leading-[0.84] uppercase tracking-[0.02em] text-transparent bg-clip-text bg-[linear-gradient(180deg,#e8d8af_0%,#cfb37a_55%,#8f6d39_100%)] drop-shadow-[0_2px_0_rgba(0,0,0,0.5)] sm:text-[4.8rem] lg:text-[6.4rem]`}
            >
              ABOUT ME
            </h1>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />

          <div className="relative self-start lg:min-h-0">
            {/* <div className="absolute inset-0 rounded-2xl border border-white/5 bg-[linear-gradient(180deg,rgba(255,214,130,0.015),rgba(255,214,130,0.005))] shadow-[0_8px_20px_rgba(0,0,0,0.05)]" /> */}

            {/* <div className="absolute right-0 top-0 inline-block">
              <div className="rotate-[-1.5deg] bg-[#1d5c5d] px-7 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
                <h2 className={`${handwritten.className} text-[1.6rem] uppercase tracking-[0.12em] text-[#efe2c8]`}>
                  I&apos;M PASSIONATE ABOUT
                </h2>
              </div>
            </div> */}

            {/* <div className="relative z-10 grid gap-5 px-6 pb-6 pt-20 sm:px-7 lg:px-8">
              {passionItems.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-sm border border-[#d7af69]/45 text-[#d7af69] shadow-[inset_0_0_0_1px_rgba(255,224,162,0.12)]">
                    {item.icon}
                  </div>
                  <h3 className="max-w-[320px] font-logo text-[1.05rem] leading-[1.08] tracking-[0.16em] text-[#d7af69] uppercase sm:text-[1.2rem]">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div> */}

            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_28px_rgba(0,0,0,0.06)]" />
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
          <div className="rounded-sm border border-[#2e8484]/65 bg-[rgba(2,11,11,0.42)] px-4 py-4 shadow-[0_10px_26px_rgba(0,0,0,0.18)] sm:px-5">
            <div className="mb-4 flex items-center gap-3">
              <p className={`${handwritten.className} text-[1.5rem] tracking-[0.1em] text-[#31908f] uppercase`}>
                MY JOURNEY
              </p>
              <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(74,177,177,0.8),rgba(74,177,177,0.15))]" />
            </div>

            <div className="relative overflow-hidden rounded-sm border border-[#2f7a7a]/45 bg-[rgba(5,15,15,0.62)] px-4 py-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] sm:px-5 sm:py-5 lg:min-h-[285px]">
              <div className="absolute left-0 top-0 h-full w-1 bg-[linear-gradient(180deg,rgba(207,176,122,0.95),rgba(49,144,143,0.75))]" />

              <div className="relative grid gap-2 sm:grid-cols-4">
                {journeyItems.map((item, index) => {
                  const isActive = index === activeJourneyIndex;

                  return (
                    <button
                      key={item.year}
                      type="button"
                      onMouseEnter={() => setActiveJourneyIndex(index)}
                      onFocus={() => setActiveJourneyIndex(index)}
                      onClick={() => setActiveJourneyIndex(index)}
                      className={`group rounded-sm border px-3 py-3 text-left transition-all duration-300 ${
                        isActive
                          ? "border-[#cfb07a] bg-[rgba(13,13,13,0.92)] shadow-[0_0_0_1px_rgba(207,176,122,0.2)]"
                          : "border-[#2f7a7a]/35 bg-[rgba(6,19,19,0.3)] hover:border-[#cfb07a]/55 hover:bg-[rgba(8,20,20,0.5)]"
                      }`}
                    >
                      <div className="flex items-center gap-3 sm:block sm:text-left">
                        <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border ${isActive ? "border-[#cfb07a] text-[#d3b47c]" : "border-[#2f7a7a]/60 text-[#7bb2b0]"} bg-[rgba(6,19,19,0.65)] shadow-[0_0_0_4px_rgba(21,43,43,0.35)] sm:mb-3`}>
                          {item.icon}
                        </div>

                        <div className="min-w-0">
                          <div className={`${isActive ? "text-[#e4c388]" : "text-[#7bb2b0]"} font-logo text-[1rem] sm:text-[1.05rem]`}>
                            {item.year}
                          </div>
                          <p className="mt-1 font-logo text-[0.76rem] leading-tight text-[#d9d0b7] sm:text-[0.8rem]">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="relative mt-4 overflow-hidden rounded-sm border border-[#cfb07a]/22 bg-[rgba(3,10,10,0.45)] px-4 py-4 sm:px-5 sm:py-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(49,144,143,0.18)_0%,transparent_35%),radial-gradient(circle_at_85%_20%,rgba(207,176,122,0.12)_0%,transparent_28%)]" />
                <div className="relative flex items-start gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#cfb07a]/45 bg-[rgba(6,19,19,0.72)] text-[#d3b47c] shadow-[0_0_0_6px_rgba(21,43,43,0.28)] sm:h-16 sm:w-16">
                    {activeJourney.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className={`${handwritten.className} text-[1.2rem] tracking-[0.12em] text-[#e4c388] uppercase sm:text-[1.45rem]`}>
                      {activeJourney.year}
                    </p>
                    <h3 className={`${graffiti.className} mt-1 text-[1.2rem] leading-none tracking-[0.02em] text-[#d7af69] uppercase sm:text-[1.45rem]`}>
                      {activeJourney.title}
                    </h3>
                    <p className="mt-2 max-w-136 font-logo text-[0.86rem] leading-[1.55] text-[#d9d0b7] sm:text-[0.92rem]">
                      {activeJourney.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-sm border border-[#9d6b16]/65 bg-[linear-gradient(180deg,rgba(13,10,6,0.92),rgba(22,14,7,0.8))] px-3 py-3 shadow-[0_10px_26px_rgba(0,0,0,0.22)] sm:px-4 sm:py-4">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,117,115,0.22)_0,rgba(34,117,115,0.1)_16%,transparent_34%),radial-gradient(circle_at_95%_10%,rgba(180,128,34,0.16)_0,transparent_18%),linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.12)_100%)]" />
            <div className="pointer-events-none absolute inset-2.5 rounded-[3px] border border-[#7a4f12]/35" />
            <div className="relative mb-3 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full border border-[#d69a2f]/65 bg-[rgba(18,12,5,0.9)] text-[#d69a2f] shadow-[0_0_0_4px_rgba(28,18,8,0.55)]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h5l1.5 3H20v10H8.5L7 13H4Z" />
                  <path d="M8 13h8" />
                </svg>
              </div>
              <div className="flex-1">
                <p className={`${handwritten.className} text-[1.35rem] tracking-[0.12em] text-[#d8af63] uppercase sm:text-[1.55rem]`}>
                  CORE ABILITIES
                </p>
              </div>
            </div>

            <div className="relative grid gap-3 lg:grid-cols-2 lg:gap-3">
              {coreAbilities.map((item, index) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-sm border border-[#cc8c26]/55 bg-[rgba(5,5,5,0.82)] px-3 py-3 shadow-[inset_0_0_0_1px_rgba(255,214,130,0.03)] sm:px-4 sm:py-3.5"
                >
                  <div className="absolute left-4 top-4 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(43,123,120,0.3)_0%,rgba(43,123,120,0.12)_36%,transparent_72%)] blur-[1px]" />
                  <div className="relative flex items-start gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full  text-[#d7af69]">
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className={`${graffiti.className} text-[1.15rem] leading-[0.95] tracking-[0.03em] text-[#d7af69] uppercase sm:text-[1.35rem]`}>
                        {item.title}
                      </h3>
                      <p className="mt-1.5 font-logo text-[0.82rem] font-semibold leading-[1.2] text-[#3d8b87] sm:text-[0.9rem]">
                        {item.subtitle}
                      </p>

                      <div className="mt-3 flex gap-1.5 text-[#d7af69]" aria-label={`${item.stars} out of 5 stars`}>
                        {Array.from({ length: item.stars }).map((_, starIndex) => (
                          <svg key={starIndex} viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                            <path d="m12 3 2.4 5.1 5.6.8-4 3.9.9 5.6L12 15.9 7.1 18.4l.9-5.6-4-3.9 5.6-.8Z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-sm border border-[#2b807f]/12" />
                  {index % 2 === 0 ? (
                    <div className="pointer-events-none absolute -right-2 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(43,123,120,0.2)_0%,transparent_70%)] blur-sm" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-sm border border-[#1b6564]/60 bg-[rgba(2,11,11,0.36)] px-4 py-4 shadow-[0_10px_26px_rgba(0,0,0,0.18)] sm:px-5">
          <div className="mb-3 flex items-center gap-3">
            <p className={`${handwritten.className} text-[1.5rem] tracking-[0.1em] text-[#3fb0ae] uppercase`}>
              TECH I WORK WITH
            </p>
            <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(49,144,143,0.8),rgba(49,144,143,0.1))]" />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            {techItems.map((tech) => (
              <div
                key={tech.label}
                className="flex min-w-[140px] flex-1 items-center gap-3 rounded-md px-2 py-2 text-[#d6b06f] sm:min-w-[160px] lg:flex-none"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-current/20 bg-black/25 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                  <Image
                    src={tech.src}
                    alt={tech.label}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <span className={`font-logo text-[0.95rem] uppercase tracking-[0.08em] whitespace-nowrap ${tech.accent}`}>
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 rounded-sm border border-[#a37113]/55 bg-[rgba(18,12,4,0.34)] px-4 py-4 shadow-[0_10px_26px_rgba(0,0,0,0.18)] sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-[780px] font-logo text-[1.05rem] leading-[1.65] text-[#e9decb] sm:text-[1.2rem] lg:text-[1.45rem]">
            <p>
              I don&apos;t just write code. I craft <span className="text-[#2f9da0]">solutions</span>.
            </p>
            <p>
              I don&apos;t just build apps. I build <span className="text-[#2f9da0]">experiences</span>.
            </p>
          </div>

          <div className="justify-self-end text-right">
            <div className="mb-2 flex justify-end text-[#d69a2f]">
              <Image 
                src={"/icons/crown.svg"}
                alt="crown"
                width={24}
                height={24}
              />
            </div>
            <p className={`${handwritten.className} text-[2.1rem] text-[#d69a2f] sm:text-[2.5rem]`}>
              Aadarsh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;