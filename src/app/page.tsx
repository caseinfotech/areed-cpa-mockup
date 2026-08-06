const services = [
  {
    number: "01",
    title: "Individual Tax",
    description:
      "Accurate tax preparation and proactive planning designed to reduce surprises and protect what you have earned.",
  },
  {
    number: "02",
    title: "Business Tax",
    description:
      "Practical tax strategy for business owners who need clarity, responsiveness, and dependable guidance.",
  },
  {
    number: "03",
    title: "Accounting Support",
    description:
      "Clean books, useful reporting, and a clearer understanding of the financial health of your business.",
  },
];

const benefits = [
  {
    title: "Year-round guidance",
    description:
      "Tax decisions happen throughout the year—not only when a return is due.",
  },
  {
    title: "Personal attention",
    description:
      "Work directly with a local professional who understands your financial history.",
  },
  {
    title: "Clear explanations",
    description:
      "Complex tax and accounting questions translated into useful next steps.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Angela M. Reed CPA">
          <span className="brand-mark">AR</span>
          <span className="brand-text">
            <strong>Angela M. Reed</strong>
            <small>Certified Public Accountant</small>
          </span>
        </a>

        <nav>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#approach">Approach</a>
          <a href="#contact" className="nav-button">
            Schedule a conversation
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="hero-copy">
          <div className="eyebrow">
            <span />
            Asheville, North Carolina
          </div>

          <h1>
            Financial clarity for the decisions that matter most.
          </h1>

          <p className="hero-lead">
            Tax preparation, accounting, and proactive guidance for individuals
            and small businesses who value a trusted local relationship.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button button-primary">
              Schedule a consultation
              <span>↗</span>
            </a>

            <a href="#services" className="secondary-link">
              Explore services
              <span>↓</span>
            </a>
          </div>

          <div className="trust-grid">
            <div>
              <strong>Local</strong>
              <span>Asheville-based service</span>
            </div>
            <div>
              <strong>Personal</strong>
              <span>Direct CPA relationship</span>
            </div>
            <div>
              <strong>Proactive</strong>
              <span>Planning beyond tax season</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="grid-lines" />

          <div className="dashboard-card">
            <div className="dashboard-top">
              <span>Financial roadmap</span>
              <span className="status">Active</span>
            </div>

            <h2>Plan with confidence.</h2>
            <p>
              Better information today creates more options tomorrow.
            </p>

            <div className="chart">
              <i style={{ height: "28%" }} />
              <i style={{ height: "43%" }} />
              <i style={{ height: "39%" }} />
              <i style={{ height: "60%" }} />
              <i style={{ height: "72%" }} />
              <i style={{ height: "90%" }} />
            </div>

            <div className="chart-labels">
              <span>Review</span>
              <span>Plan</span>
              <span>Prepare</span>
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <span className="check">✓</span>
            <div>
              <small>Year-round support</small>
              <strong>Not just tax season</strong>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <small>Built around your goals</small>
            <div className="progress">
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="client-strip">
        <p>Trusted accounting support for</p>
        <div>
          <span>Individuals</span>
          <i>•</i>
          <span>Small businesses</span>
          <i>•</i>
          <span>Independent professionals</span>
          <i>•</i>
          <span>Growing families</span>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <div className="eyebrow dark">
            <span />
            Services
          </div>

          <h2>
            Expert guidance without the unnecessary complexity.
          </h2>

          <p>
            Focused services designed to provide better information, fewer
            surprises, and more confidence in what comes next.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card-top">
                <span>{service.number}</span>
                <span className="service-arrow">↗</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact">Discuss this service</a>
            </article>
          ))}
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="approach-copy">
          <div className="eyebrow">
            <span />
            A proactive approach
          </div>

          <h2>
            Good tax work looks backward. Great advice helps you move forward.
          </h2>

          <p className="approach-intro">
            Filing accurately matters. But the greatest value often comes
            before a return is due—when there is still time to make a smarter
            decision.
          </p>

          <div className="steps">
            <div className="step">
              <span>01</span>
              <div>
                <strong>Understand the full picture</strong>
                <p>
                  We begin with your goals, obligations, and opportunities—not
                  just a stack of documents.
                </p>
              </div>
            </div>

            <div className="step">
              <span>02</span>
              <div>
                <strong>Identify practical opportunities</strong>
                <p>
                  We look for useful planning moves that align with your real
                  life and business.
                </p>
              </div>
            </div>

            <div className="step">
              <span>03</span>
              <div>
                <strong>Stay ahead of deadlines</strong>
                <p>
                  Clear next steps help you act earlier and avoid last-minute
                  surprises.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="insight-panel">
          <div className="insight-header">
            <span>Planning progress</span>
            <span className="status">On track</span>
          </div>

          <div className="roadmap">
            <span className="roadmap-node active">1</span>
            <i />
            <span className="roadmap-node active">2</span>
            <i />
            <span className="roadmap-node">3</span>
          </div>

          <div className="roadmap-labels">
            <span>Review</span>
            <span>Plan</span>
            <span>Prepare</span>
          </div>

          <div className="insight-box">
            <small>Planning insight</small>
            <strong>Earlier decisions create more options.</strong>
            <p>
              Quarterly and year-end conversations can uncover opportunities
              before filing season begins.
            </p>
          </div>

          <div className="insight-note">
            <span>✓</span>
            Personalized recommendations, clearly explained
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="portrait">
          <div className="portrait-glow" />
          <span className="portrait-monogram">AMR</span>

          <div className="portrait-caption">
            <strong>Angela M. Reed, CPA</strong>
            <span>Asheville, North Carolina</span>
          </div>
        </div>

        <div className="about-copy">
          <div className="eyebrow dark">
            <span />
            About the firm
          </div>

          <h2>Professional expertise. Personal relationship.</h2>

          <p className="about-lead">
            Your finances are personal. Your accounting relationship should be,
            too.
          </p>

          <p>
            Angela M. Reed, CPA, PC provides tax and accounting services with a
            focus on responsiveness, careful attention, and advice you can
            understand. Clients work with a local professional who knows their
            history and takes the time to understand where they want to go.
          </p>

          <div className="benefits">
            {benefits.map((benefit) => (
              <div className="benefit" key={benefit.title}>
                <span>✓</span>
                <p>
                  <strong>{benefit.title}</strong>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-mark">“</div>
        <blockquote>
          The best accounting relationships create something more valuable than
          completed forms: they create confidence.
        </blockquote>
        <p>
          Clear answers. Thoughtful planning. A trusted partner close to home.
        </p>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy">
          <div className="eyebrow">
            <span />
            Start a conversation
          </div>

          <h2>
            Let’s make your next financial decision a more confident one.
          </h2>

          <p>
            Tell us a little about what you need. The firm will follow up to
            discuss fit, timing, and next steps.
          </p>

          <div className="contact-details">
            <a href="tel:+18282545623">
              <small>Call</small>
              <strong>(828) 254-5623</strong>
            </a>

            <div>
              <small>Visit</small>
              <strong>Asheville, North Carolina</strong>
            </div>

            <div>
              <small>Availability</small>
              <strong>By appointment</strong>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <label>
              First name
              <input type="text" placeholder="Jane" />
            </label>

            <label>
              Last name
              <input type="text" placeholder="Smith" />
            </label>
          </div>

          <label>
            Email address
            <input type="email" placeholder="jane@example.com" />
          </label>

          <label>
            What can we help with?
            <select defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option>Individual tax</option>
              <option>Business tax</option>
              <option>Accounting support</option>
              <option>Tax planning</option>
            </select>
          </label>

          <label>
            Tell us a little more
            <textarea
              rows={4}
              placeholder="Briefly describe what you’re looking for..."
            />
          </label>

          <button type="button" className="button button-light">
            Request a consultation
            <span>↗</span>
          </button>

          <small className="form-note">
            Mockup form — submission is not currently connected.
          </small>
        </form>
      </section>

      <footer>
        <div className="footer-main">
          <a href="#top" className="brand">
            <span className="brand-mark">AR</span>
            <span className="brand-text">
              <strong>Angela M. Reed</strong>
              <small>Certified Public Accountant</small>
            </span>
          </a>

          <p>
            Tax preparation, accounting, and guidance for Asheville individuals
            and businesses.
          </p>

          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Angela M. Reed, CPA, PC</span>
          <span>Concept website by Next Design</span>
        </div>
      </footer>
    </main>
  );
}
