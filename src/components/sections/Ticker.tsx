const items = [
  '✦ Certified Integrators',
  '✦ ButterflyMX Authorised Reseller',
  '✦ Akuvox Partner',
  '✦ DoorBird Certified Installer',
  '✦ 24-Hour Response Guarantee',
  '✦ 1-Year Workmanship Warranty',
  '✦ Hackensack, NJ-Based Engineers',
];

export default function Ticker() {
  const loop = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {loop.map((t, i) => (
          <span key={i} className="ticker-item">
            {t}
            <span className="ticker-sep" />
          </span>
        ))}
      </div>
    </div>
  );
}
