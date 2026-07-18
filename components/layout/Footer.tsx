import { siteConfig } from "@/lib/portfolio";

export default function Footer() {
  return (
    <footer className="text-center py-8 border-t border-slate-900 text-xs font-mono text-slate-600">
      <p>
        Designed &amp; Built by {siteConfig.name} &bull; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
