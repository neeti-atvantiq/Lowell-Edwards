'use client';
import { useState } from 'react';
import { toast } from 'sonner';
import CustomSelect from '@/components/ui/CustomSelect';
import RequiredMark from '@/components/ui/RequiredMark';

type ApiResponse = {
  status?: boolean;
  code?: number;
  message?: string;
};

const initialQuoteForm = {
  first: '', last: '', company: '', email: '', phone: '',
  buildingType: '', units: '', priority: '', notes: '',
};

export default function Quote() {
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [form, setForm] = useState(initialQuoteForm);

  const onChange =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as ApiResponse;
      if (!res.ok || !data.status) {
        throw new Error(data.message || 'Submission failed');
      }
      toast.success(data.message || 'Your quote request has been submitted.');
      setForm(initialQuoteForm);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Submission failed';
      setErrorMessage(message);
      toast.error(message);
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
              A personalized<br/> solution, <em className="em">built for <br/>your building</em>
            </h2>
            <p className="body-lg" style={{ marginTop: 22 }}>
              We don&apos;t do off-the-shelf packages. Our team reviews your building&apos;s specific
              requirements and produces a detailed, itemized specification — at no cost and with
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
            <form onSubmit={onSubmit}>
                <div className="qf-title">Get Your Free Quote</div>
                <div className="qf-sub">No obligation · Response within 1 business day</div>
                <div className="qf-row">
                  <div>
                    <label className="qf-label">First Name<RequiredMark /></label>
                    <input className="qf-input" placeholder="John" value={form.first} onChange={onChange('first')} required />
                  </div>
                  <div>
                    <label className="qf-label">Last Name<RequiredMark /></label>
                    <input className="qf-input" placeholder="Smith" value={form.last} onChange={onChange('last')} required />
                  </div>
                </div>
                <div className="qf-field">
                  <label className="qf-label">Company / Organisation<RequiredMark /></label>
                  <input className="qf-input" placeholder="Acme Property Management Ltd" value={form.company} onChange={onChange('company')} required />
                </div>
                <div className="qf-field">
                  <label className="qf-label">Email Address<RequiredMark /></label>
                  <input className="qf-input" type="email" placeholder="john@yourcompany.com" value={form.email} onChange={onChange('email')} required />
                </div>
                <div className="qf-field">
                  <label className="qf-label">Phone Number<RequiredMark /></label>
                  <input className="qf-input" type="tel" placeholder="+1 201-525-3300" value={form.phone} onChange={onChange('phone')} required />
                </div>
                <div className="qf-field">
                  <label className="qf-label">Building Type<RequiredMark /></label>
                  <CustomSelect
                    value={form.buildingType}
                    onChange={(v) => setForm({ ...form, buildingType: v })}
                    placeholder="Select building type…"
                    required
                    options={[
                      { value: 'Residential Condominium Building', label: 'Residential Condominium Building' },
                      { value: 'Residential Cooperative Building', label: 'Residential Cooperative Building' },
                      { value: 'Residential Rental Building', label: 'Residential Rental Building' },
                      { value: 'Residence', label: 'Residence' },
                      { value: 'Gated Community', label: 'Gated Community' },
                      { value: 'Commercial Office', label: 'Commercial Office' },
                      { value: 'Industrial/Warehouse', label: 'Industrial/Warehouse' },
                    ]}
                  />
                </div>
                <div className="qf-row">
                  <div>
                    <label className="qf-label">Number of Units<RequiredMark /></label>
                    <CustomSelect
                      value={form.units}
                      onChange={(v) => setForm({ ...form, units: v })}
                      placeholder="Units…"
                      required
                      options={[
                        { value: '1–10', label: '1–10' },
                        { value: '11–50', label: '11–50' },
                        { value: '51–200', label: '51–200' },
                        { value: '200+', label: '200+' },
                      ]}
                    />
                  </div>
                  <div>
                    <label className="qf-label">Priority Need<RequiredMark /></label>
                    <CustomSelect
                      value={form.priority}
                      onChange={(v) => setForm({ ...form, priority: v })}
                      placeholder="Select…"
                      required
                      options={[
                        { value: 'Immediate Installation', label: 'Immediate Installation' },
                        { value: 'Future Planning', label: 'Future Planning' },
                        { value: 'Project in development', label: 'Project in development' },
                      ]}
                    />
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
          </div>
        </div>
      </div>
    </section>
  );
}
