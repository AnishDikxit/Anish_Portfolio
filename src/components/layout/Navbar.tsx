import { useState, type MouseEvent } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react';
import { List, Moon, Sun, X } from '@phosphor-icons/react';
import { cn } from '../../lib/utils';
import { useTheme } from '../../lib/theme';
import { scrollToId } from '../../lib/scroll';
import { zIndex } from '../../lib/z-index';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const { theme, toggle } = useTheme();
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (value) => {
    const hero = document.getElementById('hero');
    const threshold = (hero?.offsetHeight ?? window.innerHeight) - 72;
    setOverHero(value < threshold);
  });

  const lightType = theme === 'dark' || overHero;

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const waitForMenu = open && !reduce ? 280 : 0;
    setOpen(false);
    window.setTimeout(() => scrollToId(href), waitForMenu);
  };

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 border-b transition-colors duration-300',
        overHero
          ? 'border-transparent bg-transparent'
          : lightType
            ? 'border-white/10 bg-black/70 backdrop-blur-md'
            : 'border-[#c9ccd1] bg-white/80 backdrop-blur-md'
      )}
      style={{ zIndex: zIndex.nav }}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 md:h-[72px] md:px-8">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className={cn(
            'text-[14px] font-medium tracking-[0.35px] uppercase',
            lightType
              ? 'text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]'
              : 'text-[#0c0c0c]'
          )}
        >
          Anish Dixit
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                'text-[14px] font-medium tracking-[0.35px] uppercase transition-opacity hover:opacity-100',
                lightType
                  ? 'text-white/90 hover:text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]'
                  : 'text-[#767d88] hover:text-[#0c0c0c]'
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggle}
            className={cn(
              'grid size-10 place-items-center transition-opacity hover:opacity-100',
              lightType ? 'text-white/70 hover:text-white' : 'text-[#767d88] hover:text-[#0c0c0c]'
            )}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} weight="bold" /> : <Moon size={18} weight="bold" />}
          </button>
          <button
            type="button"
            className={cn(
              'grid size-10 place-items-center md:hidden',
              lightType ? 'text-white' : 'text-[#0c0c0c]'
            )}
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={cn(
              'overflow-hidden border-t md:hidden',
              lightType ? 'border-white/10 bg-black' : 'border-[#c9ccd1] bg-white'
            )}
          >
            <div className="flex flex-col px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    'py-3 text-base',
                    lightType ? 'text-white/70 hover:text-white' : 'text-[#767d88] hover:text-[#0c0c0c]'
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
