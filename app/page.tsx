import Image from "next/image";

function App() {
  return (
    <>
      <section className=" h-screen lg:w-3/4 mx-auto p-5 text-lg">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] md: gap-3">
          {/* left */}
          <div className="flex flex-col gap-3">
            {/* profile */}
            <div className="bg-[#161616] p-4 rounded-md border border-[#353535] flex flex-col gap-3">
              <div className="bg-gray-500 border-2 border-dashed rounded-xl w-16 h-16" />
              <p className="font-semibold">Roel Docto Jr.</p>
              <p className="text-sm text-white/50 font-light leading-4">
                Frontend Developer | UI/UX Designer | keyboard Enthusiast. Dog
                lover
              </p>
            </div>

            {/* tech stack */}
            <div
              className="bg-[#161616] p-4 rounded-md border border-[#353535] flex grow flex-col gap-3\
          "
            >
              <p className="text-sm font-semibold">TECH STACK</p>
              <div className="grid">
                <div className="flex border border-[#353535] bg-[#272727] rounded-sm h-10 w-10 items-center justify-center">
                  L
                </div>
                <div className="flex border border-[#353535] bg-[#272727] rounded-sm h-10 w-10 items-center justify-center">
                  L
                </div>
                <div className="flex border border-[#353535] bg-[#272727] rounded-sm h-10 w-10 items-center justify-center">
                  L
                </div>
                <div className="flex border border-[#353535] bg-[#272727] rounded-sm h-10 w-10 items-center justify-center">
                  L
                </div>
                <div className="flex border border-[#353535] bg-[#272727] rounded-sm h-10 w-10 items-center justify-center">
                  L
                </div>
                <div className="flex border border-[#353535] bg-[#272727] rounded-sm h-10 w-10 items-center justify-center">
                  L
                </div>
                <div className="flex border border-[#353535] bg-[#272727] rounded-sm h-10 w-10 items-center justify-center">
                  L
                </div>
              </div>
            </div>
          </div>

          {/* mid card */}
          <div className="flex flex-col justify-between bg-[#161616] rounded-md p-4 border border-[#353535] gap-5">
            <div className="flex flex-col grow gap-2">
              <div className="flex flex-3 bg-white/10 rounded-md justify-center items-center">
                <Image
                  className="object-cover h-full overflow-hidden rounded-md"
                  src="/iloilo-jeepney-routes-thumbnail.png"
                  alt="Iloilo Jeepney Routes Thumbnail"
                  loading="lazy"
                  width={800}
                  height={800}
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

            <div className="flex items-center justify-center">
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
              className="bg-[#161616] p-4 rounded-md border border-[#353535]
            hover:bg-[#1d1d1d] hover:border-[#424242] cursor-pointer transition-all"
            >
              <p>Project 1</p>
              <p className="text-sm text-white/50">
                A brief description of the project and its features. A brief
                description of the project and its features.
              </p>
            </div>

            <div
              className="bg-[#161616] p-4 rounded-md border border-[#353535]
            hover:bg-[#1d1d1d] hover:border-[#424242] cursor-pointer transition-all"
            >
              <p>Project 1</p>
              <p className="text-sm text-white/50">
                A brief description of the project and its features. A brief
                description of the project and its features.
              </p>
            </div>

            <div
              className="bg-[#161616] p-4 rounded-md border border-[#353535]
            hover:bg-[#1d1d1d] hover:border-[#424242] cursor-pointer transition-all"
            >
              <p>Project 1</p>
              <p className="text-sm text-white/50">
                A brief description of the project and its features. A brief
                description of the project and its features.
              </p>
            </div>

            <div
              className="bg-[#161616] p-4 rounded-md border border-[#353535]
            hover:bg-[#1d1d1d] hover:border-[#424242] cursor-pointer transition-all"
            >
              <p>Project 1</p>
              <p className="text-sm text-white/50">
                A brief description of the project and its features. A brief
                description of the project and its features.
              </p>
            </div>

            <div
              className="bg-[#161616] p-4 rounded-md border border-[#353535]
            hover:bg-[#1d1d1d] hover:border-[#424242] cursor-pointer transition-all"
            >
              <p>Project 1</p>
              <p className="text-sm text-white/50">
                A brief description of the project and its features. A brief
                description of the project and its features.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
