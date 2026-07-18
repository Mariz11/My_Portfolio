type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
};

export default function Section({
  id,
  children,
  className = "",
  narrow = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${narrow ? "max-w-3xl" : "max-w-5xl"} mx-auto px-6 py-20 border-t border-slate-900 ${className}`}
    >
      {children}
    </section>
  );
}
