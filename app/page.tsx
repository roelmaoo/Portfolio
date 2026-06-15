import Image from "next/image";
import petLanding from "../public/pet-landing-site.png";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

function App() {
  return (
    <>
      <section className=" h-screen xl:w-3/4 mx-auto p-5 text-lg">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] md: gap-3">
          {/* left */}
          <div className="flex flex-col gap-3">
            <div className="bg-[var(--card)] p-4 rounded-md border border-[var(--border)] flex flex-col gap-3">
              <div className="bg-gray-500 border-2 border-dashed rounded-xl w-16 h-16" />
              <p className="font-semibold">Roel Docto Jr.</p>
              <p className="text-sm text-[var(--muted)] font-light leading-4">
                Frontend Developer | UI/UX Designer | keyboard Enthusiast. Dog
                lover
              </p>
            </div>

            {/* tech stack */}
            <div className="flex grow flex-col gap-3 rounded-md border border-[var(--border)] bg-[var(--card)] p-4">
              <p className="text-xs font-semibold tracking-wider text-[var(--muted)]">
                TECH STACK
              </p>

              <div className="flex flex-wrap gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--card)] text-[var(--muted)]">
                  <SiReact size={20} />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--card)]">
                  <SiNextdotjs size={20} />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--card)]">
                  <SiTailwindcss size={20} />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--card)]">
                  <SiTypescript size={18} />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--card)]">
                  <SiNodedotjs size={20} />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--card)]">
                  <SiPostgresql size={20} />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--card)]">
                  <SiPrisma size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* mid card */}
          <div className="flex flex-col justify-between bg-[var(--card)] rounded-md p-4 border border-[var(--border)] gap-5">
            <div className="flex flex-col grow gap-2">
              <div className="flex items-center gap-2 text-sm text-[var(--muted)] uppercase tracking-wider">
                <p>Latest Project</p>
              </div>
              <div className="flex bg-white/10 rounded-md justify-center items-center">
                <Image
                  className="object-cover h-full overflow-hidden rounded-md"
                  src="/iloilo-jeepney-routes-thumbnail.png"
                  alt="Iloilo Jeepney Routes Thumbnail"
                  loading="lazy"
                  width={800}
                  height={0}
                />
              </div>
              <div className="flex flex-1 flex-col">
                <p className="font-semibold">Iloilo Jeepney Routes</p>
                <p className="text-sm text-[var(--muted)]">
                  A web application that provides real-time information on
                  jeepney routes
                </p>
              </div>
            </div>

            <div className="flex bg-[var(--button)] rounded-md justify-center items-center">
              <a
                className="flex grow justify-center bg-[var(--button)] border border-[var(--border)] rounded py-2
              hover:bg-[var(--button-hover)] cursor-pointer"
                href="https://iloilojeepneyroutes.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Live
              </a>
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col gap-3">
            <div className="bg-[var(--card)] p-4 rounded-md border border-[var(--border)]">
              <p className="text-xl font-bold">Projects</p>
            </div>

            <div
              className="flex flex-col gap-3 overflow-y-auto h-90 md:h-120 lg:h-150
            [&::-webkit-scrollbar]:hidden"
            >
              <a
                href="https://adoptstraydogs.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3"
              >
                <div
                  className="bg-[var(--card)] p-4 rounded-md border border-[var(--border)]
            hover:bg-[var(--card-hover)] hover:border-[var(--border)] cursor-pointer transition-all"
                >
                  <div>
                    <p className="pb-2 text-sm text-[var(--muted)] uppercase tracking-wider">
                      STRAY DOGS LANDING PAGE
                    </p>
                    <Image
                      className="object-cover h-full overflow-hidden rounded-md"
                      src={petLanding}
                      alt="Stray Dogs Site"
                      loading="lazy"
                      width={800}
                      height={0}
                    />
                    <p className="text-sm text-[var(--muted)] pt-2 uppercase">
                      A landing page for stray pets where users can book strays
                      for a walk, or adoption.
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://adoptstraydogs.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3"
              >
                <div
                  className="bg-[var(--card)] p-4 rounded-md border border-[var(--border)]
            hover:bg-[var(--card-hover)] hover:border-[var(--border)] cursor-pointer transition-all"
                >
                  <div>
                    <p className="pb-2">Project 1</p>
                    <Image
                      className="object-cover h-full overflow-hidden rounded-md"
                      src={petLanding}
                      alt="Stray Dogs Site"
                      loading="lazy"
                      width={800}
                      height={0}
                    />
                    <p className="text-sm text-[var(--muted)] pt-2">
                      A landing page for stray pets where users can book strays
                      for a walk, or adoption.
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://adoptstraydogs.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3"
              >
                <div
                  className="bg-[var(--card)] p-4 rounded-md border border-[var(--border)]
            hover:bg-[var(--card-hover)] hover:border-[var(--border)] cursor-pointer transition-all"
                >
                  <div>
                    <p className="pb-2">Project 1</p>
                    <Image
                      className="object-cover h-full overflow-hidden rounded-md"
                      src={petLanding}
                      alt="Stray Dogs Site"
                      loading="lazy"
                      width={800}
                      height={0}
                    />
                    <p className="text-sm text-[var(--muted)] pt-2">
                      A landing page for stray pets where users can book strays
                      for a walk, or adoption.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
