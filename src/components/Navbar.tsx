import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
const Navbar = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/music/bgMusic.mp3");

    return () => {
      audioRef.current?.pause()
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying((prev) => !prev);
  };


  const navItems = [
    { label: "Home", href: "#home", active: true },
    { label: "About", href: "#about", active: false },
    { label: "Projects", href: "#projects", active: false },
    { label: "Skills", href: "#skills", active: false },
    { label: "Experience", href: "#experience", active: false },
    { label: "Contact", href: "#contact", active: false },
  ];

  return (
    
      <nav className="fixed left-0 top-0 z-50 w-full px-6 py-4 sm:px-10 lg:px-14">
        <div className="flex items-start justify-between gap-6">
          <Link href="#home" className="group shrink-0">
            <span className="font-logo block text-[2rem] leading-none tracking-[0.02em] text-[#d6b06f] drop-shadow-[0_2px_0_rgba(0,0,0,0.45)] sm:text-[2.7rem] lg:text-[2.5rem]">
              Aadarsh Verma
            </span>
            <span className="mt-1 block h-4 w-[11.2rem] bg-[radial-gradient(ellipse_at_center,rgba(214,176,111,0.9)_0%,rgba(214,176,111,0.75)_18%,rgba(214,176,111,0.2)_42%,transparent_72%)] opacity-85 blur-[1px] transition-opacity duration-300 group-hover:opacity-100 sm:w-[13.6rem] lg:w-60" />
          </Link>

          <div className="flex flex-1 items-center justify-end gap-4 sm:gap-8 lg:gap-10">
            <div className="hidden items-center gap-4 text-[0.95rem] uppercase tracking-[0.2em] text-[#eadfc7] sm:flex lg:gap-8 lg:text-[1.05rem]">
              {navItems.map(({ label, href, active }) => (
                <Link
                  key={label}
                  href={href}
                  className={`group relative pb-2 font-logo transition-colors duration-300 hover:text-[#ef8b2c] ${active ? "text-[#ef8b2c]" : "text-[#efe2c8]"}`}
                >
                  <span>{label}</span>
                  <span className="absolute left-0 top-full h-0.5 w-full origin-left scale-x-0 bg-[#ef8b2c] transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}
            </div>

            <button
              type="button"
              aria-label="Open menu"
              onClick={toggleMusic}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/55 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/images/music.png"
                alt="CD"
                width={100}
                height={100}
                className={`transition-all duration-300 ${isPlaying ? "animate-disc-spin" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;