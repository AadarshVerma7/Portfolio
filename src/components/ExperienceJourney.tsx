"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  GraduationCap,
  CalendarDays,
  MapPin,
  BookOpen,
  Code2,
} from "lucide-react";
import Image from "next/image";

export type JourneyType = "internship" | "education";

interface ExperienceJourneyProps {
  onSelect?: (type: JourneyType) => void;
}

const ExperienceJourney = ({ onSelect }: ExperienceJourneyProps) => {
  const [activeJourney, setActiveJourney] =
    useState<JourneyType>("education");

  const handleSelect = (type: JourneyType) => {
    setActiveJourney(type);
    onSelect?.(type);
  };

  return (
    <div
      className="
        relative
        h-[520px]
        w-full
        overflow-hidden
        rounded-[28px]
        border
        border-[#d6b06f]/20
        bg-[#050807]/75
        p-7
        shadow-[0_25px_70px_rgba(0,0,0,0.35)]
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
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-[#3f9c9c]/5
          blur-[90px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-20
          h-72
          w-72
          rounded-full
          bg-[#d6b06f]/5
          blur-[100px]
        "
      />

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="relative z-10 flex items-center gap-4">
        <p
          className="
            whitespace-nowrap
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-[#3f9c9c]
          "
        >
          My Journey
        </p>

        <div
          className="
            h-px
            flex-1
            bg-linear-to-r
            from-[#3f9c9c]/50
            to-transparent
          "
        />
      </div>

      {/* ================================================= */}
      {/* JOURNEY CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 ml-3 mt-10">
        {/* Vertical Timeline */}

        <div
          className="
            absolute
            left-[19px]
            top-5
            h-[190px]
            w-px
            bg-linear-to-b
            from-[#d6b06f]/70
            via-[#3f9c9c]/40
            to-[#3f9c9c]/10
          "
        />

        {/* ================================================= */}
        {/* INTERNSHIP */}
        {/* ================================================= */}

        <div className="relative flex items-start gap-6">
          {/* Node */}

          <button
            type="button"
            onClick={() => handleSelect("internship")}
            className={`
              relative
              z-20
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              bg-[#08100e]
              transition-all
              duration-300

              ${activeJourney === "internship"
                ? `
                    scale-105
                    border-[#d6b06f]
                    text-[#d6b06f]
                    shadow-[0_0_25px_rgba(214,176,111,0.25)]
                  `
                : `
                    border-[#d6b06f]/30
                    text-[#d6b06f]/60
                    hover:scale-105
                    hover:border-[#d6b06f]/70
                  `
              }
            `}
          >
            <BriefcaseBusiness size={17} strokeWidth={1.5} />
          </button>

          {/* Internship Card */}

          <button
            type="button"
            onClick={() => handleSelect("internship")}
            className={`
              group
              relative
              flex-1
              rounded-xl
              border
              px-5
              py-4
              text-left
              transition-all
              duration-300

              ${activeJourney === "internship"
                ? `
                    border-[#d6b06f]/60
                    bg-[#d6b06f]/[0.04]
                    shadow-[0_0_30px_rgba(214,176,111,0.10)]
                  `
                : `
                    border-[#d6b06f]/15
                    bg-[#0a0d0b]/50
                    hover:-translate-y-0.5
                    hover:border-[#d6b06f]/40
                    hover:bg-[#d6b06f]/[0.02]
                  `
              }
            `}
          >
            {/* Connection Line */}

            <div
              className="
                absolute
                -left-6
                top-5
                h-px
                w-6
                bg-linear-to-r
                from-[#d6b06f]/50
                to-[#d6b06f]/20
              "
            />

            {/* Connection Dot */}

            {activeJourney === "internship" && (
              <div
                className="
                  absolute
                  -left-[27px]
                  top-[17px]
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#d6b06f]
                  shadow-[0_0_10px_rgba(214,176,111,0.8)]
                "
              />
            )}

            <h3
              className="
                text-base
                font-medium
                tracking-wide
                text-[#f0ddb0]
              "
            >
              Full Stack Developer Intern
            </h3>

            <p
              className="
                mt-1
                text-sm
                tracking-wide
                text-[#3f9c9c]
              "
            >
              Bitwise Learn
            </p>

            <div
              className="
                mt-2
                flex
                flex-wrap
                items-center
                gap-2
                text-xs
                tracking-wide
                text-zinc-400
              "
            >
              <span>Dec 2025 – June 2026</span>

              <span className="text-[#d6b06f]/50">
                •
              </span>

              <span>6 Months</span>
            </div>
          </button>
        </div>

        {/* ================================================= */}
        {/* EDUCATION */}
        {/* ================================================= */}

        <div className="relative mt-12 flex items-center gap-6">
          {/* Node */}

          <button
            type="button"
            onClick={() => handleSelect("education")}
            className={`
              relative
              z-20
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              bg-[#08100e]
              transition-all
              duration-300

              ${activeJourney === "education"
                ? `
                    scale-105
                    border-[#3f9c9c]
                    text-[#3f9c9c]
                    shadow-[0_0_25px_rgba(63,156,156,0.25)]
                  `
                : `
                    border-[#3f9c9c]/30
                    text-[#3f9c9c]/60
                    hover:scale-105
                    hover:border-[#3f9c9c]/70
                  `
              }
            `}
          >
            <GraduationCap size={18} strokeWidth={1.5} />
          </button>

          {/* Education Card */}

          <button
            type="button"
            onClick={() => handleSelect("education")}
            className={`
              group
              flex
              flex-1
              items-center
              justify-between
              gap-4
              rounded-xl
              border
              px-4
              py-3
              text-left
              transition-all
              duration-300

              ${activeJourney === "education"
                ? `
                    border-[#3f9c9c]/40
                    bg-[#3f9c9c]/[0.04]
                    shadow-[0_0_25px_rgba(63,156,156,0.08)]
                  `
                : `
                    border-transparent
                    hover:border-[#3f9c9c]/15
                    hover:bg-[#3f9c9c]/[0.02]
                  `
              }
            `}
          >
            <div>
              <h3
                className="
                  text-base
                  font-medium
                  tracking-wide
                  text-[#e7dcc6]
                  transition-colors
                  duration-300
                  group-hover:text-[#f0ddb0]
                "
              >
                B.Tech – Computer Science
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  tracking-wide
                  text-zinc-500
                "
              >
                2024 – 2028
              </p>
            </div>

            <span
              className="
                shrink-0
                rounded-full
                border
                border-[#3f9c9c]/25
                bg-[#3f9c9c]/5
                px-3
                py-1.5
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-[#3f9c9c]
              "
            >
              Ongoing
            </span>
          </button>
        </div>
      </div>

      {/* ================================================= */}
      {/* BOTTOM SELECTED JOURNEY PREVIEW */}
      {/* ================================================= */}

      {/* ================================================= */}
      {/* BOTTOM SELECTED JOURNEY PREVIEW */}
      {/* ================================================= */}

      <div
        className="
    absolute
    bottom-7
    left-10
    right-10
    z-10
  "
      >
        <div
          className="
      flex
      min-h-[95px]
      items-center
      gap-4
      rounded-xl
      border
      border-[#d6b06f]/15
      bg-black/25
      px-5
      py-4
      transition-all
      duration-300
    "
        >
          {/* Icon */}

          <div
            className="
        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center
        rounded-lg
        border
        border-[#3f9c9c]/25
        bg-[#3f9c9c]/5
        text-[#3f9c9c]
      "
          >
            {activeJourney === "internship" ? (
              <Image 
                src={"/images/Bitwise_Logo.png"}
                alt="Bitwise_Logo"
                height={18}
                width={18}
              />
            ) : (
              <Image 
                src={"/images/Chitkara_Logo.png"}
                alt="Chitkara_Logo"
                height={18}
                width={18}
              />
            )}
          </div>

          {/* Main Content */}

          <div className="min-w-0 flex-1">
            <p
              className="
          text-[8px]
          uppercase
          tracking-[0.3em]
          text-[#3f9c9c]
        "
            >
              {activeJourney === "internship"
                ? "Professional Experience"
                : "Academic Journey"}
            </p>

            {/* Internship Info */}

            {activeJourney === "internship" && (
              <>
                <p
                  className="
              mt-2
              text-sm
              font-medium
              tracking-wide
              text-[#e7dcc6]
            "
                >
                  Full Stack Developer Intern
                </p>

                <p
                  className="
              mt-1
              text-xs
              tracking-wide
              text-zinc-500
            "
                >
                  Bitwise Learn
                </p>
              </>
            )}

            {/* Education Info */}

            {activeJourney === "education" && (
              <>
                <p
                  className="
              mt-2
              text-sm
              font-medium
              tracking-wide
              text-[#e7dcc6]
            "
                >
                  Chitkara University
                </p>

                <p
                  className="
              mt-1
              text-xs
              tracking-wide
              text-zinc-500
            "
                >
                  Rajpura, Punjab <br /> Computer Science
                </p>
              </>
            )}
          </div>

          {/* Right Meta */}

          <div
            className="
        hidden
        shrink-0
        flex-col
        items-end
        gap-2
        sm:flex
      "
          >
            {activeJourney === "internship" ? (
              <>
                <div
                  className="
              flex
              items-center
              gap-2
              text-[9px]
              uppercase
              tracking-[0.15em]
              text-[#d6b06f]/70
            "
                >
                  <MapPin size={11} />
                  Remote
                </div>

                <p className="text-[10px] tracking-wide text-zinc-600">
                  Dec 2025 — June 2026
                </p>
              </>
            ) : (
              <>
                <div
                  className="
              flex
              items-center
              gap-2
              text-[9px]
              uppercase
              tracking-[0.15em]
              text-[#3f9c9c]
            "
                >
                  <CalendarDays size={11} />
                  Ongoing
                </div>

                <p className="text-[10px] tracking-wide text-zinc-600">
                  2024 — 2028
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceJourney;