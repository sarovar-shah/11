import React, { useState } from 'react';
import '../styles/ServicePage.css';

const ServicePage = () => {
  // Tier states for Social Media Management
  const [tier1Expanded, setTier1Expanded] = useState(false);
  const [tier2Expanded, setTier2Expanded] = useState(false);
  const [tier3Expanded, setTier3Expanded] = useState(false);
  
  // Influencer Marketing state
  const [influencerExpanded, setInfluencerExpanded] = useState(false);
  
  // Ad Management state
  const [adManagementExpanded, setAdManagementExpanded] = useState(false);
  
  // Event state
  const [eventExpanded, setEventExpanded] = useState(false);

  return (
    <div className="service-page">
      <div className="service-container">
        
        {/* SOCIAL MEDIA MANAGEMENT SECTION */}
        <div className="service-header">
          <h1>SOCIAL MEDIA MANAGEMENT</h1>
        </div>

        {/* Tier 1: Essentials Package */}
        <div className="consulting-section">
          <div 
            className="consulting-header"
            onClick={() => setTier1Expanded(!tier1Expanded)}
          >
            <h2>TIER 1: ESSENTIALS PACKAGE</h2>
            <span className={`expand-icon ${tier1Expanded ? 'expanded' : ''}`}>+</span>
          </div>
          
          {tier1Expanded && (
            <div className="consulting-content">
              <div className="consulting-features">
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>8 posts/month (IG + TikTok combined)</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Creative direction & consulting</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Editing & graphic design</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Caption writing & posting</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Basic community engagement (10–15 min/day)</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Monthly analytics report</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>One-time paid ads audit</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>1 mini-influencer outreach/month (1–2 creators)</h3>
                  </div>
                </div>

                <div className="tier-best-for">
                  <strong>Best for:</strong> Brands seeking consistency, professional content, and foundational growth.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tier 2: Growth Package */}
        <div className="consulting-section">
          <div 
            className="consulting-header"
            onClick={() => setTier2Expanded(!tier2Expanded)}
          >
            <h2>TIER 2: GROWTH PACKAGE</h2>
            <span className={`expand-icon ${tier2Expanded ? 'expanded' : ''}`}>+</span>
          </div>
          
          {tier2Expanded && (
            <div className="consulting-content">
              <div className="consulting-features">
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Everything in Tier 1, plus:</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>14 posts/month</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Full community engagement (up to 1 hour/day)</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Creator coordination (3–5 creators/month)</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Monthly activation or event marketing support</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Paid ads management (full setup + optimization)</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Advanced content calendar & recurring content series</h3>
                  </div>
                </div>

                <div className="tier-best-for">
                  <strong>Best for:</strong> Brands ready to scale visibility, traffic, and conversions.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tier 3: Full Ecosystem Package */}
        <div className="consulting-section">
          <div 
            className="consulting-header"
            onClick={() => setTier3Expanded(!tier3Expanded)}
          >
            <h2>TIER 3: FULL ECOSYSTEM PACKAGE</h2>
            <span className={`expand-icon ${tier3Expanded ? 'expanded' : ''}`}>+</span>
          </div>
          
          {tier3Expanded && (
            <div className="consulting-content">
              <div className="consulting-features">
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Everything in Tier 2, plus:</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>20 posts/month</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Priority editing & branded motion graphics</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Full-scale influencer marketing (6–10 creators/month)</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Full event coordination (monthly)</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Dedicated ads strategy + 2 campaigns/month</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>On-site brand direction (1 visit/month, if applicable)</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Weekly strategy calls & VIP support</h3>
                  </div>
                </div>

                <div className="tier-best-for">
                  <strong>Best for:</strong> Brands looking to dominate their local market and build long-term brand equity.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* INFLUENCER MARKETING SECTION */}
        <div className="service-header">
          <h1>INFLUENCER MARKETING</h1>
        </div>

        <div className="consulting-section">
          <div 
            className="consulting-header"
            onClick={() => setInfluencerExpanded(!influencerExpanded)}
          >
            <h2>SERVICES</h2>
            <span className={`expand-icon ${influencerExpanded ? 'expanded' : ''}`}>+</span>
          </div>
          
          {influencerExpanded && (
            <div className="consulting-content">
              <div className="consulting-features">
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Full influencer outreach & negotiation</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Micro & mid-tier creators aligned with your brand values</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>In-person or on-site content creation:</h3>
                    <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                      <li>Product experiences</li>
                      <li>Reaction videos</li>
                      <li>"Spend a day with us" style content</li>
                    </ul>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Influencer briefing documents & content guidelines</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Long-term creator relationship building</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Tracking & reporting influencer performance</h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* AD MANAGEMENT / AUDITING SECTION */}
        <div className="service-header">
          <h1>AD MANAGEMENT / AUDITING</h1>
        </div>

        <div className="consulting-section">
          <div 
            className="consulting-header"
            onClick={() => setAdManagementExpanded(!adManagementExpanded)}
          >
            <h2>SERVICES</h2>
            <span className={`expand-icon ${adManagementExpanded ? 'expanded' : ''}`}>+</span>
          </div>
          
          {adManagementExpanded && (
            <div className="consulting-content">
              <div className="consulting-features">
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Full audit of existing Meta (and/or Google) ad accounts</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Review of:</h3>
                    <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                      <li>Targeting & audiences</li>
                      <li>Creatives & messaging</li>
                      <li>Landing pages</li>
                      <li>Budget allocation</li>
                      <li>Funnel structure</li>
                    </ul>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Clear report with recommended improvements</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Campaign rebuild & tracking setup</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Ongoing A/B testing</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Monthly performance reporting</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Ad creatives repurposed from organic content</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Data-driven optimization focused on conversions</h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* EVENT / MEDIA COVERAGE SECTION */}
        <div className="service-header">
          <h1>EVENT / MEDIA COVERAGE</h1>
        </div>

        <div className="consulting-section">
          <div 
            className="consulting-header"
            onClick={() => setEventExpanded(!eventExpanded)}
          >
            <h2>SERVICES</h2>
            <span className={`expand-icon ${eventExpanded ? 'expanded' : ''}`}>+</span>
          </div>
          
          {eventExpanded && (
            <div className="consulting-content">
              <div className="consulting-features">
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Event concepting & promotion</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Influencer attendance coordination</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Social promo rollout (IG + TikTok)</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>On-site content direction or capture support</h3>
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Post-event recap content</h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ServicePage;
