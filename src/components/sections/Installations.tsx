'use client';
import Image from 'next/image';

type Installation = {
  title: string;
  location: string;
  image: string;
};

const installations: Installation[] = [
  { title: 'Riverside Apartments', location: 'North Bergen', image: '/images/installations/8.jpg' },
  { title: 'Westbrook Offices', location: 'Weehawken', image: '/images/installations/2.jpg' },
  { title: 'Crown Plaza Residences', location: 'Hoboken', image: '/images/installations/7.jpg' },
  { title: 'North Gate Student Living', location: 'New York City', image: '/images/installations/4.jpg' },
  { title: 'Elm Street Mixed Use', location: 'Manhattan', image: '/images/installations/5.jpg' },
  { title: 'Canal View Towers', location: 'Brooklyn', image: '/images/installations/6.jpg' },
  {title: 'Parkside Gated Community', location: 'Hackensack', image: '/images/installations/9.jpg' },
  {title: 'Harborfront Condominiums', location: 'Westchester', image: '/images/installations/11.jpg' },
  {title: 'Lakeside Office Park', location: 'Montclair', image: '/images/installations/10.jpg' },
  {title: 'Maplewood Student Housing', location: 'Guttenberg', image: '/images/installations/12.jpg' },
];

const marqueeItems = [...installations, ...installations];

export default function Installations() {
  return (
    <section className="section installations" id="installations">
      <div className="wrap">
        <div className="installations-head reveal">
          <div className="tag">Our Installations</div>
          <h2 className="h2">
            Real sites. Real deployments.<br />
            <em>Built to perform at scale.</em>
          </h2>
          <p className="body-lg">
            A quick look at recent door-entry and access-control projects delivered by our team.
          </p>
        </div>
      </div>

      <div className="installations-slider reveal" style={{ transitionDelay: '.1s' }}>
        <div className="installations-track">
          {marqueeItems.map((item, idx) => (
            <article className="inst-card" key={`${item.title}-${idx}`}>
              <div className="inst-image-wrap">
                <Image
                  src={item.image}
                  alt={`${item.title} installation in ${item.location}`}
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 28vw"
                  className="inst-image"
                />
              </div>
              <div className="inst-meta">
                {/* <h3>{item.title}</h3> */}
                <h3>{item.location}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
