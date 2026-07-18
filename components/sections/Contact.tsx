import Image from "next/image";
import { Mail } from "lucide-react";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/lib/portfolio";

type ContactLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
};

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: <Mail size={16} />,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: (
      <Image
        src="/linkedin.jpg"
        alt=""
        width={16}
        height={16}
        className="inline-block"
        aria-hidden
      />
    ),
    external: true,
  },
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: (
      <Image
        src="/github.jpg"
        alt=""
        width={19}
        height={19}
        className="inline-block"
        aria-hidden
      />
    ),
    external: true,
  },
];

export default function Contact() {
  return (
    <Section id="contact" narrow className="py-32 text-center">
      <p className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-3">
        04. What&apos;s Next?
      </p>
      <h2 className="text-4xl font-bold mb-4 text-slate-100">Get In Touch</h2>
      <p className="text-slate-400 mb-8 leading-relaxed">
        I am currently looking for new opportunities to contribute to dynamic
        software teams. Whether you are looking to scale an application, build
        clean user interfaces, or discuss technical problem-solving—my inbox is
        always open.
      </p>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-slate-400">
        {contactLinks.map(({ label, href, icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external
              ? { target: "_blank", rel: "noreferrer noopener" }
              : {})}
            className="hover:text-teal-400 flex items-center gap-2 font-mono text-sm border border-slate-800 hover:border-teal-500/50 bg-slate-900 px-4 py-2 rounded transition"
          >
            {icon} {label}
          </a>
        ))}
      </div>
    </Section>
  );
}
