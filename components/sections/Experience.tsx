import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/lib/portfolio";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading number="03" title="Where I've Been" />

      <ol className="relative border-l border-slate-800 ml-3 space-y-8">
        {experience.map((item) => (
          <li key={`${item.role}-${item.company}`} className="relative ml-6">
            <span
              className="absolute -left-[1.875rem] mt-1.5 h-3 w-3 rounded-full border-2 border-teal-400 bg-slate-950"
              aria-hidden
            />
            <p className="text-slate-100 font-semibold">{item.role}</p>
            <p className="text-teal-400/90 text-sm font-mono">
              {item.company}
              {item.location && (
                <span className="text-slate-500"> &mdash; {item.location}</span>
              )}
            </p>
            <p className="text-slate-500 text-sm font-mono mt-1">{item.period}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
