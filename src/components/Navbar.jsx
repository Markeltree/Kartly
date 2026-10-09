import { useEffect, useState } from 'react';
import Logo from './Logo';
import { Close, Menu } from './Icons';
import { navLinks } from '../data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Logo />

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a href="#download" className="btn btn--dark navbar__mobile-cta" onClick={close}>
            Get the App
          </a>
        </nav>

        <a href="#download" className="btn btn--dark btn--sm navbar__cta">
          Get the App
        </a>

        <button className="navbar__toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
          {open ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
