import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/portfolio";
import { siteConfig } from "@/lib/portfolio";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;
  const githubUrl = project.githubUrl ?? siteConfig.github;

  return (
    <article className="group bg-slate-900 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition duration-300 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-6">
          <Icon className="text-teal-400 h-8 w-8" aria-hidden />
          <div className="flex gap-3 text-slate-400">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-teal-400 transition"
                aria-label={`${project.title} on GitHub`}
              />
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-teal-400 transition"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition mb-2">
          {project.title}
        </h3>

        {project.image && (
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            width={600}
            height={400}
            className="rounded-lg mb-4 w-full h-auto"
          />
        )}

        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-400 pt-4 border-t border-slate-800">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}
    </article>
  );
}
