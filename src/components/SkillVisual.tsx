"use client";

import { useState } from "react";

/* ========================================================= */
/* TYPES */
/* ========================================================= */

interface SkillVisualProps {
  activeId: string;
}

/* ========================================================= */
/* MAIN COMPONENT */
/* ========================================================= */

const SkillVisual = ({ activeId }: SkillVisualProps) => {
  switch (activeId) {
    case "frontend":
      return <FrontendVisual />;

    case "backend":
      return <BackendVisual />;

    case "database":
      return <DatabaseVisual />;

    case "dsa":
      return <DSAVisual />;

    default:
      return <FrontendVisual />;
  }
};

export default SkillVisual;

/* ========================================================= */
/* FRONTEND VISUAL */
/* ========================================================= */

const FrontendVisual = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative flex h-full min-h-[250px] w-full items-center justify-center">

      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          h-48
          w-48
          rounded-full
          bg-[#3f9c9c]/10
          blur-[70px]
        "
      />

      {/* Browser */}

      <div
        className="
          relative
          w-[72%]
          max-w-[420px]
          overflow-hidden
          rounded-xl
          border
          border-[#d6b06f]/25
          bg-[#060807]/95
          shadow-[0_25px_60px_rgba(0,0,0,0.5)]
          transition-transform
          duration-500
          hover:-translate-y-1
          hover:rotate-[0.5deg]
        "
      >

        {/* Browser Header */}

        <div
          className="
            flex
            h-9
            items-center
            gap-2
            border-b
            border-[#d6b06f]/15
            px-4
          "
        >
          <div className="h-2 w-2 rounded-full bg-[#d6b06f]/40" />
          <div className="h-2 w-2 rounded-full bg-[#d6b06f]/30" />
          <div className="h-2 w-2 rounded-full bg-[#3f9c9c]/60" />

          <div className="ml-3 h-3 flex-1 rounded-full bg-white/5" />
        </div>

        {/* UI */}

        <div className="grid grid-cols-[0.32fr_0.68fr] gap-3 p-4">

          {/* Sidebar */}

          <div
            onMouseEnter={() => setHovered("navigation")}
            onMouseLeave={() => setHovered(null)}
            className={`
              min-h-[135px]
              cursor-pointer
              rounded-md
              border
              p-3
              transition-all
              duration-300

              ${
                hovered === "navigation"
                  ? "border-[#3f9c9c]/60 bg-[#3f9c9c]/10"
                  : "border-[#3f9c9c]/15 bg-[#3f9c9c]/5"
              }
            `}
          >
            <div className="mb-4 h-3 w-8 rounded bg-[#3f9c9c]/50" />

            <div className="space-y-3">
              <div className="h-2 w-full rounded bg-white/10" />
              <div className="h-2 w-[75%] rounded bg-white/10" />
              <div className="h-2 w-[85%] rounded bg-white/10" />
            </div>
          </div>

          {/* Content */}

          <div className="space-y-3">

            {/* Header */}

            <div
              onMouseEnter={() => setHovered("header")}
              onMouseLeave={() => setHovered(null)}
              className={`
                h-6
                w-[65%]
                cursor-pointer
                rounded
                transition-all
                duration-300

                ${
                  hovered === "header"
                    ? "bg-[#d6b06f]/60"
                    : "bg-[#d6b06f]/25"
                }
              `}
            />

            {/* Cards */}

            <div className="grid grid-cols-2 gap-2">

              <div
                onMouseEnter={() => setHovered("component")}
                onMouseLeave={() => setHovered(null)}
                className={`
                  h-14
                  cursor-pointer
                  rounded-md
                  border
                  transition-all
                  duration-300

                  ${
                    hovered === "component"
                      ? "scale-[1.03] border-[#3f9c9c]/60 bg-[#3f9c9c]/10"
                      : "border-[#3f9c9c]/15 bg-[#3f9c9c]/5"
                  }
                `}
              />

              <div
                className="
                  h-14
                  rounded-md
                  border
                  border-[#d6b06f]/10
                  bg-[#d6b06f]/5
                "
              />

            </div>

            <div
              className="
                h-12
                rounded-md
                border
                border-white/5
                bg-white/[0.02]
              "
            />

          </div>

        </div>

      </div>

      {/* Dynamic Label */}

      <div
        className="
          absolute
          bottom-4
          right-6
          rounded-md
          border
          border-[#3f9c9c]/25
          bg-black/50
          px-3
          py-2
          font-mono
          text-[10px]
          uppercase
          tracking-[0.15em]
          text-[#3f9c9c]
        "
      >
        {hovered
          ? `Inspecting: ${hovered}`
          : "<Component />"}
      </div>

    </div>
  );
};

/* ========================================================= */
/* BACKEND VISUAL */
/* ========================================================= */

const BackendVisual = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    { id: "client", label: "CLIENT", x: 15, y: 50 },
    { id: "auth", label: "AUTH", x: 50, y: 15 },
    { id: "api", label: "API", x: 50, y: 50 },
    { id: "server", label: "SERVER", x: 85, y: 50 },
    { id: "socket", label: "SOCKET", x: 50, y: 85 },
  ];

  return (
    <div className="relative h-full min-h-[250px] w-full">

      {/* SVG Connections */}

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <BackendLine
          x1="15"
          y1="50"
          x2="50"
          y2="50"
          active={
            activeNode === "client" ||
            activeNode === "api"
          }
        />

        <BackendLine
          x1="50"
          y1="15"
          x2="50"
          y2="50"
          active={
            activeNode === "auth" ||
            activeNode === "api"
          }
        />

        <BackendLine
          x1="50"
          y1="50"
          x2="85"
          y2="50"
          active={
            activeNode === "server" ||
            activeNode === "api"
          }
        />

        <BackendLine
          x1="50"
          y1="50"
          x2="50"
          y2="85"
          active={
            activeNode === "socket" ||
            activeNode === "api"
          }
        />
      </svg>

      {/* Nodes */}

      {nodes.map((node) => (
        <InteractiveNode
          key={node.id}
          label={node.label}
          x={node.x}
          y={node.y}
          active={activeNode === node.id}
          large={node.id === "api"}
          onEnter={() => setActiveNode(node.id)}
          onLeave={() => setActiveNode(null)}
        />
      ))}

      <VisualStatus>
        {activeNode
          ? `${activeNode.toUpperCase()} CONNECTION`
          : "SYSTEM ARCHITECTURE"}
      </VisualStatus>

    </div>
  );
};

/* ========================================================= */
/* DATABASE VISUAL */
/* ========================================================= */

const DatabaseVisual = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const databases = [
    {
      id: "mongo",
      label: "MONGO",
      x: 15,
      y: 50,
    },
    {
      id: "redis",
      label: "CACHE",
      x: 50,
      y: 15,
    },
    {
      id: "data",
      label: "DATA",
      x: 50,
      y: 50,
    },
    {
      id: "neo4j",
      label: "GRAPH",
      x: 85,
      y: 50,
    },
    {
      id: "postgres",
      label: "SQL",
      x: 50,
      y: 85,
    },
  ];

  return (
    <div className="relative h-full min-h-[250px] w-full">

      {/* Connections */}

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >

        <DatabaseLine
          x1="15"
          y1="50"
          x2="50"
          y2="50"
          active={
            activeNode === "mongo" ||
            activeNode === "data"
          }
        />

        <DatabaseLine
          x1="50"
          y1="15"
          x2="50"
          y2="50"
          active={
            activeNode === "redis" ||
            activeNode === "data"
          }
        />

        <DatabaseLine
          x1="50"
          y1="50"
          x2="85"
          y2="50"
          active={
            activeNode === "neo4j" ||
            activeNode === "data"
          }
        />

        <DatabaseLine
          x1="50"
          y1="50"
          x2="50"
          y2="85"
          active={
            activeNode === "postgres" ||
            activeNode === "data"
          }
        />

      </svg>

      {/* Database Nodes */}

      {databases.map((database) => (
        <DatabaseNode
          key={database.id}
          label={database.label}
          x={database.x}
          y={database.y}
          active={activeNode === database.id}
          large={database.id === "data"}
          onEnter={() => setActiveNode(database.id)}
          onLeave={() => setActiveNode(null)}
        />
      ))}

      <VisualStatus>
        {activeNode
          ? `${activeNode.toUpperCase()} DATA`
          : "DATA ARCHITECTURE"}
      </VisualStatus>

    </div>
  );
};

/* ========================================================= */
/* DSA VISUAL */
/* ========================================================= */

const DSAVisual = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    {
      id: "0",
      label: "0",
      x: 50,
      y: 18,
    },
    {
      id: "A",
      label: "A",
      x: 30,
      y: 50,
    },
    {
      id: "B",
      label: "B",
      x: 70,
      y: 50,
    },
    {
      id: "C",
      label: "C",
      x: 18,
      y: 82,
    },
    {
      id: "D",
      label: "D",
      x: 42,
      y: 82,
    },
    {
      id: "E",
      label: "E",
      x: 82,
      y: 82,
    },
  ];

  const isActive = (from: string, to: string) => {
    if (!activeNode) return false;

    const paths: Record<string, string[]> = {
      "0": ["0"],
      A: ["0", "A"],
      B: ["0", "B"],
      C: ["0", "A", "C"],
      D: ["0", "A", "D"],
      E: ["0", "B", "E"],
    };

    const path = paths[activeNode];

    return (
      path.includes(from) &&
      path.includes(to)
    );
  };

  return (
    <div className="relative h-full min-h-[250px] w-full">

      {/* ================================================= */}
      {/* SVG TREE */}
      {/* ================================================= */}

      <svg
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
        "
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >

        {/* Root -> A */}

        <TreeLine
          x1="50"
          y1="18"
          x2="30"
          y2="50"
          active={isActive("0", "A")}
        />

        {/* Root -> B */}

        <TreeLine
          x1="50"
          y1="18"
          x2="70"
          y2="50"
          active={isActive("0", "B")}
        />

        {/* A -> C */}

        <TreeLine
          x1="30"
          y1="50"
          x2="18"
          y2="82"
          active={isActive("A", "C")}
        />

        {/* A -> D */}

        <TreeLine
          x1="30"
          y1="50"
          x2="42"
          y2="82"
          active={isActive("A", "D")}
        />

        {/* B -> E */}

        <TreeLine
          x1="70"
          y1="50"
          x2="82"
          y2="82"
          active={isActive("B", "E")}
        />

      </svg>

      {/* ================================================= */}
      {/* TREE NODES */}
      {/* ================================================= */}

      {nodes.map((node) => {

        const active =
          activeNode === node.id ||
          (
            activeNode &&
            ["C", "D"].includes(activeNode) &&
            node.id === "A"
          ) ||
          (
            activeNode === "E" &&
            node.id === "B"
          ) ||
          (
            activeNode !== null &&
            node.id === "0"
          );

        return (
          <InteractiveNode
            key={node.id}
            label={node.label}
            x={node.x}
            y={node.y}
            active={Boolean(active)}
            large={node.id === "0"}
            onEnter={() => setActiveNode(node.id)}
            onLeave={() => setActiveNode(null)}
          />
        );
      })}

      {/* ================================================= */}
      {/* STATUS */}
      {/* ================================================= */}

      <VisualStatus>
        {activeNode
          ? `PATH TO NODE ${activeNode}`
          : "HOVER A NODE"}
      </VisualStatus>

    </div>
  );
};

/* ========================================================= */
/* REUSABLE INTERACTIVE NODE */
/* ========================================================= */

interface InteractiveNodeProps {
  label: string;
  x: number;
  y: number;
  active?: boolean;
  large?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
}

const InteractiveNode = ({
  label,
  x,
  y,
  active = false,
  large = false,
  onEnter,
  onLeave,
}: InteractiveNodeProps) => {
  return (
    <button
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
      className={`
        absolute
        z-10
        grid
        -translate-x-1/2
        -translate-y-1/2
        place-items-center

        ${large ? "h-16 w-16" : "h-12 w-12"}

        rounded-full
        border

        font-mono
        text-xs

        transition-all
        duration-300

        ${
          active
            ? `
              scale-110
              border-[#d6b06f]
              bg-[#d6b06f]/15
              text-[#f0ddb0]
              shadow-[0_0_25px_rgba(214,176,111,0.25)]
            `
            : `
              border-[#3f9c9c]/40
              bg-[#06100f]
              text-[#3f9c9c]
              hover:border-[#d6b06f]/70
            `
        }
      `}
    >
      {label}
    </button>
  );
};

/* ========================================================= */
/* DATABASE NODE */
/* ========================================================= */

interface DatabaseNodeProps extends InteractiveNodeProps {}

const DatabaseNode = ({
  label,
  x,
  y,
  active = false,
  large = false,
  onEnter,
  onLeave,
}: DatabaseNodeProps) => {
  return (
    <button
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
      className={`
        absolute
        z-10
        flex
        -translate-x-1/2
        -translate-y-1/2
        flex-col
        items-center
        justify-center

        ${large ? "h-16 w-20" : "h-12 w-16"}

        rounded-[50%/20%]
        border

        text-[9px]
        tracking-[0.12em]

        transition-all
        duration-300

        ${
          active
            ? `
              scale-110
              border-[#d6b06f]
              bg-[#d6b06f]/15
              text-[#f0ddb0]
              shadow-[0_0_25px_rgba(214,176,111,0.2)]
            `
            : `
              border-[#3f9c9c]/35
              bg-[#06100f]
              text-[#3f9c9c]
            `
        }
      `}
    >
      <div className="absolute top-1 h-px w-[65%] bg-current opacity-30" />

      {label}

    </button>
  );
};

/* ========================================================= */
/* TREE LINE */
/* ========================================================= */

interface LineProps {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  active?: boolean;
}

const TreeLine = ({
  x1,
  y1,
  x2,
  y2,
  active = false,
}: LineProps) => {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      vectorEffect="non-scaling-stroke"
      stroke={
        active
          ? "#d6b06f"
          : "rgba(63,156,156,0.3)"
      }
      strokeWidth={active ? "2" : "1"}
      className="transition-all duration-300"
    />
  );
};

/* ========================================================= */
/* BACKEND LINE */
/* ========================================================= */

const BackendLine = (props: LineProps) => (
  <TreeLine {...props} />
);

/* ========================================================= */
/* DATABASE LINE */
/* ========================================================= */

const DatabaseLine = (props: LineProps) => (
  <TreeLine {...props} />
);

/* ========================================================= */
/* STATUS LABEL */
/* ========================================================= */

const VisualStatus = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className="
        absolute
        bottom-3
        right-4
        rounded-full
        border
        border-[#3f9c9c]/20
        bg-black/40
        px-3
        py-1.5

        text-[8px]
        uppercase
        tracking-[0.2em]
        text-[#3f9c9c]/70
      "
    >
      {children}
    </div>
  );
};