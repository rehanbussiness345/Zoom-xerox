import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function Section({ children, className = '', id, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-[120px] ${dark ? 'bg-primary text-white' : 'bg-white'} ${className}`}
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 lg:px-20">
        {children}
      </div>
    </section>
  );
}
