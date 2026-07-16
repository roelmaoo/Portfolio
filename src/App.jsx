import Grainient from './components/Grainient'

export default function App() {
  return (
    <>
    <div id="background" className="relative h-500 overflow-hidden">
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
      <div className="absolute inset-0 w-screen h-screen">
        <p className="absolute -top-20 -left-8 font-extrabold text-[180px] tracking-[-25px]">Roel Docto</p>
        <p className="absolute top-17 -left-2 font-bold text-[100px] ">PORTFOLIO</p>

        <div className='absolute flex flex-col text-2xl bottom-0 p-25 gap-20 font-semibold'>
          <a href=''>home</a>
          <a href=''>about me</a>
          <a href=''>projects</a>
          <a href=''>contact</a>
        </div>

        <div className="absolute text-2xl font-semibold bottom-0 right-0 p-25 text-white text-right">
          <p className="text-7xl">"</p>
          <p className>Design is not just what it looks like and feels like.<br></br> Design is <span className="font-extrabold">how it works.</span></p>
          <p className>- Steve Jobs </p>
        </div>
        {/* <iframe 
          className="absolute bottom-0 right-0" 
          width="300" 
          height="200" 
          src="https://www.youtube.com/embed/3gk71_WuV9U?si=SdoYIEc4nPTu37Ne&autoplay=1&controls=0&showinfo=0&disablekb=1" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe> */}

      </div>
      
    </div>



    </>
  )
}