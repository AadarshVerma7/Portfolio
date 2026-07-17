"use client";

import React, { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  LayoutTemplate,
  Server,
  Database,
  Binary,
} from "lucide-react";

export interface DockItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface SkillsDockProps {
  items: DockItem[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
  width?: string | number;
  height?: string |number;
  itemWidth?: number;
  itemHeight?: number;
  iconSize?: number;
  gap?: number;
}

export const defaultSkillsDockItems: DockItem[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: LayoutTemplate,
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
  },
  {
    id: "dsa",
    label: "Data Structures",
    icon: Binary,
  },
];

const SkillsDock: React.FC<SkillsDockProps> = ({
  items,
  activeId,
  onSelect,
  className = "",
  width = "auto",
  height = "auto",
  itemWidth = 64,
  itemHeight = 64,
  iconSize = 24,
  gap = 16,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <nav
      role="tablist"
      aria-label="Skill categories"
      className={`relative z-20 flex items-start overflow-visible ${className}`}
      style={{
        width,
        height,
        gap,
      }}
    >
      {items.map((item) => {
        const Icon = item.icon;

        const isActive = activeId === item.id;
        const isHovered = hoveredId === item.id;

        return (
          <div
            key={item.id}
            className="relative flex flex-col items-center overflow-visible"
            style={{
              width: itemWidth,
              paddingTop: 42, // Reserve space for tooltip
            }}
          >
            {/* Tooltip */}
            <span
              className={`
                pointer-events-none
                absolute
                left-1/2
                top-0
                z-50
                -translate-x-1/2
                whitespace-nowrap
                rounded-full
                border
                border-[#d6b06f]/25
                bg-[#0d0d0c]
                px-4
                py-1.5
                text-xs
                uppercase
                tracking-[0.16em]
                text-[#e7dcc6]
                shadow-[0_12px_30px_rgba(0,0,0,0.45)]
                transition-all
                duration-300
                ${
                  isHovered
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }
              `}
            >
              {item.label}

              <span
                className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-[#d6b06f]/25 bg-[#0d0d0c]"
                aria-hidden="true"
              />
            </span>

            {/* Button */}
            <button
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={item.label}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onFocus={() => setHoveredId(item.id)}
              onBlur={() => setHoveredId(null)}
              onClick={() => onSelect(item.id)}
              className={`
                relative
                z-10
                flex
                items-center
                justify-center
                rounded-2xl
                border
                overflow-visible
                transition-all
                duration-300
                ease-out
                cursor-pointer
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#3f9c9c]/60
                ${
                  isHovered
                    ? "-translate-y-1 scale-105"
                    : "translate-y-0 scale-100"
                }
              `}
              style={{
                width: itemWidth,
                height: itemHeight,
                borderColor: isActive
                  ? "#d6b06f"
                  : "rgba(214,176,111,0.15)",
                background: isActive
                  ? "rgba(214,176,111,0.08)"
                  : isHovered
                  ? "rgba(214,176,111,0.04)"
                  : "transparent",
                boxShadow: isActive
                  ? "0 0 18px rgba(214,176,111,0.12)"
                  : "none",
              }}
            >
              <Icon
                size={item.id === "dsa" ? iconSize - 3 : iconSize}
                strokeWidth={1.75}
                color={
                  isActive
                    ? "#d6b06f"
                    : isHovered
                    ? "#f1e6d0"
                    : "#e7dcc6"
                }
              />
            </button>

            {/* Active Indicator */}
            <span
              className={`
                mt-3
                h-1.5
                w-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  isActive
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-50"
                }
              `}
              style={{
                backgroundColor: "#d6b06f",
              }}
            />
          </div>
        );
      })}
    </nav>
  );
};

export default SkillsDock;