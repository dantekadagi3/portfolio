import Image from "next/image";
import AboutCard from "./components/AboutCards";
import MyForm from "./components/MyForm";
import ProjectCard from "./components/ProjectCard";
import SkillsCard from "./components/SkillsCard";
import TypeWriter from "./components/TypeWriter";

export default function Home() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">

      {/* ── Hero Section ── */}
      <section
        id="Home"
        className="relative min-h-screen flex items-center justify-center px-6 text-white"
        style={{ backgroundImage: "url('/mybg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-black/90" />

        <div className="relative text-center max-w-3xl z-10 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-[#161B22] border border-[#21262d] rounded-lg px-4 py-2 mb-8 font-mono text-sm">
            <span className="text-gray-500">~/portfolio</span>
            <span className="text-[#00FFB3]">$</span>
            <span className="text-gray-300">whoami</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Dante <span className="text-[#00FFB3]">Kadagi</span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-300 font-mono mb-6 h-8">
            <TypeWriter
              words={["Frontend Developer", "Mobile Developer", "Fintech Enthusiast", "UI/UX Advocate"]}
            />
          </div>

          <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Junior software engineer passionate about building high-quality software
            and exploring the fintech space. Based in Nairobi, Kenya.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#Projects"
              className="px-6 py-3 bg-[#00FFB3] text-black font-semibold rounded-lg border-2 border-transparent hover:bg-transparent hover:text-[#00FFB3] hover:border-[#00FFB3] transition duration-300"
            >
              View My Work
            </a>
            <a
              href="/Dante_Kadagi_CV.pdf"
              download
              className="px-6 py-3 border-2 border-[#00FFB3] text-[#00FFB3] font-semibold rounded-lg hover:bg-[#00FFB3] hover:text-black transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="About" className="bg-[#121212] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-bold text-[#00FFB3] mb-12">About Me</h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="relative w-[280px] h-[280px] shrink-0">
              <Image
                src="/Dante.jpeg"
                alt="Dante Kadagi"
                fill
                className="rounded-full border-2 border-[#00FFB3] object-cover object-top"
                priority
              />
            </div>

            <div className="flex flex-col items-start text-left">
              <h3 className="text-xl font-semibold mb-4 text-[#00FFB3]">Junior Software Engineer</h3>
              <p className="text-gray-300 leading-relaxed max-w-xl text-base mb-4">
                Computer Science student at Dedan Kimathi University of Technology, passionate about
                building high-quality software and exploring the fintech space. I value communication,
                collaboration, and continuous learning.
              </p>
              <p className="text-gray-400 leading-relaxed max-w-xl text-base mb-8">
                Currently building fintech tools including a{" "}
                <span className="text-[#00FFB3]">goal-based FV saving system</span> and a{" "}
                <span className="text-[#00FFB3]">bond analysis system</span> to deepen my expertise
                in financial technology.
              </p>

              <div className="flex gap-6 mb-8">
                <AboutCard value={7} description="Projects Completed" />
                <AboutCard value={3} description="Roles Held" />
              </div>

              <a
                href="/Dante_Kadagi_CV.pdf"
                download
                className="inline-block px-6 py-3 bg-[#00FFB3] text-black font-semibold rounded-lg border-2 border-transparent hover:bg-transparent hover:text-[#00FFB3] hover:border-[#00FFB3] transition duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience Section ── */}
      <section id="Experience" className="py-20 px-6 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-4xl font-bold text-[#00FFB3] mb-12">Experience</h2>

          <div className="relative border-l-2 border-[#00FFB3]/25 ml-3 space-y-10">

            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#00FFB3] ring-4 ring-[#00FFB3]/20" />
              <div className="timeline-card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h3 className="text-lg font-bold text-white">Frontend &amp; Mobile Developer</h3>
                  <span className="text-sm text-[#00FFB3] font-mono mt-1 md:mt-0">Oct 2025 – Jan 2026</span>
                </div>
                <p className="text-[#00FFB3]/70 text-sm font-semibold mb-3">AgriLens · Scholarly Project · Nairobi, Kenya</p>
                <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                  <li>Built a responsive, mobile-first plant disease detection system using Next.js (web) and React Native (mobile)</li>
                  <li>Integrated backend APIs in collaboration with the backend team, enabling accurate data flow and application functionality</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Next.js", "React Native", "Python", "AI/ML"].map((t) => (
                    <span key={t} className="skill-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#00FFB3] ring-4 ring-[#00FFB3]/20" />
              <div className="timeline-card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h3 className="text-lg font-bold text-white">Fellow &amp; Frontend Developer</h3>
                  <span className="text-sm text-[#00FFB3] font-mono mt-1 md:mt-0">Mar 2025 – Nov 2025</span>
                </div>
                <p className="text-[#00FFB3]/70 text-sm font-semibold mb-3">KamiLimu · Fellowship · Nairobi, Kenya</p>
                <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                  <li>Selected among 36 mentees for KamiLimu, a non-profit empowering students through technical, professional, and human skills mentorship</li>
                  <li>Served as frontend developer on the Bookstore case study in partnership with QUIKK API — integrated payment processing features</li>
                  <li>Gained skills in professional development, responsible innovation, and industry-relevant ICT</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Next.js", "Supabase", "QUIKK API", "Payments"].map((t) => (
                    <span key={t} className="skill-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#00FFB3] ring-4 ring-[#00FFB3]/20" />
              <div className="timeline-card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h3 className="text-lg font-bold text-white">Frontend Developer &amp; Instructor (Intern)</h3>
                  <span className="text-sm text-[#00FFB3] font-mono mt-1 md:mt-0">Jan 2025 – Apr 2025</span>
                </div>
                <p className="text-[#00FFB3]/70 text-sm font-semibold mb-3">The Cube Innovation Hub · Eldoret, Kenya</p>
                <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                  <li>Led beginner-level web development instruction for 15+ students — HTML, CSS, and JavaScript, helping them build their first websites</li>
                  <li>Built a fully functional, responsive website for The Cube Innovation Academy showcasing programs, mentors, and application forms</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "Next.js", "TailwindCSS"].map((t) => (
                    <span key={t} className="skill-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Featured Projects Section ── */}
      <section id="Projects" className="py-20 px-6 bg-[#121212]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-bold text-[#00FFB3] mb-12">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="AgriLens"
              description="AI-powered web and mobile application for farmers to detect crop diseases early and get actionable insights on improving crop health."
              image="/agrilens.png"
              tags={["Next.js", "React Native", "Python", "AI/ML"]}
              link="https://agrilens-frontend.vercel.app"
            />
            <ProjectCard
              title="Finance Flow"
              description="Upload financial documents and have them broken down in plain language — built to make financial literacy more accessible to everyday users."
              image="/finance-flow.png"
              tags={["Next.js", "Django", "in progress"]}
              link="https://finance-flow-mu.vercel.app/"
            />
            <ProjectCard
              title="BookStore"
              description="Online book purchase platform built to integrate the QUIKK API payment suite — developed as part of the KamiLimu fellowship case study."
              image="/books.png"
              tags={["Next.js", "Supabase", "QUIKK API", "in progress"]}
              link="#"
            />
            <ProjectCard
              title="Tidy-Now"
              description="MVP connecting clients and cleaning companies via a rule-based bot that routes bookings to an admin dashboard and sends SMS notifications — no WhatsApp required."
              image="/tidyNow.png"
              tags={["Next.js", "TypeScript", "PostgreSQL"]}
              link="https://tidy-now.vercel.app/"
            />
            <ProjectCard
              title="Itinerary Tracker"
              description="Lightweight travel itinerary tracker with PostgreSQL for data persistence — demonstrates practical database design and full-stack development skills."
              image="/itenary.png"
              tags={["Next.js", "TypeScript", "PostgreSQL"]}
              link="https://itinerary-tracker.vercel.app"
            />
            <ProjectCard
              title="Marie Stopes Prototype"
              description="Responsive website prototype for Marie Stopes Kenya, built with Next.js and TailwindCSS."
              image="/marrie.png"
              tags={["Next.js", "TailwindCSS"]}
              link="https://v0-marie-stopes-website.vercel.app/"
            />
          </div>
        </div>
      </section>

      {/* ── Skills Section ── */}
      <section id="Skills" className="py-20 px-6 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-bold text-[#00FFB3] mb-12">
            Skills &amp; Technologies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <SkillsCard
              title="Frontend"
              icon="/frontend.png"
              technologies={["HTML", "CSS", "React.js", "Next.js", "TailwindCSS"]}
            />
            <SkillsCard
              title="Mobile"
              icon="/backend.png"
              technologies={["React Native", "Mobile-first Design", "Responsive UI"]}
            />
            <SkillsCard
              title="Languages"
              icon="/db.png"
              technologies={["Python", "JavaScript", "TypeScript", "SQL"]}
            />
            <SkillsCard
              title="Tools &amp; DB"
              icon="/cloud.png"
              technologies={["Git", "GitHub", "MySQL", "SQLite", "PostgreSQL"]}
            />
          </div>
        </div>
      </section>

      {/* ── Education & Certifications ── */}
      <section className="py-16 px-6 bg-[#121212]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-4xl font-bold text-[#00FFB3] mb-12">
            Education &amp; Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="timeline-card">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#00FFB3] shrink-0" />
                <div>
                  <h3 className="font-bold text-white">BSc Computer Science</h3>
                  <p className="text-[#00FFB3]/70 text-sm mt-1">Dedan Kimathi University of Technology</p>
                  <p className="text-gray-500 text-xs mt-1 font-mono">2023 – Expected 2026 · Nyeri, Kenya</p>
                </div>
              </div>
            </div>

            <div className="timeline-card">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#00FFB3] shrink-0" />
                <div>
                  <h3 className="font-bold text-white">Kenya Certificate of Secondary Education</h3>
                  <p className="text-[#00FFB3]/70 text-sm mt-1">Alliance Girls&apos; High School</p>
                  <p className="text-gray-500 text-xs mt-1 font-mono">2018 – 2022 · Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="timeline-card">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#00FFB3] shrink-0" />
                <div>
                  <h3 className="font-bold text-white">Programming with JavaScript</h3>
                  <p className="text-[#00FFB3]/70 text-sm mt-1">Coursera · Certificate</p>
                  <p className="text-gray-500 text-xs mt-1 font-mono">April 2024</p>
                </div>
              </div>
            </div>

            <div className="timeline-card">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#00FFB3] shrink-0" />
                <div>
                  <h3 className="font-bold text-white">KamiLimu Tech Fellowship</h3>
                  <p className="text-[#00FFB3]/70 text-sm mt-1">KamiLimu Non-Profit · Cohort 2025</p>
                  <p className="text-gray-500 text-xs mt-1 font-mono">Mar – Nov 2025 · Selected: 36 mentees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section id="Contact" className="bg-[var(--background)] text-white py-20 px-8">
        <div>
          <h2 className="text-center text-4xl font-bold text-[#00FFB3] mb-12">Get in Touch</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold">Let&apos;s work together</h2>
            <p className="mt-2 text-gray-400">
              I&apos;m always open to discussing new opportunities and exciting projects.
              Feel free to reach out if you&apos;d like to collaborate!
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <Image src="/mail.png" alt="Email" width={24} height={24} className="mr-3" />
                <span className="text-gray-300">dantekadagi3@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Image src="/phone.png" alt="Phone" width={24} height={24} className="mr-3" />
                <span className="text-gray-300">+254 757 700 920</span>
              </div>
              <div className="flex items-center">
                <Image src="/location1.png" alt="Location" width={24} height={24} className="mr-3" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/dantekadagi3"
                target="_blank"
                className="bg-[#1A1A1A] p-2 rounded-md hover:bg-[#00FFB3] hover:text-black transition"
              >
                <Image src="/github.png" alt="GitHub" width={20} height={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dantekadagi"
                target="_blank"
                className="bg-[#1A1A1A] p-2 rounded-md hover:bg-[#00FFB3] hover:text-black transition"
              >
                <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} />
              </a>
              <a
                href="https://x.com/mashy2090?t=nuLQI0W_9AXKPa4NmsjtPQ&s=09"
                target="_blank"
                className="bg-[#1A1A1A] p-2 rounded-md hover:bg-[#00FFB3] hover:text-black transition"
              >
                <Image src="/x.png" alt="Twitter / X" width={20} height={20} />
              </a>
            </div>
          </div>

          <div>
            <MyForm />
          </div>
        </div>
      </section>

    </main>
  );
}
