import { siteConfig } from "@/lib/portfolio";

export default function Hero() {
  return (
    <header className="max-w-5xl mx-auto px-6 pt-24 pb-16 flex flex-col justify-center min-h-[70vh]">
      <p className="text-teal-400 font-mono mb-3 text-lg tracking-widest">
        Hi, my name is{" "}
        <span className="font-bold text-4xl text-amber-300 animate-pulse">
          {siteConfig.name}
        </span>
      </p>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-100 mb-4">
        {siteConfig.title}.
      </h1>

      <p className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
        {siteConfig.tagline}
      </p>

      <p className="max-w-xl text-slate-400 text-lg mb-8 leading-relaxed">
        I am a {siteConfig.location} Software Developer specializing in building
        modern web applications using{" "}
        <span className="text-teal-400 font-medium">React</span> and{" "}
        <span className="text-teal-400 font-medium">Next.js</span>. Beyond standard
        web dev, I bridge the gap between clean code and creative technical
        solutions.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded-md transition duration-200"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-slate-700 hover:border-teal-400 text-slate-300 hover:text-teal-400 rounded-md transition duration-200"
        >
          Get In Touch
        </a>
      </div>
    </header>
  );
}
