"use client";

import { useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

import Landing from "../sections/Landing";
import About from "../sections/About";
import Projects from "../sections/Projects";
import BlenderScene from "../components/BlenderScene";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";

export default function Page() {
  const viewerRef = useRef<any>(null);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (latest) => {
      const viewer = viewerRef.current;

      if (!viewer) return;

      /*
       Landing:
       -32deg 85deg 7.2m

       About:
       -55deg 72deg 6m
      */

      const azimuth = -32 + latest * 58;
      const elevation = 85 - latest * 6;
      const distance = 7.2 - latest * 0.3;

      viewer.cameraOrbit =
        `${azimuth}deg ${elevation}deg ${distance}m`;

      // Keep the target almost fixed
      const targetX = -0.7;
      const targetY = 0.4;

      viewer.cameraTarget =
        `${targetX}m ${targetY}m 0m`;
    }
  );

  return (
    <main className="relative bg-black">
      <div>
        <div className="fixed inset-0 z-0">
          <BlenderScene ref={viewerRef} />
        </div>

        <div className="fixed inset-0 bg-black/20" />

        <div className="relative z-10">
          <Landing />
          <About />
        </div>
      </div>

      <div className="relative bg-[url('/images/bgImage1.png')] bg-cover bg-center bg-repeat">
      <div>
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
        <a
          href="#top"
          className="
          mx-auto
    group
    relative
    mt-10
    flex
    h-[90px]
    w-[40%]
    items-center
    justify-between
    overflow-hidden
    rounded-2xl
    border
    border-[#d6b06f]/20
    bg-[#050706]/70
    px-8
    transition-all
    duration-500
    hover:border-[#d6b06f]/50
    hover:bg-[#d6b06f]/5
    hover:shadow-[0_0_40px_rgba(214,176,111,0.08)]
  "
        >
          {/* Left text */}
          <div className="relative z-10">
            <p
              className="
        text-[9px]
        uppercase
        tracking-[0.3em]
        text-[#3f9c9c]
      "
            >
              End of the journey
            </p>

            <h3
              className="
        mt-1
        text-lg
        font-medium
        uppercase
        tracking-[0.12em]
        text-[#e7dcc6]
        transition-colors
        duration-300
        group-hover:text-[#d6b06f]
      "
            >
              Back to the Beginning
            </h3>
          </div>

          {/* Center line */}
          <div
            className="
      mx-10
      hidden
      h-px
      flex-1
      bg-linear-to-r
      from-[#d6b06f]/10
      via-[#d6b06f]/40
      to-[#3f9c9c]/10
      md:block
    "
          />

          {/* Arrow */}
          <div
            className="
      relative
      z-10
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-[#d6b06f]/30
      text-xl
      text-[#d6b06f]
      transition-all
      duration-500
      group-hover:-translate-y-1
      group-hover:border-[#d6b06f]/70
      group-hover:bg-[#d6b06f]/10
      group-hover:shadow-[0_0_20px_rgba(214,176,111,0.15)]
    "
          >
            ↑
          </div>

          {/* Hover glow */}
          <div
            className="
      pointer-events-none
      absolute
      right-0
      top-1/2
      h-32
      w-32
      -translate-y-1/2
      rounded-full
      bg-[#d6b06f]/0
      blur-[60px]
      transition-all
      duration-500
      group-hover:bg-[#d6b06f]/10
    "
          />
        </a>
      </div>
    </main>
  );
}