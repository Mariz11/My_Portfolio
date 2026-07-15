import React from "react";
import { Brain, Mail, ExternalLink, Monitor} from "lucide-react";
//import { Linkedin, Github } from "lucide-react";
import Image from "next/image";
import Footer from "./footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-900">
      
    {/* HEADER / HERO SECTION */}
    <header className="max-w-5xl mx-auto px-6 pt-24 pb-16 flex flex-col justify-center min-h-[70vh]">
      <p className="text-teal-400 font-mono mb-3 text-lg tracking-widest ">Hi, My Name is <span className="font-bold text-4xl text-shadow-blue-700 text-amber-300 animate-pulse">Mariz Gutib </span> </p>
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
        
        {/* Project 1: Capstone Project for Barangay Luz */}
        <div className="group bg-slate-900 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition duration-300 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <Brain className="text-teal-400 h-8 w-8" />
              <div className="flex gap-3 text-slate-400">
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-teal-400">  </a>
                <a href="https://information-system-sand.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-teal-400"><ExternalLink size={20} /></a>
              </div>
            </div>
            <h4 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition mb-2">
              Barangay Profiling and Nutritional Status System (BPNSS) Web Application
            </h4>
            <Image src="/barangay_luz.png" alt="Barangay Luz Web Application" width={600} height={400} className="rounded-lg mb-4" />
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
Built a full-stack resident profiling system for Barangay Luz, replacing manual paper records with a searchable digital database. Enabled staff to track child nutritional status in real time, cutting reporting time from days to minutes.            </p>
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

        {/* Project 2: Live Auction System */}
        <div className="group bg-slate-900 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition duration-300 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <Monitor className="text-teal-400 h-8 w-8" />
              <div className="flex gap-3 text-slate-400">
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-teal-400"></a>
                <a href="https://yourdemo.com" target="_blank" rel="noreferrer" className="hover:text-teal-400"><ExternalLink size={20} /></a>
              </div>
            </div>
            <h4 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition mb-2">
              Live Auction System
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
Designed and built a live auction platform from concept to pre-production for M Lhuillier Financial Services during my internship — the first system of its kind for the company. Owned the UI/UX from wireframe to working prototype. </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-400 pt-4 border-t border-slate-800">
              <span>React</span>
              <span>UI/UX Design</span>
              <span>CSS Modules</span>
              <span></span>
            </div>
          </div>
        </div>
  
        {/* Project 3: Ouiz Master*/}
        <div className="group bg-slate-900 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition duration-300 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <Brain className="text-teal-400 h-8 w-8" />
              <div className="flex gap-3 text-slate-400">
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-teal-400">  </a>
                <a href="https://ml-mini-proj-quizmster-376318511165.asia-southeast1.run.app/" target="_blank" rel="noreferrer" className="hover:text-teal-400"><ExternalLink size={20} /></a>
              </div>
            </div>
            <h4 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition mb-2">
             M. Lhuillier Quiz Master
            </h4>
            <Image src="/quiz_master.png" alt="Quiz Master Web Application" width={600} height={400} className="rounded-lg mb-4" />           
           <p className="text-slate-400 text-sm leading-relaxed mb-4">
           A web-based assessment platform built for MLhuillier to support employee development, internal hiring, and promotion evaluations.
Built a secure assessment platform used company-wide for employee development, hiring, and promotion evaluations. Streamlined a previously manual evaluation process, giving management real-time visibility into applicant readiness.   </p>
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
      {/* Project 4: Kwarta Padala v10 */}
        <div className="group bg-slate-900 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition duration-300 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <Monitor className="text-teal-400 h-8 w-8" />
              <div className="flex gap-3 text-slate-400">
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-teal-400"></a>
                <a href="https://mlhuillier.com/kwarta-padala" target="_blank" rel="noreferrer" className="hover:text-teal-400"><ExternalLink size={20} /></a>
              </div>
            </div>
            <h4 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition mb-2">
              Kwarta Padala v10
            </h4>
            <Image src="/kwarta_padala.png" alt="Kwarta Padala v10 Web Application" width={600} height={400} className="rounded-lg mb-4" />
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
Modernized the UI and shipped new features for Kwarta Padala v10, improving usability for end users. Coordinated with cross-functional and outsourced teams to keep user account status in sync and ensure delivery met agreed criteria.</p>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-400 pt-4 border-t border-slate-800">
              <span>React</span>
              <span>TypeScript</span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
{/* EXPERIENCE SECTION */}
  <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span className="text-teal-400 font-mono text-xl">03.</span> Where I've Been
      </h3>
      <div className="grid md:grid-cols-3 gap-8 text-slate-400 leading-relaxed">
    <div className="md:col-span-2 space-y-2">
    <ul className="list-disc list-inside text-slate-400 text-sm leading-relaxed mb-4">
      <li>Field Agent at Hey,Let's Ride Website - Negros Oriental (July)</li>
      <li>Inventory Clerk at E-Commerce Company - Meycuayan, Bulacan (May - July 2026)</li>
      <li>Software Developer at M Lhuillier Financial Services (March 18, 2025 - January 15, 2026)</li>
      <li>Software Developer Intern at M Lhuillier Financial Services (2024)</li>
      <li>Computer Technology Graduate from University of San Carlos (2022 - 2025)</li>
    </ul>
        </div>
      </div>
    </section>
    {/* CONTACT SECTION */}
    <section id="contact" className="max-w-3xl mx-auto px-6 py-32 text-center">
      <p className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-3">04. What's Next?</p>
      <h3 className="text-4xl font-bold mb-4 text-slate-100">Get In Touch</h3>
      <p className="text-slate-400 mb-8 leading-relaxed">
        I am currently looking for new opportunities to contribute to dynamic software teams. Whether you are looking to scale an application, build clean user interfaces, or discuss technical problem-solving—my inbox is always open.
      </p>
      
      <div className="flex justify-center gap-6 text-slate-400">
        <a href="https://marizmgutib@gmail.com" className="hover:text-teal-400 flex items-center gap-2 font-mono text-sm border border-slate-800 hover:border-teal-500/50 bg-slate-900 px-4 py-2 rounded transition">
          <Mail size={16} /> Email
        </a>
        <a href="https://www.linkedin.com/in/mariz-gutib/" target="_blank" rel="noreferrer" className="hover:text-teal-400 flex items-center gap-2 font-mono text-sm border border-slate-800 hover:border-teal-500/50 bg-slate-900 px-4 py-2 rounded transition">
      <Image src="/linkedin.jpg" alt="LinkedIn Logo" width={16} height={16} className="inline-block" /> LinkedIn
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-teal-400 flex items-center gap-2 font-mono text-sm border border-slate-800 hover:border-teal-500/50 bg-slate-900 px-4 py-2 rounded transition">
      <Image src="/github.jpg" alt="GitHub Logo" width={19} height={19} className="inline-block" /> GitHub
        </a>
      </div>
    </section>

    {/* FOOTER */}
    <Footer />
  </div>
  );
}
