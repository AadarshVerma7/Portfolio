"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

/* ========================================================= */
/* MAIN SKILLS BENTO */
/* ========================================================= */
/* ========================================================= */
/* LINUX VISUAL */
/* ========================================================= */

const LinuxVisual = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-4">
      {/* Terminal Window */}
      <div
        className="
          w-full
          max-w-[240px]
          overflow-hidden
          rounded-lg
          border
          border-[#3f9c9c]/25
          bg-black/50
          shadow-[0_15px_35px_rgba(0,0,0,0.3)]
        "
      >
        {/* Terminal Header */}
        <div
          className="
            flex
            h-7
            items-center
            gap-1.5
            border-b
            border-white/5
            px-3
          "
        >
          <div className="h-1.5 w-1.5 rounded-full bg-[#d6b06f]/50" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#3f9c9c]/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-white/20" />

          <span className="ml-auto font-mono text-[6px] tracking-widest text-white/20">
            TERMINAL
          </span>
        </div>

        {/* Terminal Body */}
        <div className="space-y-2 p-3 font-mono text-[8px]">
          <p>
            <span className="text-[#3f9c9c]">user@linux</span>
            <span className="text-white/30">:~$ </span>
            <span className="text-white/60">whoami</span>
          </p>

          <p className="text-[#d6b06f]/70">
            developer
          </p>

          <p>
            <span className="text-[#3f9c9c]">user@linux</span>
            <span className="text-white/30">:~$ </span>
            <span className="text-white/60">ls skills/</span>
          </p>

          <div className="flex flex-wrap gap-x-3 gap-y-1 text-white/30">
            <span>bash</span>
            <span>shell</span>
            <span>process</span>
          </div>

          {/* Cursor */}
          <div className="flex items-center">
            <span className="text-[#3f9c9c]">❯</span>

            <span className="ml-1 h-3 w-1 animate-pulse bg-[#d6b06f]/70" />
          </div>
        </div>
      </div>

      {/* Supporting Content */}
      <div className="mt-3 flex items-center gap-2">
        <div className="h-px w-4 bg-[#3f9c9c]/40" />

        <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/25">
          CLI • Bash • Processes
        </span>
      </div>
    </div>
  );
};


/* ========================================================= */
/* COMPUTER NETWORKS VISUAL */
/* ========================================================= */

const NetworksVisual = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-4">
      {/* Network Diagram */}
      <div className="relative flex w-full max-w-[250px] items-center justify-between">
        {/* Client */}
        <NetworkNode label="CLIENT" sublabel="192.168.1.1" />

        {/* Connection 1 */}
        <div className="relative flex flex-1 items-center">
          <div className="h-px w-full bg-[#3f9c9c]/25" />

          <div
            className="
              absolute
              left-1/2
              h-1.5
              w-1.5
              -translate-x-1/2
              rounded-full
              bg-[#d6b06f]
              shadow-[0_0_10px_rgba(214,176,111,0.5)]
            "
          />
        </div>

        {/* Router */}
        <div
          className="
            grid
            h-11
            w-11
            place-items-center
            rounded-full
            border
            border-[#d6b06f]/50
            bg-[#d6b06f]/5
            font-mono
            text-[7px]
            text-[#d6b06f]
          "
        >
          ROUTER
        </div>

        {/* Connection 2 */}
        <div className="relative flex flex-1 items-center">
          <div className="h-px w-full bg-[#3f9c9c]/25" />

          <div
            className="
              absolute
              left-1/2
              h-1.5
              w-1.5
              -translate-x-1/2
              rounded-full
              bg-[#3f9c9c]
              shadow-[0_0_10px_rgba(63,156,156,0.5)]
            "
          />
        </div>

        {/* Server */}
        <NetworkNode label="SERVER" sublabel="443" />
      </div>

      {/* Protocol Tags */}
      <div className="mt-5 flex items-center gap-2">
        {["TCP/IP", "HTTP", "DNS"].map((item) => (
          <span
            key={item}
            className="
              rounded
              border
              border-[#3f9c9c]/15
              bg-[#3f9c9c]/5
              px-2
              py-1
              font-mono
              text-[6px]
              tracking-[0.12em]
              text-[#3f9c9c]/60
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const NetworkNode = ({
  label,
  sublabel,
}: {
  label: string;
  sublabel: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="
          grid
          h-11
          w-11
          place-items-center
          rounded-lg
          border
          border-[#3f9c9c]/30
          bg-[#06100f]
          font-mono
          text-[7px]
          text-[#3f9c9c]
        "
      >
        {label}
      </div>

      <span className="mt-1.5 font-mono text-[5px] text-white/20">
        {sublabel}
      </span>
    </div>
  );
};


/* ========================================================= */
/* OPERATING SYSTEMS VISUAL */
/* ========================================================= */

const OperatingSystemsVisual = () => {
  return (
    <div className="flex flex-1 flex-col justify-center py-5">
      {/* Process Queue Label */}
      <p
        className="
          mb-3
          font-mono
          text-[6px]
          uppercase
          tracking-[0.2em]
          text-white/20
        "
      >
        Process Queue
      </p>

      {/* Processes */}
      <div className="space-y-2">
        <ProcessItem
          process="P1"
          status="RUNNING"
          active
        />

        <ProcessItem
          process="P2"
          status="READY"
        />

        <ProcessItem
          process="P3"
          status="WAITING"
        />
      </div>

      {/* Flow */}
      <div className="my-4 flex items-center justify-center">
        <div className="h-5 w-px bg-linear-to-b from-[#3f9c9c]/10 to-[#d6b06f]/50" />

        <span className="ml-1 text-[8px] text-[#d6b06f]/50">
          ↓
        </span>
      </div>

      {/* CPU */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[150px]
          rounded-lg
          border
          border-[#d6b06f]/40
          bg-[#d6b06f]/5
          p-3
        "
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[8px] tracking-wider text-[#d6b06f]">
            CPU
          </span>

          <span className="font-mono text-[6px] text-[#3f9c9c]/60">
            ACTIVE
          </span>
        </div>

        {/* CPU Load */}
        <div className="mt-3 flex gap-1">
          <div className="h-1 flex-1 rounded-full bg-[#d6b06f]/60" />
          <div className="h-1 flex-1 rounded-full bg-[#d6b06f]/40" />
          <div className="h-1 flex-1 rounded-full bg-[#3f9c9c]/20" />
          <div className="h-1 flex-1 rounded-full bg-white/5" />
        </div>
      </div>

      {/* CPU -> Memory */}
      <div className="my-3 flex items-center justify-center">
        <div className="h-4 w-px bg-[#3f9c9c]/20" />
      </div>

      {/* Memory */}
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[150px]
          items-center
          justify-between
          rounded-md
          border
          border-[#3f9c9c]/20
          bg-[#3f9c9c]/[0.03]
          px-3
          py-2
        "
      >
        <span className="font-mono text-[7px] text-[#3f9c9c]/70">
          MEMORY
        </span>

        <div className="flex gap-1">
          <div className="h-2 w-3 bg-[#3f9c9c]/40" />
          <div className="h-2 w-3 bg-[#3f9c9c]/30" />
          <div className="h-2 w-3 bg-[#d6b06f]/30" />
          <div className="h-2 w-3 bg-white/5" />
        </div>
      </div>

      {/* Concepts */}
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {["PROCESS", "THREADS", "MEMORY"].map((item) => (
          <span
            key={item}
            className="
              font-mono
              text-[6px]
              tracking-[0.12em]
              text-white/20
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProcessItem = ({
  process,
  status,
  active = false,
}: {
  process: string;
  status: string;
  active?: boolean;
}) => {
  return (
    <div
      className={`
        flex
        items-center
        justify-between
        rounded-md
        border
        px-3
        py-2

        ${
          active
            ? `
              border-[#d6b06f]/40
              bg-[#d6b06f]/5
            `
            : `
              border-[#3f9c9c]/15
              bg-[#3f9c9c]/[0.02]
            `
        }
      `}
    >
      <div className="flex items-center gap-2">
        <div
          className={`
            h-1.5
            w-1.5
            rounded-full

            ${
              active
                ? "bg-[#d6b06f]"
                : "bg-[#3f9c9c]/40"
            }
          `}
        />

        <span
          className={`
            font-mono
            text-[7px]

            ${
              active
                ? "text-[#d6b06f]"
                : "text-[#3f9c9c]/60"
            }
          `}
        >
          {process}
        </span>
      </div>

      <span className="font-mono text-[5px] tracking-wider text-white/20">
        {status}
      </span>
    </div>
  );
};


/* ========================================================= */
/* DBMS VISUAL */
/* ========================================================= */

const DBMSVisual = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-4">
      {/* Database Relationship */}
      <div className="flex w-full max-w-[340px] items-center justify-center">
        <DatabaseTable
          name="USERS"
          fields={["id", "name", "email"]}
        />

        {/* Relationship */}
        <div className="relative flex flex-1 items-center">
          <div className="h-px w-full bg-[#3f9c9c]/25" />

          <span
            className="
              absolute
              left-1/2
              -translate-x-1/2
              bg-[#070908]
              px-2
              font-mono
              text-[6px]
              text-[#d6b06f]/50
            "
          >
            1 : N
          </span>
        </div>

        <DatabaseTable
          name="PROJECTS"
          fields={["id", "user_id", "title"]}
        />
      </div>

      {/* Query */}
      <div
        className="
          mt-4
          w-full
          max-w-[280px]
          rounded-md
          border
          border-[#3f9c9c]/15
          bg-black/30
          px-3
          py-2
          font-mono
          text-[7px]
        "
      >
        <span className="text-[#d6b06f]/70">
          SELECT
        </span>

        <span className="text-white/30">
          {" * FROM "}
        </span>

        <span className="text-[#3f9c9c]/70">
          projects
        </span>
      </div>

      {/* Concepts */}
      <div className="mt-3 flex gap-3">
        {["SQL", "ACID", "INDEXING"].map((item) => (
          <span
            key={item}
            className="font-mono text-[6px] tracking-[0.15em] text-white/20"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const DatabaseTable = ({
  name,
  fields,
}: {
  name: string;
  fields: string[];
}) => {
  return (
    <div
      className="
        min-w-[90px]
        overflow-hidden
        rounded-md
        border
        border-[#3f9c9c]/25
        bg-[#06100f]
      "
    >
      <div
        className="
          border-b
          border-[#3f9c9c]/15
          bg-[#3f9c9c]/5
          px-3
          py-2
        "
      >
        <p className="font-mono text-[7px] tracking-wider text-[#3f9c9c]">
          {name}
        </p>
      </div>

      <div className="space-y-1.5 px-3 py-2">
        {fields.map((field) => (
          <div
            key={field}
            className="flex items-center gap-2"
          >
            <div className="h-1 w-1 rounded-full bg-[#d6b06f]/40" />

            <span className="font-mono text-[6px] text-white/25">
              {field}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};


/* ========================================================= */
/* SYSTEM DESIGN VISUAL */
/* ========================================================= */

const SystemDesignVisual = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-4">
      {/* Architecture */}
      <div className="flex w-full max-w-[360px] items-center justify-center">
        <ArchitectureNode label="CLIENT" />

        <ArchitectureConnector />

        <ArchitectureNode
          label="LOAD BALANCER"
          active
          wide
        />

        <ArchitectureConnector />

        <ArchitectureNode label="API" />

        <ArchitectureConnector />

        {/* Data Layer */}
        <div className="flex flex-col gap-2">
          <ArchitectureNode
            label="CACHE"
            small
          />

          <ArchitectureNode
            label="DB"
            small
          />
        </div>
      </div>

      {/* Flow label */}
      <div className="mt-4 flex items-center gap-3">
        <span className="font-mono text-[6px] tracking-wider text-[#3f9c9c]/50">
          REQUEST
        </span>

        <div className="h-px w-8 bg-linear-to-r from-[#3f9c9c]/20 to-[#d6b06f]/40" />

        <span className="font-mono text-[6px] tracking-wider text-[#d6b06f]/50">
          RESPONSE
        </span>
      </div>

      {/* Concepts */}
      <div className="mt-3 flex gap-3">
        {["SCALABILITY", "CACHING", "RELIABILITY"].map((item) => (
          <span
            key={item}
            className="font-mono text-[6px] tracking-[0.12em] text-white/20"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const ArchitectureNode = ({
  label,
  active = false,
  small = false,
  wide = false,
}: {
  label: string;
  active?: boolean;
  small?: boolean;
  wide?: boolean;
}) => {
  return (
    <div
      className={`
        grid
        place-items-center
        rounded-md
        border
        px-2
        text-center
        font-mono
        text-[6px]
        tracking-[0.08em]

        ${small ? "h-7 min-w-[45px]" : "h-10"}
        ${wide ? "min-w-[75px]" : "min-w-[50px]"}

        ${
          active
            ? `
              border-[#d6b06f]/50
              bg-[#d6b06f]/5
              text-[#d6b06f]
              shadow-[0_0_20px_rgba(214,176,111,0.06)]
            `
            : `
              border-[#3f9c9c]/25
              bg-[#3f9c9c]/[0.03]
              text-[#3f9c9c]/70
            `
        }
      `}
    >
      {label}
    </div>
  );
};

const ArchitectureConnector = () => {
  return (
    <div className="flex min-w-[20px] flex-1 items-center">
      <div className="h-px flex-1 bg-[#3f9c9c]/20" />

      <span className="text-[7px] text-[#d6b06f]/40">
        ›
      </span>
    </div>
  );
};

const SkillsBento = () => {
  return (
    <div
  className="
    grid
    h-[540px]
    w-full
    grid-cols-6
    grid-rows-2
    gap-2.5
  "
>
      {/* ============================================= */}
      {/* CARD 1 - LINUX */}
      {/* ============================================= */}

      <BentoCard className="col-span-2">
        <CardLabel>01 / SYSTEMS</CardLabel>

        <LinuxVisual />

        <CardTitle>Linux</CardTitle>
      </BentoCard>

      {/* ============================================= */}
      {/* CARD 2 - COMPUTER NETWORKS */}
      {/* ============================================= */}

      <BentoCard className="col-span-2">
        <CardLabel>02 / NETWORKS</CardLabel>

        <NetworksVisual />

        <CardTitle>Computer Networks</CardTitle>
      </BentoCard>

      {/* ============================================= */}
      {/* CARD 3 - OPERATING SYSTEMS */}
      {/* ============================================= */}

      <BentoCard className="col-span-2 row-span-2">
        <CardLabel>03 / SYSTEMS</CardLabel>

        <OperatingSystemsVisual />

        <CardTitle>Operating Systems</CardTitle>
      </BentoCard>

      {/* ============================================= */}
      {/* CARD 4 - DBMS */}
      {/* ============================================= */}

      <BentoCard className="col-span-2">
        <CardLabel>04 / DATA</CardLabel>

        <DBMSVisual />

        <CardTitle>DBMS</CardTitle>
      </BentoCard>

      {/* ============================================= */}
      {/* CARD 5 - SYSTEM DESIGN */}
      {/* ============================================= */}

      <BentoCard className="col-span-2">
        <CardLabel>05 / ARCHITECTURE</CardLabel>

        <SystemDesignVisual />

        <CardTitle>System Design</CardTitle>
      </BentoCard>
    </div>
  );
};
export default SkillsBento;

/* ========================================================= */
/* REUSABLE BENTO CARD */
/* ========================================================= */

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
}

const BentoCard = ({
  children,
  className = "",
}: BentoCardProps) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-xl
        border
        border-[#d6b06f]/15
        bg-[#070908]/90
        p-4
        shadow-[0_15px_40px_rgba(0,0,0,0.25)]
        ${className}
      `}
    >

      {/* ============================================= */}
      {/* BACKGROUND TEXTURE */}
      {/* ============================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)]
          bg-size-[18px_18px]
        "
      />

      {/* ============================================= */}
      {/* STATIC BACKGROUND GLOW */}
      {/* ============================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-[#3f9c9c]/5
          blur-[70px]
        "
      />

      {/* ============================================= */}
      {/* MOUSE FOLLOWING SPOTLIGHT */}
      {/* ============================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          transition-opacity
          duration-300
        "
        style={{
          opacity: isHovered ? 1 : 0,

          background: `
            radial-gradient(
              220px circle at
              ${mousePosition.x}px
              ${mousePosition.y}px,
              rgba(214,176,111,0.12),
              rgba(63,156,156,0.05) 35%,
              transparent 70%
            )
          `,
        }}
      />

      {/* ============================================= */}
      {/* HOVER BORDER GLOW */}
      {/* ============================================= */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          rounded-xl
          border
          transition-all
          duration-300

          ${
            isHovered
              ? `
                border-[#d6b06f]/35
                shadow-[inset_0_0_25px_rgba(214,176,111,0.04)]
              `
              : `
                border-transparent
              `
          }
        `}
      />

      {/* ============================================= */}
      {/* TOP DECORATIVE LINE */}
      {/* ============================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-5
          top-0
          h-px
          w-16
          bg-linear-to-r
          from-[#d6b06f]/70
          to-transparent
          transition-all
          duration-500
          group-hover:w-28
        "
      />

      {/* ============================================= */}
      {/* CORNER DECORATION */}
      {/* ============================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-3
          right-3
          h-5
          w-5
          border-b
          border-r
          border-[#3f9c9c]/20
          transition-all
          duration-300
          group-hover:border-[#3f9c9c]/50
        "
      />

      {/* ============================================= */}
      {/* ACTUAL CARD CONTENT */}
      {/* ============================================= */}

      <div className="relative z-10 flex h-full flex-col">
        {children}
      </div>

    </motion.div>
  );
};

/* ========================================================= */
/* CARD LABEL */
/* ========================================================= */

const CardLabel = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <p
      className="
        font-mono
        text-[9px]
        uppercase
        tracking-[0.22em]
        text-[#3f9c9c]/70
      "
    >
      {children}
    </p>
  );
};

/* ========================================================= */
/* CARD TITLE */
/* ========================================================= */

const CardTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <h3
      className="
        mt-auto
        font-logo
        text-lg
        uppercase
        tracking-[0.08em]
        text-[#d6b06f]
        transition-colors
        duration-300
        group-hover:text-[#f0ddb0]
      "
    >
      {children}
    </h3>
  );
};