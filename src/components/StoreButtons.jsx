import { Apple, Play } from './Icons';

export default function StoreButtons({ light = false }) {
  return (
    <div className={`stores ${light ? 'stores--light' : ''}`}>
      <a href="#download" className="store">
        <Apple />
        <span>
          <small>Download on the</small>
          App Store
        </span>
      </a>
      <a href="#download" className="store">
        <Play />
        <span>
          <small>Get it on</small>
          Google Play
        </span>
      </a>
    </div>
  );
}
