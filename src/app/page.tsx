"use client";

import { useRef } from "react";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import Landing from "../sections/Landing";
import About from "../sections/About";
import Projects from "../sections/Projects";
import BlenderScene from "../components/BlenderScene";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import Navbar from "../components/Navbar";

import PortfolioLoader from "../components/PortfolioLoader";
import useAssetPreloader from "../hooks/useAssetPreloader";

/* ========================================================= */
/* TYPES */
/* ========================================================= */

type ViewerElement = HTMLElement & {
  cameraOrbit: string;
  cameraTarget: string;
};

/* ========================================================= */
/* CRITICAL IMAGE ASSETS */
/* ========================================================= */

/*
  IMPORTANT:

  Only add IMAGE assets here.

  Our current useAssetPreloader hook uses:

  new Image()

  So .glb files should NOT be added here.

  We will handle the 3D model separately in Step 4.
*/

const criticalAssets = [
  "/images/bgImage1.png",

  // Add other large/important backgrounds here:
  // "/images/bgImage2.png",
  // "/images/texture1.png",
];

/* ========================================================= */
/* PAGE */
/* ========================================================= */

export default function Page() {
  /* ======================================================= */
  /* 3D MODEL REF */
  /* ======================================================= */

  const viewerRef = useRef<ViewerElement | null>(null);

  /* ======================================================= */
  /* ASSET PRELOADER */
  /* ======================================================= */

  const { progress, isLoaded } =
    useAssetPreloader(criticalAssets);

  /* ======================================================= */
  /* SCROLL PROGRESS */
  /* ======================================================= */

  const { scrollYProgress } = useScroll();

  /* ======================================================= */
  /* 3D CAMERA SCROLL ANIMATION */
  /* ======================================================= */

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (latest) => {
      const viewer = viewerRef.current;

      if (!viewer) return;

      /*
        Initial Camera:

        -32deg 85deg 7.2m
      */

      const azimuth =
        -32 + latest * 58;

      const elevation =
        85 - latest * 6;

      const distance =
        7.2 - latest * 0.3;

      viewer.cameraOrbit =
        `${azimuth}deg ${elevation}deg ${distance}m`;

      /*
        Keep the camera target
        almost fixed.
      */

      const targetX = -0.7;
      const targetY = 0.4;

      viewer.cameraTarget =
        `${targetX}m ${targetY}m 0m`;
    }
  );

  return (
    <>
      {/* ================================================= */}
      {/* PORTFOLIO LOADER */}
      {/* ================================================= */}

      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="portfolio-loader"
            className="
              fixed
              inset-0
              z-[99999]
            "
            initial={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <PortfolioLoader
              progress={progress}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================================================= */}
      {/* MAIN PORTFOLIO */}
      {/* ================================================= */}

      <motion.main
        className="
          relative
          overflow-x-clip
          bg-black
        "
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: isLoaded ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{
          pointerEvents:
            isLoaded
              ? "auto"
              : "none",
        }}
      >
        {/* ================================================= */}
        {/* NAVBAR */}
        {/* ================================================= */}

        <Navbar />

        {/* ================================================= */}
        {/* LANDING + ABOUT + 3D SCENE */}
        {/* ================================================= */}

        <div>
          {/* 3D Model */}

          <div
            className="
              fixed
              inset-0
              z-0
            "
          >
            <BlenderScene
              ref={viewerRef}
            />
          </div>

          {/* Dark Overlay */}

          <div
            className="
              pointer-events-none
              fixed
              inset-0
              bg-black/20
            "
          />

          {/* Landing + About */}

          <div
            className="
              relative
              z-10
            "
          >
            <Landing />

            <About />
          </div>
        </div>

        {/* ================================================= */}
        {/* MAIN BACKGROUND SECTION */}
        {/* ================================================= */}

        <div
          className="
            relative
            bg-[url('/images/bgImage1.png')]
            bg-cover
            bg-center
            bg-repeat
            pb-10
          "
        >
          {/* =============================================== */}
          {/* PAGE SECTIONS */}
          {/* =============================================== */}

          <div>
            <Projects />

            <Skills />

            <Experience />

            <Contact />
          </div>

          {/* =============================================== */}
          {/* BACK TO TOP BUTTON */}
          {/* =============================================== */}

          <button
            type="button"
            onClick={() => {
              document
                .getElementById("home")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
            className="
              group
              relative
              mx-auto
              mt-10
              flex
              min-h-[76px]
              w-[calc(100%-2rem)]
              max-w-2xl
              items-center
              justify-between
              overflow-hidden
              rounded-2xl
              border
              border-[#d6b06f]/20
              bg-[#050706]/70
              px-5
              py-4
              transition-all
              duration-500
              hover:border-[#d6b06f]/50
              hover:bg-[#d6b06f]/5
              hover:shadow-[0_0_40px_rgba(214,176,111,0.08)]
              sm:px-8
            "
          >
            {/* ============================================= */}
            {/* LEFT TEXT */}
            {/* ============================================= */}

            <div className="relative z-10 text-left">
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

            {/* ============================================= */}
            {/* CENTER LINE */}
            {/* ============================================= */}

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

            {/* ============================================= */}
            {/* ARROW */}
            {/* ============================================= */}

            <div
              className="
                relative
                z-10
                flex
                h-11
                w-11
                shrink-0
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

            {/* ============================================= */}
            {/* HOVER GLOW */}
            {/* ============================================= */}

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
          </button>
        </div>
      </motion.main>
    </>
  );
}