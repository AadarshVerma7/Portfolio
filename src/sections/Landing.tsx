"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Navbar from "../components/Navbar";
import { Caveat, Road_Rage, Permanent_Marker } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const graffiti = Permanent_Marker({
  weight: "400",
  subsets: ["latin"]
})

const ceveat = Caveat({
  weight: "400",
  subsets: ["latin"]
})


export default function HeroSection() {
  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.45, 0.8],
    [1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120]
  );

  const blurFilter = useTransform(
    scrollYProgress,
    [0.6, 1],
    ["blur(0px)", "blur(8px)"]
  );

  const traitsOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65],
    [1, 1, 0]
  );

  const traitsY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -220]
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen">

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col p-8">
        <Navbar />

        {/* actual content  */}
        <div
          className="max-w-162.5 text-left mt-30 ml-5"
        >

          <p
            className={`
    mb-2
    font-handwritten
    text-[#3f9c9c]
    text-2xl
    tracking-wider
    uppercase
    ${ceveat.className}
    `}
          >
            HEY, GOOD LOOKIN' — I'M
          </p>

          <h1
            className={`
    ${graffiti.className}
    text-[7rem]
    leading-[0.85]
    uppercase
    bg-linear-to-b
    from-[#f0ddb0]
    via-[#d4bc85]
    to-[#9f8450]
    bg-clip-text
    text-transparent
  `}
          >

            AADARSH
            <br />
            VERMA
          </h1>

          <h2
            className={`
    mt-4
    font-handwritten
    text-[#3f9c9c]
    text-3xl
    tracking-wide
    uppercase
    ${ceveat.className}
    `}
          >
            FULL STACK DEVELOPER
          </h2>

          <p
            className="
    mt-6
    text-[#e8dfc9]
    text-lg
    leading-relaxed
    max-w-125
    font-logo
    "
          >
            I build expressive, performant and
            <br />
            meaningful digital experiences from
            <br />
            concepts to code.
          </p>
          <span className="mt-1 block h-2 w-[11.2rem] bg-[radial-gradient(ellipse_at_center,rgba(214,176,111,0.9)_0%,rgba(214,176,111,0.75)_18%,rgba(214,176,111,0.2)_42%,transparent_72%)] opacity-85 blur-[1px] transition-opacity duration-300 group-hover:opacity-100 sm:w-[13.6rem] lg:w-60" />

          <div className="mt-3 flex gap-6">
            <Link
            href={"#projects"}>
            <button className="comic-btn-primary">
              VIEW MY WORK
              <span>→</span>
            </button>
            </Link>
            <Link
            href={"#contact"}>
            <button className="comic-btn-secondary">
              CONTACT ME
            </button>
            </Link>
          </div>



          <div className="flex gap-6 mt-10">
            <button className="hover:scale-105 duration-300 cursor-pointer">
              <Link
                href={"https://github.com/AadarshVerma7"}
                target="blank"
              >

                <Image
                  src={"/icons/github.svg"}
                  alt="Github"
                  width={30}
                  height={30}
                />
              </Link>
            </button>
            <button className="hover:scale-105 duration-300 cursor-pointer">
              <Link
                href={"https://leetcode.com/u/Aadarsh_Verma7/"}
                target="blank"
              >
                <Image
                  src={"/icons/leetcode.svg"}
                  alt="leetcode"
                  width={30}
                  height={30}

                />
              </Link>
            </button>
            <button className="hover:scale-105 duration-300 cursor-pointer">
              <Link
                href={"https://linkedin.com/in/aadarsh-verma-59323134a"}
                target="blank"
              >

                <Image
                  src={"/icons/linkedin.svg"}
                  alt="Linkedin"
                  width={30}
                  height={30}

                />
              </Link>
            </button>
            <button className="hover:scale-105 duration-300 cursor-pointer">
              <Link
                href={"mailto:work.aadarsh.verma@gmail.com"}
                target="blank"
              >
                <Image
                  src={"/icons/mail.svg"}
                  alt="Mail"
                  width={30}
                  height={30}
                />
              </Link>
            </button>
          </div>
        </div>
        <div
          className="mt-12 flex w-full items-center justify-between px-8"
        >
          {[
            {
              icon: "/icons/thunder.svg",
              title: "PROBLEM",
              subtitle: "SOLVER",
            },
            {
              icon: "/icons/brain.svg",
              title: "SYSTEM",
              subtitle: "BUILDER",
            },
            {
              icon: "/icons/rocket.svg",
              title: "FULL STACK",
              subtitle: "DEVELOPER",
            },
            {
              icon: "/icons/globe.svg",
              title: "OPEN SOURCE",
              subtitle: "LEARNER",
            },
          ].map((item, index) => (
            <React.Fragment key={item.title}>
              <div className="flex items-center gap-5">
                <div className="relative flex h-15 w-15 items-center justify-center">
                  {/* glow circle */}
                  <div className="absolute inset-0 rounded-full border border-[#1f8b87]/60 bg-[#0a1515]/30 shadow-[0_0_20px_rgba(31,139,135,0.25)]" />

                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={38}
                    height={38}
                    className="relative z-10"
                  />
                </div>

                <div>
                  <h3 className="font-logo text-2xl tracking-wide text-[#d4bc85]">
                    {item.title}
                  </h3>

                  <h3 className="font-logo text-2xl tracking-wide text-[#d4bc85]">
                    {item.subtitle}
                  </h3>
                </div>
              </div>

              {index !== 3 && (
                <div className="h-16 w-px bg-linear-to-b from-transparent via-[#1f8b87]/60 to-transparent" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

    </section >
  );
}