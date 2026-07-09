"use client"
import { Caveat, Permanent_Marker } from "next/font/google";
import Image from "next/image";
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
    title: "Started my journey with curiosity and code.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="m12 7 2 4 4 2-4 2-2 4-2-4-4-2 4-2z" />
      </svg>
    ),
  },
  {
    year: "2023/24",
    title: "Explored frontend development and built creative UIs.",
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
    title: "Dived into backend, databases and system design.",
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
    title: "Building full stack applications and impactful products.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 19a7 7 0 0 1 7-7h2a4 4 0 0 0 4-4V5h1v3a6 6 0 0 1-6 6h-1" />
        <path d="M11 12 7 8" />
        <path d="M14 15 18 19" />
      </svg>
    ),
  },
]

const driveItems = [
  {
    title: "Solving Real Problems",
    text: "I love turning complex challenges into simple, intuitive solutions.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a6 6 0 0 0-4 10.5V15h8v-2.5A6 6 0 0 0 12 2Z" />
        <path d="M9 10h6" />
      </svg>
    ),
  },
  {
    title: "Creating Impact",
    text: "I build with purpose, focusing on features that truly matter.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 4v3" />
        <path d="M20 12h-3" />
        <path d="M12 20v-3" />
        <path d="M4 12h3" />
      </svg>
    ),
  },
  {
    title: "Continuous Growth",
    text: "I’m always learning, exploring and leveling up my skills.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12c2-4 5.5-6 8-6s6 2 8 6c-2 4-5.5 6-8 6s-6-2-8-6Z" />
        <path d="M12 9v6" />
        <path d="M9 12h6" />
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
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,158,56,0.10)_0%,rgba(214,158,56,0.04)_28%,transparent_60%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-310 flex-col gap-5">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.84fr)_minmax(320px,0.66fr)_minmax(0,0.78fr)] lg:items-start">
          <div className="pt-2 lg:col-start-1">
            <div className="mb-1 flex flex-col items-start">
              <p className={`${handwritten.className} text-[1.8rem] tracking-[0.12em] text-[#31908f] uppercase sm:text-[2rem]`}>
                GET TO KNOW ME
              </p>
              <Image src="/textures/underline.png" alt="underline" width={150} height={16} className="-mt-1" />
            </div>

            <h1
              className={`${graffiti.className} w-fit whitespace-nowrap text-[3.6rem] leading-[0.84] uppercase tracking-[0.02em] text-transparent bg-clip-text bg-[linear-gradient(180deg,#e8d8af_0%,#cfb37a_55%,#8f6d39_100%)] drop-shadow-[0_2px_0_rgba(0,0,0,0.5)] sm:text-[4.8rem] lg:text-[6.4rem]`}
            >
              ABOUT ME
            </h1>

            <p className="mt-5 max-w-[520px] font-logo text-[1rem] leading-[1.55] text-[#e9dec6] sm:text-[1.08rem]">
              I&apos;m a Full Stack Developer who loves turning ideas into meaningful digital experiences.
              <br />
              From clean UIs to robust backends,
              <br />
              I enjoy building things that solve real problems.
            </p>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />

          <div className="relative min-h-[300px] lg:col-start-3 lg:min-h-[350px]">
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

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_160px_minmax(0,1fr)]">
          <div className="rounded-sm border border-[#2e8484]/65 bg-[rgba(2,11,11,0.42)] px-4 py-4 shadow-[0_10px_26px_rgba(0,0,0,0.18)] sm:px-5">
            <div className="mb-4 flex items-center gap-3">
              <p className={`${handwritten.className} text-[1.5rem] tracking-[0.1em] text-[#31908f] uppercase`}>
                MY JOURNEY
              </p>
              <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(74,177,177,0.8),rgba(74,177,177,0.15))]" />
            </div>

            <div className="relative grid gap-4 pt-2 xl:grid-cols-4 xl:gap-3">
              <div className="pointer-events-none absolute left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] top-2 h-px bg-[linear-gradient(90deg,rgba(193,163,120,0.2),rgba(193,163,120,0.9),rgba(193,163,120,0.9),rgba(193,163,120,0.2))] opacity-80 xl:left-10 xl:right-10" />
              {journeyItems.map((item) => (
                <div key={item.year} className="relative flex flex-col items-center text-center">
                  <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full border border-[#cfb07a] bg-[#0d0d0d] shadow-[0_0_0_4px_rgba(36,36,36,0.75)]" />
                  <div className="mt-5 text-[1.05rem] text-[#7bb2b0] sm:text-[1.35rem]">
                    {item.year}
                  </div>
                  <div className="mt-3 grid h-14 w-14 place-items-center rounded-full border border-[#2f7a7a]/60 bg-[rgba(6,19,19,0.65)] text-[#d3b47c] shadow-[0_0_0_5px_rgba(21,43,43,0.45)]">
                    {item.icon}
                  </div>
                  <p className="mt-4 max-w-[170px] font-logo text-[0.88rem] leading-[1.7] text-[#d9d0b7]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />

          <div className="relative overflow-hidden rounded-sm border border-[#9d6b16]/55 bg-[rgba(24,15,4,0.40)] px-5 py-4 shadow-[0_10px_26px_rgba(0,0,0,0.18)] sm:px-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className={`${handwritten.className} text-[1.5rem] tracking-[0.1em] text-[#e1a63a] uppercase`}>
                  WHAT DRIVES ME
                </p>
              </div>
              <div className="text-[#d69a2f] opacity-90">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3 1.8 5.2L19 10l-5 3.1L15.2 19 12 15.8 8.8 19 10 13.1 5 10l5.2-1.8Z" />
                </svg>
              </div>
            </div>

            <div className="grid gap-0 md:grid-cols-3">
              {driveItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex min-h-[230px] flex-col items-center px-4 py-2 text-center ${index > 0 ? "md:border-l md:border-[#9d6b16]/25" : ""}`}
                >
                  <div className="text-[#d69a2f]">{item.icon}</div>
                  <h3 className="mt-3 font-logo text-[1rem] leading-[1.15] tracking-[0.15em] text-[#d69a2f] uppercase sm:text-[1.05rem]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-[180px] font-logo text-[0.9rem] leading-[1.85] text-[#d9d0b7]">
                    {item.text}
                  </p>
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