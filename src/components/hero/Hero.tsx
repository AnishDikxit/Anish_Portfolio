import { Button } from '../ui/Button';
import { MagneticWrapper } from '../ui/MagneticWrapper';
import { scrollToId } from '../../lib/scroll';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] text-white">
      <img
        src="/stills/hero-cinema.png?v=3"
        alt="GenAI workstation with retrieval diagrams and code on dual monitors"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgb(0 0 0 / 0.55) 0%, transparent 22%), linear-gradient(to top, rgb(0 0 0 / 0.84) 0%, rgb(0 0 0 / 0.5) 36%, transparent 72%), linear-gradient(to right, rgb(0 0 0 / 0.58) 0%, rgb(0 0 0 / 0.22) 46%, transparent 72%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-[1] mx-auto flex min-h-[100dvh] w-full max-w-[1600px] items-end px-4 pb-16 md:px-8 md:pb-24">
        <div className="max-w-3xl">
          <p className="text-[14px] font-semibold tracking-[0.35px] text-[#b7e4f0] uppercase drop-shadow-[0_1px_10px_rgba(0,0,0,0.8)]">
            GenAI Developer
          </p>
          <h1 className="mt-4 text-[clamp(2.75rem,6vw,4.5rem)] leading-none font-medium tracking-[-1.2px] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.8)]">
            Building <span className="text-[#b7e4f0]">GenAI</span> that ships.
          </h1>
          <p className="mt-5 max-w-[42ch] text-base leading-relaxed font-medium text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.75)] md:text-lg">
            Mathematics and Computing at IIT BHU.{' '}
            <span className="text-[#b7e4f0]">RAG</span> systems, agentic tools, and full-stack platforms.
          </p>
          <div className="mt-8">
            <MagneticWrapper>
              <Button
                size="lg"
                className="rounded-[6px] bg-white text-black hover:bg-white/90"
                onClick={() => scrollToId('#projects')}
              >
                View work
              </Button>
            </MagneticWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
