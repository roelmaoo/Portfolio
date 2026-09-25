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
  const [dachshundImg, setDachshundImg] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsPastHero(true);
      } else {
        setIsPastHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch a random dachshund photo every 3 seconds
  useEffect(() => {
    const fetchDachshund = async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breed/dachshund/images/random");
        const data = await res.json();
        if (data && data.message) {
          setDachshundImg(data.message);
        }
      } catch (error) {
        console.error("Failed to fetch dachshund image", error);
      }
    };

    fetchDachshund();
    const interval = setInterval(fetchDachshund, 6000);
    return () => clearInterval(interval);
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
        <p className="absolute top-5 md:top-11 lg:top-20 -left-2 font-bold text-4xl md:text-6xl lg:text-[100px]">PORTFOLIO</p>

        <div className="absolute inset-0 md:inset-auto flex flex-col justify-center md:w-1/2 mx-auto text-lg md:text-xl lg:text-2xl font-semibold md:bottom-0 md:right-0 p-5 md:p-10 lg:p-25 text-white text-center md:text-right text-shadow-lg">
          <p className="text-5xl md:text-7xl">“</p>
          <p>Design is not just what it looks like and feels like. Design is how it works.</p>
          <p className="text-sm md:text-base mt-2">- Steve Jobs</p>
        </div>
      </section>
    </div>
    
    {/* Permanent Floating Navbar */}
    <nav className="fixed z-50">
      <div className='hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 items-center justify-center gap-1 px-1 py-1 bg-[#FFFFFF]/20 backdrop-blur-md border border-gray-100/30 rounded-full shadow-lg font-semibold text-sm lg:text-base text-black'>
        <a className={`px-4 py-2 rounded-full transition-colors active:bg-gray-400/40 hover:bg-gray-300/30 ${isPastHero ? 'text-black' : 'text-white hover:bg-gray-950/20 active:bg-gray-950/30'}`} href='#home'>Home</a>
        <a className={`px-4 py-2 rounded-full transition-colors active:bg-gray-400/40 hover:bg-gray-300/30 ${isPastHero ? 'text-black' : 'text-white hover:bg-gray-950/20 active:bg-gray-950/30'}`} href='#about'>About</a>
        <a className={`px-4 py-2 rounded-full transition-colors active:bg-gray-400/40 hover:bg-gray-300/30 ${isPastHero ? 'text-black' : 'text-white hover:bg-gray-950/20 active:bg-gray-950/30'}`} href='#project'>Projects</a>
        <a className={`px-4 py-2 rounded-full transition-colors active:bg-gray-400/40 hover:bg-gray-300/30 ${isPastHero ? 'text-black' : 'text-white hover:bg-gray-950/20 active:bg-gray-950/30'}`} href='#contact'>Contact</a>
      </div>

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

    {/* About Me Section (Bento Layout) */}
    <section id='about' className='z-30 min-h-screen w-full px-5 md:px-10 py-16 flex flex-col justify-center'>
      <div className='max-w-6xl mx-auto w-full'>
        
        {/* Main 2-Column Bento Grid Container */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
          
          {/* LEFT SIDE: Name, Title, and Bios (Span 5 cols) */}
          <div className='lg:col-span-5 bg-gray-50 backdrop-blur-md hover:shadow-lg/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all ease-in-out duration-300'>
            <div>
              <h1 className='text-3xl md:text-4xl lg:text-4xl font-extrabold tracking-tight'>Roel Docto Jr</h1>
              <h2 className='text-lg md:text-xl font-medium mt-2 opacity-80'>Designer & Developer</h2>
              <div className='w-full h-[1px] bg-black/10 my-6' />
              <div className='space-y-3 text-sm md:text-base text-black/80'>
                <p>Computer Science Graduate with a strong foundation in Human-Computer Interaction.</p>
                <p>I also like dogs, especially weeeeeeiners</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Stacked Cards (Span 7 cols) */}
          <div className='lg:col-span-7 flex flex-col gap-6'>
            
            {/* 1. Experience Card */}
            <div className='bg-gray-50 backdrop-blur-md hover:shadow-lg/5 rounded-3xl p-6 md:p-8 transition-all ease-in-out duration-300'>
              <h3 className='text-xs md:text-sm font-semibold opacity-60 mb-2'>Experience</h3>
              <header className='text-xl md:text-2xl font-bold'>Software Developer Intern</header>
              <div className='flex justify-between items-center mb-4 text-xs md:text-sm opacity-60'>
                <span>Waffle Time Group of Companies</span>
                <span>Feb 2026 - Apr 2026</span>
              </div>
              <div className='w-full h-[1px] bg-black/10 my-4' />
              <p className='text-sm md:text-base text-black/80'>
                Contributed to the user-centric frontend development of a responsive loyalty web application, translating complex user goals into intuitive, WCAG-compliant UI components using TailwindCSS and SvelteKit.
              </p>
            </div>

            {/* 2. Education Card */}
            <div className='bg-gray-50 backdrop-blur-md hover:shadow-lg/5 rounded-3xl p-6 md:p-8 transition-all ease-in-out duration-300'>
              <h3 className='text-xs md:text-sm font-semibold opacity-60 mb-2'>Education</h3>
              <header className='text-xl md:text-2xl font-bold'>University of San Agustin</header>
              <div className='flex justify-between items-center mb-4 text-xs md:text-sm opacity-60'>
                <span>BS in Computer Science</span>
                <span>2022 - 2026</span>
              </div>
              <div className='w-full h-[1px] bg-black/10 my-4' />
              <p className='text-sm md:text-base text-black/80'>
                Software Engineering, Data Structures and Algorithms, SDLC, Web Design, Web Development, Graphic Design, UI/UX, Human-Computer Interaction
              </p>
            </div>

            {/* 3. Bottom Right Split Row: 1:1 Dachshund & 1:1 Tools */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              
              {/* Dachshund Randomizer Card */}
              <div className='bg-gray-50 backdrop-blur-md hover:shadow-xl/5 rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden aspect-square transition-all ease-in-out duration-300'>
                {dachshundImg ? (
                  <div className="absolute inset-8 rounded-2xl overflow-hidden shadow transition-all">
                    <img 
                      src={dachshundImg} 
                      alt="Random Dachshund" 
                      className="w-full h-full object-cover transition-opacity duration-500"
                    />
                    {/* Thin timer progress line */}
                    <div 
                      key={dachshundImg} 
                      className="absolute bottom-0 left-0 h-[5px] bg-black/70 animate-[shrink_6s_linear_infinite]"
                    />
                  </div>
                ) : (
                  <p className="text-xs text-black/50 font-mono">Loading weeeeeeiners...</p>
                )}
              </div>

              {/* Tools Card */}
              <div className='backdrop-blur-md rounded-3xl p-6 flex flex-col'>
                <h3 className='text-xs md:text-sm font-semibold uppercase tracking-wider opacity-60'>Tools</h3>
                <div className='w-full h-[1px] bg-black/10 my-4' />
                <div className='grid grid-cols-2 gap-3 text-xs md:text-sm h-full'>
                  <p className='flex items-center gap-2'><IoLogoFigma className='text-5xl'/>Figma</p>
                  <p className='flex items-center gap-2'><CgFramer className='text-5xl'/>Framer</p>
                  <p className='flex items-center gap-2'><FaQuestionCircle className='text-5xl'/>Canva</p>
                  <p className='flex items-center gap-2'><FaWordpress className='text-5xl'/>WordPress</p>
                  <p className='flex items-center gap-2'><IoLogoJavascript className='text-5xl'/>JavaScript</p>
                  <p className='flex items-center gap-2'><FaReact className='text-5xl'/>ReactJS</p>
                  <p className='flex items-center gap-2'><RiTailwindCssFill className='text-5xl'/>TailwindCSS</p>
                </div>
                <div></div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>

    {/* Separate Skills Section */}
    <section className='z-30 w-full px-5 md:px-10 py-6'>
      <div className='max-w-6xl mx-auto w-full bg-gray-50 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between md:gap-10 items-center'>
        <h3 className='text-lg md:text-xl font-semibold mb-4 md:mb-0'>Skills</h3>
        <div className='flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm md:text-base opacity-90 w-full'>
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
    <section id='project' className="z-30 w-full px-5 md:px-10 py-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-10">
          <h2 className="text-sm md:text-lg font-semibold uppercase tracking-wider opacity-70">Projects</h2>
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
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight group-hover:translate-x-2 transition-transform duration-300 break-words">
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
      </div>
    </section>

    {/* Footer */}
    <section id='contact' className="z-30 w-full px-5 md:px-10 py-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-10">
          <h2 className="text-sm md:text-lg font-semibold uppercase tracking-wider opacity-70">Contact</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex-1 max-w-2xl">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Let's work together!</p>
            <p className="text-sm md:text-base lg:text-lg text-black/70 mb-6">Feel free to reach out for collaborations, inquiries, or just a friendly chat. I'm always open to new opportunities and connections.</p>
            <div className="flex items-center gap-2">
              <a href="https://www.linkedin.com/in/roeldoctojr/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
              </a>

              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="64" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-1.89 0-3.66-.525-5.168-1.437l-3.032.891A1.01 1.01 0 0 1 2.546 20.2l.892-3.032A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2M9.785 7.259a.7.7 0 0 0-.683-.075A2.79 2.79 0 0 0 7.494 9.07l-.007.03c-.038.152-.07.331-.063.526c.025.682.292 2.613 2.314 4.636c2.023 2.022 3.954 2.29 4.636 2.314a2 2 0 0 0 .526-.062l.035-.01a2.78 2.78 0 0 0 1.88-1.6a.7.7 0 0 0-.09-.703c-.533-.683-1.248-1.176-1.884-1.615l-.127-.088a.71.71 0 0 0-.974.157l-.6.915a.23.23 0 0 1-.305.076c-.407-.232-1-.629-1.426-1.055s-.798-.992-1.007-1.372a.23.23 0 0 1 .068-.291l.923-.686a.713.713 0 0 0 .12-.94l-.134-.198c-.42-.62-.912-1.348-1.594-1.845"/></svg>
              </a>
            </div>
            <a href="mailto:roeldocto8@gmail.com" className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm md:text-base font-medium hover:bg-gray-800 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}