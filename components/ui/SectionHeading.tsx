type SectionHeadingProps = {
  number: string;
  title: string;
  className?: string;
};

export default function SectionHeading({
  number,
  title,
  className = "mb-8",
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-2xl font-bold flex items-center gap-2 ${className}`}
    >
      <span className="text-teal-400 font-mono text-xl">{number}.</span>
      {title}
    </h2>
  );
}
