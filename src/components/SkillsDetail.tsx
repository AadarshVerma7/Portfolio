"use client";

import { Caveat, Permanent_Marker } from "next/font/google";
import SkillVisual from "./SkillVisual";

const graffiti = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

interface SkillsDetailProps {
  activeId: string;
}

const skillsData = {
  frontend: {
    number: "01",
    eyebrow: "Currently Exploring",
    title: "Frontend",
    subtitle: "Interfaces that feel alive",
    description:
      "Building responsive, accessible and engaging interfaces with a focus on clean design and smooth user experiences.",
    toolkit: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    quote: "Great interfaces should feel effortless to use.",
  },

  backend: {
    number: "02",
    eyebrow: "Behind The Scenes",
    title: "Backend",
    subtitle: "Powering everything underneath",
    description:
      "Designing APIs and server-side systems that keep applications reliable, structured and ready to scale.",
    toolkit: ["Node.js", "Express", "REST APIs"],
    quote: "Good backend architecture makes complexity manageable.",
  },

  database: {
    number: "03",
    eyebrow: "Structuring The Data",
    title: "Database",
    subtitle: "Turning information into structure",
    description:
      "Working with relational, document and graph databases to model data around the problems applications need to solve.",
    toolkit: ["MongoDB", "SQL", "Neo4j", "Redis"],
    quote: "The right data model can simplify an entire system.",
  },

  dsa: {
    number: "04",
    eyebrow: "Current Focus",
    title: "DSA",
    subtitle: "Thinking through problems",
    description:
      "Breaking complex problems into smaller pieces and finding efficient solutions through algorithms and data structures.",
    toolkit: ["Java", "Algorithms"],
    quote: "Breaking complex problems into simple solutions.",
  },
};

const SkillsDetail = ({ activeId }: SkillsDetailProps) => {
  const skill =
    skillsData[activeId as keyof typeof skillsData] ??
    skillsData.frontend;

  return (
    <div
  className="
    relative
    min-h-[540px]
    w-full
    overflow-hidden
    rounded-[28px]
    border
    border-[#d6b06f]/20
    bg-[#080a08]/90
    p-5
    sm:p-7
  "
>
      {/* ================================================= */}
      {/* BACKGROUND DETAILS */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-72
          w-72
          rounded-full
          bg-[#d6b06f]/3
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-64
          w-64
          rounded-full
          bg-[#3f9c9c]/4
          blur-[100px]
        "
      />

      {/* ================================================= */}
      {/* DECORATIVE CORNERS */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-5
          top-5
          h-12
          w-12
          border-l
          border-t
          border-[#d6b06f]/50
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-5
          right-5
          h-12
          w-12
          border-b
          border-r
          border-[#d6b06f]/50
        "
      />

      {/* ================================================= */}
      {/* PROJECT / SKILL NUMBER */}
      {/* ================================================= */}

      <span
        className="
          pointer-events-none
          absolute
          right-8
          top-5
          select-none
          text-[8rem]
          font-black
          leading-none
          text-[#d6b06f]/5
          lg:text-[10rem]
        "
      >
        {skill.number}
      </span>

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 flex h-full flex-col">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="max-w-[90%] sm:max-w-[80%]">

          {/* Eyebrow */}

          <div className="flex items-center gap-4">

            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.4em]
                text-[#3f9c9c]
              "
            >
              {skill.eyebrow}
            </p>

            <div
              className="
                h-px
                w-20
                bg-linear-to-r
                from-[#3f9c9c]/70
                to-transparent
              "
            />

          </div>

          {/* Title */}

          <h2
            className={`
              ${graffiti.className}
              mt-4
              text-4xl
              sm:text-5xl
              uppercase
              leading-none
              text-[#d6b06f]
            `}
          >
            {skill.title}
          </h2>

          {/* Subtitle */}

          <p
            className="
              mt-2
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#c39a58]
            "
          >
            {skill.subtitle}
          </p>

          {/* Description */}

          <p
            className="
              mt-3
              max-w-[500px]
              text-sm
              leading-6
              text-zinc-400
            "
          >
            {skill.description}
          </p>

        </div>

        {/* ================================================= */}
        {/* VISUAL */}
        {/* ================================================= */}

        <div
  className="
    relative
    mt-5
    h-[200px]
    sm:h-[245px]
    shrink-0
    overflow-hidden
    rounded-2xl
    border
    border-[#3f9c9c]/15
    bg-[#030807]/60
  "
>

          {/* Internal glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-48
              w-48
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#3f9c9c]/5
              blur-[70px]
            "
          />

          {/* Grid */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.04]
              bg-[linear-gradient(rgba(63,156,156,1)_1px,transparent_1px),linear-gradient(90deg,rgba(63,156,156,1)_1px,transparent_1px)]
              bg-size-[35px_35px]
            "
          />

          <div className="relative z-10 h-full w-full">
            <SkillVisual activeId={activeId} />
          </div>

        </div>

        {/* ================================================= */}
        {/* TOOLKIT */}
        {/* ================================================= */}

        <div className="mt-4">

          <div className="flex items-center gap-4">

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-[#3f9c9c]
              "
            >
              Toolkit
            </p>

            <div
              className="
                h-px
                flex-1
                bg-linear-to-r
                from-[#3f9c9c]/25
                to-transparent
              "
            />

          </div>

          <div className="mt-2 flex flex-wrap gap-3">

            {skill.toolkit.map((tool) => (
              <div
                key={tool}
                className="
                  rounded-md
                  border
                  border-[#d6b06f]/20
                  bg-[#d6b06f]/3
                  px-4
                  py-2

                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-[#d6b06f]

                  transition-all
                  duration-300

                  hover:border-[#3f9c9c]/50
                  hover:bg-[#3f9c9c]/5
                  hover:text-[#3f9c9c]
                "
              >
                {tool}
              </div>
            ))}

          </div>

        </div>

        {/* ================================================= */}
        {/* QUOTE */}
        {/* ================================================= */}

        <div
          className="
            relative
            mt-4
            overflow-hidden
            border-l
            border-[#3f9c9c]/60
            py-2
            pl-5
          "
        >

          {/* <span
            className="
              pointer-events-none
              absolute
              -left-1
              -top-5
              text-6xl
              text-[#3f9c9c]/10
            "
          >
            “
          </span> */}

          <p
            className={`
              ${caveat.className}
              relative
              text-lg
              tracking-wide
              text-zinc-300
              lg:text-xl
            `}
          >
            {/* {skill.quote} */}
          </p>

        </div>

      </div>
    </div>
  );
};

export default SkillsDetail;
