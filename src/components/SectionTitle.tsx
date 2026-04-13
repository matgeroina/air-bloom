type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  text,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && <p className="text-sm uppercase tracking-[0.2em] opacity-70 mb-2">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {text && <p className="mt-4 opacity-80">{text}</p>}
    </div>
  );
}