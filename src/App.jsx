import Grainient from './components/Grainient'

export default function App() {
  return (
    <>
    <div id="background" className="relative h-screen overflow-hidden">
      <Grainient
        color1="#F4FDC2"
        color2="#81903A"
        color3="#3C4D23"
        timeSpeed={1.25}
        colorBalance={0.1}
        warpStrength={1}
        warpFrequency={5}
        warpSpeed={2}
        warpAmplitude={50}
        blendAngle={0}
        blendSoftness={0.05}
        rotationAmount={500}
        noiseScale={2}
        grainAmount={0.1}
        grainScale={2}
        grainAnimated={false}
        contrast={1.5}
        gamma={1}
        saturation={1}
        centerX={0}
        centerY={0}
        zoom={0.7}
      />
      <section className="absolute inset-0 w-screen h-screen">
        <p className="absolute -top-20 -left-8 font-extrabold text-[180px] tracking-[-25px]">Roel Docto</p>
        <p className="absolute top-17 -left-2 font-bold text-[100px] ">PORTFOLIO</p>

        <div className='absolute flex flex-col text-2xl bottom-0 p-25 gap-20 font-semibold'>
          <a className='hover:translate-x-5 transition-all ease-in-out duration-300' href=''>home</a>
          <a className='hover:translate-x-5 transition-all ease-in-out duration-300' href='#about'>about me</a>
          <a className='hover:translate-x-5 transition-all ease-in-out duration-300' href=''>projects</a>
          <a className='hover:translate-x-5 transition-all ease-in-out duration-300' href=''>contact</a>
        </div>

        <div className="absolute text-2xl font-semibold bottom-0 right-0 p-25 text-white text-right">
          <p className="text-7xl">“</p>
          <p className>Design is not just what it looks like and feels like.<br></br> Design is <span className="font-extrabold">how it works.</span></p>
          <p className>- Steve Jobs </p>
        </div>
      </section>

      
      
    </div>

    <section id='about' className=' inset-0 z-50 h-screen w-full'>
        hello
      </section>

    </>
  )
}