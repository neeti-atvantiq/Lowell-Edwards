'use client';
import { useState } from 'react';

export default function Finder() {
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [priority, setPriority] = useState('');
  const [result, setResult] = useState<{ rec: string; sub: string } | null>(null);

  const run = () => {
    if (!type || !size || !priority) {
      alert('Please answer all three questions to get your recommendation.');
      return;
    }
    let rec = 'ButterflyMX Video Intercom';
    let sub = 'Ideal for residential apartment blocks — cloud-managed, mobile app entry, and package delivery built in.';
    if (priority === 'Face recognition entry') {
      rec = 'Akuvox Face Recognition System';
      sub = 'AI-powered touchless entry — perfect for offices, student accommodation, and high-security buildings.';
    } else if (priority === 'Package delivery security') {
      rec = 'ButterflyMX with Package Room';
      sub = 'Dedicated delivery management with secure lobby access codes — eliminates parcel theft completely.';
    } else if (type === 'Commercial office building') {
      rec = 'Akuvox Enterprise Intercom';
      sub = 'SIP-compatible, face recognition ready, and multi-tenant — designed for commercial environments.';
    } else if (type === 'Gated community / estate' || priority === 'Full building security') {
      rec = 'DoorBird IP Door Station';
      sub = 'Premium stainless steel design, IP65-rated outdoor durability — ideal for gated estates and luxury developments.';
    }
    setResult({ rec, sub });
  };

  return (
    <section className="section finder" id="finder">
      <div className="wrap">
        <div className="finder-inner reveal">
          <div className="finder-grid">
            <div className="finder-text">
              <div className="tag">Intercom Finder</div>
              <h2 className="h2">Not sure what you need?<br /><em className="em">Get a recommendation in 30 seconds.</em></h2>
              <p className="body-lg">Answer three quick questions and we&apos;ll suggest the best solution for your building. No email required.</p>
              <div className="finder-trust">
                {['Free, instant recommendation', 'No personal details required', 'Backed by 500+ installations'].map((t) => (
                  <div className="finder-trust-item" key={t}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="finder-form">
              <div>
                <label className="finder-label">What type of building?</label>
                <select className="finder-select" value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="">Select building type…</option>
                  <option>Residential apartment block</option>
                  <option>Commercial office building</option>
                  <option>Gated community / estate</option>
                  <option>Mixed-use development</option>
                  <option>Student accommodation</option>
                </select>
              </div>
              <div>
                <label className="finder-label">How many units / entry points?</label>
                <select className="finder-select" value={size} onChange={(e) => setSize(e.target.value)}>
                  <option value="">Select size…</option>
                  <option>1 – 10</option>
                  <option>11 – 50</option>
                  <option>51 – 200</option>
                  <option>200+</option>
                </select>
              </div>
              <div>
                <label className="finder-label">What&apos;s your top priority?</label>
                <select className="finder-select" value={priority} onChange={(e) => setPriority(e.target.value)}>
                  <option value="">Select priority…</option>
                  <option>Mobile app entry for residents</option>
                  <option>Face recognition entry</option>
                  <option>Package delivery security</option>
                  <option>Premium architectural design</option>
                  <option>Full building security</option>
                </select>
              </div>
              <button className="finder-submit" onClick={run}>
                Get My Recommendation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12,5 19,12 12,19" />
                </svg>
              </button>
              {result && (
                <div className="finder-result">
                  <div className="finder-result-label">Our Recommendation</div>
                  <div className="finder-result-rec">{result.rec}</div>
                  <div className="finder-result-sub">{result.sub}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
