import Grainient from './components/Grainient';
import ProjectMorph from './pages/ProjectMorph';
import CustomCursor from './components/CustomCursor';
import ScrollManager from './components/ScrollManager';

// Video
import pulsarMouseVideo from './assets/videos/PulsarMouse-CampaignAd.mov';

// Graphic Design
import bannerVideo from './assets/Graphics/bannerwel.mp4';
import YTThumbnail from './assets/Graphics/FrontendYTThumbnail.png';
import AntiSmokingAd from './assets/Graphics/AntiSmokingAdvocacy.png';
import CSBrochure1 from './assets/Graphics/1.png';
import CSBrochure2 from './assets/Graphics/2.png';

import {
  BrowserRouter,
  Link,
  Route,
  Routes
} from 'react-router-dom';

import { useState, useEffect } from 'react';

// Icons
import {
  IoLogoFigma,
  IoLogoJavascript,
  IoCloseOutline
} from "react-icons/io5";

import { CgFramer } from "react-icons/cg";
import {
  FaQuestionCircle,
  FaReact,
  FaWordpress
} from 'react-icons/fa';

import { RiTailwindCssFill } from 'react-icons/ri';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiArrowUpRight } from "react-icons/hi2";


// ============================================================
// HOME PAGE
// ============================================================

function Home() {

  const [isOpen, toggleIsOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [dachshundImg, setDachshundImg] = useState('');
  const [activeCategory, setActiveCategory] = useState("UI/UX");
  const [activeSlides, setActiveSlides] = useState({});


  // ------------------------------------------------------------
  // Detect whether user has scrolled past the hero
  // ------------------------------------------------------------

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 900) {
        setIsPastHero(true);
      } else {
        setIsPastHero(false);
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);


  // ------------------------------------------------------------
  // Fetch random Dachshund
  // ------------------------------------------------------------

  useEffect(() => {

    const fetchDachshund = async () => {

      try {

        const res = await fetch(
          "https://dog.ceo/api/breed/dachshund/images/random"
        );

        const data = await res.json();

        if (data && data.message) {
          setDachshundImg(data.message);
        }

      } catch (error) {

        console.error(
          "Failed to fetch dachshund image",
          error
        );

      }

    };


    fetchDachshund();

    const interval = setInterval(
      fetchDachshund,
      6000
    );

    return () => clearInterval(interval);

  }, []);


  // ============================================================
  // PROJECT DATA
  // ============================================================

  const projectsList = [

    // ============================================================
    // UI / UX
    // ============================================================

    {
      id: "01",
      title: "Morph",
      category: "UI/UX",
      subtitle:
        "AI-assisted fitness app for personalized workouts",
      tags:
        "PRODUCT DESIGN — FIGMA — MOBILE APP",
      year: "2026",

      // Internal React route
      path: "/projects/morph"
    },

    {
      id: "02",
      title: "Paw Haven",
      category: "UI/UX",
      subtitle:
        "A pet adoption platform connecting animals with loving homes",
      tags:
        "PRODUCT DESIGN — REACTJS — FRONTEND",
      year: "2025",

      link:
        "https://pawhaven-byroel.vercel.app/"
    },

    {
      id: "03",
      title: "USA Forum",
      category: "UI/UX",
      subtitle:
        "A community-driven platform for sharing and discussing ideas",
      tags:
        "UX RESEARCH — FIGMA — MOBILE APP",
      year: "2024",

      link:
        "https://www.figma.com/proto/v4xkM7vdJcViilDusOWGpd/Case-Study-and-Projects?node-id=974-3055&p=f&t=CQ2LGZvJAlFSm8ku-0&scaling=min-zoom&content-scaling=fixed&page-id=969%3A82&starting-point-node-id=974%3A3055"
    },

    {
      id: "04",
      title: "TODO App",
      category: "UI/UX",
      subtitle:
        "A simple and intuitive task management application",
      tags:
        "UX RESEARCH — FIGMA — WEB & MOBILE APP",
      year: "2026",

      link:
        "https://www.figma.com/proto/VrG0C6u9yQKqO7MCbN3LdW/UI-Design-Assessment-Docto?node-id=0-1&p=f&t=V08nAtd8WGX7Vlch-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=64%3A746&show-proto-sidebar=1&fuid=1601835686234775557"
    },

    {
      id: "05",
      title: "Jeepney Routes",
      category: "UI/UX",
      subtitle:
        "A mobile app for commuters to track jeepney routes in real-time",
      tags:
        "UX RESEARCH — REACTJS — FULLSTACK",
      year: "2025",

      link:
        "https://iloilojeepneyroutes.vercel.app/"
    },


    // ============================================================
    // GRAPHIC DESIGN
    // ============================================================

    {
      id: "01",
      title: "Reddit Memes Banner",
      category: "Graphic Design",
      subtitle: "An animated banner featuring neon typography and particle effects",
      tags: "MOTION DESIGN — TYPOGRAPHY — VISUAL EFFECTS",
      year: "2026",
      video: bannerVideo
    },

    {
      id: "02",
      title: "Poster Advocacy",
      category: "Graphic Design",
      subtitle:
        "A collection of experimental poster compositions",
      tags:
        "POSTER — TYPOGRAPHY — COMPOSITION",
      year: "2025",

      image: AntiSmokingAd
    },

    

    {
      id: "03",
      title: "Computer Science Brochure",
      category: "Graphic Design",
      subtitle: "A two-page brochure showcasing computer science",
      tags: "BROCHURE — LAYOUT — EDITORIAL DESIGN",
      year: "2025",
      images: [CSBrochure1, CSBrochure2]
    },

    {
      id: "04",
      title: "Frontend YouTube Thumbnail",
      category: "Graphic Design",
      subtitle: "A custom thumbnail for frontend development content",
      tags: "THUMBNAIL — TYPOGRAPHY — DIGITAL DESIGN",
      year: "2025",
      image: YTThumbnail
    },



    // ============================================================
    // VIDEO
    // ============================================================

    {
      id: "01",
      title: "Pulsar Mouse Campaign Ad",
      category: "Video",
      subtitle: "Campaign advertisement for Pulsar Mouse",
      tags: "VIDEO — EDITING — CAMPAIGN",
      year: "2026",
      video: pulsarMouseVideo
    },

    {
      id: "02",
      title: "Placeholder Title",
      category: "Video",
      subtitle:
        "A placeholder for a placeholder",
      tags:
        "PLACEHOLDER — PLACEHOLDER — STORYTELLING",
      year: "2025",

      link: "#"
    }

  ];

    const filteredProjects = projectsList.filter(
      (project) => project.category === activeCategory
    );


  // ============================================================
  // RENDER
  // ============================================================

  return (

    <div className="selection:bg-black selection:text-white cursor-none">

      {/* ======================================================
          HERO
      ====================================================== */}

      <div
        id="home"
        className="relative h-screen overflow-hidden"
      >

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

        <section id='home' className="absolute inset-0 w-screen h-screen">

          <p
            className="
              absolute
              text-5xl
              -top-2.5
              md:-top-6
              lg:-top-10
              -left-3
              md:-left-8
              font-extrabold
              md:text-8xl
              lg:text-[180px]
              tracking-[-10px]
              md:tracking-[-25px]
            "
          >
            CREATIVE
          </p>


          <p
            className="
              absolute
              top-5
              md:top-11
              lg:top-20
              -left-2
              font-bold
              text-4xl
              md:text-6xl
              lg:text-[100px]
            "
          >
            PORTFOLIO
          </p>


          <div
            className="
              absolute
              inset-0
              md:inset-auto
              flex
              flex-col
              justify-center
              md:w-1/2
              mx-auto
              text-lg
              md:text-xl
              lg:text-2xl
              font-semibold
              md:bottom-0
              md:right-0
              p-5
              md:p-10
              lg:p-25
              text-white
              text-center
              md:text-right
              text-shadow-lg
            "
          >

            <p className="text-5xl md:text-7xl">
              “
            </p>

            <p>
              Design is not just what it looks like and feels like.
              Design is how it works.
            </p>
            

            <p className="text-sm md:text-base mt-2">
              - Steve Jobs
            </p>

          </div>

        </section>

      </div>


      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <nav className="fixed z-50">

        {/* Desktop Navbar */}

        <div
          className="
            hidden
            md:flex
            fixed
            top-5
            left-1/2
            -translate-x-1/2
            items-center
            justify-center
            gap-1
            px-1
            py-1
            bg-[#FFFFFF]/20
            backdrop-blur-md
            border
            border-gray-100/30
            rounded-full
            shadow-lg
            font-semibold
            text-sm
            lg:text-base
            text-black
          "
        >

          <a
            className={`
              px-4
              py-2
              rounded-full
              transition-colors
              active:bg-gray-400/40
              hover:bg-gray-300/30
              ${
                isPastHero
                  ? 'text-black'
                  : 'text-white hover:bg-gray-950/20 active:bg-gray-950/30'
              }
            `}
            href="#home"
          >
            Home
          </a>


          <a
            className={`
              px-4
              py-2
              rounded-full
              transition-colors
              active:bg-gray-400/40
              hover:bg-gray-300/30
              ${
                isPastHero
                  ? 'text-black'
                  : 'text-white hover:bg-gray-950/20 active:bg-gray-950/30'
              }
            `}
            href="#about"
          >
            About
          </a>


          <a
            className={`
              px-4
              py-2
              rounded-full
              transition-colors
              active:bg-gray-400/40
              hover:bg-gray-300/30
              ${
                isPastHero
                  ? 'text-black'
                  : 'text-white hover:bg-gray-950/20 active:bg-gray-950/30'
              }
            `}
            href="#projects"
          >
            Projects
          </a>


          <a
            className={`
              px-4
              py-2
              rounded-full
              transition-colors
              active:bg-gray-400/40
              hover:bg-gray-300/30
              ${
                isPastHero
                  ? 'text-black'
                  : 'text-white hover:bg-gray-950/20 active:bg-gray-950/30'
              }
            `}
            href="#contact"
          >
            Contact
          </a>

        </div>


        {/* Mobile Navbar */}

        <div
          className="
            md:hidden
            fixed
            bottom-6
            right-6
            flex
            flex-col
            items-end
            gap-2
            pointer-events-auto
          "
        >

          {isOpen && (

            <div
              className="
                flex
                flex-col
                items-end
                gap-2
                font-semibold
                text-sm
              "
            >

              <a
                onClick={() => toggleIsOpen(false)}
                className={`
                  px-5
                  py-2.5
                  rounded-full
                  shadow-lg
                  backdrop-blur-md
                  transition-colors
                  border
                  border-gray-100/40
                  ${isPastHero ? 'text-black border-gray-950/5' : 'text-white '}
                `}
                href="#home"
              >
                Home
              </a>


              <a
                onClick={() => toggleIsOpen(false)}
                className={`
                  px-5
                  py-2.5
                  rounded-full
                  shadow-lg
                  backdrop-blur-md
                  transition-colors
                  border
                  border-gray-100/40
                  ${isPastHero ? 'text-black border-gray-950/5' : 'text-white'}
                `}
                href="#about"
              >
                About
              </a>


              <a
                onClick={() => toggleIsOpen(false)}
                className={`
                  px-5
                  py-2.5
                  rounded-full
                  shadow-lg
                  backdrop-blur-md
                  transition-colors
                  border
                  border-gray-100/40
                  ${isPastHero ? 'text-black border-gray-950/5' : 'text-white'}
                `}
                href="#projects"
              >
                Projects
              </a>


              <a
                onClick={() => toggleIsOpen(false)}
                className={`
                  px-5
                  py-2.5
                  rounded-full
                  shadow-lg
                  backdrop-blur-md
                  transition-colors
                  border
                  border-gray-100/40
                  ${isPastHero ? 'text-black border-gray-950/5' : 'text-white'}
                `}
                href="#contact"
              >
                Contact
              </a>

            </div>

          )}


          <button
            onClick={() => toggleIsOpen(!isOpen)}
            className="
              p-4
              rounded-full
              shadow-2xl
              backdrop-blur-md
              bg-[#3C4D23]
              hover:scale-105
              active:scale-95
              transition-all
              duration-300
              flex
              items-center
              justify-center
              text-white
              border-0
              outline-none
              ring-0
            "
            aria-label="Toggle Navigation"
          >

            {isOpen
              ? (
                <IoCloseOutline
                  className="text-2xl text-white"
                />
              )
              : (
                <GiHamburgerMenu
                  className="text-2xl text-white"
                />
              )
            }

          </button>

        </div>

      </nav>


      {/* ======================================================
          ABOUT
      ====================================================== */}

      <section
        id="about"
        className="
          z-30
          min-h-screen
          w-full
          px-5
          md:px-10
          py-16
          flex
          flex-col
          justify-center
        "
      >

        <div className="max-w-6xl mx-auto w-full">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* LEFT */}

            <div
              className="
                lg:col-span-5
                bg-gray-50
                backdrop-blur-md
                hover:shadow-lg/5
                rounded-3xl
                p-6
                md:p-8
                flex
                flex-col
                justify-between
                transition-all
                ease-in-out
                duration-300
              "
            >

              <div>

                <h1
                  className="
                    text-3xl
                    md:text-4xl
                    lg:text-4xl
                    font-extrabold
                    tracking-tight
                  "
                >
                  Roel Docto Jr
                </h1>


                <h2
                  className="
                    text-lg
                    md:text-xl
                    font-medium
                    mt-2
                    opacity-80
                  "
                >
                  Designer & Developer
                </h2>


                <div className="w-full h-[1px] bg-black/10 my-6" />


                <div
                  className="
                    space-y-3
                    text-sm
                    md:text-base
                    text-black/80
                  "
                >

                  <p>
                    Computer Science Graduate with a strong
                    foundation in Human-Computer Interaction.
                  </p>

                  <p>
                    I also like dogs, especially weeeeeeiners
                  </p>

                </div>

              </div>

            </div>


            {/* RIGHT */}

            <div
              className="
                lg:col-span-7
                flex
                flex-col
                gap-6
              "
            >

              {/* EXPERIENCE */}

              <div
                className="
                  bg-gray-50
                  backdrop-blur-md
                  hover:shadow-lg/5
                  rounded-3xl
                  p-6
                  md:p-8
                  transition-all
                  ease-in-out
                  duration-300
                "
              >

                <h3
                  className="
                    text-xs
                    md:text-sm
                    font-semibold
                    opacity-60
                    mb-2
                  "
                >
                  Experience
                </h3>


                <header
                  className="
                    text-xl
                    md:text-2xl
                    font-bold
                  "
                >
                  Software Developer Intern
                </header>


                <div
                  className="
                    flex
                    justify-between
                    items-center
                    mb-4
                    text-xs
                    md:text-sm
                    opacity-60
                  "
                >

                  <span>
                    Waffle Time Group of Companies
                  </span>

                  <span>
                    Feb 2026 - Apr 2026
                  </span>

                </div>


                <div className="w-full h-[1px] bg-black/10 my-4" />


                <p
                  className="
                    text-sm
                    md:text-base
                    text-black/80
                  "
                >
                  Contributed to the user-centric frontend
                  development of a responsive loyalty web
                  application, translating complex user goals
                  into intuitive, WCAG-compliant UI components
                  using TailwindCSS and SvelteKit.
                </p>

              </div>


              


              {/* DACHSHUND + TOOLS */}

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-6
                "
              >

                {/* DACHSHUND */}

                <div
                  className="
                    bg-gray-50
                    backdrop-blur-md
                    hover:shadow-xl/5
                    rounded-3xl
                    p-1
                    flex
                    flex-col
                    items-center
                    justify-center
                    relative
                    overflow-hidden
                    aspect-square
                    transition-all
                    ease-in-out
                    duration-300
                  "
                >

                  {dachshundImg ? (

                    <div
                      className="
                        absolute
                        inset-3
                        rounded-xl
                        overflow-hidden
                        shadow
                        transition-all
                      "
                    >

                      <img
                        src={dachshundImg}
                        alt="Random Dachshund"
                        className="
                          w-full
                          h-full
                          object-cover
                          transition-opacity
                          duration-500
                        "
                      />


                      <div
                        key={dachshundImg}
                        className="
                          absolute
                          bottom-0
                          left-0
                          h-[5px]
                          bg-black/70
                          animate-[shrink_6s_linear_infinite]
                        "
                      />

                    </div>

                  ) : (

                    <p
                      className="
                        text-xs
                        text-black/50
                        font-mono
                      "
                    >
                      Loading weeeeeeiners...
                    </p>

                  )}

                </div>


                {/* TOOLS */}

                <div
                  className="
                    backdrop-blur-md
                    rounded-3xl
                    p-6
                    flex
                    flex-col
                  "
                >

                  <h3
                    className="
                      text-xs
                      md:text-sm
                      font-semibold
                      uppercase
                      tracking-wider
                      opacity-60
                    "
                  >
                    Tools
                  </h3>


                  <div className="w-full h-[1px] bg-black/10 my-4" />


                  <div
                    className="
                      grid
                      grid-cols-2
                      gap-3
                      text-xs
                      md:text-sm
                      h-full
                    "
                  >

                    <p className="flex items-center gap-2">
                      <IoLogoFigma className="text-5xl" />
                      Figma
                    </p>

                    <p className="flex items-center gap-2">
                      <CgFramer className="text-5xl" />
                      Framer
                    </p>

                    <p className="flex items-center gap-2">
                      <FaQuestionCircle className="text-5xl" />
                      Canva
                    </p>

                    <p className="flex items-center gap-2">
                      <FaWordpress className="text-5xl" />
                      WordPress
                    </p>

                    <p className="flex items-center gap-2">
                      <IoLogoJavascript className="text-5xl" />
                      JavaScript
                    </p>

                    <p className="flex items-center gap-2">
                      <FaReact className="text-5xl" />
                      ReactJS
                    </p>

                    <p className="flex items-center gap-2">
                      <RiTailwindCssFill className="text-5xl" />
                      TailwindCSS
                    </p>

                  </div>

                </div>

                

              </div>

              {/* EDUCATION */}

              <div
                className="
                  bg-gray-50
                  backdrop-blur-md
                  hover:shadow-lg/5
                  rounded-3xl
                  p-6
                  md:p-8
                  transition-all
                  ease-in-out
                  duration-300
                "
              >

                <h3
                  className="
                    text-xs
                    md:text-sm
                    font-semibold
                    opacity-60
                    mb-2
                  "
                >
                  Education
                </h3>


                <header
                  className="
                    text-xl
                    md:text-2xl
                    font-bold
                  "
                >
                  University of San Agustin
                </header>


                <div
                  className="
                    flex
                    justify-between
                    items-center
                    mb-4
                    text-xs
                    md:text-sm
                    opacity-60
                  "
                >

                  <span>
                    BS in Computer Science
                  </span>

                  <span>
                    2022 - 2026
                  </span>

                </div>

                <div className="w-full h-[1px] bg-black/10 my-4" />

                <p
                  className="
                    text-sm
                    md:text-base
                    text-black/80
                  "
                >
                  Software Engineering, Data Structures and
                  Algorithms, SDLC, Web Design, Web Development,
                  Graphic Design, UI/UX, Human-Computer
                  Interaction
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          SKILLS
      ====================================================== */}

      <section
        className="
          z-30
          w-full
          px-5
          md:px-10
          py-6
        "
      >

        <div
          className="
            max-w-6xl
            mx-auto
            w-full
            bg-gray-50
            backdrop-blur-md
            rounded-3xl
            p-6
            md:p-8
            flex
            flex-col
            md:flex-row
            justify-between
            md:gap-10
            items-center
          "
        >

          <h3
            className="
              text-lg
              md:text-xl
              font-semibold
              mb-4
              md:mb-0
            "
          >
            Skills
          </h3>


          <div
            className="
              flex-1
              grid
              grid-cols-2
              sm:grid-cols-4
              gap-3
              text-sm
              md:text-base
              opacity-90
              w-full
            "
          >

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


      {/* ======================================================
          PROJECTS
      ====================================================== */}

      <section
        id="projects"
        className="
          z-30
          w-full
          px-5
          md:px-10
          py-16
        "
      >

        <div className="max-w-6xl mx-auto w-full">

          {/* ====================================================
              CATEGORY FILTER
          ==================================================== */}

          <div className="flex flex-wrap gap-2 mb-10">

            {["UI/UX", "Graphic Design", "Video"].map((category) => (

              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  text-sm
                  md:text-lg
                  font-semibold
                  tracking-wider
                  p-2
                  px-4
                  rounded-full
                  transition-all
                  duration-300
                  cursor-pointer

                  ${
                    activeCategory === category
                      ? "bg-black text-white"
                      : "bg-transparent text-black/60 hover:bg-black/10"
                  }
                `}
              >
                {category}
              </button>

            ))}

          </div>


          {/* ====================================================
              PROJECT LIST
          ==================================================== */}

          <div className="border-t border-black/20">

            {filteredProjects.map((project) => {

              // Render video projects directly in the section
              
              {/* MEDIA PROJECTS: VIDEOS, IMAGES, AND CAROUSELS */}

              if (
                project.video ||
                project.image ||
                project.images?.length > 0
              ) {
                const images = project.images || (project.image ? [project.image] : []);
                const activeSlide = activeSlides[project.title] || 0;

                return (
                  <div
                    key={`${activeCategory}-${project.id}`}
                    className="border-b border-black/20 py-8 md:py-12"
                  >
                    {/* Project details */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
                      <div>
                        <p className="text-xs font-mono text-black/50 mb-2">
                          {project.id} / {project.year}
                        </p>

                        <h3 className="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight">
                          {project.title}
                        </h3>

                        <p className="text-sm md:text-base text-black/70 mt-2">
                          {project.subtitle}
                        </p>
                      </div>

                      <span className="text-xs font-mono text-black/60 tracking-wider">
                        {project.tags}
                      </span>
                    </div>

                    {/* Video display */}
                    {project.video && (
                      <div className="w-full overflow-hidden rounded-2xl bg-black">
                        <video
                          className="block w-full h-auto"
                          src={project.video}
                          controls
                          playsInline
                          preload="metadata"
                        >
                          Your browser does not support video playback.
                        </video>
                      </div>
                    )}

                    {/* Image display and optional carousel */}
                    {images.length > 0 && (
                      <div className="relative w-full md:max-w-6xl mx-auto overflow-hidden rounded-2xl bg-gray-100">
                        <img
                          src={images[activeSlide]}
                          alt={project.title}
                          className="block w-full h-auto object-contain"
                        />

                        {/* Show carousel controls only when there are multiple images */}
                        {images.length > 1 && (
                          <>
                            <button
                              type="button"
                              onClick={() =>
                                setActiveSlides((prev) => ({
                                  ...prev,
                                  [project.title]:
                                    (activeSlide - 1 + images.length) % images.length
                                }))
                              }
                              aria-label="Previous image"
                              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white text-2xl hover:bg-black/80 transition-colors"
                            >
                              ‹
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                setActiveSlides((prev) => ({
                                  ...prev,
                                  [project.title]:
                                    (activeSlide + 1) % images.length
                                }))
                              }
                              aria-label="Next image"
                              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white text-2xl hover:bg-black/80 transition-colors"
                            >
                              ›
                            </button>

                            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 text-white text-xs px-3 py-1">
                              {activeSlide + 1} / {images.length}
                            </span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              }


              const projectContent = (

                <>

                  {/* ============================================
                      LEFT SIDE
                  ============================================ */}

                  <div
                    className="
                      flex
                      items-start
                      md:items-center
                      gap-4
                      md:gap-16
                      min-w-0
                    "
                  >

                    {/* Project number */}

                    <span
                      className="
                        text-xs
                        md:text-sm
                        font-mono
                        text-black/60
                        pt-2
                        md:pt-0
                        flex-shrink-0
                      "
                    >
                      {project.id}
                    </span>


                    {/* Title + description */}

                    <div className="min-w-0">

                      <h3
                        className="
                          text-3xl
                          sm:text-4xl
                          md:text-5xl
                          lg:text-7xl
                          font-extrabold
                          tracking-tight
                          group-hover:translate-x-2
                          transition-transform
                          duration-300
                          break-words
                        "
                      >
                        {project.title}
                      </h3>


                      <p
                        className="
                          text-xs
                          sm:text-sm
                          md:text-base
                          text-black/70
                          mt-1
                        "
                      >
                        {project.subtitle}
                      </p>

                    </div>

                  </div>


                  {/* ============================================
                      RIGHT SIDE
                  ============================================ */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      md:justify-end
                      gap-4
                      md:gap-16
                      mt-2
                      md:mt-0
                      w-full
                      md:w-auto
                      min-w-0
                    "
                  >

                    {/* Tags */}

                    <span
                      className="
                        text-[10px]
                        sm:text-xs
                        md:text-sm
                        font-mono
                        text-black/60
                        tracking-wider
                        break-words
                      "
                    >
                      {project.tags}
                    </span>


                    {/* Year + Arrow */}

                    <div
                      className="
                        flex
                        items-center
                        gap-4
                        md:gap-16
                        flex-shrink-0
                      "
                    >

                      <span
                        className="
                          text-xs
                          sm:text-sm
                          md:text-lg
                          font-mono
                          font-medium
                          tracking-tighter
                        "
                      >
                        {project.year}
                      </span>


                      <div
                        className="
                          w-8
                          h-8
                          md:w-10
                          md:h-10
                          rounded-full
                          border
                          border-black/30
                          flex
                          items-center
                          justify-center
                          group-hover:bg-black
                          group-hover:text-white
                          transition-all
                          duration-300
                          flex-shrink-0
                        "
                      >

                        <HiArrowUpRight
                          className="
                            text-sm
                            md:text-lg
                          "
                        />

                      </div>

                    </div>

                  </div>

                </>

              );


              /* ==================================================
                INTERNAL PROJECT
              ================================================== */

              if (project.path) {

                return (

                  <Link
                    key={`${activeCategory}-${project.id}`}
                    to={project.path}
                    className="
                      group
                      relative
                      flex
                      flex-col
                      md:flex-row
                      md:items-center
                      justify-between
                      py-8
                      md:py-12
                      border-b
                      border-black/20
                      cursor-pointer
                      transition-all
                      duration-300
                      hover:bg-white/10
                      px-2
                      md:px-4
                      gap-4
                      md:gap-0
                      overflow-hidden
                    "
                  >

                    {projectContent}

                  </Link>

                );

              }


              /* ==================================================
                EXTERNAL PROJECT
              ================================================== */

              return (

                <a
                  key={`${activeCategory}-${project.id}`}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    relative
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    justify-between
                    py-8
                    md:py-12
                    border-b
                    border-black/20
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:bg-white/10
                    px-2
                    md:px-4
                    gap-4
                    md:gap-0
                    overflow-hidden
                  "
                >

                  {projectContent}

                </a>

              );

            })}

          </div>

        </div>

      </section>


      {/* ======================================================
          CONTACT / FOOTER
      ====================================================== */}

      <footer
        id="contact"
        className="relative w-full overflow-hidden bg-[#F5F5F0] text-black"
      >
        <div className="relative z-10 max-w-6xl mx-auto w-full">

          {/* Main footer content */}
          <div className="py-16 md:py-20 lg:py-24">

            {/* Intro text */}
            <p className="max-w-xl font-serif italic text-2xl leading-tight tracking-tight md:text-3xl lg:text-4xl">
              Have something worth
              <br />
              building? Let’s make it feel
              <br />
              inevitable.
            </p>

            {/* Oversized email heading */}
            <a
              className="group mt-12 block w-fit max-w-full"
            >
              <span className="block text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.85] tracking-[-0.075em] text-black/40 transition-colors duration-300 group-hover:text-black/60">
                DESIGNS
              </span>

              <span className="block break-words text-[clamp(2.5rem,8.2vw,7.5rem)] font-black leading-[0.9] tracking-[-0.075em]">
                BYROEL
              </span>
            </a>

            {/* Social and contact links */}
            <div className="mt-16 grid grid-cols-2 border-t border-black/70 md:grid-cols-3 lg:grid-cols-5">

              <a
                href="mailto:roeldocto8@gmail.com"
                className="border-b border-black/20 py-5 pr-4 transition-opacity hover:opacity-50 md:border-r md:pr-6 lg:border-b-0"
              >
                <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-black/50">
                  Email
                </p>
                <p className="text-xs font-medium md:text-sm">
                  roeldocto8@gmail.com ↗
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/roeldoctojr/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-black/20 py-5 pl-4 transition-opacity hover:opacity-50 md:border-r md:px-6 lg:border-b-0"
              >
                <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-black/50">
                  LinkedIn
                </p>
                <p className="text-xs font-medium md:text-sm">
                  /in/roeldoctojr ↗
                </p>
              </a>

              <a
                href="https://dribbble.com/roeldocto"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-black/20 py-5 pr-4 transition-opacity hover:opacity-50 md:border-r md:pl-6 lg:border-b-0"
              >
                <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-black/50">
                  Dribbble
                </p>
                <p className="text-xs font-medium md:text-sm">
                  @roeldocto ↗
                </p>
              </a>

              <a
                href="https://github.com/roeldocto"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-black/20 py-5 pl-4 transition-opacity hover:opacity-50 lg:border-b-0 lg:border-r lg:pl-6 lg:pr-6"
              >
                <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-black/50">
                  GitHub
                </p>
                <p className="text-xs font-medium md:text-sm">
                  @roelmaoo ↗
                </p>
              </a>

              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 py-5 transition-opacity hover:opacity-50 md:col-span-1 md:pl-6"
              >
                <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-black/50">
                  Read.cv
                </p>
                <p className="text-xs font-medium md:text-sm">
                  /roeldoctojr ↗
                </p>
              </a>

            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-5 border-t border-black/20 py-6 font-mono text-[9px] uppercase tracking-[0.18em] text-black/50 md:flex-row md:items-center md:justify-between">

            <p>© 2026 Roel Docto Jr</p>

            <p className="text-left md:text-center">
              Built with React · Tailwind CSS · Designed with intention
            </p>

            <a
              href="#home"
              className="w-fit transition-colors hover:text-black"
            >
              Back to top ↑
            </a>

          </div>
        </div>
      </footer>

    </div>

  );
}


// ============================================================
// APP / ROUTER
// ============================================================

export default function App() {

  return (
  
    <BrowserRouter>
      <CustomCursor />
      <ScrollManager />
      <Routes>

        {/* Main portfolio */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* Morph Project */}

        <Route
          path="/projects/morph"
          element={<ProjectMorph />}
        />

      </Routes>

    </BrowserRouter>

  );

}
