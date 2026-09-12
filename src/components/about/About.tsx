import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Section } from '../layout/Section';
import { Still } from '../ui/Still';
import { AnimatedCounter } from '../ui/animated-counter';
import { GitHubActivity } from '../ui/github-activity';
import profileData from '../../data/profile.json';

const stats = [
  { label: 'Years', value: 2 },
  { label: 'Projects', value: 15 },
  { label: 'Tools', value: 10 },
];

export function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef, { once: true, amount: 0.4 });

  return (
    <Section id="about" title="About" className="band-paper">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Still
            src="/stills/about-studio.png?v=3"
            alt="Mathematics and computing desk with notes, terminal, and textbooks"
            aspect="4 / 3"
          />
        </div>

        <div className="flex flex-col gap-10 lg:col-span-7">
          <div className="max-w-[65ch]">
            <p className="text-xl text-ink md:text-2xl">
              <span className="text-signal">GenAI</span> Developer
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Hi, I&apos;m Anish. I&apos;m a Mathematics and Computing graduate from IIT BHU, passionate
              about <span className="text-signal">GenAI</span> and software development. From building
              advanced RAG chatbots to developing full-stack platforms with Go and React, I love solving
              hard problems and building robust, scalable AI infrastructure.
            </p>
          </div>

          <div ref={statsRef} className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-4xl leading-none tracking-[-1px] md:text-5xl"
                  style={{ color: '#0c0c0c' }}
                >
                  <AnimatedCounter
                    value={inView ? stat.value : 0}
                    duration={0.8}
                    suffix="+"
                    separator=""
                  />
                </div>
                <p className="mt-2 text-[14px] font-medium tracking-[0.35px] text-muted uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto">
            <GitHubActivity
              username="AnishDikxit"
              accent="#2f6f82"
              months={8}
              className="max-w-full border border-[#c9ccd1] bg-white text-[#0c0c0c] dark:bg-white dark:text-[#0c0c0c]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
