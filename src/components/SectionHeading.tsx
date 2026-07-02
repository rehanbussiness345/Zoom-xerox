interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 lg:mb-16 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : ''}`}>
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[4px] text-secondary mb-4">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight font-[family-name:var(--font-serif)] ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base lg:text-lg leading-relaxed ${
            light ? 'text-white/70' : 'text-text-light'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
