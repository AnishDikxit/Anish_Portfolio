import { Section } from '../layout/Section';
import skillsData from '../../data/skills.json';
import type { Skill } from '../../types';

export function SkillsSection() {
  const names = (skillsData as Skill[]).map((skill) => skill.name);
  const track = [...names, ...names, ...names];

  return (
    <Section id="skills" title="Tools">
      <div className="overflow-hidden border-y border-line py-6">
        <div className="marquee-track gap-10 pr-10">
          {track.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="text-2xl leading-none tracking-[-0.5px] text-ink md:text-4xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
