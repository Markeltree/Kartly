import Reveal from './Reveal';
import StoreButtons from './StoreButtons';

// Decorative QR-style pattern; swap for a real QR code image pointing at your store listing.
function QrPattern() {
  const size = 21;
  const finder = (x, y) =>
    (x < 7 && y < 7) || (x >= size - 7 && y < 7) || (x < 7 && y >= size - 7);
  const finderOn = (x, y) => {
    const fx = x >= size - 7 ? x - (size - 7) : x;
    const fy = y >= size - 7 ? y - (size - 7) : y;
    return fx === 0 || fx === 6 || fy === 0 || fy === 6 || (fx >= 2 && fx <= 4 && fy >= 2 && fy <= 4);
  };
  const cells = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const on = finder(x, y) ? finderOn(x, y) : (x * 7 + y * 13 + x * y) % 3 === 0;
      if (on) cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />);
    }
  }
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="qr__code" shapeRendering="crispEdges" aria-hidden="true">
      {cells}
    </svg>
  );
}

export default function Download() {
  return (
    <section className="section section--flush-top" id="download">
      <div className="container">
        <Reveal className="download">
          <div className="download__copy">
            <h2>
              Your new favorite <br />
              store fits in your pocket.
            </h2>
            <p>Download Kartly free and get 15% off your first order with code WELCOME15.</p>
            <StoreButtons light />
          </div>
          <div className="qr">
            <QrPattern />
            <span>Scan to download</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
