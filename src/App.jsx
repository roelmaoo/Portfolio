import Grainient from './components/Grainient'
import AudioPlayerButton from './components/ReactPlayer'

import { useState, useEffect } from 'react';

//Icons
import { IoLogoFigma, IoLogoJavascript, IoCloseOutline } from "react-icons/io5";
import { CgFramer } from "react-icons/cg";
import { FaQuestionCircle, FaReact, FaWordpress } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiArrowUpRight } from "react-icons/hi2";

export default function App() {
  const [isOpen, toggleIsOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

useEffect(() => {
    const handleScroll = () => {
      // Switches to dark text as soon as you scroll past 100 pixels, and stays dark
      if (window.scrollY > 100) {
        setIsPastHero(true);
      } else {
        setIsPastHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectsList = [
    {
      id: "01",
      title: "Morph",
      subtitle: "AI-assisted fitness app for personalized workouts",
      tags: "PRODUCT DESIGN — FIGMA — MOBILE APP",
      year: "2026",
      link: "https://www.figma.com/proto/v4xkM7vdJcViilDusOWGpd/Case-Study-and-Projects?node-id=591-363&p=f&t=CozUrEsHos5KKjON-0&scaling=min-zoom&content-scaling=fixed&page-id=591%3A363&fuid=1601835686234775557"
    },
    {
      id: "02",
      title: "Paw Haven",
      subtitle: "A pet adoption platform connecting animals with loving homes",
      tags: "PRODUCT DESIGN — REACTJS — FRONTEND",
      year: "2025",
      link: "https://pawhaven-byroel.vercel.app/"
    },
    {
      id: "03",
      title: "USA Forum",
      subtitle: "A community-driven platform for sharing and discussing ideas",
      tags: "UX RESEARCH — FIGMA — MOBILE APP",
      year: "2024",
      link: "https://www.figma.com/proto/v4xkM7vdJcViilDusOWGpd/Case-Study-and-Projects?node-id=974-3055&p=f&t=CQ2LGZvJAlFSm8ku-0&scaling=min-zoom&content-scaling=fixed&page-id=969%3A82&starting-point-node-id=974%3A3055"
    },
    {
      id: "04",
      title: "TODO app",
      subtitle: "A simple and intuitive task management application",
      tags: "UX RESEARCH — FIGMA — WEB & MOBILE APP",
      year: "2026",
      link: "https://www.figma.com/proto/VrG0C6u9yQKqO7MCbN3LdW/UI-Design-Assessment-Docto?node-id=0-1&p=f&t=V08nAtd8WGX7Vlch-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=64%3A746&show-proto-sidebar=1&fuid=1601835686234775557"
    },
    {
      id: "05",
      title: "Jeepney Routes",
      subtitle: "A mobile app for commuters to track jeepney routes in real-time",
      tags: "UX RESEARCH — REACTJS — FULLSTACK",
      year: "2025",
      link: "https://iloilojeepneyroutes.vercel.app/"
    }
  ];

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

      {/* Home */}
      <section className="absolute inset-0 w-screen h-screen">
        <p className="absolute text-5xl -top-2.5 md:-top-6 lg:-top-10 -left-3 md:-left-8 font-extrabold md:text-8xl lg:text-[180px] tracking-[-10px] md:tracking-[-25px]">CREATIVE</p>
        <p className="absolute top-5 md:top-11 lg:top-20 -left-2 font-bold text-4xl md:text-6xl lg:text-[100px] ">PORTFOLIO</p>

        <div className="absolute inset-0 md:inset-auto flex flex-col justify-center  md:w-1/2 mx-auto text-2xl font-semibold md:bottom-0 md:right-0 p-5 md:p-10 lg:p-25 text-white text-center md:text-right text-shadow-lg">
          <p className="text-7xl ">“</p>
          <p className>Design is not just what it looks like and feels like. Design is how it works.</p>
          <p className>- Steve Jobs </p>
        </div>

      </section>
      
    </div>
    
    {/* Permanent Floating Navbar */}
    <nav className="fixed z-50">
      
      {/* DESKTOP VIEW: Horizontal Frosted Glass Bar at Top */}
      <div className='hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 items-center justify-center gap-1 px-1 py-1 bg-[#FFFFFF]/20 backdrop-blur-md border border-gray-100/30 rounded-full shadow-lg font-semibold text-base text-black'>
        <a className={`px-4 py-2 rounded-full transition-colors active:bg-gray-400/40 hover:bg-gray-300/30 ${isPastHero ? 'text-black hover:bg-gray-300/30' : 'text-white hover:bg-gray-950/10'}`} href='#home'>Home</a>
        <a className={`px-4 py-2 rounded-full transition-colors active:bg-gray-400/40 hover:bg-gray-300/30 ${isPastHero ? 'text-black' : 'text-white hover:bg-gray-950/10'}`} href='#about'>About</a>
        <a className={`px-4 py-2 rounded-full transition-colors active:bg-gray-400/40 hover:bg-gray-300/30 ${isPastHero ? 'text-black' : 'text-white hover:bg-gray-950/10'}`} href='#project'>Projects</a>
        <a className={`px-4 py-2 rounded-full transition-colors active:bg-gray-400/40 hover:bg-gray-300/30 ${isPastHero ? 'text-black' : 'text-white hover:bg-gray-950/10'}`} href='#contact'>Contact</a>
      </div>

      {/* MOBILE VIEW: Floating Hamburger & Frosted Glass Pill Items at Bottom Right */}
      <div className='md:hidden fixed bottom-6 right-6 flex flex-col items-end gap-2 pointer-events-auto'>
        {isOpen && (
          <div className='flex flex-col items-end gap-2 font-semibold text-sm'>
            <a onClick={() => toggleIsOpen(false)} className={`px-5 py-2.5 rounded-full shadow-lg backdrop-blur-md bg-white/20 transition-colors ${isPastHero ? 'text-black' : 'text-white'}`} href='#home'>Home</a>
            <a onClick={() => toggleIsOpen(false)} className={`px-5 py-2.5 rounded-full shadow-lg backdrop-blur-md bg-white/20 transition-colors ${isPastHero ? 'text-black' : 'text-white'}`} href='#about'>About</a>
            <a onClick={() => toggleIsOpen(false)} className={`px-5 py-2.5 rounded-full shadow-lg backdrop-blur-md bg-white/20 transition-colors ${isPastHero ? 'text-black' : 'text-white'}`} href='#project'>Projects</a>
            <a onClick={() => toggleIsOpen(false)} className={`px-5 py-2.5 rounded-full shadow-lg backdrop-blur-md bg-white/20 transition-colors ${isPastHero ? 'text-black' : 'text-white'}`} href='#contact'>Contact</a>
          </div>
        )}
        <button 
          onClick={() => toggleIsOpen(!isOpen)} 
          className='p-4 rounded-full shadow-2xl backdrop-blur-md bg-[#3C4D23] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center text-white border-0 outline-none ring-0'
          aria-label="Toggle Navigation"
        >
          {isOpen ? <IoCloseOutline className='text-2xl text-white' /> : <GiHamburgerMenu className='text-2xl text-white' />}
        </button>
      </div>

    </nav>

    {/* About Me */}
    <section id='about' className='flex flex-col justify-between inset-0 z-30 min-h-screen w-full p-5 md:p-10 lg:p-25'>
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

    {/* Projects Section */}
    <section id='project' className="z-30 w-screen p-5 md:p-10 lg:p-25">
      <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide">projects</h2>
      </div>

      <div className="border-t border-black/20">
        {projectsList.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            key={index}
            className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-black/20 cursor-pointer transition-colors duration-300 hover:bg-white/10 px-2 md:px-4 gap-4 md:gap-0"
          >
            {/* Left Side: Number, Title, Subtitle */}
            <div className="flex items-start md:items-center gap-4 md:gap-16">
              <span className="text-xs md:text-sm font-mono text-black/60 pt-2 md:pt-0">{project.id}</span>
              <div>
                <h3 className="text-2xl sm:text-5xl md:text-5xl lg:text-7xl font-extrabold tracking-tight group-hover:translate-x-2 transition-transform duration-300 break-words">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-black/70 mt-1">{project.subtitle}</p>
              </div>
            </div>

            {/* Right Side: Tags, Year, Arrow */}
            <div className="flex items-center justify-between md:justify-end gap-4 md:gap-16 mt-2 md:mt-0 w-full md:w-auto">
              <span className="text-[10px] sm:text-xs md:text-sm font-mono text-black/60 tracking-wider">
                {project.tags}
              </span>
              <div className="flex items-center gap-4 md:gap-16 flex-shrink-0">
                <span className="text-xs sm:text-sm md:text-lg font-mono font-medium">
                  {project.year}
                </span>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-black/30 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <HiArrowUpRight className="text-sm md:text-lg" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>

    {/* Footer */}
        <section id='contact' className="z-30 w-full p-5 md:p-10 lg:p-25">
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold tracking-wide">contact</h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="flex-1">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">Let's work together!</p>
              <p className="text-sm md:text-base lg:text-lg text-black/70 mb-6">Feel free to reach out for collaborations, inquiries, or just a friendly chat. I'm always open to new opportunities and connections.</p>
              <a href="mailto:roeldocto8@gmail.com" className="inline-block bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </>
    )
}