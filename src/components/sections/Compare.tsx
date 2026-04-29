const yes = (
  <div className="ci ci-yes">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20,6 9,17 4,12" />
    </svg>
  </div>
);
const no = (
  <div className="ci ci-no">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  </div>
);
const part = (
  <div className="ci ci-part">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  </div>
);

const rows: { feat: string; cells: React.ReactNode[] }[] = [
  { feat: 'HD Video Intercom', cells: [yes, yes, yes] },
  { feat: 'Mobile App Entry', cells: [yes, yes, yes] },
  { feat: 'Face Recognition Entry', cells: [no, yes, no] },
  { feat: 'Cloud Portfolio Management', cells: [yes, yes, part] },
  { feat: 'Package Room / Delivery Management', cells: [yes, no, no] },
  { feat: 'SIP / PBX System Integration', cells: [no, yes, part] },
  { feat: 'IP65+ Outdoor Rating', cells: [yes, yes, yes] },
  { feat: 'Smart Home Integration', cells: [part, part, yes] },
];

export default function Compare() {
  return (
    <section className="section comparison" id="compare">
      <div className="wrap">
        <div className="comp-header-section reveal">
          <div className="tag" style={{ justifyContent: 'center' }}>Product Comparison</div>
          <h2 className="h2" style={{ textAlign: 'center' }}>Compare systems<br />side by side</h2>
          <p
            className="body-lg"
            style={{ textAlign: 'center', marginTop: 18, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}
          >
            Every building has unique requirements. Use this table to identify the best fit — or let
            us recommend one.
          </p>
        </div>
        <div className="comp-wrap reveal" style={{ transitionDelay: '.1s' }}>
          <div className="comp-thead">
            <div className="comp-th" style={{ textAlign: 'left', paddingLeft: 28 }}>
              <div className="comp-th-label">Feature</div>
            </div>
            <div className="comp-th">
              <div className="comp-th-brand">ButterflyMX</div>
              <div className="comp-th-badge">Most Popular</div>
            </div>
            <div className="comp-th">
              <div className="comp-th-brand">Akuvox</div>
              <div className="comp-th-badge">Enterprise</div>
            </div>
            <div className="comp-th">
              <div className="comp-th-brand">DoorBird</div>
              <div className="comp-th-badge">Premium Design</div>
            </div>
          </div>
          {rows.map((r, i) => (
            <div className="comp-row" key={i}>
              <div className="comp-feat">{r.feat}</div>
              <div className="comp-cell">{r.cells[0]}</div>
              <div className="comp-cell">{r.cells[1]}</div>
              <div className="comp-cell">{r.cells[2]}</div>
            </div>
          ))}
        </div>
        <div className="comp-legend">
          <div className="comp-legend-item">
            <div className="ci ci-yes" style={{ width: 20, height: 20 }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20,6 9,17 4,12" />
              </svg>
            </div>
            Fully supported
          </div>
          <div className="comp-legend-item">
            <div className="ci ci-part" style={{ width: 20, height: 20 }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
            Partial / add-on
          </div>
          <div className="comp-legend-item">
            <div className="ci ci-no" style={{ width: 20, height: 20 }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            Not available
          </div>
        </div>
      </div>
    </section>
  );
}
