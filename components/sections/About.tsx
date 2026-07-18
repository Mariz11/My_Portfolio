import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/lib/portfolio";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading number="01" title="Background & Skillset" />

      <div className="grid md:grid-cols-3 gap-8 text-slate-400 leading-relaxed">
        <div className="md:col-span-2 space-y-4">
          <p>
            I hold a formal background in Computer Technology with a strict focus
            on Software Development. With hands-on commercial experience, I
            specialize in taking designs and conceptual ideas and turning them
            into highly optimized, responsive web interfaces.
          </p>
          <p>
            I thrive in fast-paced environments where leveraging cutting-edge
            tools and frameworks allows for rapid, scalable development. I also
            have a deep appreciation for precision and structural design—a
            mindset that extends into my creative hobbies like high-fidelity 3D
            modeling and digital sculpting.
          </p>
        </div>

        <aside className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
          <h3 className="text-slate-200 font-semibold mb-4 uppercase tracking-wider text-xs font-mono">
            Technical Toolbox
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-slate-300">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-1.5">
                <span className="text-teal-400" aria-hidden>
                  ▹
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
