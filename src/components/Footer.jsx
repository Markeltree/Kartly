import { useEffect, useState } from 'react';
import Logo from './Logo';
import { ArrowRight, ArrowUp, Facebook, Instagram, LinkedIn, XLogo } from './Icons';
import { footerLinks, socialLinks } from '../data/content';

const socialIcons = {
  Facebook,
  X: XLogo,
  LinkedIn,
  Instagram: (props) => <Instagram width="17" height="17" {...props} />,
};

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    e.target.reset();
  };

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>Fashion, home essentials and accessories from independent brands, in one fast app.</p>
          <form className="newsletter" onSubmit={onSubmit}>
            <input type="email" placeholder="Your email for drops & deals" aria-label="Email address" required />
            <button aria-label="Subscribe">
              <ArrowRight width="18" height="18" />
            </button>
          </form>
          {subscribed && <small className="newsletter__ok">You're in! Watch your inbox.</small>}
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4>{title}</h4>
            <ul>
              {links.map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Kartly. All rights reserved.</p>
        <div className="footer__social">
          {socialLinks.map(({ name, href }) => {
            const Icon = socialIcons[name];
            return (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
                <Icon />
              </a>
            );
          })}
        </div>
        <nav>
          <a href="#/privacy">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </nav>
      </div>

      <button
        className={`to-top ${showTop ? 'is-visible' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp width="20" height="20" />
      </button>
    </footer>
  );
}
