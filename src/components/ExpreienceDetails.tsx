"use client";

import {
  CalendarDays,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Code2,
  Boxes,
  Users,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

import Link from "next/link";

const responsibilities = [
  "Built and maintained full stack web applications",
  "Developed responsive and modern user interfaces",
  "Implemented REST APIs and integrated frontend with backend",
  "Collaborated with team and followed clean code practices",
];

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
];

const learnings = [
  {
    icon: Code2,
    title: "Writing production",
    subtitle: "ready code",
  },
  {
    icon: Boxes,
    title: "Working on complete",
    subtitle: "end-to-end features",
  },
  {
    icon: Users,
    title: "Real team",
    subtitle: "collaboration",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "How real products",
    subtitle: "are built and shipped",
  },
];

const ExperienceDetails = () => {
  return (
    <div
      className="
        relative
        h-[520px]
        w-full
        overflow-hidden
        rounded-[28px]
        border
        border-[#d6b06f]/25
        bg-[#050807]/80
        p-7
        shadow-[0_25px_70px_rgba(0,0,0,0.4)]
        backdrop-blur-sm
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND DECORATION */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-64
          w-64
          rounded-full
          bg-[#3f9c9c]/5
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          left-1/3
          h-72
          w-72
          rounded-full
          bg-[#d6b06f]/5
          blur-[120px]
        "
      />

      {/* ================================================= */}
      {/* TOP SECTION */}
      {/* ================================================= */}

      <div className="relative z-10 flex items-start justify-between gap-6">
        {/* LEFT - ROLE */}

        <div className="flex items-start gap-5">
          {/* Company Logo Placeholder */}

          <div
            className="
              flex
              h-[76px]
              w-[76px]
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-[#d6b06f]/20
              bg-[#0b0d0c]
              shadow-[0_10px_30px_rgba(0,0,0,0.3)]
            "
          >
            <Code2
              size={34}
              strokeWidth={1.5}
              className="text-[#3f9c9c]"
            />
          </div>

          {/* Role Details */}

          <div>
            <h2
              className="
                text-2xl
                font-medium
                tracking-wide
                text-[#f0ddb0]
              "
            >
              Full Stack Developer Intern
            </h2>

            <div className="mt-1 flex items-center gap-2">
              <p className="text-lg text-[#d6b06f]">
                Bitwise Learn
              </p>
                <Link 
                href={"https://www.bitwiselearn.com/"}
                target="blank"
                >
                    <ExternalLink
                    size={14}
                    className="text-[#3f9c9c] cursor-pointer"
                    />
                </Link>
            </div>

            <div
              className="
                mt-1
                flex
                items-center
                gap-2
                text-xs
                text-zinc-500
              "
            >
              <MapPin size={12} />

              <span>Remote</span>
            </div>
          </div>
        </div>

        {/* RIGHT - DATE */}

        <div className="flex shrink-0 items-center gap-4">
          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              tracking-wide
              text-zinc-400
            "
          >
            <CalendarDays
              size={14}
              className="text-zinc-500"
            />

            <span>Dec 2025 – June 2026</span>
          </div>

          <span
            className="
              rounded-full
              border
              border-[#d6b06f]/30
              bg-[#d6b06f]/5
              px-4
              py-2
              text-[10px]
              tracking-wide
              text-[#d6b06f]
            "
          >
            6 Months
          </span>
        </div>
      </div>

      {/* ================================================= */}
      {/* DESCRIPTION + VISUAL */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          mt-4
          grid
          grid-cols-[1.15fr_0.85fr]
          gap-6
        "
      >
        {/* LEFT CONTENT */}

        <div>
          {/* Description */}

          <p
            className="
              max-w-[620px]
              text-sm
              leading-6
              text-zinc-400
            "
          >
            Worked as a Full Stack Developer Intern, building
            real-world web applications and learning to convert
            ideas into working products with modern technologies.
          </p>

          <div
            className="
              mt-3
              h-px
              w-full
              bg-linear-to-r
              from-[#3f9c9c]/30
              to-transparent
            "
          />

          {/* Responsibilities */}

          <div className="mt-4">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-[#3f9c9c]
              "
            >
              Key Responsibilities
            </p>

            <div className="mt-3 space-y-2">
              {responsibilities.map((responsibility) => (
                <div
                  key={responsibility}
                  className="
                    flex
                    items-center
                    gap-3
                    text-xs
                    text-zinc-400
                  "
                >
                  <CheckCircle2
                    size={15}
                    strokeWidth={1.5}
                    className="
                      shrink-0
                      text-[#3f9c9c]
                    "
                  />

                  <span>{responsibility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* MINI DASHBOARD VISUAL */}
        {/* ================================================= */}

        <div
          className="
            relative
            h-[170px]
            overflow-hidden
            rounded-xl
            border
            border-[#3f9c9c]/20
            bg-[#050908]
            p-3
          "
        >
          {/* Browser Header */}

          <div
            className="
              flex
              h-6
              items-center
              gap-1.5
              border-b
              border-[#3f9c9c]/10
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#d6b06f]/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#d6b06f]/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#3f9c9c]/60" />

            <div
              className="
                ml-2
                h-2
                flex-1
                rounded-full
                bg-white/[0.04]
              "
            />
          </div>

          {/* Dashboard */}

          <div
            className="
              mt-3
              grid
              h-[115px]
              grid-cols-[0.3fr_0.7fr]
              gap-3
            "
          >
            {/* Sidebar */}

            <div
              className="
                rounded-md
                border
                border-[#3f9c9c]/10
                bg-[#3f9c9c]/[0.03]
                p-2
              "
            >
              <div
                className="
                  mb-3
                  h-2
                  w-7
                  rounded
                  bg-[#3f9c9c]/50
                "
              />

              <div className="space-y-2">
                <div className="h-1.5 w-full rounded bg-white/10" />
                <div className="h-1.5 w-[75%] rounded bg-white/10" />
                <div className="h-1.5 w-[85%] rounded bg-white/10" />
                <div className="h-1.5 w-[60%] rounded bg-white/10" />
              </div>
            </div>

            {/* Main Dashboard */}

            <div className="flex flex-col gap-2">
              <div
                className="
                  h-3
                  w-[40%]
                  rounded
                  bg-[#d6b06f]/30
                "
              />

              <div className="grid flex-1 grid-cols-2 gap-2">
                <div
                  className="
                    rounded-md
                    border
                    border-[#3f9c9c]/10
                    bg-[#3f9c9c]/[0.03]
                  "
                />

                {/* Fake Chart */}

                <div
                  className="
                    flex
                    items-end
                    justify-center
                    gap-1
                    rounded-md
                    border
                    border-[#3f9c9c]/10
                    bg-[#3f9c9c]/[0.03]
                    px-3
                    pb-3
                  "
                >
                  <div className="h-3 w-1 bg-[#3f9c9c]/20" />
                  <div className="h-6 w-1 bg-[#3f9c9c]/30" />
                  <div className="h-4 w-1 bg-[#3f9c9c]/40" />
                  <div className="h-8 w-1 bg-[#3f9c9c]/50" />
                  <div className="h-5 w-1 bg-[#3f9c9c]/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* TECH STACK */}
      {/* ================================================= */}

      {/* ================================================= */}
      {/* WHAT I LEARNED */}
      {/* ================================================= */}

      <div className="relative z-10 mt-4">
        <div className="flex items-center gap-4">
          <p
            className="
              whitespace-nowrap
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-[#3f9c9c]
            "
          >
            What I Learned
          </p>

          <div
            className="
              h-px
              flex-1
              bg-linear-to-r
              from-[#3f9c9c]/30
              to-transparent
            "
          />
        </div>

        <div className="mt-3 grid grid-cols-4 gap-3">
          {learnings.map((learning) => {
            const Icon = learning.icon;

            return (
              <div
                key={learning.title}
                className="
                  group
                  flex
                  h-[75px]
                  flex-col
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#d6b06f]/15
                  bg-[#d6b06f]/[0.02]
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#d6b06f]/40
                  hover:bg-[#d6b06f]/[0.04]
                "
              >
                <Icon
                  size={19}
                  strokeWidth={1.5}
                  className="
                    mb-1
                    text-[#d6b06f]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <p className="text-[10px] text-zinc-300">
                  {learning.title}
                </p>

                <p className="text-[10px] text-zinc-400">
                  {learning.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;