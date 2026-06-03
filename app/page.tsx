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
            <div className="bg-[#161616] p-4 rounded-md border border-[#353535] flex flex-col gap-3">
              <div className="bg-gray-500 border-2 border-dashed rounded-xl w-16 h-16" />
              <p className="font-semibold">Roel Docto Jr.</p>
              <p className="text-sm text-white/50 font-light leading-4">
                Frontend Developer | UI/UX Designer | keyboard Enthusiast. Dog
                lover
              </p>
            </div>

            {/* tech stack */}
            <div className="flex grow flex-col gap-3 rounded-md border border-[#353535] bg-[#161616] p-4">
              <p className="text-xs font-semibold tracking-wider text-neutral-400">
                TECH STACK
              </p>

              <div className="flex flex-wrap gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#353535] bg-[#272727] text-[#neutral-200]">
                  <SiReact size={20} />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#353535] bg-[#272727]">
                  <SiNextdotjs size={20} />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#353535] bg-[#272727]">
                  <SiTailwindcss size={20} />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#353535] bg-[#272727]">
                  <SiTypescript size={18} />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#353535] bg-[#272727]">
                  <SiNodedotjs size={20} />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#353535] bg-[#272727]">
                  <SiPostgresql size={20} />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#353535] bg-[#272727]">
                  <SiPrisma size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* mid card */}
          <div className="flex flex-col justify-between bg-[#161616] rounded-md p-4 border border-[#353535] gap-5">
            <div className="flex flex-col grow gap-2">
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
                <p className="text-sm text-white/50">
                  A web application that provides real-time information on
                  jeepney routes
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center mt-10">
              <a
                className="flex grow justify-center bg-[#272727] border border-[#353535] rounded py-2
              hover:bg-[#2c2c2c] cursor-pointer"
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
            <div className="bg-[#161616] p-4 rounded-md border border-[#353535]">
              <p className="text-xl font-bold">Projects</p>
            </div>

            <div
              className="flex flex-col gap-3 overflow-y-auto h-150
            [&::-webkit-scrollbar]:hidden"
            >
              <a
                href="https://adoptstraydogs.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3"
              >
                <div
                  className="bg-[#161616] p-4 rounded-md border border-[#353535]
            hover:bg-[#1d1d1d] hover:border-[#424242] cursor-pointer transition-all"
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
                    <p className="text-sm text-white/50 pt-2">
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
                  className="bg-[#161616] p-4 rounded-md border border-[#353535]
            hover:bg-[#1d1d1d] hover:border-[#424242] cursor-pointer transition-all"
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
                    <p className="text-sm text-white/50 pt-2">
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
                  className="bg-[#161616] p-4 rounded-md border border-[#353535]
            hover:bg-[#1d1d1d] hover:border-[#424242] cursor-pointer transition-all"
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
                    <p className="text-sm text-white/50 pt-2">
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
