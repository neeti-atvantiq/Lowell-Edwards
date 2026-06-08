'use client';
import { useState } from 'react';
import { useRecaptchaToken } from '@/hooks/useRecaptchaToken';

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const getRecaptchaToken = useRecaptchaToken();
  const [form, setForm] = useState({
    first: '', last: '', company: '', email: '', phone: '',
    buildingType: '', units: '', priority: '', notes: '',
  });

  const onChange =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setErrorMessage('');

    const recaptchaToken = await getRecaptchaToken('quote');
    if (!recaptchaToken) {
      setSubmitting(false);
      setErrorMessage('Could not verify reCAPTCHA. Please refresh and try again.');
      return;
    }

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Submission failed');
      }
      setSubmitted(true);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section quote-section" id="quote">
      <div className="wrap">
        <div className="quote-grid">
          <div className="reveal">
            <div className="tag">Request a Quote</div>
            <h2 className="h2">
              A personalised<br/> solution, <em className="em">built for <br/>your building</em>
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
                  <input className="qf-input" type="email" placeholder="john@yourcompany.com" value={form.email} onChange={onChange('email')} />
                </div>
                <div className="qf-field">
                  <label className="qf-label">Phone Number</label>
                  <input className="qf-input" type="tel" placeholder="+1 201-525-3300" value={form.phone} onChange={onChange('phone')} />
                </div>
                <div className="qf-field">
                  <label className="qf-label">Building Type</label>
                  <select className="qf-select" value={form.buildingType} onChange={onChange('buildingType')}>
                    <option value="">Select building type…</option>
                    <option>Residential Condominium Building</option>
                    <option>Residential Cooperative Building</option>
                    <option>Residential Rental Building</option>
                    <option>Residence</option>
                    <option>Gated Community</option>
                    <option>Commercial Office</option>
                    <option>Industrial/Warehouse</option>
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
                      <option>Immediate Installation</option>
                      <option>Future Planning</option>
                      <option>Project in development</option>
                    </select>
                  </div>
                </div>
                <div className="qf-field">
                  <label className="qf-label">Additional Notes</label>
                  <textarea
                    className="qf-textarea"
                    placeholder="Please tell us if you have any additional Doors or garage doors for the system. Any special entry needs and package rooms."
                    value={form.notes}
                    onChange={onChange('notes')}
                  />
                </div>
                <button type="submit" className="qf-submit" disabled={submitting}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22,2 15,22 11,13 2,9" />
                  </svg>
                  {submitting ? 'Sending…' : 'Request My Free Quote'}
                </button>
                {errorMessage && (
                  <div role="alert" style={{ marginTop: 12, color: '#b3261e', fontSize: 13 }}>
                    {errorMessage}
                  </div>
                )}
                <div className="qf-privacy">🔒 Your details are kept private. No spam, ever.</div>
                <div className="qf-privacy" style={{ marginTop: 6, fontSize: 11, opacity: 0.75 }}>
                  Protected by reCAPTCHA —{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Privacy</a>{' '}·{' '}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Terms</a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
