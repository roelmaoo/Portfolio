function App() {
  return (
    <>
      <section className=" h-screen lg:w-3/4 mx-auto p-5 text-lg">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] md: gap-3">
          {/* left */}
          <div className="flex flex-col gap-3">
            {/* profile */}
            <div className="bg-[#161616] p-4 rounded-md border border-[#353535] flex flex-col gap-3">
              <p className="font-semibold">Roel Docto Jr.</p>
              <p className="text-sm text-white/50 font-light leading-4">
                A passionate developer.{" "}
                <strong className="text-white font-semibold">
                  Crafting solutions.
                </strong>{" "}
                <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Neque, quia! Provident, quia recusandae officia rerum culpa
                veniam cumque, veritatis minima, possimus ut odio. Nam sed ut
                praesentium optio expedita dolorem.
              </p>
            </div>

            {/* tech stack */}
            <div
              className="bg-[#161616] p-4 rounded-md border border-[#353535] flex grow flex-col gap-3\
          "
            >
              <p>Tech Stack</p>
              <div className="grid grid-cols-5">
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
          <div className="flex flex-col justify-between bg-[#161616] rounded-md p-4 border border-[#353535] ">
            <div>
              <p>test</p>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="flex grow justify-center bg-[#272727] border border-[#353535] rounded py-2
              hover:bg-[#2c2c2c] cursor-pointer"
              >
                See Live
              </button>
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col gap-3">
            <div className="bg-[#161616] p-4 rounded-md border border-[#353535]">
              <p className="text-xl font-bold">Projects</p>
            </div>

            <div className="bg-[#161616] p-4 rounded-md border border-[#353535]">
              <p>Project 1</p>
              <p className="text-sm text-white/50">
                A brief description of the project and its features. A brief
                description of the project and its features.
              </p>
            </div>

            <div className="bg-[#161616] p-4 rounded-md border border-[#353535]">
              <p>Project 1</p>
              <p className="text-sm text-white/50">
                A brief description of the project and its features. A brief
                description of the project and its features.
              </p>
            </div>

            <div className="bg-[#161616] p-4 rounded-md border border-[#353535]">
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
