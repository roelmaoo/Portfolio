import Grainient from './components/Grainient'

export default function App() {
  return (
    <>
    <div id="home" className="relative h-screen overflow-hidden">
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

        <div className='absolute flex flex-col text-xl bottom-0 p-25 gap-20 font-semibold'>
          <a className='hover:translate-x-5 transition-all ease-in-out duration-300' href='#home'>home</a>
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

    <section id='about' className='flex flex-col justify-between inset-0 z-50 h-screen w-full p-25'>
      <div>
        <p>about me</p>

        <div className='flex justify-between gap-100'>
          <div className='w-1/2'>
            <h1 className='text-6xl font-extrabold'>Roel Docto Jr</h1>
            <h2 className='text-4xl'>Designer & Developer</h2>
            <br></br>
            <p className='text-xl'>Computer Science Graduate with a strong foundation in Human-Computer Interaction</p>
            <hr className='my-20'/>
          </div>
          <div className='w-1/2'>
            <h1 className='text-2xl'>Tools</h1>
            <div className='grid grid-cols-2 gap-10'>
              <p>Figma</p>
              <p>Framer</p>
              <p>Canva</p>
              <p>WordPress</p>
              <p>JavaScript</p>
              <p>ReactJS</p>
              <p>TailwindCSS</p>
            </div>
          </div>
        </div>

        <div className='flex justify-between gap-100'>
          <div className='w-1/2'>
            <h1 className='text-2xl'>Education</h1>
            <header className='text-4xl'>University of San Agustin</header>
            <div className='flex justify-between'>
              <h2>BS in Computer Science</h2>
              <h2>2022 - 2026</h2>
            </div>
          </div>

          <div className='w-1/2'>
            <h1 className='text-2xl'>Experience</h1>
            <header className='text-4xl'>Frontend Developer Intern</header>
            <div className='flex justify-between mb-10'>
              <h2>Waffle Time Group of Companies</h2>
              <h2>Feb 2026 - Apr 2026</h2>
            </div>
            <p>Led the user-centric frontend development of a responsive loyalty web application, 
              translating complex user goals into intuitive, 
              WCAG-compliant UI components using TailwindCSS and SvelteKit.</p>
          </div>
        </div>
      </div>

      <div className='flex justify-between gap-20 text-2xl'>
        <p className='flex-0'>Skills</p>
        <div className='flex-1 grid grid-cols-4'>
          <p>User Research</p>
          <p>Wireframing</p>
          <p>Prototyping</p>
          <p>Usability Testing</p>
          <p>Accessibility</p>
          <p>WCAG Compliance</p>
          <p>User Flow</p>
          <p>Design System</p>
        </div>
      </div>
    </section>

    </>
  )
}