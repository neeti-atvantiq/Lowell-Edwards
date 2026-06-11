'use client';
import { useState } from 'react';
import CustomSelect from '@/components/ui/CustomSelect';

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
    let sub = 'Ideal for residential apartment buildings — cloud-managed, mobile app entry, and package delivery built in.';
    if (priority === 'Face recognition entry') {
      rec = 'Akuvox Face Recognition System';
      sub = 'AI-powered touchless entry — perfect for offices, student housing, and high-security buildings.';
    } else if (priority === 'Package delivery security') {
      rec = 'ButterflyMX with Package Room';
      sub = 'Dedicated delivery management with secure lobby access codes — puts an end to package theft.';
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
              <h2 className="h2">Find the right<br />
system for<em className="em"> your <br /> building
</em></h2>
              <p className="body-lg">Answer three questions and we&apos;ll recommend the most suitable product and service tier — then generate a personalized quote from our team.</p>
              <div className="finder-trust">
                {['No obligation — completely free', 'Instant product recommendation', 'Personalized quote within 1 business day'].map((t) => (
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
                <label className="finder-label">Building Type</label>
                <CustomSelect
                  value={type}
                  onChange={setType}
                  placeholder="Select your building type…"
                  options={[
                    { value: 'Residential apartment building', label: 'Residential apartment building' },
                    { value: 'Commercial office building', label: 'Commercial office building' },
                    { value: 'Gated community / estate', label: 'Gated community / estate' },
                    { value: 'Mixed-use development', label: 'Mixed-use development' },
                    { value: 'Student housing', label: 'Student housing' },
                    { value: 'Industrial / warehouse', label: 'Industrial / warehouse' },
                  ]}
                />
              </div>
              <div className="finder-row">
                <div>
                  <label className="finder-label">Number of Units / Floors</label>
                  <CustomSelect
                    value={size}
                    onChange={setSize}
                    placeholder="Select size…"
                    options={[
                      { value: '1–10 units', label: '1–10 units' },
                      { value: '11–50 units', label: '11–50 units' },
                      { value: '51–200 units', label: '51–200 units' },
                      { value: '200+ units', label: '200+ units' },
                    ]}
                  />
                </div>
                <div>
                  <label className="finder-label">Priority Feature</label>
                  <CustomSelect
                    value={priority}
                    onChange={setPriority}
                    placeholder="Key requirement…"
                    options={[
                      { value: 'HD video intercom', label: 'HD video intercom' },
                      { value: 'Face recognition entry', label: 'Face recognition entry' },
                      { value: 'Remote access control', label: 'Remote access control' },
                      { value: 'Package delivery security', label: 'Package delivery security' },
                      { value: 'Full building security', label: 'Full building security' },
                    ]}
                  />
                </div>
              </div>
              <button className="finder-submit" onClick={run}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                Find My Solution
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
