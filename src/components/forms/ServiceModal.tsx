'use client';
import { useState, useEffect, useMemo } from 'react';
import { State, City } from 'country-state-city';
import CustomSelect from '@/components/ui/CustomSelect';

type Props = {
  open: boolean;
  onClose: () => void;
};

const initial = {
  name: '',
  company: '',
  email: '',
  phone: '',
  state: '',
  city: '',
  streetAddress: '',
  apartment: '',
  zipCode: '',
  requestType: '',
  notes: '',
};

export default function ServiceModal({ open, onClose }: Props) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // US states from library
  const usStates = useMemo(() => State.getStatesOfCountry('US'), []);

  // Cities for selected state
  const cities = useMemo(() => {
    if (!form.state) return [];
    return City.getCitiesOfState('US', form.state);
  }, [form.state]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const onChange = (k: keyof typeof initial) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const val = e.target.value;
    if (k === 'state') {
      setForm({ ...form, state: val, city: '' });
    } else {
      setForm({ ...form, [k]: val });
    }
  };

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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="sm-success">
            <div className="sm-success-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="sm-title">Request Received</h3>
            <p className="sm-sub">We&apos;ll be in touch within 24 hours.</p>
            <button className="sm-submit" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="sm-form">
            <div className="sm-header">
              <h3 className="sm-title">Request Service</h3>
              <p className="sm-sub">Fill in your details and we&apos;ll get back to you shortly.</p>
            </div>

            {/* Section: Personal Info */}
            <div className="sm-section-label">Contact Information</div>
            <div className="sm-row">
              <div className="sm-field">
                <label className="sm-label">Full Name <span className="sm-req">*</span></label>
                <input className="sm-input" type="text" placeholder="John Doe" required value={form.name} onChange={onChange('name')} />
              </div>
              <div className="sm-field">
                <label className="sm-label">Company</label>
                <input className="sm-input" type="text" placeholder="Company name" value={form.company} onChange={onChange('company')} />
              </div>
            </div>
            <div className="sm-row">
              <div className="sm-field">
                <label className="sm-label">Email <span className="sm-req">*</span></label>
                <input className="sm-input" type="email" placeholder="you@company.com" required value={form.email} onChange={onChange('email')} />
              </div>
              <div className="sm-field">
                <label className="sm-label">Phone <span className="sm-req">*</span></label>
                <input className="sm-input" type="tel" placeholder="201-555-0000" required value={form.phone} onChange={onChange('phone')} />
              </div>
            </div>

            {/* Section: Address */}
            <div className="sm-section-label">Service Address</div>
            <div className="sm-row">
              <div className="sm-field">
                <label className="sm-label">State <span className="sm-req">*</span></label>
                <CustomSelect
                  value={form.state}
                  onChange={(v) => setForm({ ...form, state: v, city: '' })}
                  placeholder="Select state"
                  required
                  searchable
                  options={usStates.map((s) => ({ value: s.isoCode, label: s.name }))}
                />
              </div>
              <div className="sm-field">
                <label className="sm-label">City <span className="sm-req">*</span></label>
                <CustomSelect
                  value={form.city}
                  onChange={(v) => setForm({ ...form, city: v })}
                  placeholder={form.state ? 'Select city' : 'Select state first'}
                  required
                  searchable
                  disabled={!form.state}
                  options={cities.map((c) => ({ value: c.name, label: c.name }))}
                />
              </div>
            </div>
            <div className="sm-row">
              <div className="sm-field sm-field-wide">
                <label className="sm-label">Street Address <span className="sm-req">*</span></label>
                <input className="sm-input" type="text" placeholder="123 Main St" required value={form.streetAddress} onChange={onChange('streetAddress')} />
              </div>
              <div className="sm-field sm-field-narrow">
                <label className="sm-label">Apt / Suite</label>
                <input className="sm-input" type="text" placeholder="Apt 4B" value={form.apartment} onChange={onChange('apartment')} />
              </div>
            </div>
            <div className="sm-row">
              <div className="sm-field sm-field-narrow">
                <label className="sm-label">ZIP Code <span className="sm-req">*</span></label>
                <input className="sm-input" type="text" placeholder="07601" required value={form.zipCode} onChange={onChange('zipCode')} maxLength={10} />
              </div>
              <div className="sm-field">
                <label className="sm-label">Request Type <span className="sm-req">*</span></label>
                <CustomSelect
                  value={form.requestType}
                  onChange={(v) => setForm({ ...form, requestType: v })}
                  placeholder="Select type"
                  required
                  options={[
                    { value: 'General', label: 'General' },
                    { value: 'Internet', label: 'Internet' },
                    { value: 'Intercom', label: 'Intercom' },
                  ]}
                />
              </div>
            </div>

            {/* Notes */}
            <div className="sm-field" style={{ marginBottom: 16 }}>
              <label className="sm-label">Additional Notes</label>
              <textarea
                className="sm-input sm-textarea"
                placeholder="Any special requirements or details…"
                rows={3}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />
            </div>

            {status === 'error' && (
              <div className="sm-error">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                {errorMessage}
              </div>
            )}

            <button className="sm-submit" type="submit" disabled={status === 'submitting'}>
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
