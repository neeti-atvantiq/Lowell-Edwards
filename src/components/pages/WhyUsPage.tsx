import Image from 'next/image';
import Link from 'next/link';

const trustSections = [
  {
    label: 'Remote Support',
    title: 'Most faults are diagnosed before a van is dispatched',
    body: 'Remote access and structured diagnostics let our engineers isolate common issues quickly, reducing downtime and avoiding unnecessary site visits.',
    detail: 'That means faster recovery for residents, less disruption for building teams, and better use of maintenance budgets.',
    image: '/images/installations/2.jpg',
  },
  {
    label: 'Track Record',
    title: 'Delivery backed by live operational experience',
    body: 'We work across active buildings where access, deliveries, and resident expectations cannot pause for technical complexity.',
    detail: 'That experience shows up in better project phasing, clearer resident onboarding, and more realistic system recommendations from day one.',
    image: '/images/installations/4.jpg',
  },
  {
    label: 'Guarantee',
    title: 'A workmanship promise that stays simple',
    body: 'If a problem is traced back to our installation work, we fix it without the delays or ambiguity that often follow project handovers.',
    detail: 'The guarantee is designed to create confidence, not paperwork.',
    image: '/images/solutions/solution-04.jpg',
  },
  {
    label: 'Network Resilience',
    title: 'Infrastructure planned around uptime, not as an afterthought',
    body: 'Intercom reliability depends on more than the panel at the front door. We review switching, power, failover, and recovery pathways before deployment.',
    detail: 'That results in systems that are easier to support and far less likely to fail.',
    image: '/images/installations/5.jpg',
  },
  {
    label: 'Account Management',
    title: 'One accountable contact instead of scattered handoffs',
    body: 'From planning and installation through onboarding and support, we keep communication structured so property teams always know who owns the next action.',
    detail: 'That reduces friction internally and makes the rollout feel coordinated from the client side.',
    image: '/images/installations/7.jpg',
  },
];

const principles = [
  {
    title: 'Operations First',
    body: 'Every recommendation is judged against day-to-day property operations, not just feature lists.',
  },
  {
    title: 'Long-Term Support',
    body: 'We stay engaged after handover with maintenance, response SLAs, and lifecycle planning.',
  },
  {
    title: 'Transparent Delivery',
    body: 'Clear scoping, clear milestone reporting, and clear accountability at every stage.',
  },
];

export default function WhyUsPage() {
  return (
    <main className="inner-page why-page">
      {/* HERO SECTION */}
      <section className="inner-hero why-hero-panel">
        <div className="wrap">
          <div className="split-hero-grid">
            <div className="inner-hero-content">
              <div className="tag">Why Choose Lowell Edwards</div>
              <h1 className="h2">
                More than an installer. A committed <em className="em">operations partner</em>
              </h1>
              <p className="body-lg">
                Our team is built to support property managers, facility teams, and developers with
                practical advice, dependable execution, and responsive service after launch.
              </p>
              <div className="inner-hero-actions">
                <Link href="/contact" className="btn btn-gold">Talk to a Specialist</Link>
                <Link href="/#quote" className="btn btn-outline">Request Proposal</Link>
              </div>
            </div>

            <div className="feature-visual-card why-hero-visual">
              <Image
                src="/images/installations/8.jpg"
                alt="Installation team working on access control infrastructure"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="feature-visual-overlay">
                <span>Support-led delivery for active buildings and managed portfolios</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NARRATIVE INTRO */}
      <section className="section narrative-intro-section" id="why-us">
        <div className="wrap">
          <div className="narrative-intro-grid why-intro-grid">
            <div>
              <div className="tag">Service Promise</div>
              <h2 className="h3">What makes working with us different</h2>
            </div>
            <p className="body-lg narrative-intro-copy">
              The difference is not one headline benefit. It is the combination of support speed,
              practical delivery, resilience planning, and accountability after handover.
            </p>
          </div>
        </div>
      </section>

      {/* UNIFORM HORIZONTAL STACK (MODERN & CLEAN) */}
      <section className="section why-stack-wrap">
        <div className="wrap">
          <div className="trust-uniform-stack">
            {trustSections.map((section) => (
              <article className="trust-row-card" key={section.label}>
                <div className="trust-row-media">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="trust-row-content">
                  <div className="trust-row-label">{section.label}</div>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                  <p className="trust-row-detail">{section.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS BAND */}
      <section className="section service-metrics-band">
        <div className="wrap">
          <div className="metrics-band-grid">
            <article className="metric-band-item">
              <strong>500+</strong>
              <span>buildings supported</span>
            </article>
            <article className="metric-band-item">
              <strong>98%</strong>
              <span>client satisfaction</span>
            </article>
            <article className="metric-band-item">
              <strong>1 year</strong>
              <span>workmanship guarantee</span>
            </article>
            <article className="metric-band-item">
              <strong>24h</strong>
              <span>max response window</span>
            </article>
          </div>
        </div>
      </section>

      {/* PRINCIPLES STRIP */}
      <section className="section principle-strip">
        <div className="wrap">
          <div className="principles-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}