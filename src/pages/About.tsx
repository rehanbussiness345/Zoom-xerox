import { CheckCircle, Target, Eye, Users, Clock, Award, Zap } from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import { useInView } from '../hooks/useInView';

// ─── Page Hero ──────────────────────────────────────────
function PageHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-gray-900 to-primary" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-[4px] text-secondary mb-4 animate-fade-in-up">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] font-[family-name:var(--font-serif)] animate-fade-in-up delay-100" style={{ animationFillMode: 'both' }}>
            Built on Trust,
            <span className="block text-secondary">Driven by Quality</span>
          </h1>
          <p className="mt-6 text-lg text-white/60 leading-relaxed animate-fade-in-up delay-200" style={{ animationFillMode: 'both' }}>
            Learn about our journey, our mission, and the team that makes Zoom Printing Press Gachibowli's most trusted printing destination.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Story ──────────────────────────────────────────────
function Story() {
  const { ref, isVisible } = useInView();

  return (
    <Section>
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="relative">
            <img
              src="/images/about-bg.jpg"
              alt="Zoom Printing Press"
              className="w-full h-[400px] lg:h-[480px] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/30 to-transparent" />
          </div>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <span className="inline-block text-xs font-semibold uppercase tracking-[4px] text-secondary mb-4">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight font-[family-name:var(--font-serif)] text-primary mb-6">
            A Printing Press That Never Sleeps
          </h2>
          <p className="text-text-light leading-relaxed mb-5">
            Zoom Printing Press started with a simple vision — to provide Gachibowli and the surrounding IT corridor with reliable, high-quality printing services. Located on the bustling Gachibowli-Miyapur Road in PJR Nagar, we've grown into a trusted name for both individuals and businesses alike.
          </p>
          <p className="text-text-light leading-relaxed mb-5">
            What sets us apart is our commitment to being always available. Operating 24 hours a day, 7 days a week, we understand that printing needs don't follow a schedule. Whether it's an urgent presentation at 2 AM or event banners needed first thing in the morning, Zoom is always ready.
          </p>
          <p className="text-text-light leading-relaxed">
            Our address — House Of Johnson, PJR Nagar, Besides Senco Gold And Diamond, Gachibowli, Hyderabad 500032 — makes us easily accessible from the heart of Hyderabad's IT hub. We accept UPI, Visa/MasterCard/RuPay, and cash payments for your convenience.
          </p>
        </div>
      </div>
    </Section>
  );
}

// ─── Mission & Vision ───────────────────────────────────
function MissionVision() {
  const { ref, isVisible } = useInView();

  return (
    <Section className="bg-surface">
      <div ref={ref}>
        <SectionHeading
          label="What Drives Us"
          title="Our Mission & Vision"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <div
            className={`bg-white rounded-2xl p-10 border border-border hover:border-secondary/30 hover:shadow-xl transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 font-[family-name:var(--font-serif)]">Our Mission</h3>
            <p className="text-text-light leading-relaxed mb-6">
              To deliver the highest quality printing and document services to every customer who walks through our doors. We aim to be the most reliable, accessible, and affordable printing solution in Gachibowli and the greater Hyderabad area.
            </p>
            <ul className="space-y-3">
              {[
                'Consistent quality across every print',
                'Affordable pricing for all budgets',
                'Round-the-clock availability',
                'Friendly, professional customer service',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div
            className={`bg-white rounded-2xl p-10 border border-border hover:border-secondary/30 hover:shadow-xl transition-all duration-500 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
              <Eye size={28} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 font-[family-name:var(--font-serif)]">Our Vision</h3>
            <p className="text-text-light leading-relaxed mb-6">
              To become Hyderabad's leading printing press by investing in cutting-edge technology, expanding our service portfolio, and building lasting relationships with every client — from students to corporations.
            </p>
            <ul className="space-y-3">
              {[
                'Invest in latest printing technology',
                'Expand service offerings continuously',
                'Build long-term client relationships',
                'Set the benchmark for print quality',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Values ─────────────────────────────────────────────
function Values() {
  const { ref, isVisible } = useInView();

  const values = [
    {
      icon: <Award size={24} />,
      title: 'Quality First',
      desc: 'Every print that leaves our shop meets the highest standards of clarity, color accuracy, and finish.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Always Available',
      desc: 'Our 24/7 operation ensures you never have to delay your work because of printing timelines.',
    },
    {
      icon: <Users size={24} />,
      title: 'Customer Focus',
      desc: 'We treat every customer with respect and attention, ensuring their specific needs are met with precision.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Quick Turnaround',
      desc: 'Fast processing without compromising quality. Most jobs are completed within minutes.',
    },
  ];

  return (
    <Section>
      <div ref={ref}>
        <SectionHeading
          label="Our Values"
          title="What Sets Us Apart"
          description="The core principles that guide every interaction, every print, and every delivery at Zoom Printing Press."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`text-center p-8 rounded-2xl border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-5 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                {v.icon}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{v.title}</h3>
              <p className="text-sm text-text-light leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Team ───────────────────────────────────────────────
function Team() {
  const { ref, isVisible } = useInView();

  return (
    <Section className="bg-surface">
      <div ref={ref}>
        <SectionHeading
          label="Our Team"
          title="The People Behind Zoom"
          description="Our dedicated team of printing professionals works around the clock to ensure you receive the best service every time."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              role: 'Operations',
              desc: 'Our operations team ensures smooth workflow, equipment maintenance, and consistent output quality across all printing jobs.',
              icon: '⚙️',
            },
            {
              role: 'Design & Pre-Press',
              desc: 'From layout adjustments to color calibration, our design team ensures your prints look exactly as intended.',
              icon: '🎨',
            },
            {
              role: 'Customer Service',
              desc: 'Available 24/7, our customer service team guides you through options, pricing, and delivery to make your experience seamless.',
              icon: '🤝',
            },
          ].map((member, i) => (
            <div
              key={member.role}
              className={`bg-white rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-500 text-center ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-4xl mb-4">{member.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{member.role}</h3>
              <p className="text-sm text-text-light leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Main Export ─────────────────────────────────────────
export default function About() {
  return (
    <>
      <PageHero />
      <Story />
      <MissionVision />
      <Values />
      <Team />
    </>
  );
}
