import Image from 'next/image';
import Link from 'next/link';

const solutionStories = [
  {
    n: '01',
    eyebrow: 'Visitor Visibility',
    title: 'See Every Visitor Before You Open',
    body: 'HD video intercom lets residents and managers see and speak to any visitor before granting access from their phone, from anywhere in the world.',
    detail: 'This removes guesswork at the entrance and gives front-of-house teams, residents, and remote managers the same live context before a door is released.',
    fact: 'Real-time HD video to any device',
    image: '/images/solutions/solution-01.png',
  },

  {
    n: '02',
    eyebrow: 'Touchless Entry',
    title: 'Touchless Face Recognition Entry',
    body: 'For premium buildings, AI-powered face recognition enables frictionless, keyless entry for registered residents without cards, fobs, or PINs.',
    detail: 'Residents move through entrances faster while property teams maintain strict enrollment control, helping reduce tailgating pressure at busy access points.',
    fact: 'AI-powered keyless resident entry',
    image: '/images/solutions/solution-05.jpeg',
  },
  {
    n: '03',
    eyebrow: 'Delivery Control',
    title: 'Secure Package & Visitor Management',
    body: 'Couriers use a delivery PIN or QR code for secure package drop-off, with every delivery logged and time-stamped. Temporary access codes for guests or contractors expire automatically—no keys, no loose ends.',
    detail: 'This keeps keys out of circulation and reduces friction for recurring services while preserving tighter control over when access starts and stops.',
    fact: 'Time-stamped delivery proof',
    image: '/images/solutions/solution-02.png',
  },
  {
    n: '04',
    eyebrow: 'Remote Administration',
    title: 'Manage Access Remotely and Instantly',
    body: 'Grant or revoke access credentials in seconds from any device. Onboarding and offboarding happen without waiting on a site visit.',
    detail: 'Leasing teams, concierge staff, and facilities managers can respond immediately to move-ins, staff turnover, contractors, and urgent lock changes.',
    fact: 'Zero on-site visits required',
    image: '/images/solutions/solution-03.jpg',
  },
  {
    n: '05',
    eyebrow: 'Audit and Compliance',
    title: 'Complete Audit Trail for Compliance',
    body: 'Every entry event is logged with who, when, and how. This protects your team with documented records for disputes and reporting.',
    detail: 'For premium residential and mixed-use properties, that means stronger evidence for incident reviews, service disputes, insurance conversations, and internal governance.',
    fact: 'Video-backed event history',
    image: '/images/solutions/solution-04.jpg',
  },
  {
    n: '06',
    eyebrow: 'Universal Accessibility',
    title: 'Support Standard Phone Calls',
    body: 'Residents without smartphones can still talk to and unlock doors for visitors through a standard phone call.',
    detail: 'This ensures every occupant — regardless of age, tech literacy, or device — retains full access control and can communicate with visitors at the entrance.',
    fact: 'No smartphone required',
    image: '/images/solutions/solution-06.jpeg',
  },
];

const outcomes = [
  { label: 'Resident wait-time reduction', value: '60%' },
  { label: 'Fewer missed deliveries', value: '3x' },
  { label: 'Remote issue resolution rate', value: '85%' },
  { label: 'Typical rollout timeline', value: '2-6 weeks' },
];

export default function SolutionPage() {
  return (
    <main className="inner-page solution-page">
      <section className="inner-hero solution-hero-panel">
        <div className="wrap">
          <div className="split-hero-grid">
            <div className="inner-hero-content">
              <div className="tag">Building Security Solution</div>
              <h1 className="h2">
                <span className="tight-o">O</span>ne integrated system<br/>for entry, delivery, and<br/> <em className="em">daily control</em>
              </h1>
              <p className="body-lg">
                We design modern intercom and access control setups that solve the real problems
                property teams face: unauthorized access, package disputes, and slow response times.
              </p>
              <div className="inner-hero-actions">
                <Link href="/#quote" className="btn btn-gold">Request a Site Plan</Link>
                <Link href="/compare" className="btn btn-outline">Compare Systems</Link>
              </div>
            </div>

            <div className="feature-visual-card solution-hero-visual">
              <Image
                src="/images/hero/solutions.png"
                alt="Smart intercom installation in a residential building"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="feature-visual-overlay">
                <span>Designed for multifamily, mixed-use, and managed access environments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section solution-outcomes">
        <div className="wrap">
          <div className="outcomes-grid">
            {outcomes.map((item) => (
              <article key={item.label} className="outcome-card">
                <div className="outcome-value">{item.value}</div>
                <p className="outcome-label">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="section narrative-intro-section" id="solutions">
        <div className="wrap">
          <div className="narrative-intro-grid">
            <div>
              <div className="tag">Core Capabilities</div>
              <h2 className="h3">Built around the workflows your<br/> teams run every day</h2>
            </div>
            <p className="body-lg narrative-intro-copy">
              Rather than forcing a building to adapt to disconnected tools, we shape the system
              around how residents arrive, how deliveries are handled, and how management teams
              need to respond in real time.
            </p>
          </div>
        </div>
      </section>

      {solutionStories.map((story, index) => (
        <section className="section story-section" key={story.n}>
          <div className="wrap">
            <div className={`story-grid ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="story-copy">
                <div className="story-index">{story.n}</div>
                <div className="story-eyebrow">{story.eyebrow}</div>
                <h3 className="h3 story-title">{story.title.split('O').map((part, i, arr) => <span key={i}>{i > 0 && <span className="tight-o">O</span>}{part}</span>)}</h3>
                <p className="body-lg story-body">{story.body}</p>
                <p className="body-md story-detail">{story.detail}</p>
                <div className="story-fact-bar">{story.fact}</div>
              </div>
              <div className="story-image-shell">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section implementation-flow">
        <div className="wrap">
          <div className="flow-header">
            <div className="tag">Implementation Approach</div>
            <h2 className="h3">From survey to live handover with<br/> minimal disruption</h2>
          </div>
          <div className="flow-grid">
            <article className="flow-step">
              <span className="flow-step-no">Step 1</span>
              <h3>Survey and Requirement Mapping</h3>
              <p>We assess entrances, risers, network pathways, and resident movement to design a practical rollout plan.</p>
            </article>
            <article className="flow-step">
              <span className="flow-step-no">Step 2</span>
              <h3>System Design and Product Selection</h3>
              <p>We match your building profile with the right hardware, credential method, and management workflow.</p>
            </article>
            <article className="flow-step">
              <span className="flow-step-no">Step 3</span>
              <h3>Installation and Resident Onboarding</h3>
              <p>Installation is phased by entrance and resident groups to keep your building operational throughout delivery.</p>
            </article>
            <article className="flow-step">
              <span className="flow-step-no">Step 4</span>
              <h3>Support, Monitoring, and Reporting</h3>
              <p>After go-live, you get performance checks, remote diagnostics, and a single support channel for your team.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
