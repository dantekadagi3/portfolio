import Image from "next/image";
import AboutCard from "./components/AboutCards";
import MyForm from "./components/MyForm";
import ProjectCard from "./components/ProjectCard";
import SkillsCard from "./components/SkillsCard";


export default function Home() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <section
        id="Home"
  className="relative min-h-screen flex items-center justify-center px-6 text-white   "
  style={{ backgroundImage: "url('/mybg.jpeg')" }}
>
  {/* Black Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/80"></div>

  {/* Content */}
  <div className="relative text-center max-w-2xl z-10">
    <p className="text-xl md:text-4xl font-light leading-relaxed">
      Full-Stack Developer &amp; UI/UX Designer <br />
      crafting digital experiences that inspire and engage
    </p>

    <button className="mt-8 px-6 py-3 bg-[#00FFB3] text-black font-semibold rounded-lg shadow-md border-2 border-transparent hover:bg-transparent hover:text-[#00FFB3] hover:border-[#00FFB3] transition duration-300">
      View My Work
    </button>
  </div>
</section>


      {/* About Me Section */}
      <section 
        id="About"
      className="bg-[#121212] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-bold text-[#00FFB3] mb-12">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Profile Image */}
           <div className="relative w-[350px] h-[350px]">
  <Image
    src="/Dante.jpeg"
    alt="Profile Picture"
    fill
    className="rounded-full border-2 border-[#00FFB3] object-cover object-top"
    priority
  />
</div>
            {/* About Text & Stats */}
            <div className="flex flex-col items-start text-left">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Passionate Developer
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-xl text-lg">
                  With over 3 years of experience in web development, I
                  specialize in creating modern, responsive applications using
                  cutting-edge technologies. My passion lies in solving complex
                  problems and turning ideas into beautiful, functional digital
                  products.
                </p>
              </div>

              <div className="flex gap-6">
                <AboutCard value={5} description="Projects Completed" />
                <AboutCard value={3} description="Years Experience" />
              </div>

              <div>
                <div>
               <a
    href="/Dante_Kadagi_CV.pdf"
    download
    className="mt-8 inline-block px-6 py-3 bg-[#00FFB3] text-black font-semibold rounded-lg shadow-md border-2 border-transparent hover:bg-transparent hover:text-[#00FFB3] hover:border-[#00FFB3] transition duration-300"
  >
    Download CV
  </a>
            </div>
            </div>
            </div>

            
          </div>
          
        </div>
      </section>

      {/* Featured Projects Section */}
      <section 
        id="Projects" 
      className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-bold text-[#00FFB3] mb-12">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Marrie Stoppes"
              description="This is a simple prototype of the Marie Stoppes Kenya website built with Next.js .It is a simple show of what vibecoding can do and of course my awesome prompting skills"
              image="/marrie.png"
              tags={["Next.js", "TailwindCSS"]}
              
              link="https://v0-marie-stopes-website.vercel.app/"
            />
            <ProjectCard
              title="Portfolio Website"
              description="Personal portfolio built with Next.js and TailwindCSS"
              image="/portfolio.png"
              tags={["Next.js", "TailwindCSS"]}
              link="https://dantekadagi.netlify.app/"
            />
            <ProjectCard
              title="Agrilens"
              description="An AI-powered web application for farmers to detect crop diseases early and get insights on improving crop health"
              image="/agrilens.png"
              tags={["Next.js", "Python","AI","ML"]}
              link="https://agrilens-frontend.vercel.app"
            />
              <ProjectCard
              title="BookStore"
              description="This is an simple platform for online book purchases created mainly to test the quikk API suite and how it works"
              image="/books.png"
              tags={["Next.js", "Supabase","Quikk" ,"in progress"]}
              link="#"
            />

              <ProjectCard
              title="Financial analysis"
              description="Finance flow is a simple web app where the users can  upload their financial documents and have them simply broken down for them to  easily understand"
              image="/finance-flow.png"
              tags={["Next.js", "Django",  "in progress"]}
              link="https://finance-flow-mu.vercel.app/"
            />


            <ProjectCard
              title="itinerary tracker"
              description="Developed a lightweight itinerary tracker leveraging PostgreSQL for data persistence and Next.js for front-end logic, showcasing practical database design and full-stack development skills."
              image="/itenary.png"
              tags={["Next.js", "Typescript",  "Postgres"]}
              link="itinerary-tracker.vercel.app"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
      id="Skills"
      className="py-20 px-6 bg-[#121212]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-bold text-[#00FFB3] mb-12">
            Skills and Technologies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <SkillsCard
              title="Frontend"
              icon="/frontend.png"
              technologies={["React", "Vue.js", "Next.js", "TailwindCSS"]}
            />
            <SkillsCard
              title="Backend"
              icon="/backend.png"
              technologies={["Node.js", "Python", "Ruby on Rails"]}
            />
            <SkillsCard
              title="Database"
              icon="/db.png"
              technologies={["Postgres", "MongoDB", "MySQL"]}
            />
            <SkillsCard
              title="Cloud"
              icon="/cloud.png"
              technologies={["Docker", "Kubernetes", "AWS"]}
            />
          </div>
        </div>
      </section>


   

 

    <section
      id="Contact"
      className="bg-[var(--background)] text-white py-20 px-8">
      {/* Heading */}
      <div>
        <h2 className="text-center text-4xl font-bold text-[#00FFB3] mb-12">
          Get in Touch
        </h2>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-bold">Let&apos;s work together</h2>
          <p className="mt-2 text-gray-400">
            I&apos;m always open to discussing new opportunities and exciting
            projects. Feel free to reach out if you&apos;d like to collaborate!
          </p>

          {/* Contact Info */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center">
              <Image
                src="/mail.png"
                alt="Email Icon"
                width={24}
                height={24}
                className="mr-3"
              />
              <span className="text-gray-300">dantekadagi3@gmail.com</span>
            </div>

            <div className="flex items-center">
              <Image
                src="/phone.png"
                alt="Phone Icon"
                width={24}
                height={24}
                className="mr-3"
              />
              <span className="text-gray-300">+254 757 700 920</span>
            </div>

            <div className="flex items-center">
              <Image
                src="/location1.png"
                alt="Location Icon"
                width={24}
                height={24}
                className="mr-3"
              />
              <span className="text-gray-300">Nairobi, Kenya</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="https://github.com/dantekadagi3"
              className="bg-[#1A1A1A] p-2 rounded-md hover:bg-[#00FFB3] hover:text-black transition"
            >
              <Image src="/github.png" alt="GitHub" width={20} height={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/dantekadagi"
              className="bg-[#1A1A1A] p-2 rounded-md hover:bg-[#00FFB3] hover:text-black transition"
            >
              <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} />
            </a>
            <a
              href="https://x.com/mashy2090?t=nuLQI0W_9AXKPa4NmsjtPQ&s=09"
              className="bg-[#1A1A1A] p-2 rounded-md hover:bg-[#00FFB3] hover:text-black transition"
            >
              <Image src="/x.png" alt="Twitter" width={20} height={20} />
            </a>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div>
          <MyForm />
        </div>
      </div>
    </section>
  


    </main>
  );
}
