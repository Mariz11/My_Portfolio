import { navLinks, siteConfig } from "@/lib/portfolio";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-teal-400 font-semibold tracking-wide hover:text-teal-300 transition"
        >
          {siteConfig.name.split(" ")[0]}.
        </a>

        <ul className="hidden sm:flex items-center gap-8 text-sm font-mono text-slate-400">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="hover:text-teal-400 transition duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
