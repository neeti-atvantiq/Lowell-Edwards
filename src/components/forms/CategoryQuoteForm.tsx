'use client';
import { useState } from 'react';
import { useRecaptchaToken } from '@/hooks/useRecaptchaToken';

type Props = {
  brand: string;
  category: string;
  placeholderMessage?: string;
};

const initial = { name: '', email: '', phone: '', units: '', message: '' };

export default function CategoryQuoteForm({ brand, category, placeholderMessage }: Props) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const getRecaptchaToken = useRecaptchaToken();

  const onChange =
    (k: keyof typeof initial) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setErrorMessage('');

    const recaptchaToken = await getRecaptchaToken('category_quote');
    if (!recaptchaToken) {
      setStatus('error');
      setErrorMessage('Could not verify reCAPTCHA. Please refresh and try again.');
      return;
    }

    try {
      const res = await fetch('/api/category-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, brand, category, recaptchaToken }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Submission failed');
      }
      setStatus('success');
      setForm(initial);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Submission failed');
    }
  };

  return (
    <form className="cat-quote-form reveal" onSubmit={onSubmit}>
      <div className="cat-form-row">
        <div className="cat-form-group">
          <label htmlFor="cat-name">Full Name</label>
          <input type="text" id="cat-name" name="name" placeholder="Your name" required value={form.name} onChange={onChange('name')} />
        </div>
        <div className="cat-form-group">
          <label htmlFor="cat-email">Email</label>
          <input type="email" id="cat-email" name="email" placeholder="you@company.com" required value={form.email} onChange={onChange('email')} />
        </div>
      </div>
      <div className="cat-form-row">
        <div className="cat-form-group">
          <label htmlFor="cat-phone">Phone</label>
          <input type="tel" id="cat-phone" name="phone" placeholder="07xxx xxx xxx" value={form.phone} onChange={onChange('phone')} />
        </div>
        <div className="cat-form-group">
          <label htmlFor="cat-units">Number of Units</label>
          <input type="text" id="cat-units" name="units" placeholder="e.g. 24 apartments" value={form.units} onChange={onChange('units')} />
        </div>
      </div>
      <div className="cat-form-group">
        <label htmlFor="cat-message">Project Details</label>
        <textarea
          id="cat-message"
          name="message"
          rows={4}
          placeholder={placeholderMessage || `Tell us about your building and what you need from ${brand}...`}
          value={form.message}
          onChange={onChange('message')}
        />
      </div>
      <button
        type="submit"
        className="btn btn-gold"
        disabled={status === 'submitting'}
        style={{ width: '100%', justifyContent: 'center', padding: '16px 28px', marginTop: '24px' }}
      >
        {status === 'submitting' ? 'Sending…' : 'Request Free Quote'}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
      {status === 'success' && (
        <p role="status" style={{ marginTop: 12, color: '#1f6b3a', fontSize: 13 }}>
          Thanks — your quote request has been sent.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" style={{ marginTop: 12, color: '#b3261e', fontSize: 13 }}>
          {errorMessage}
        </p>
      )}
      <p className="cat-form-note">No obligation · Free site survey · 24h response</p>
      <p className="cat-form-note" style={{ fontSize: 10, opacity: 0.75 }}>
        Protected by reCAPTCHA —{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a> ·{' '}
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms</a>
      </p>
    </form>
  );
}
