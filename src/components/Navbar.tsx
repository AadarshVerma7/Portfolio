import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnLanding, setIsOnLanding] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/music/bgMusic.mp3");

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    const updateNavbarSurface = () => {
      const landing = document.getElementById("home");

      if (!landing) return;

      const { top, bottom } = landing.getBoundingClientRect();
      const landingIsVisible = top <= 0 && bottom > 0;

      setIsOnLanding((current) =>
        current === landingIsVisible ? current : landingIsVisible
      );
    };

    updateNavbarSurface();
    window.addEventListener("scroll", updateNavbarSurface, { passive: true });
    window.addEventListener("resize", updateNavbarSurface);

    return () => {
      window.removeEventListener("scroll", updateNavbarSurface);
      window.removeEventListener("resize", updateNavbarSurface);
    };
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
    { label: "Home", href: "#home", active: true, section: "home" },
    { label: "About", href: "#about", active: false, section: "about" },
    { label: "Projects", href: "#projects", active: false, section: "projects" },
    { label: "Skills", href: "#skills", active: false, section: "skills" },
    { label: "Experience", href: "#experience", active: false, section: "experience" },
    { label: "Contact", href: "#contact", active: false, section: "contact" },
  ];

  return (
    
      <nav
        className={`fixed left-3 right-3 top-3 z-50 w-auto rounded-2xl px-3 py-3 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 sm:left-6 sm:right-6 sm:px-6 sm:py-4 lg:left-8 lg:right-8 lg:px-8 ${
          isOnLanding
            ? "border-transparent bg-transparent"
            : "border-b border-[#d6b06f]/25 bg-[#07100f]/70 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          <Link href="#home" className="group shrink-0">
            <span className="font-logo block text-[1.35rem] leading-none tracking-[0.02em] text-[#d6b06f] drop-shadow-[0_2px_0_rgba(0,0,0,0.45)] min-[380px]:text-[1.6rem] sm:text-[2.2rem] lg:text-[2.5rem]">
              Aadarsh Verma
            </span>
            <span className={`
              ${isOnLanding ? "" : "hidden"}
              mt-1 hidden h-4 w-[11.2rem] bg-[radial-gradient(ellipse_at_center,rgba(214,176,111,0.9)_0%,rgba(214,176,111,0.75)_18%,rgba(214,176,111,0.2)_42%,transparent_72%)] opacity-85 blur-[1px] transition-opacity duration-300 group-hover:opacity-100 min-[380px]:block sm:w-[13.6rem] lg:w-60`} />
          </Link>

          <div className="flex flex-1 items-center justify-end gap-3 xl:gap-10">
            <div className="hidden items-center gap-4 text-[0.95rem] uppercase tracking-[0.2em] text-[#eadfc7] xl:flex xl:gap-8 xl:text-[1.05rem]">
              {navItems.map(({ label, active, section }) => (
                <button
                  key={section}
                  onClick={()=>{
                    document.getElementById(section)?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                  className={`group relative pb-2 font-logo transition-colors duration-300 hover:text-[#ef8b2c] ${active ? "text-[#ef8b2c]" : "text-[#efe2c8]"}`}
                >
                  <span>{label}</span>
                  <span className="absolute left-0 top-full h-0.5 w-full origin-left scale-x-0 bg-[#ef8b2c] transition-transform duration-300 group-hover:scale-x-100" />
                </button>
              ))}
            </div>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="grid h-10 w-10 place-items-center rounded-full border border-[#d6b06f]/30 bg-black/55 text-[#d6b06f] backdrop-blur-sm xl:hidden"
            >
              <span className="text-lg leading-none">{isMenuOpen ? "×" : "☰"}</span>
            </button>

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

        <div className={`grid transition-[grid-template-rows,opacity,margin] duration-300 xl:hidden ${isMenuOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
          <div className="overflow-hidden">
            <div className="grid grid-cols-2 gap-2 rounded-xl border border-[#d6b06f]/20 bg-[#07100f]/90 p-3 backdrop-blur-xl sm:grid-cols-3">
              {navItems.map(({ label, section }) => (
                <button
                  key={section}
                  onClick={() => {
                    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                  className="rounded-lg px-2 py-2 text-center font-logo text-xs uppercase tracking-[0.12em] text-[#efe2c8] transition-colors hover:bg-[#d6b06f]/10 hover:text-[#ef8b2c]"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
