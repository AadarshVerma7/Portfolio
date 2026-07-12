import Link from "next/link";
import Image from "next/image";
import CardSwap, { Card } from "../components/CardSwap";
import { Caveat, Permanent_Marker } from "next/font/google";

const graffiti = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

const projects = [
  {
    title: "Persephone",
    subtitle: "Developer hiring ecosystem",
    description:
      "A developer-first hiring platform focused on live coding, WebRTC interviews, recommendation engine, DSA rounds, and seamless recruitment. Also Available on the Microsoft Store!",
    liveUrl: "https://apps.microsoft.com/detail/9P85NCFS9MDM?hl=en&gl=IN&ocid=pdpshare",
    githubUrl: "https://github.com/AadarshVerma7/persephone.git",
    image: "/images/Persephone.png",
  },
  {
    title: "Trackio",
    subtitle: "Task tracking workspace",
    description:
      "A focused productivity tracker for organizing tasks, monitoring progress, and keeping work visible at a glance.",
    liveUrl: "https://trackio-byti.vercel.app/",
    githubUrl: "https://github.com/AadarshVerma7/Trackio",
    image: "/images/Trackio.png",
  },
  {
    title: "Epiphany",
    subtitle: "Learning & Institution Management Platform",
    description:
      "A Full Stack Project that simplifies academic and administrative management for educational institutions.",
    liveUrl: "https://epiphany-client.vercel.app/",
    githubUrl: "https://github.com/AadarshVerma7/Epiphany",
    image: "/images/Epiphany.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-transparent px-4 pb-24 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <h2
          className={`
            ${graffiti.className}
            text-7xl
            lg:text-8xl
            leading-none
            uppercase
            bg-linear-to-b
            from-[#f0ddb0]
            via-[#d4bc85]
            to-[#9f8450]
            bg-clip-text
            text-transparent
            -translate-x-4
          `}
        >
          Projects
        </h2>

        <div className="mt-20 flex justify-center lg:justify-end">
          <CardSwap
            width={860}
            height={540}
            cardDistance={96}
            verticalDistance={102}
            delay={5000}
            pauseOnHover
          >
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="overflow-hidden rounded-[28px] border border-[#d6b06f]/20 bg-[#0d0d0c]/92 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              >
                <div className="grid h-full grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="font-handwritten text-sm uppercase tracking-[0.35em] text-[#3f9c9c]">
                        Featured Project
                      </p>

                      <div className="mt-3 h-px w-28 bg-[#3f9c9c]/50" />

                      <h3
                        className={`${graffiti.className} mt-8 text-5xl uppercase leading-none tracking-wide text-[#d6b06f] lg:text-6xl`}
                      >
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm uppercase leading-6 tracking-[0.18em] text-[#c39a58]">
                        {project.subtitle}
                      </p>

                      <p
                        className={`
                          ${caveat.className}
                          mt-8
                          max-w-97.5
                          text-2xl
                          leading-relaxed
                          text-zinc-200
                        `}
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-[#3f9c9c] px-6 py-3 text-sm uppercase tracking-[0.18em] text-[#3f9c9c] transition hover:bg-[#3f9c9c] hover:text-black"
                      >
                        Live Link
                      </Link>

                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-[#d6b06f]/30 px-6 py-3 text-sm uppercase tracking-[0.18em] text-[#d6b06f] transition hover:border-[#d6b06f] hover:text-[#efdcb0]"
                      >
                        GitHub Link
                      </Link>
                    </div>
                  </div>

                  <div className="relative min-h-75 overflow-hidden rounded-3xl border border-[#d6b06f]/15 bg-black/35">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-contain opacity-90"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.35))]" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                      <span className="rounded-full border border-[#3f9c9c]/35 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#3f9c9c]">
                        Image Slot
                      </span>

                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#e7dcc6]/70">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default Projects;