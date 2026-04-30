'use client';
import { useState } from 'react';

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    first: '', last: '', company: '', email: '', phone: '',
    buildingType: '', units: '', priority: '', notes: '',
  });

  const onChange =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section quote-section" id="quote">
      <div className="wrap">
        <div className="quote-grid">
          <div className="reveal">
            <div className="tag">Request a Quote</div>
            <h2 className="h2">
              A personalised solution, <em className="em">built for your building</em>
            </h2>
            <p className="body-lg" style={{ marginTop: 22 }}>
              We don&apos;t do off-the-shelf packages. Our team reviews your building&apos;s specific
              requirements and produces a detailed, itemised specification — at no cost and with
              zero obligation.
            </p>
            <div className="quote-benefits">
              {[
                {
                  t: 'Detailed specification included',
                  s: "Itemised scope of work so you know exactly what you're getting before committing",
                },
                {
                  t: 'Free site survey for larger projects',
                  s: 'A qualified local engineer visits, assesses entry points, and recommends the optimal configuration',
                },
                {
                  t: 'Response within 1 business day',
                  s: 'A real engineer responds — not an automated email system',
                },
              ].map((b, i) => (
                <div className="qb-item" key={i}>
                  <div className="qb-icon">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                  </div>
                  <div>
                    <div className="qb-title">{b.t}</div>
                    <div className="qb-body">{b.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="quote-form-wrap reveal" style={{ transitionDelay: '.15s' }}>
            {submitted ? (
              <>
                <div className="qf-title">Thank you — we&apos;ve received your request.</div>
                <div className="qf-sub">An engineer will be in touch within one business day.</div>
              </>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="qf-title">Get Your Free Quote</div>
                <div className="qf-sub">No obligation · Response within 1 business day</div>
                <div className="qf-row">
                  <div>
                    <label className="qf-label">First Name</label>
                    <input className="qf-input" placeholder="John" value={form.first} onChange={onChange('first')} />
                  </div>
                  <div>
                    <label className="qf-label">Last Name</label>
                    <input className="qf-input" placeholder="Smith" value={form.last} onChange={onChange('last')} />
                  </div>
                </div>
                <div className="qf-field">
                  <label className="qf-label">Company / Organisation</label>
                  <input className="qf-input" placeholder="Acme Property Management Ltd" value={form.company} onChange={onChange('company')} />
                </div>
                <div className="qf-field">
                  <label className="qf-label">Email Address</label>
                  <input className="qf-input" type="email" placeholder="john@yourcompany.co.uk" value={form.email} onChange={onChange('email')} />
                </div>
                <div className="qf-field">
                  <label className="qf-label">Phone Number</label>
                  <input className="qf-input" type="tel" placeholder="+44 7700 000 000" value={form.phone} onChange={onChange('phone')} />
                </div>
                <div className="qf-field">
                  <label className="qf-label">Building Type</label>
                  <select className="qf-select" value={form.buildingType} onChange={onChange('buildingType')}>
                    <option value="">Select building type…</option>
                    <option>Residential apartment block</option>
                    <option>Commercial office</option>
                    <option>Mixed-use development</option>
                    <option>Student accommodation</option>
                    <option>Gated community / estate</option>
                    <option>Industrial / warehouse</option>
                  </select>
                </div>
                <div className="qf-row">
                  <div>
                    <label className="qf-label">Number of Units</label>
                    <select className="qf-select" value={form.units} onChange={onChange('units')}>
                      <option value="">Units…</option>
                      <option>1–10</option>
                      <option>11–50</option>
                      <option>51–200</option>
                      <option>200+</option>
                    </select>
                  </div>
                  <div>
                    <label className="qf-label">Priority Need</label>
                    <select className="qf-select" value={form.priority} onChange={onChange('priority')}>
                      <option value="">Select…</option>
                      <option>Package security</option>
                      <option>Access control</option>
                      <option>Remote management</option>
                      <option>Face recognition</option>
                      <option>Full building solution</option>
                    </select>
                  </div>
                </div>
                <div className="qf-field">
                  <label className="qf-label">Additional Notes</label>
                  <textarea
                    className="qf-textarea"
                    placeholder="Tell us about your building or any specific requirements…"
                    value={form.notes}
                    onChange={onChange('notes')}
                  />
                </div>
                <button type="submit" className="qf-submit">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22,2 15,22 11,13 2,9" />
                  </svg>
                  Request My Free Quote
                </button>
                <div className="qf-privacy">🔒 Your details are kept private. No spam, ever.</div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
