import { Code2, Mail, ExternalLink, Paintbrush} from "lucide-react";
//import { Linkedin, Github } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-900">
      
    {/* HEADER / HERO SECTION */}
    <header className="max-w-5xl mx-auto px-6 pt-24 pb-16 flex flex-col justify-center min-h-[70vh]">
      <p className="text-teal-400 font-mono mb-3 text-sm tracking-widest uppercase">Hi, my name is <style className="text-2xl">Mariz Gutib </style> </p>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-100 mb-4">
        Software Developer.
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
        Building fast, scalable web applications & digital experiences.
      </h2>
      <p className="max-w-xl text-slate-400 text-lg mb-8 leading-relaxed">
        I am a Cebu-based Software Developer specializing in building modern web applications using 
        <span className="text-teal-400 font-medium"> React</span> and <span className="text-teal-400 font-medium">Next.js</span>. 
        Beyond standard web dev, I bridge the gap between clean code and creative technical solutions.
      </p>
      
      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded-md transition duration-200">
          View My Work
        </a>
        <a href="#contact" className="px-6 py-3 border border-slate-700 hover:border-teal-400 text-slate-300 hover:text-teal-400 rounded-md transition duration-200">
          Get In Touch
        </a>
      </div>
    </header>

    {/* CORE SKILLS & BACKGROUND */}
    <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span className="text-teal-400 font-mono text-xl">01.</span> Background & Skillset
      </h3>
      
      <div className="grid md:grid-cols-3 gap-8 text-slate-400 leading-relaxed">
        <div className="md:col-span-2 space-y-4">
          <p>
            I hold a formal background in Computer Technology with a strict focus on Software Development. 
            With hands-on commercial experience, I specialize in taking designs and conceptual ideas and turning 
            them into highly optimized, responsive web interfaces.
          </p>
          <p>
            I thrive in fast-paced environments where leveraging cutting-edge tools and frameworks allows for rapid, 
            scalable development. I also have a deep appreciation for precision and structural design—a mindset that 
            extends into my creative hobbies like high-fidelity 3D modeling and digital sculpting.
          </p>
        </div>
        
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
          <h4 className="text-slate-200 font-semibold mb-4 uppercase tracking-wider text-xs font-mono">Technical Toolbox</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-slate-300">
            <li className="flex items-center gap-1.5"><span className="text-teal-400">▹</span> JavaScript (ES6+)</li>
            <li className="flex items-center gap-1.5"><span className="text-teal-400">▹</span> React.js</li>
            <li className="flex items-center gap-1.5"><span className="text-teal-400">▹</span> Next.js</li>
            <li className="flex items-center gap-1.5"><span className="text-teal-400">▹</span> Tailwind CSS</li>
            <li className="flex items-center gap-1.5"><span className="text-teal-400">▹</span> Node.js / APIs</li>
            <li className="flex items-center gap-1.5"><span className="text-teal-400">▹</span> Git & CI/CD</li>
          </ul>
        </div>
      </div>
    </section>

    {/* PROJECTS SECTION */}
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900">
      <h3 className="text-2xl font-bold mb-12 flex items-center gap-2">
        <span className="text-teal-400 font-mono text-xl">02.</span> Selected Work
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Project 1: Primary Dev Work */}
        <div className="group bg-slate-900 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition duration-300 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <Code2 className="text-teal-400 h-8 w-8" />
              <div className="flex gap-3 text-slate-400">
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-teal-400">  </a>
                <a href="https://yourdemo.com" target="_blank" rel="noreferrer" className="hover:text-teal-400"><ExternalLink size={20} /></a>
              </div>
            </div>
            <h4 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition mb-2">
              Production-Ready Web Application
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              A fully responsive and dynamic web interface built using Next.js and React. Implemented state management, optimized asset delivery, and integrated backend APIs to ensure a seamless user experience.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-400 pt-4 border-t border-slate-800">
              <span>Next.js</span>
              <span>React</span>
              <span>TailwindCSS</span>
              <span>REST API</span>
            </div>
          </div>
        </div>

        {/* Project 2: Creative / 3D Asset Management or Dashboard */}
        <div className="group bg-slate-900 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition duration-300 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <Paintbrush className="text-teal-400 h-8 w-8" />
              <div className="flex gap-3 text-slate-400">
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-teal-400"></a>
                <a href="https://yourdemo.com" target="_blank" rel="noreferrer" className="hover:text-teal-400"><ExternalLink size={20} /></a>
              </div>
            </div>
            <h4 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition mb-2">
              3D Asset Pipeline Tool / Asset Showcase
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              A personal passion project blending development with 3D design. A web-based hub or dashboard designed to categorize, catalog, or visualize custom high-fidelity 3D assets and structural models.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-400 pt-4 border-t border-slate-800">
              <span>React</span>
              <span>UI/UX Design</span>
              <span>CSS Modules</span>
              <span>3D Workflow Integration</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* CONTACT SECTION */}
    <section id="contact" className="max-w-3xl mx-auto px-6 py-32 text-center">
      <p className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-3">03. What's Next?</p>
      <h3 className="text-4xl font-bold mb-4 text-slate-100">Get In Touch</h3>
      <p className="text-slate-400 mb-8 leading-relaxed">
        I am currently looking for new opportunities to contribute to dynamic software teams. Whether you are looking to scale an application, build clean user interfaces, or discuss technical problem-solving—my inbox is always open.
      </p>
      
      <div className="flex justify-center gap-6 text-slate-400">
        <a href="mailto:your.email@email.com" className="hover:text-teal-400 flex items-center gap-2 font-mono text-sm border border-slate-800 hover:border-teal-500/50 bg-slate-900 px-4 py-2 rounded transition">
          <Mail size={16} /> Email
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-teal-400 flex items-center gap-2 font-mono text-sm border border-slate-800 hover:border-teal-500/50 bg-slate-900 px-4 py-2 rounded transition">
          {/* <Linkedin size={16} /> LinkedIn
        */}
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-teal-400 flex items-center gap-2 font-mono text-sm border border-slate-800 hover:border-teal-500/50 bg-slate-900 px-4 py-2 rounded transition">
          {/* <Github size={16} /> GitHub */}
        </a>
      </div>
    </section>

    {/* FOOTER */}
    <footer className="text-center py-8 border-t border-slate-900 text-xs font-mono text-slate-600">
      <p>Designed & Built by Yours Truly • 2026</p>
    </footer>
  </div>
  );
}
