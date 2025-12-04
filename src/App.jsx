import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [navScrolled, setNavScrolled] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      },
    )

    const animated = document.querySelectorAll('[data-animate]')
    animated.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 24
      setNavScrolled(scrolled)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="page">
      <header className={`navbar ${navScrolled ? 'navbar-hidden' : 'navbar-expanded'}`} data-animate="fade-down">
        <div className="nav-left">
          <div className="logo-circle">P</div>
          <span className="logo-text">Pillar</span>
        </div>
        <nav className="nav-center">
          <button className="nav-pill active">For Creators</button>
          <button className="nav-pill">Talent Managers</button>
        </nav>
        <div className="nav-right">
          <button className="nav-link">Sign In</button>
          <button className="btn btn-outline">Try for free</button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero" data-animate="fade-up">
          <div className="hero-content">
            <p className="hero-kicker">All in one Creator Store</p>
            <h1>
              All in one
              <br />
              Creator Store
            </h1>
            <p className="hero-sub">
              Turn followers into customers &amp; brands into partners with just one
              platform.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary hero-cta">Get Started for free</button>
            </div>
            <div className="hero-logos-block">
              <p className="hero-trust-label">
                OVER 100,000 CREATORS &amp; COACHES RUN THEIR BUSINESSES ON PILLAR
              </p>
              <div className="hero-logos">
                <span>Business Insider</span>
                <span>TechCrunch</span>
                <span>Forbes</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" data-animate="fade-left">
            <div className="hero-diamond" />

            <div className="hero-floating hero-floating--top">
              <div className="floating-icon">📅</div>
              <div className="floating-text">
                <div className="floating-title">Coaching</div>
              </div>
            </div>

            <div className="hero-floating hero-floating--right">
              <div className="floating-icon">⬇️</div>
              <div className="floating-text">
                <div className="floating-title">Downloads</div>
              </div>
            </div>

            <div className="hero-floating hero-floating--bottom">
              <div className="floating-icon">✉️</div>
              <div className="floating-text">
                <div className="floating-title">Email Flows</div>
              </div>
            </div>

            <div className="hero-card">
              <div className="creator-header">
                <div className="avatar" />
                <div>
                  <div className="creator-name">Lucille</div>
                  <div className="creator-handle">@lucileugc</div>
                </div>
              </div>
              <div className="creator-tags">
                <span>Coaching</span>
                <span>Email Flows</span>
                <span>Downloads</span>
              </div>
              <div className="creator-stat-row">
                <span>Join 100,000+ creators</span>
                <span className="creator-pill">pillar.io/itsthemcfarlands/mediakit</span>
              </div>
            </div>
          </div>
        </section>

        {/* Use Pillar for */}
        <section className="use-pillar" data-animate="fade-up">
          <h2>Use Pillar for</h2>
          <div className="use-grid">
            <div className="use-card" data-animate="fade-up">
              <h3>Create &amp; Sell Digital Products</h3>
              <p>
                Create an editable first draft for your next digital product and
                sell it in minutes.
              </p>
            </div>
            <div className="use-card" data-animate="fade-up">
              <h3>Drag &amp; Drop “Link-In-Bio” Store</h3>
              <p>
                Build, host, and sell any digital product from your link in bio
                store.
              </p>
            </div>
            <div className="use-card" data-animate="fade-up">
              <h3>Media Kits &amp; Campaign Reports</h3>
              <p>Stop manually updating stats. Share live media kits with brands.</p>
            </div>
            <div className="use-card" data-animate="fade-up">
              <h3>Landing Pages &amp; Funnels</h3>
              <p>Launch dedicated landing pages and high-converting funnels.</p>
            </div>
            <div className="use-card" data-animate="fade-up">
              <h3>Customer Analytics &amp; CRM</h3>
              <p>Turn followers into customers &amp; manage every relationship.</p>
            </div>
            <div className="use-card" data-animate="fade-up">
              <h3>Email Marketing</h3>
              <p>Engage your audience with targeted broadcasts &amp; sequences.</p>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="integrations" data-animate="fade-up">
          <h2>Integrates with your favorite apps</h2>
          <p>Pillar connects to the tools you already use to run your business.</p>
          <div className="integration-row">
            <span>Stripe</span>
            <span>Shopify</span>
            <span>Notion</span>
            <span>Google Calendar</span>
            <span>Zoom</span>
          </div>
        </section>

        {/* Everything you need */}
        <section className="features" data-animate="fade-up">
          <h2>Everything you need to run your business</h2>
          <div className="features-grid">
            <div className="feature-item" data-animate="fade-up">
              <h3>Calendar</h3>
              <p>
                Automate bookings and replace tools like Calendly or Acuity
                Scheduling.
              </p>
            </div>
            <div className="feature-item" data-animate="fade-up">
              <h3>Webinars</h3>
              <p>Host and sell webinars on Zoom or Google Meet.</p>
            </div>
            <div className="feature-item" data-animate="fade-up">
              <h3>Funnels</h3>
              <p>
                Build high-converting sales funnels with our drag-and-drop
                builder.
              </p>
            </div>
            <div className="feature-item" data-animate="fade-up">
              <h3>Courses</h3>
              <p>Create, host, and sell online courses with a complete platform.</p>
            </div>
            <div className="feature-item" data-animate="fade-up">
              <h3>Links</h3>
              <p>Get more clicks with tiles, carousels, lists, and animations.</p>
            </div>
            <div className="feature-item" data-animate="fade-up">
              <h3>Media Kits</h3>
              <p>Get inbound brand deals with a self-updating media kit.</p>
            </div>
            <div className="feature-item" data-animate="fade-up">
              <h3>Digital Products</h3>
              <p>Sell e-books, templates, and guides with 1-tap checkout.</p>
            </div>
            <div className="feature-item" data-animate="fade-up">
              <h3>Landing Pages</h3>
              <p>Create simple, beautiful landing pages in minutes.</p>
            </div>
          </div>
        </section>

        {/* Trusted by */}
        <section className="stats" data-animate="fade-up">
          <h2 data-animate="fade-up">Trusted by a global community of creators</h2>
          <div className="stats-row">
            <div data-animate="fade-up">
              <div className="stat-number">100k+</div>
              <div className="stat-label">Creator Stores</div>
            </div>
            <div data-animate="fade-up">
              <div className="stat-number">1B+</div>
              <div className="stat-label">Followers of members</div>
            </div>
            <div data-animate="fade-up">
              <div className="stat-number">$10M+</div>
              <div className="stat-label">Earned by creators</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta" data-animate="fade-up">
          <h2>Ready to get started?</h2>
          <p>
            Turn followers into customers &amp; brands into partners with just
            one platform.
          </p>
          <button className="btn btn-primary">Get started for free</button>
        </section>
      </main>

      <footer className="footer" data-animate="fade-up">
        <div className="footer-top">
          <div className="footer-brand" data-animate="fade-up">
            <div className="logo-circle small">P</div>
            <span className="logo-text">Pillar</span>
          </div>
          <div className="footer-columns">
            <div className="footer-col" data-animate="fade-up">
              <h4>Company</h4>
              <a href="#">Agencies</a>
              <a href="#">Brands</a>
              <a href="#">Login</a>
              <a href="#">Sign up</a>
              <a href="#">Get Help</a>
            </div>
            <div className="footer-col" data-animate="fade-up">
              <h4>Pillar</h4>
              <a href="#">For Creators</a>
              <a href="#">For Talent Managers</a>
            </div>
            <div className="footer-col" data-animate="fade-up">
              <h4>Info</h4>
              <a href="#">Affiliate Program</a>
              <a href="#">Free Migration</a>
            </div>
            <div className="footer-col" data-animate="fade-up">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
            <div className="footer-col" data-animate="fade-up">
              <h4>Socials</h4>
              <a href="#">X</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">TikTok</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Pillar. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
