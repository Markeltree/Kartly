const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const icon = (paths) => (props) => <svg {...base} {...props}>{paths}</svg>;

export const Menu = icon(<path d="M3 6h18M3 12h18M3 18h18" />);
export const Close = icon(<path d="M18 6 6 18M6 6l12 12" />);
export const Plus = icon(<path d="M12 5v14M5 12h14" />);
export const Check = icon(<path d="M20 6 9 17l-5-5" />);
export const ArrowRight = icon(<path d="M5 12h14M13 6l6 6-6 6" />);
export const ArrowUp = icon(<path d="M12 19V5M6 11l6-6 6 6" />);
export const Search = icon(<><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>);
export const Heart = icon(<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />);
export const Zap = icon(<path d="M13 2 3 14h9l-1 8 10-12h-9z" />);
export const Truck = icon(<><path d="M1 4h14v12H1zM15 9h4l4 4v3h-8z" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></>);
export const Return = icon(<><path d="M9 14 4 9l5-5" /><path d="M4 9h11a5 5 0 0 1 0 10h-3" /></>);
export const Gift = icon(<><path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7" /><path d="M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" /></>);
export const Shield = icon(<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>);
export const Sparkle = icon(<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" />);
export const User = icon(<><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>);
export const Bag = icon(<><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" /></>);
export const Package = icon(<><path d="m21 8-9-5-9 5v8l9 5 9-5z" /><path d="m3 8 9 5 9-5M12 13v8" /></>);
export const Tag = icon(<><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z" /><circle cx="7" cy="7" r="1.5" /></>);
export const Instagram = icon(<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /></>);

export const Star = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
  </svg>
);

export const Apple = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2.1-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.1 2.6 1.3-.1 1.7-.8 3.3-.8 1.5 0 1.9.8 3.3.8 1.4 0 2.2-1.3 3-2.5.9-1.4 1.3-2.7 1.3-2.8 0 0-2.6-1-2.3-4.2zM13.9 4.9c.7-.8 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4z" />
  </svg>
);

export const Play = (props) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4 2.5v19c0 .4.4.6.7.4L21 12.4c.3-.2.3-.6 0-.8L4.7 2.1c-.3-.2-.7 0-.7.4z" />
  </svg>
);

export const XLogo = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.2 2h3.4l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.4l7.9-9.1L1 2h7l4.8 6.4zm-1.2 18h1.9L7.1 4H5.1z" />
  </svg>
);

export const Facebook = (props) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v9h4v-9h3l1-4h-4V9c0-.6.4-1 1-1z" />
  </svg>
);

export const LinkedIn = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z" />
  </svg>
);

export const iconMap = {
  search: Search,
  heart: Heart,
  zap: Zap,
  truck: Truck,
  return: Return,
  gift: Gift,
  shield: Shield,
  sparkle: Sparkle,
  user: User,
  bag: Bag,
};
