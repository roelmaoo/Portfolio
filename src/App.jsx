import Grainient from './components/Grainient'

export default function App() {
  return (
    <>
    <div id="background" className="h-full w-full">
      <Grainient
        color1="#3C4D23"
        color2="#81903A"
        color3="#F4FDC2"
        timeSpeed={1.25}
        colorBalance={0.04}
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
    </div>
    </>
  )
}