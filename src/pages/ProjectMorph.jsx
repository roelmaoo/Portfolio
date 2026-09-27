export default function ProjectMorph() {
  return (
    <main className="bg-[#F4FDC2] text-black">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="min-h-screen px-6 md:px-10 py-8">


        {/* Hero */}
        
        <div className="max-w-6xl mx-auto md:pt-12 ">
          
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm hover:underline pb-12"
          >
            &larr; Back to portfolio
          </a>

          <p className="text-sm font-mono opacity-60 mb-4">
            01 / PRODUCT DESIGN
          </p>

          <h1 className="text-[15vw] md:text-[10vw] font-extrabold tracking-tighter leading-[0.8]">
            Morph
          </h1>

          <p className="text-xl md:text-3xl max-w-2xl mt-10">
            An AI-assisted fitness app designed to create
            personalized workouts based on the user's goals,
            preferences, and progress.
          </p>

        </div>

        {/* Project metadata */}
        <div className="max-w-6xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/20 pt-6">

          <div>
            <p className="text-xs opacity-50 uppercase">
              Role
            </p>
            <p className="mt-2">
              Product Designer
            </p>
          </div>

          <div>
            <p className="text-xs opacity-50 uppercase">
              Year
            </p>
            <p className="mt-2">
              2026
            </p>
          </div>

          <div>
            <p className="text-xs opacity-50 uppercase">
              Tools
            </p>
            <p className="mt-2">
              Figma
            </p>
          </div>

          <div>
            <p className="text-xs opacity-50 uppercase">
              Type
            </p>
            <p className="mt-2">
              Mobile App
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          COVER IMAGE
      ===================================================== */}

      <section className="px-6 md:px-10">

        <div className="max-w-6xl mx-auto">

          <div className="rounded-3xl overflow-hidden bg-black aspect-video">
            {/* Put your main Morph mockup/image here */}

            <img
              src="/images/morph-cover.png"
              alt="Morph app"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="max-w-4xl mx-auto px-6 py-32">

        <p className="text-sm font-mono opacity-50 mb-6">
          01 — OVERVIEW
        </p>

        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          What is Morph?
        </h2>

        <div className="mt-10 text-lg md:text-xl leading-relaxed space-y-6">

          <p>
            Morph is a fitness application focused on creating
            personalized workout experiences for users.
          </p>

          <p>
            Instead of providing the same workout experience
            to everyone, the concept explores how an AI-assisted
            system could adapt workouts based on individual
            goals, preferences, and progress.
          </p>

        </div>

      </section>


      {/* =====================================================
          THE PROBLEM
      ===================================================== */}

      <section className="bg-black text-white px-6 md:px-10 py-32">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm font-mono opacity-50 mb-6">
            02 — THE PROBLEM
          </p>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl">
            Fitness apps can feel too generic.
          </h2>

          <p className="mt-10 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
            Many workout experiences rely on predefined routines.
            This can make it difficult for users to find workouts
            that actually fit their individual needs and goals.
          </p>

        </div>

      </section>


      {/* =====================================================
          GOAL
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-32">

        <div className="grid md:grid-cols-2 gap-16">

          <div>
            <p className="text-sm font-mono opacity-50 mb-6">
              03 — THE GOAL
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Make workouts feel personal.
            </h2>
          </div>

          <div className="text-lg leading-relaxed">

            <p>
              The goal of Morph was to explore a more personalized
              fitness experience where the application could adapt
              to the user rather than forcing the user to adapt
              to a predefined workout.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          RESEARCH
      ===================================================== */}

      <section className="px-6 md:px-10 py-32 bg-white">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm font-mono opacity-50 mb-6">
            04 — RESEARCH
          </p>

          <h2 className="text-5xl md:text-7xl font-bold">
            Understanding the user
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mt-16">

            <div>
              <h3 className="text-2xl font-bold">
                Research Question
              </h3>

              <p className="mt-4 text-lg leading-relaxed">
                What would make a personalized fitness experience
                feel useful rather than overwhelming?
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Key Findings
              </h3>

              <ul className="mt-4 space-y-3 text-lg">
                <li>→ Finding the right workout can be difficult.</li>
                <li>→ Users have different fitness goals.</li>
                <li>→ Progress should influence future workouts.</li>
              </ul>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          USER FLOW
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-32">

        <p className="text-sm font-mono opacity-50 mb-6">
          05 — USER FLOW
        </p>

        <h2 className="text-5xl md:text-7xl font-bold">
          From goal to workout
        </h2>

        <p className="max-w-2xl mt-8 text-lg leading-relaxed">
          The experience was structured around a simple flow:
          understand the user, generate an appropriate workout,
          complete it, and use the resulting progress to inform
          future recommendations.
        </p>

        {/* Flow diagram/image */}
        <div className="mt-16 rounded-3xl bg-gray-100 p-8">

          <img
            src="/images/morph-user-flow.png"
            alt="Morph user flow"
            className="w-full"
          />

        </div>

      </section>


      {/* =====================================================
          WIREFRAMES
      ===================================================== */}

      <section className="bg-gray-100 px-6 md:px-10 py-32">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm font-mono opacity-50 mb-6">
            06 — EXPLORATION
          </p>

          <h2 className="text-5xl md:text-7xl font-bold">
            From rough ideas to structure
          </h2>

          <p className="max-w-2xl mt-8 text-lg leading-relaxed">
            Early wireframes were used to explore the structure
            of the application before moving into the visual
            design stage.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-16">

            <img
              src="/images/morph-wireframe-1.png"
              alt="Morph wireframe"
              className="rounded-2xl"
            />

            <img
              src="/images/morph-wireframe-2.png"
              alt="Morph wireframe"
              className="rounded-2xl"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          VISUAL DESIGN
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-32">

        <p className="text-sm font-mono opacity-50 mb-6">
          07 — VISUAL DESIGN
        </p>

        <h2 className="text-5xl md:text-7xl font-bold">
          Building the visual language
        </h2>

        <p className="max-w-2xl mt-8 text-lg leading-relaxed">
          The visual direction was designed to make the experience
          feel approachable, modern, and focused while keeping the
          interface easy to navigate.
        </p>

        {/* Big UI image */}
        <div className="mt-16 rounded-3xl overflow-hidden">

          <img
            src="/images/morph-ui.png"
            alt="Morph UI design"
            className="w-full"
          />

        </div>

      </section>


      {/* =====================================================
          FINAL DESIGN
      ===================================================== */}

      <section className="bg-[#3C4D23] text-white px-6 md:px-10 py-32">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm font-mono text-white/50 mb-6">
            08 — FINAL DESIGN
          </p>

          <h2 className="text-5xl md:text-8xl font-bold tracking-tight">
            Meet Morph.
          </h2>

          <p className="max-w-2xl mt-8 text-lg md:text-xl text-white/70">
            The final interface brings together the research,
            user flow, and visual design into a single fitness
            experience.
          </p>

          {/* Screenshots */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">

            <img
              src="/images/morph-screen-1.png"
              alt="Morph screen"
              className="rounded-3xl"
            />

            <img
              src="/images/morph-screen-2.png"
              alt="Morph screen"
              className="rounded-3xl"
            />

            <img
              src="/images/morph-screen-3.png"
              alt="Morph screen"
              className="rounded-3xl"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          PROTOTYPE
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-32">

        <div className="border-t border-black/20 pt-10">

          <p className="text-sm font-mono opacity-50">
            09 — PROTOTYPE
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-6">
            Try the prototype
          </h2>

          <p className="mt-6 max-w-xl text-lg">
            Explore the complete Morph experience through the
            interactive Figma prototype.
          </p>

          <a
            href="https://www.figma.com/proto/x3P8rO1rJRJR296ZNZDA9a/Portfolio?timeline=keyframe&node-id=773-226&t=3mx10W6rCpjTn6Mn-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=773%3A226"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              mt-8
              px-6
              py-3
              rounded-full
              bg-black
              text-white
              hover:scale-105
              transition-transform
            "
          >
            View Figma Prototype ↗
          </a>

        </div>

      </section>


      {/* =====================================================
          REFLECTION
      ===================================================== */}

      <section className="bg-black text-white px-6 md:px-10 py-32">

        <div className="max-w-4xl mx-auto">

          <p className="text-sm font-mono text-white/50 mb-6">
            10 — REFLECTION
          </p>

          <h2 className="text-5xl md:text-7xl font-bold">
            What I learned
          </h2>

          <div className="mt-10 space-y-6 text-lg md:text-xl text-white/70 leading-relaxed">

            <p>
              This project helped me understand how important it
              is to connect the interface to the actual needs of
              the user rather than designing screens in isolation.
            </p>

            <p>
              It also gave me an opportunity to explore how
              personalization could influence the experience of
              a fitness application.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEXT PROJECT
      ===================================================== */}

      <section className="px-6 md:px-10 py-32">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm opacity-50">
            NEXT PROJECT
          </p>

          <a
            href="/"
            className="
              group
              block
              mt-6
              border-t
              border-black/20
              pt-8
            "
          >

            <div className="flex justify-between items-center">

              <h2 className="text-4xl md:text-7xl font-bold group-hover:translate-x-2 transition-transform">
                Paw Haven
              </h2>

              <span className="text-3xl">
                ↗
              </span>

            </div>

          </a>

        </div>

      </section>

    </main>
  );
}