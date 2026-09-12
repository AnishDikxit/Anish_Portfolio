import { EnvelopeSimple } from '@phosphor-icons/react';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { MagneticWrapper } from '../ui/MagneticWrapper';

export function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-3xl">
        <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-none font-normal tracking-[-0.9px] text-ink">
          Available for <span className="text-signal">new work</span>.
        </h2>
        <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted">
          Open to discussing new projects, creative ideas, or a role on a GenAI team.
        </p>
        <div className="mt-8">
          <MagneticWrapper>
            <Button size="lg" onClick={() => { window.location.href = 'mailto:anish.22053@gmail.com'; }}>
              <EnvelopeSimple size={18} weight="bold" />
              Email me
            </Button>
          </MagneticWrapper>
        </div>
      </div>
    </Section>
  );
}
