import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/portfolio";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="inline-flex items-center">
          <Image
            src="/me.jpg"
            alt={siteConfig.name.split(" ")[0] + ". "}
            width={30}
            height={4}
            className="rounded-full object-cover"
            priority
          />
        </a>

        <ul className="hidden sm:flex items-center gap-8 text-sm font-mono text-slate-400">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="hover:text-teal-400 transition duration-200">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
