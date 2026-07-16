import Grainient from './components/Grainient'

export default function App() {
  return (
    <>
    <div id="background" className="relative w-full h-screen">
      <Grainient
        color1="#3C4D23"
        color2="#81903A"
        color3="#F4FDC2"
        timeSpeed={1.25}
        colorBalance={1}
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
        zoom={0.9}
      />
      <div className="absolute inset-0">
        <p className="absolute -top-20 -left-8 font-extrabold text-[180px] tracking-[-25px]">Roel Docto</p>
        <p className="absolute top-17 -left-2 font-bold text-[100px] ">PORTFOLIO</p>

        <div className='absolute flex flex-col bottom-0 p-25 gap-20'>
          <a href=''>home</a>
          <a href=''>about me</a>
          <a href=''>projects</a>
          <a href=''>contact</a>
        </div>
      </div>
    </div>

    
    </>
  )
}