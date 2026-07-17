import Grainient from './components/Grainient'

//Icons
import { IoLogoFigma, IoLogoJavascript } from "react-icons/io5";
import { CgFramer } from "react-icons/cg";
import { FaQuestionCircle, FaReact, FaWordpress } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';

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

    <section id='about' className='flex flex-col justify-between inset-0 z-50 h-screen w-full p-5 md:p-10 lg:p-25'>
      <div className=''>
        <p>about me</p>
          <div className='grid gap-20 md:gap-0'>
            <div className='grid md:grid-cols-2 md:gap-50'>
              <div className=''>
                <h1 className='text-2xl md:text-3xl lg:text-6xl font-extrabold'>Roel Docto Jr</h1>
                <h2 className='text-xl lg:text-4xl'>Designer & Developer</h2>
                <br></br>
                <p className='text-sm lg:text-xl'>Computer Science Graduate with a strong foundation in Human-Computer Interaction</p>
                <hr className='my-10 md:my-20'/>
              </div>
              <div className=''>
                <h1 className='lg:text-2xl'>Tools</h1>
                <div className='grid grid-cols-2 gap-5'>
                  <p className='flex items-center gap-5'><IoLogoFigma className='text-4xl'/>Figma</p>
                  <p className='flex items-center gap-5'><CgFramer className='text-5xl'/>Framer</p>
                  <p className='flex items-center gap-5'><FaQuestionCircle className='text-4xl'/>Canva</p>
                  <p className='flex items-center gap-5'><FaWordpress className='text-4xl'/>WordPress</p>
                  <p className='flex items-center gap-5'><IoLogoJavascript className='text-4xl'/>JavaScript</p>
                  <p className='flex items-center gap-5'><FaReact className='text-4xl'/>ReactJS</p>
                  <p className='flex items-center gap-5'><RiTailwindCssFill className='text-4xl'/>TailwindCSS</p>
                </div>
              </div>
            </div>

            <div className='grid md:grid-cols-2 md:gap-50 gap-20'>
              <div className=''>
                <h1 className='lg:text-2xl'>Education</h1>
                <header className='text-3xl lg:text-4xl'>University of San Agustin</header>
                <div className='flex justify-between items-center'>
                  <h2 className='text-sm lg:text-lg'>BS in Computer Science</h2>
                  <h2>2022 - 2026</h2>
                </div>
              </div>

              <div className=''>
                <h1 className='lg:text-2xl'>Experience</h1>
                <header className='text-3xl lg:text-4xl'>Frontend Developer Intern</header>
                <div className='flex justify-between mb-10 text-sm lg:text-lg'>
                  <h2>Waffle Time Group of Companies</h2>
                  <h2>Feb 2026 - Apr 2026</h2>
                </div>
                <p className='text-md'>Led the user-centric frontend development of a responsive loyalty web application, 
                  translating complex user goals into intuitive, 
                  WCAG-compliant UI components using TailwindCSS and SvelteKit.</p>
              </div>
            </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between md:gap-10 lg:20 mt-20'>
        <h1 className='md:text-2xl flex-0'>Skills</h1>
        <div className='flex-1 grid grid-cols-2 md:grid-cols-4 text-lg md:text-base'>
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