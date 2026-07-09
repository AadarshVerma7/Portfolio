"use client";

import { useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

import Landing from "../sections/Landing";
import About from "../sections/About";
import BlenderScene from "../components/BlenderScene";

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
      <div className="fixed inset-0 z-0">
        <BlenderScene ref={viewerRef} />
      </div>

      <div className="fixed inset-0 z-1 bg-black/20" />

      <div className="relative z-10">
        <Landing />
        <About />
      </div>
    </main>
  );
}