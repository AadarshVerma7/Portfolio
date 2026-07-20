"use client";

import { useState } from "react";
import SkillsDock, {
  defaultSkillsDockItems,
} from "../components/SkillsDock";
import { Caveat, Permanent_Marker } from "next/font/google";
import SkillsBento from "../components/SkillsBento";
import SkillsDetail from "../components/SkillsDetail";

const graffiti = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

const SkillsSection = () => {
  const [activeId, setActiveId] = useState<string>("frontend");

  return (
    <section
      id="skills"
      className="
        relative
        min-h-screen
        px-4
        py-16
        sm:px-8
        sm:py-20
        lg:px-16
        xl:px-24
      "
    >
      <div className="mx-auto w-full max-w-[1500px]">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          {/* ============================================= */}
          {/* TITLE */}
          {/* ============================================= */}

          <div className="relative">

            <h1
              className={`
                ${graffiti.className}
                text-5xl
                sm:text-6xl
                leading-[0.8]
                uppercase

                bg-linear-to-b
                from-[#f0ddb0]
                via-[#d4bc85]
                to-[#9f8450]

                bg-clip-text
                text-transparent

                lg:text-6xl
                xl:text-8xl
              `}
            >
              Skills
            </h1>

            {/* Subtitle */}

            <div className="mt-4 flex items-center gap-4">

              <p
                className={`
                  ${caveat.className}
                  text-2xl
                  tracking-wide
                  text-[#3f9c9c]
                  lg:text-3xl
                `}
              >
                Tools. Tech. Mindset.
              </p>

              {/* Decorative Line */}

              <div
                className="
                  hidden
                  h-px
                  w-28
                  bg-linear-to-r
                  from-[#3f9c9c]
                  to-transparent
                  sm:block
                "
              />

            </div>

          </div>

          {/* ============================================= */}
          {/* SKILLS DOCK */}
          {/* ============================================= */}

          <div
            className="
              flex
              items-center
              justify-start
              lg:justify-end
              mb-5
            "
          >
            <SkillsDock
              items={defaultSkillsDockItems}
              activeId={activeId}
              onSelect={setActiveId}
              width="auto"
              height="auto"
              itemWidth={56}
              itemHeight={56}
              iconSize={34}
              gap={10}
            />
          </div>

        </div>

        {/* ================================================= */}
        {/* DECORATIVE SEPARATOR */}
        {/* ================================================= */}

        <div
          className="
            mt-10
            h-px
            w-full
            bg-linear-to-r
            from-[#d6b06f]/30
            via-[#3f9c9c]/15
            to-transparent
          "
        />

        {/* ================================================= */}
        {/* MAIN CONTENT */}
        {/* ================================================= */}

        <div
          className="
            mt-8
            sm:mt-12
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-[1.1fr_0.9fr]
            xl:gap-16
          "
        >

          {/* ============================================= */}
          {/* LEFT — STATIC MAGIC BENTO */}
          {/* ============================================= */}

          <div className="min-w-0">

            <SkillsBento />

          </div>

          {/* ============================================= */}
          {/* RIGHT — DYNAMIC SKILL DETAIL */}
          {/* ============================================= */}

          <div className="min-w-0">

            <SkillsDetail activeId={activeId} />

          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
