const HomePage = () => (
  <main>
    {/* Enhanced Hero */}
    <section className="hero" data-animate="fade-up">
      <div className="hero-content">
        <p className="hero-kicker" data-animate-child>All in one Creator Store</p>
        <h1 data-animate-child>
          <span className="hero-text-reveal">All in one</span>
          <br />
          <span className="hero-text-reveal" style={{ animationDelay: '0.2s' }}>Creator Store</span>
        </h1>
        <p className="hero-sub" data-animate-child>
          Turn followers into customers &amp; brands into partners with just one
          platform.
        </p>
        <div className="hero-actions" data-animate-child>
          <button className="btn btn-primary hero-cta animate-bounce-in">
            Get Started for free
            <span className="btn-shine"></span>
          </button>
        </div>
        <div className="hero-logos-block" data-animate-child>
          <p className="hero-trust-label">
            OVER 100,000 CREATORS &amp; COACHES RUN THEIR BUSINESSES ON Urban Desiii
          </p>
          <div className="hero-logos">
            <span className="logo-item">Business Insider</span>
            <span className="logo-item">TechCrunch</span>
            <span className="logo-item">Forbes</span>
          </div>
        </div>
      </div>

      <div className="hero-visual" data-animate="fade-left">
        <div className="hero-diamond-gray" data-animate-child />

        <div className="hero-floating hero-floating--top animate-float" data-animate-child style={{ animationDelay: '0.8s' }}>
          <div className="floating-icon">📅</div>
          <div className="floating-text">
            <div className="floating-title">Coaching</div>
          </div>
        </div>

        <div className="hero-floating hero-floating--right animate-float" data-animate-child style={{ animationDelay: '1s' }}>
          <div className="floating-icon">⬇️</div>
          <div className="floating-text">
            <div className="floating-title">Downloads</div>
          </div>
        </div>

        <div className="hero-floating hero-floating--bottom animate-float" data-animate-child style={{ animationDelay: '1.2s' }}>
          <div className="floating-icon">✉️</div>
          <div className="floating-text">
            <div className="floating-title">Email Flows</div>
          </div>
        </div>

        <div className="hero-card animate-card-hover hero-card-delayed" data-animate-child style={{ animationDelay: '1.5s' }}>
          <div className="hero-card-image">
            <img 
              src="/assets/Images/@urbandesiii.png" 
              alt="Urban Desiii Profile" 
              className="hero-card-profile-image"
            />
          </div>
          <div className="creator-header">
            <div className="avatar animate-pulse-slow" />
            <div>
              <div className="creator-name">Lucille</div>
              <div className="creator-handle">@lucileugc</div>
            </div>
          </div>
          <div className="creator-tags">
            <span className="tag-item">Coaching</span>
            <span className="tag-item">Email Flows</span>
            <span className="tag-item">Downloads</span>
          </div>
          <div className="creator-stat-row">
            <span>Join 100,000+ creators</span>
            <span className="creator-pill animate-typing">urbandesiii.com/creators/mediakit</span>
          </div>
        </div>
      </div>
    </section>

    {/* Enhanced Use Urban Desiii for */}
    <section className="use-pillar" data-animate="fade-up">
      <h2 data-animate-child>Use Urban Desiii for</h2>
      <div className="use-grid">
        {[
          {
            title: "Create & Sell Digital Products",
            desc: "Create an editable first draft for your next digital product and sell it in minutes."
          },
          {
            title: "Drag & Drop \"Link-In-Bio\" Store",
            desc: "Build, host, and sell any digital product from your link in bio store."
          },
          {
            title: "Media Kits & Campaign Reports",
            desc: "Stop manually updating stats. Share live media kits with brands."
          },
          {
            title: "Landing Pages & Funnels",
            desc: "Launch dedicated landing pages and high-converting funnels."
          },
          {
            title: "Customer Analytics & CRM",
            desc: "Turn followers into customers & manage every relationship."
          },
          {
            title: "Email Marketing",
            desc: "Engage your audience with targeted broadcasts & sequences."
          }
        ].map((item, index) => (
          <div key={index} className="use-card card-hover-effect" data-animate="fade-up" data-animate-child>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </section>

    {/* Enhanced Integrations */}
    <section className="integrations" data-animate="fade-up">
      <h2 data-animate-child>Integrates with your favorite apps</h2>
      <p data-animate-child>Urban Desiii connects to the tools you already use to run your business.</p>
      <div className="integration-row" data-animate-child>
        {['Stripe', 'Shopify', 'Notion', 'Google Calendar', 'Zoom'].map((item, index) => (
          <span key={index} className="integration-item" style={{ animationDelay: `${index * 0.1}s` }}>
            {item}
          </span>
        ))}
      </div>
    </section>

    {/* Enhanced Features */}
    <section className="features" data-animate="fade-up">
      <h2 data-animate-child>Everything you need to run your business</h2>
      <div className="features-grid">
        {[
          { title: "Calendar", desc: "Automate bookings and replace tools like Calendly or Acuity Scheduling." },
          { title: "Webinars", desc: "Host and sell webinars on Zoom or Google Meet." },
          { title: "Funnels", desc: "Build high-converting sales funnels with our drag-and-drop builder." },
          { title: "Courses", desc: "Create, host, and sell online courses with a complete platform." },
          { title: "Links", desc: "Get more clicks with tiles, carousels, lists, and animations." },
          { title: "Media Kits", desc: "Get inbound brand deals with a self-updating media kit." },
          { title: "Digital Products", desc: "Sell e-books, templates, and guides with 1-tap checkout." },
          { title: "Landing Pages", desc: "Create simple, beautiful landing pages in minutes." }
        ].map((item, index) => (
          <div key={index} className="feature-item feature-hover-effect" data-animate="fade-up" data-animate-child>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="feature-number">{String(index + 1).padStart(2, '0')}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Enhanced Stats */}
    <section className="stats" data-animate="fade-up">
      <h2 data-animate="fade-up" data-animate-child>Trusted by a global community of creators</h2>
      <div className="stats-row">
        <div data-animate="fade-up" data-animate-child className="stat-item">
          <div className="stat-number animate-count" data-count="100">100k+</div>
          <div className="stat-label">Creator Stores</div>
        </div>
        <div data-animate="fade-up" data-animate-child className="stat-item">
          <div className="stat-number animate-count" data-count="1000">1B+</div>
          <div className="stat-label">Followers of members</div>
        </div>
        <div data-animate="fade-up" data-animate-child className="stat-item">
          <div className="stat-number animate-count" data-count="10">$10M+</div>
          <div className="stat-label">Earned by creators</div>
        </div>
      </div>
    </section>

    {/* Enhanced CTA */}
    <section className="cta animate-gradient-shift" data-animate="fade-up">
      <h2 data-animate-child>Ready to get started?</h2>
      <p data-animate-child>
        Turn followers into customers &amp; brands into partners with just
        one platform.
      </p>
      <button className="btn btn-primary cta-button" data-animate-child>
        Get started for free
        <span className="btn-arrow">→</span>
      </button>
    </section>
  </main>
)

export default HomePage

