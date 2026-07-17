"use client";

import { Caveat, Permanent_Marker } from "next/font/google";
import Image from "next/image";
import ExperienceJourney from "../components/ExperienceJourney";
import ExperienceDetails from "../components/ExpreienceDetails";

const graffiti = Permanent_Marker({
    weight: "400",
    subsets: ["latin"],
});

const caveat = Caveat({
    weight: "400",
    subsets: ["latin"],
});

const Experience = () => {
    return (
        <section
            id="experience"
            className='text-white relative min-h-screen px-25 py-10'>
            {/* Heading section  */}
            <div className="flex justify-between w-full items-center">
                <div className="flex flex-col gap-5">
                    <h1
                        className={`
                            ${graffiti.className}
                         text-7xl
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
                        Experience
                    </h1>
                    <div className="flex items-center gap-3">
                        <p
                            className={`
                                ${caveat.className}
                                text-2xl
                                tracking-wide
                                text-[#3f9c9c]
                                 lg:text-3xl
                                `}
                        >
                            Building in the real world
                        </p>
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
                <div className="flex items-center gap-4 ml-13">
                    {/* ==================== EXPERIENCE ==================== */}
                    <div
                        className="
                            flex
                            h-[100px]
                            w-[220px]
                            shrink-0
                            items-center
                            gap-4
                            rounded-xl
                            border
                             border-[#d6b06f]/20
                             bg-[#050706]/60
                            px-5
                            py-4
                            transition-all
                            duration-300
                            hover:-translate-y-1
                             hover:border-[#d6b06f]/50
                             hover:bg-[#d6b06f]/5
                            "
                    >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                            <Image
                                src="/icons/calender.svg"
                                height={25}
                                width={25}
                                alt="Experience"
                                className="opacity-80"
                            />
                        </div>

                        <div>
                            <h3 className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.12em] text-[#e5c47f]">
                                6 Months
                            </h3>

                            <p className="mt-1 text-[9px] uppercase leading-4 tracking-[0.15em] text-[#d6b06f]/60">
                                Industry Experience
                            </p>
                        </div>
                    </div>

                    {/* ==================== PROJECT ==================== */}
                    <div
                        className="
                         flex
                         h-[100px]
                         w-[220px]
                        shrink-0
                        items-center
                        gap-4
                         rounded-xl
                         border
                         border-[#d6b06f]/20
                         bg-[#050706]/60
                         px-5
                        py-4
                        transition-all
                         duration-300
                        hover:-translate-y-1
                         hover:border-[#d6b06f]/50
                         hover:bg-[#d6b06f]/5
                        "
                    >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                            <Image
                                src="/icons/graph.svg"
                                height={35}
                                width={35}
                                alt="Project"
                                className="opacity-80"
                            />
                        </div>

                        <div>
                            <h3 className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.1em] text-[#e5c47f]">
                                2 Real Project
                            </h3>

                            <p className="mt-1 whitespace-nowrap text-[9px] uppercase leading-4 tracking-[0.15em] text-[#d6b06f]/60">
                                Built & Shipped
                            </p>
                        </div>
                    </div>
                    <a
  href="/resume/aadarsh_resume.pdf"
  download="Aadarsh_Verma_Resume.pdf"
  className="
    group
    relative
    flex
    h-[100px]
    w-[220px]
    shrink-0
    cursor-pointer
    items-center
    gap-4
    overflow-hidden
    rounded-xl
    border
    border-[#d6b06f]/35
    bg-[#050706]/75
    px-5
    py-4

    shadow-[0_0_20px_rgba(214,176,111,0.05)]

    transition-all
    duration-500

    hover:-translate-y-1
    hover:border-[#d6b06f]/80
    hover:bg-[#d6b06f]/8
    hover:shadow-[0_0_30px_rgba(214,176,111,0.18)]
  "
>
  {/* ========================================= */}
  {/* HOVER SHINE EFFECT */}
  {/* ========================================= */}

  <div
    className="
      pointer-events-none
      absolute
      inset-y-0
      -left-[80%]
      w-[45%]
      skew-x-[-20deg]
      bg-linear-to-r
      from-transparent
      via-[#f0ddb0]/10
      to-transparent

      transition-all
      duration-700

      group-hover:left-[130%]
    "
  />

  {/* ========================================= */}
  {/* PDF BADGE */}
  {/* ========================================= */}

  <span
    className="
      absolute
      right-2
      top-2

      rounded
      border
      border-[#3f9c9c]/20
      bg-[#3f9c9c]/5

      px-1.5
      py-0.5

      text-[6px]
      uppercase
      tracking-[0.15em]
      text-[#3f9c9c]/60

      transition-all
      duration-300

      group-hover:border-[#3f9c9c]/50
      group-hover:text-[#3f9c9c]
    "
  >
    PDF
  </span>

  {/* ========================================= */}
  {/* DOWNLOAD ICON */}
  {/* ========================================= */}

  <div
    className="
      relative
      flex
      h-11
      w-11
      shrink-0
      items-center
      justify-center

      rounded-lg
      border
      border-[#d6b06f]/10
      bg-[#d6b06f]/5

      transition-all
      duration-300

      group-hover:border-[#d6b06f]/30
      group-hover:bg-[#d6b06f]/10
      group-hover:shadow-[0_0_15px_rgba(214,176,111,0.12)]
    "
  >
    <Image
      src="/icons/download.svg"
      height={30}
      width={30}
      alt="Download resume"
      className="
        opacity-80
        transition-all
        duration-300

        group-hover:translate-y-1
        group-hover:scale-110
        group-hover:opacity-100
      "
    />
  </div>

  {/* ========================================= */}
  {/* TEXT */}
  {/* ========================================= */}

  <div className="relative overflow-hidden">
    <h3
      className="
        whitespace-nowrap
        text-sm
        font-medium
        uppercase
        tracking-[0.1em]
        text-[#e5c47f]

        transition-colors
        duration-300

        group-hover:text-[#f0ddb0]
      "
    >
      My Resume
    </h3>

    {/* Default Text */}

    <p
      className="
        mt-1
        whitespace-nowrap
        text-[9px]
        uppercase
        leading-4
        tracking-[0.15em]
        text-[#d6b06f]/60

        transition-all
        duration-300

        group-hover:-translate-y-2
        group-hover:opacity-0
      "
    >
      Click to Download
    </p>

    {/* Hover Text */}

    <p
      className="
        absolute
        bottom-0
        left-0

        translate-y-3
        whitespace-nowrap

        text-[9px]
        uppercase
        leading-4
        tracking-[0.15em]
        text-[#3f9c9c]

        opacity-0

        transition-all
        duration-300

        group-hover:translate-y-0
        group-hover:opacity-100
      "
    >
      Download PDF ↓
    </p>
  </div>

  {/* ========================================= */}
  {/* BOTTOM ACCENT LINE */}
  {/* ========================================= */}

  <div
    className="
      absolute
      bottom-0
      left-1/2

      h-px
      w-0

      -translate-x-1/2

      bg-linear-to-r
      from-transparent
      via-[#d6b06f]
      to-transparent

      transition-all
      duration-500

      group-hover:w-[80%]
    "
  />
</a>
                </div>
            </div>
            <div
                className="
                mt-5
                h-px
                w-full
                bg-linear-to-r
             from-[#d6b06f]/30
             via-[#3f9c9c]/15
                to-transparent
                "
            />

            {/* actual experience section  */}
            <div className="flex justify-between items-center mt-10 gap-5">
                <div className="flex-[50%]">
                    <ExperienceJourney />
                </div>
                <ExperienceDetails />
            </div>
        </section>
    )
}

export default Experience
