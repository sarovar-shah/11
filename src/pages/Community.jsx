import React, { useEffect } from 'react';
import './CommunityPage.css';
import InstagramLive from '../components/InstagramLive';

const CommunityPage = () => {
  useEffect(() => {
    const observerOptions = { 
      threshold: 0.1, 
      rootMargin: '0px 0px -100px 0px' 
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="community-page-wrapper">
      
      {/* HERO SECTION */}
      <section className="hero-modern">
        <div className="hero-bg-overlay">
          <div className="hero-gradient orb-1"></div>
          <div className="hero-gradient orb-2"></div>
          <div className="hero-gradient orb-3"></div>
        </div>
        <div className="container">
          <div className="hero-inner reveal">
            <h1 className="hero-main-title">
              <span className="hero-line">Our Community Is</span>
              <span className="hero-line text-outline">The Foundation</span>
            </h1>
            
            <p className="hero-subtext">
              Urban Desiii is Eleven Agency's community arm, a South Asian–founded 
              platform connecting creators, influencers, artists, small businesses, 
              and brands across every niche.
            </p>
            
            <div className="hero-cta-group">
              <a href="/contact" className="btn-premium btn-primary">
                <span className="btn-text">WORK WITH ELEVEN</span>
                <span className="btn-icon">→</span>
              </a>
              <a href="https://urbandesiii.com" target="_blank" rel="noopener noreferrer" className="btn-premium btn-primary">
                <span className="btn-text">EXPLORE PLATFORM</span>
                <span className="btn-icon">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS URBAN DESIII SECTION */}
      <section className="about-grid-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">What Is Urban Desiii</h2>
            <p className="section-subtitle">
              Urban Desiii is a South Asian–founded creative and marketing community 
              built to connect creators, influencers, artists, small businesses, and brands. 
              What started as a cultural platform has grown into a trusted ecosystem where 
              talent, creativity, and opportunity meet—across fashion, beauty, wellness, 
              music, food, tech, and beyond.
            </p>
          </div>
          
          <div className="grid-five reveal">
            <div className="modern-card">
              <div className="card-icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="card-content">
                <h3>Creators & Influencers</h3>
                <p>Authentic voices with deeply engaged communities across all platforms</p>
              </div>
              <div className="card-line"></div>
            </div>
            
            <div className="modern-card">
              <div className="card-icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <div className="card-content">
                <h3>Artists & Performers</h3>
                <p>Boundary-pushing talent redefining creative expression</p>
              </div>
              <div className="card-line"></div>
            </div>
            
            <div className="modern-card">
              <div className="card-icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <div className="card-content">
                <h3>Small & Local Businesses</h3>
                <p>Local brands scaling with genuine community support</p>
              </div>
              <div className="card-line"></div>
            </div>
            
            <div className="modern-card">
              <div className="card-icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
              </div>
              <div className="card-content">
                <h3>Brands & Startups</h3>
                <p>Companies building meaningful cultural connections</p>
              </div>
              <div className="card-line"></div>
            </div>
            
            <div className="modern-card card-special">
              <div className="card-icon-wrap">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div className="card-content">
                <h3>Cultural & Community-Led Marketing</h3>
                <p>Strategy that honors culture while driving real business results</p>
              </div>
              <div className="card-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ELEVEN × URBAN DESIII CONNECTION */}
      <section className="synergy-modern">
        <div className="container">
          <div className="split-layout reveal">
            <div className="split-visual">
              <div className="logo-lockup">
                <div className="circle-box">
                  <span>11</span>
                  <div className="circle-label">ELEVEN</div>
                </div>
                <div className="multiplication-sign">×</div>
                <div className="circle-box outline">
                  <span>UD</span>
                  <div className="circle-label">DESIII</div>
                </div>
              </div>
              <div className="visual-connection">
                <div className="connector-line"></div>
                <div className="connector-dot"></div>
              </div>
            </div>
            
            <div className="split-content">
              <h2>How This Ties Into Eleven Agency</h2>
              <p className="lead-text">
                Eleven Agency was founded with the same values as Urban Desiii—community-first 
                growth, cultural understanding, and results-driven marketing. As a South Asian–owned 
                and founded agency, Eleven brings strategy, paid media, and automation to a network 
                that already understands culture, storytelling, and audience connection.
              </p>
              
              <div className="focus-quote">
                <div className="quote-mark">"</div>
                <p>Strategy meets community. Performance meets culture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY COMMUNITY MATTERS */}
      <section className="benefits-modern">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Why Community Matters</h2>
          </div>
          
          <div className="benefits-grid reveal">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 12l-4-4-4 4M12 16V8"></path>
                </svg>
              </div>
              <h3>Access to Every Niche</h3>
              <p>Access to creators and influencers across every niche</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3>Authentic Connections</h3>
              <p>Authentic brand-to-creator connections</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3>Cultural Relevance</h3>
              <p>Built-in cultural relevance and trust</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3>Real Impact</h3>
              <p>Real people, real audiences, real impact</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3>Faster Execution</h3>
              <p>Faster, more organic campaign execution</p>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE INSTAGRAM FEED */}
      <section className="insta-modern-section reveal">
        <div className="container">
          <div className="insta-header">
            <h2>Live From the Community</h2>
            <p className="insta-description">
              See our community in action—from creator features and brand collaborations 
              to events, launches, and culture-forward storytelling.
            </p>
          </div>
          <div className="insta-feed-wrapper">
            <InstagramLive />
          </div>
        </div>
      </section>

      {/* EXPLORE PLATFORM */}
      <section className="explore-modern">
        <div className="container-narrow reveal">
          <h2>Explore the Urban Desiii Platform</h2>
          <p className="explore-subtitle">
            Urban Desiii lives beyond social media. Explore our full platform to learn 
            more about the community, partnerships, and opportunities we're building.
          </p>
          
          <div className="explore-links">
            <a href="https://urbandesiii.com" target="_blank" rel="noopener noreferrer" className="explore-link">
              <div className="link-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div className="link-content">
                <span className="link-title">Visit UrbanDesiii.com</span>
              </div>
              <div className="link-arrow">↗</div>
            </a>
            
            <a href="https://www.instagram.com/urbandesiii/" target="_blank" rel="noopener noreferrer" className="explore-link">
              <div className="link-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="link-content">
                <span className="link-title">Follow @UrbanDesiii on Instagram</span>
              </div>
              <div className="link-arrow">↗</div>
            </a>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="tags-modern reveal">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Built for Every Kind of Creative & Brand</h2>
          </div>
          
          <div className="tags-grid">
            <div className="tag">Content creators & influencers</div>
            <div className="tag">Artists, DJs, performers</div>
            <div className="tag">Small & local businesses</div>
            <div className="tag">Startups & growing brands</div>
            <div className="tag">Culture-driven founders</div>
          </div>
          
          <p className="tags-closing">
            If you're building something meaningful, there's a place for you here.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta-modern reveal">
        <div className="container-narrow">
          <div className="cta-glass-card">
            <h2>Join the Network</h2>
            
            <div className="cta-actions">
              <a href="/contact" className="btn-premium btn-primary">
                <span className="btn-text">Work With Eleven</span>
                <span className="btn-icon">→</span>
              </a>
              <a href="https://urbandesiii.com" target="_blank" rel="noopener noreferrer" className="btn-premium btn-primary">
                <span className="btn-text">Join the Community</span>
                <span className="btn-icon">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default CommunityPage;