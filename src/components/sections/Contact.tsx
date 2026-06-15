'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRecaptchaToken } from '@/hooks/useRecaptchaToken';
import CustomSelect from '@/components/ui/CustomSelect';
import PhoneField from '@/components/ui/PhoneField';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentDate: '',
    appointmentTime: '',
    message: ''
  });
  const [timeHour, setTimeHour] = useState('');
  const [timeMinute, setTimeMinute] = useState('');
  const [timePeriod, setTimePeriod] = useState('');

  const updateTime = (hour: string, minute: string, period: string) => {
    if (!hour || !minute || !period) {
      setFormData(prev => ({ ...prev, appointmentTime: '' }));
      return;
    }
    let h = parseInt(hour, 10);
    if (period === 'PM' && h !== 12) h += 12;
    if (period === 'AM' && h === 12) h = 0;
    const val = `${String(h).padStart(2, '0')}:${minute}`;
    setFormData(prev => ({ ...prev, appointmentTime: val }));
  };
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const getRecaptchaToken = useRecaptchaToken();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setErrorMessage('');

    const recaptchaToken = await getRecaptchaToken('contact');
    if (!recaptchaToken) {
      setStatus('error');
      setErrorMessage('Could not verify reCAPTCHA. Please refresh and try again.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Submission failed');
      }
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', appointmentDate: '', appointmentTime: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Submission failed');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-bg">
          <Image
            src="/images/hero/contact_us.jpg"
            alt="Contact Us"
            fill
            sizes="100vw 70vh"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="tag">Get in Touch</div>
          <h1 className="h1">Contact Us</h1>
          <p className="body-lg" style={{ maxWidth: 580, marginTop: 18, marginInline: 'auto' }}>
            Ready to upgrade your building&apos;s access control? Our team is here to help with expert guidance, quotes, and support.
          </p>
        </div>
      </div>

      <section className="section contact-main">
        <div className="wrap">
          
          <div className="contact-split">
            
            {/* LEFT SIDE: Contact Info Cards */}
            <div className="contact-sidebar">
              
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-title">Phone</h3>
                  <p className="contact-card-detail">
                    <a href="tel:+12015253300" className="contact-link">201-525-3300</a>
                  </p>
                  <div className="contact-hours">
                    <h4 className="hours-title">Business Hours</h4>
                    <ul className="hours-list">
                      <li><span>Mon-Fri:</span> 10:00 AM - 7:00 PM</li>
                      <li><span>Saturday:</span> By appointment</li>
                      <li><span>Sunday:</span> Closed</li>
                    </ul>
                    {/* <div className="hours-emergency">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>24/7 Emergency</span>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-title">Location & Email</h3>
                  <p className="contact-card-detail" style={{ marginBottom: 16 }}>
                    15 Warren St. Suite 25<br /> 
Hackensack, NJ 07601<br />
Serving Northern New Jersey, <br />
New York Metro and surrounding areas
                  </p>
                  <div className="contact-hours" style={{ marginTop: 16, paddingTop: 16 }}>
                    <h4 className="hours-title">Direct Contact</h4>
                    <p className="contact-card-detail">
                      <a href="mailto:info@lowelledwards.com" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        info@lowelledwards.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE: Contact Form */}
            <div className="contact-form-section">
              <div className="contact-form-wrap">
                <div className="contact-form-header" style={{ textAlign: 'center', marginBottom: 36 }}>
                  <h2 className="contact-form-title" style={{ marginBottom: 8 }}>Book a Consultation</h2>
                  <p className="contact-form-sub" style={{ margin: 0 }}>Pick a date and time that works for you. We&apos;ll confirm by email at <a href="mailto:info@lowelledwards.com" className="contact-link">info@lowelledwards.com</a> within 24 hours.</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="contact-form-field">
                      <label htmlFor="name" className="contact-form-label">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-form-input"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="contact-form-field">
                      <label htmlFor="email" className="contact-form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-form-input"
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                  </div>
                  <div className="contact-form-field">
                    <label htmlFor="phone" className="contact-form-label">Phone</label>
                    <PhoneField
                      value={formData.phone}
                      onChange={(v) => setFormData((prev) => ({ ...prev, phone: v }))}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                  <div className="contact-form-row">
                    <div className="contact-form-field">
                      <label htmlFor="appointmentDate" className="contact-form-label">Date</label>
                      <input
                        type="date"
                        id="appointmentDate"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        className="contact-form-input"
                        required
                      />
                    </div>
                    <div className="contact-form-field">
                      <label className="contact-form-label">Time</label>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <CustomSelect
                          value={timeHour}
                          onChange={(v) => { setTimeHour(v); updateTime(v, timeMinute, timePeriod); }}
                          placeholder="Hr"
                          required
                          options={[1,2,3,4,5,6,7,8,9,10,11,12].map(h => ({ value: String(h), label: String(h) }))}
                        />
                        <CustomSelect
                          value={timeMinute}
                          onChange={(v) => { setTimeMinute(v); updateTime(timeHour, v, timePeriod); }}
                          placeholder="Min"
                          required
                          options={['00','15','30','45'].map(m => ({ value: m, label: m }))}
                        />
                        <CustomSelect
                          value={timePeriod}
                          onChange={(v) => { setTimePeriod(v); updateTime(timeHour, timeMinute, v); }}
                          placeholder="AM/PM"
                          required
                          options={[{ value: 'AM', label: 'AM' }, { value: 'PM', label: 'PM' }]}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="contact-form-field">
                    <label htmlFor="message" className="contact-form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="contact-form-textarea"
                      placeholder="Tell us about your project"
                      rows={6}
                      required
                    />
                  </div>
                  <button type="submit" className="contact-form-submit" disabled={status === 'submitting'}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {status === 'submitting' ? 'Sending…' : 'Submit Request'}
                  </button>
                  {status === 'success' && (
                    <p role="status" style={{ marginTop: 16, color: '#1f6b3a', fontSize: 14 }}>
                      Thanks — your request has been sent. We&apos;ll confirm by email within 24 hours.
                    </p>
                  )}
                  {status === 'error' && (
                    <p role="alert" style={{ marginTop: 16, color: '#b3261e', fontSize: 14 }}>
                      {errorMessage || 'Something went wrong. Please try again or call us.'}
                    </p>
                  )}
                  <p style={{ marginTop: 16, fontSize: 11, color: '#6b6b6b', lineHeight: 1.5 }}>
                    This site is protected by reCAPTCHA and the Google{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Privacy Policy</a>{' '}
                    and{' '}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Terms of Service</a> apply.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section contact-trust">
        {/* ... (Keep existing trust section exactly the same) ... */}
        <div className="wrap">
          <div className="contact-trust-grid">
            <div className="contact-trust-item">
              <div className="contact-trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h4>Certified Professionals</h4>
              <p>Licensed and insured experts with years of experience</p>
            </div>
            <div className="contact-trust-item">
              <div className="contact-trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h4>24-Hour Response</h4>
              <p>Guaranteed response within 24 hours, every time</p>
            </div>
            <div className="contact-trust-item">
              <div className="contact-trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h4>Free Consultation</h4>
              <p>No-obligation assessment and recommendations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}