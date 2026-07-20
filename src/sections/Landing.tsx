"use client";

import { Caveat, Permanent_Marker } from "next/font/google";
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
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-x-clip">

      {/* Content */}
      <div
      className="relative z-10 flex min-h-screen flex-col px-5 pb-8 pt-28 sm:p-8 sm:pt-32">
        {/* actual content  */}
        <div
          className="mt-8 max-w-162.5 text-left sm:ml-5 sm:mt-16"
        >

          <p
            className={`
    mb-2
    font-handwritten
    text-[#3f9c9c]
    text-lg
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
    text-[3.8rem]
    leading-[0.85]
    uppercase
    bg-linear-to-b
    from-[#f0ddb0]
    via-[#d4bc85]
    to-[#9f8450]
    bg-clip-text
    text-transparent
    sm:text-[5.5rem]
    lg:text-[7rem]
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
    text-2xl
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
    text-base
    sm:text-lg
    leading-relaxed
    max-w-125
    font-logo
    "
          >
            I build expressive, performant and
            <span className="hidden sm:inline"><br /></span>
            meaningful digital experiences from
            <span className="hidden sm:inline"><br /></span>
            concepts to code.
          </p>
          <span className="mt-1 block h-2 w-[11.2rem] bg-[radial-gradient(ellipse_at_center,rgba(214,176,111,0.9)_0%,rgba(214,176,111,0.75)_18%,rgba(214,176,111,0.2)_42%,transparent_72%)] opacity-85 blur-[1px] transition-opacity duration-300 group-hover:opacity-100 sm:w-[13.6rem] lg:w-60" />

          <div className="mt-5 flex flex-wrap gap-3 sm:gap-6">
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
          className="mt-10 hidden w-full grid-cols-1 gap-4 px-0 sm:grid sm:grid-cols-2 sm:px-4 lg:mt-12 lg:grid-cols-4 lg:gap-6 lg:px-8"
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
          ].map((item) => (
            <React.Fragment key={item.title}>
              <div className="flex items-center gap-3 sm:gap-5">
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
                  <h3 className="font-logo text-lg tracking-wide text-[#d4bc85] sm:text-xl lg:text-2xl">
                    {item.title}
                  </h3>

                  <h3 className="font-logo text-lg tracking-wide text-[#d4bc85] sm:text-xl lg:text-2xl">
                    {item.subtitle}
                  </h3>
                </div>
              </div>

            </React.Fragment>
          ))}
        </div>
      </div>

    </section >
  );
}
