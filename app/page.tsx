

function App() {
  return (
    <>
    <section className=" h-screen lg:w-3/4 mx-auto p-5 text-lg">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] md: gap-3">

        {/* left */}
        <div className="flex flex-col gap-2">

          {/* profile */}
          <div className="bg-[#161616] p-4 rounded border border-[#353535] flex flex-col gap-3">
              <p className='font-semibold'>Roel Docto Jr.</p>
              <p className='text-sm text-white/50 font-light leading-4'>A passionate developer. <strong className='text-white font-semibold'>Crafting solutions.</strong> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quia! Provident, quia recusandae officia rerum culpa veniam cumque, veritatis minima, possimus ut odio. Nam sed ut praesentium optio expedita dolorem.</p>
          </div>

          {/* tech stack */}
          <div className="bg-[#161616] p-4 rounded border border-[#353535] flex grow flex-col gap-3\
          ">
            <p>Tech Stack</p>
          </div>
        </div>

        {/* mid card */}
        <div className="bg-[#161616] rounded p-4 border border-[#353535]">
          <p>test</p>
        </div>

        {/* right */}
        <div className="flex flex-col bg-[#161616] rounded p-4 border border-[#353535] gap-3">
          <p className='text-xl font-bold'>Projects</p>
          <div className='flex  flex-col bg-[#1d1c20] border border-[#3b3b3f] p-3 rounded gap-2'>
            <p>Title</p>
            <p className='text-sm text-white/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Pariatur, possimus facere explicabo ducimus voluptates 
              dolor consequatur reprehenderit hic eius voluptatem eligendi</p>
          </div>

          <div className='flex  flex-col bg-[#1d1c20] border border-[#3b3b3f] p-3 rounded gap-2'>
            <p>Title</p>
            <p className='text-sm text-white/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Pariatur, possimus facere explicabo ducimus voluptates 
              dolor consequatur reprehenderit hic eius voluptatem eligendi</p>
          </div>

          <div className='flex  flex-col bg-[#1d1c20] border border-[#3b3b3f] p-3 rounded gap-2'>
            <p>Title</p>
            <p className='text-sm text-white/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Pariatur, possimus facere explicabo ducimus voluptates 
              dolor consequatur reprehenderit hic eius voluptatem eligendi</p>
          </div>
        </div>

      </div>
      
    </section>
    </>
  )
}

export default App;