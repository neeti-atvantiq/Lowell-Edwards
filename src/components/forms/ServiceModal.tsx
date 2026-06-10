'use client';
import { useState, useEffect } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};

const initial = { name: '', company: '', email: '', phone: '', buildingType: '' };

export default function ServiceModal({ open, onClose }: Props) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const onChange = (k: keyof typeof initial) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || 'Submission failed');
      setStatus('success');
      setForm(initial);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Submission failed');
    }
  };

  if (!open) return null;

  return (
    <div className="service-modal-overlay" onClick={onClose}>
      <div className="service-modal" onClick={(e) => e.stopPropagation()}>
        <button className="service-modal-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <h3 className="qf-title" style={{ fontSize: 26, marginBottom: 12 }}>Request Received</h3>
            <p className="qf-sub" style={{ marginBottom: 24 }}>We&apos;ll be in touch within 24 hours.</p>
            <button className="qf-submit" onClick={onClose} style={{ maxWidth: 200, margin: '0 auto' }}>Close</button>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <h3 className="qf-title" style={{ fontSize: 26, marginBottom: 6 }}>Request Service</h3>
            <p className="qf-sub">Fill in your details and we&apos;ll get back to you shortly.</p>

            <div className="qf-row">
              <div className="qf-field" style={{ marginBottom: 0 }}>
                <label className="qf-label">Name</label>
                <input className="qf-input" type="text" placeholder="Your full name" required value={form.name} onChange={onChange('name')} />
              </div>
              <div className="qf-field" style={{ marginBottom: 0 }}>
                <label className="qf-label">Company</label>
                <input className="qf-input" type="text" placeholder="Company name" value={form.company} onChange={onChange('company')} />
              </div>
            </div>

            <div className="qf-row">
              <div className="qf-field" style={{ marginBottom: 0 }}>
                <label className="qf-label">Email</label>
                <input className="qf-input" type="email" placeholder="you@company.com" required value={form.email} onChange={onChange('email')} />
              </div>
              <div className="qf-field" style={{ marginBottom: 0 }}>
                <label className="qf-label">Phone Number</label>
                <input className="qf-input" type="tel" placeholder="(201) 555-0000" required value={form.phone} onChange={onChange('phone')} />
              </div>
            </div>

            <div className="qf-field">
              <label className="qf-label">Building Type</label>
              <select className="qf-select" required value={form.buildingType} onChange={onChange('buildingType')}>
                <option value="" disabled>Select building type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Mixed-Use">Mixed-Use</option>
                <option value="Gated Community">Gated Community</option>
                <option value="Student Housing">Student Housing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {status === 'error' && (
              <p style={{ color: '#c0392b', fontSize: 13, marginBottom: 12 }}>{errorMessage}</p>
            )}

            <button className="qf-submit" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Submit Request'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
