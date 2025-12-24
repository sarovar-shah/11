import React, { useState } from 'react';
import '../styles/ServicePage.css';

const ServicePage = () => {
  const [expanded, setExpanded] = useState(false);
  const [auditExpanded, setAuditExpanded] = useState(false);
  const [auditCardExpanded, setAuditCardExpanded] = useState(false);
  const [basicexpanded, setbasicExpanded] = useState(false);
  const [standardexpanded, setstandardExpanded] = useState(false);
  const [premiumexpanded, setpremiumExpanded] = useState(false);
  const [personexpanded, setpersonExpanded] = useState(false);
  const [businessexpanded, setbusinessExpanded] = useState(false);
  const [eventexpanded, seteventExpanded] = useState(false);


  return (
    <div className="service-page">
      <div className="service-container">
        {/* Header Section */}
        <div className="service-header">
          <h1>CONSULTING / AUDITS</h1>
        </div>

        {/* Audit Card */}
        <div className="consulting-section">
          <div 
            className="consulting-header"
            onClick={() => setAuditCardExpanded(!auditCardExpanded)}
          >
            <h2>Social media / marketing audit</h2>
            <span className={`expand-icon ${auditCardExpanded ? 'expanded' : ''}`}>+</span>
          </div>
          
          {auditCardExpanded && (
            <div className="consulting-content">
              <div className="consulting-features">
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Thorough Review: Assess your social media/marketing</h3>
                    
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Consultation: Includes initial and 30-min audit call</h3>
                   
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Identify Issues: What’s working vs. not</h3>
                    
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Growth Plan: 4-6 week strategy</h3>
                  
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Expert Advice: Tailored recommendations</h3>
                  
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
        
        {/* Consulting Section */}
        <div className="consulting-section">
          <div 
            className="consulting-header"
            onClick={() => setExpanded(!expanded)}
          >
            <h2>CONSULTING</h2>
            <span className={`expand-icon ${expanded ? 'expanded' : ''}`}>+</span>
          </div>
          
          {expanded && (
            <div className="consulting-content">
              <div className="consulting-features">
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Regular Calls : 2-3 monthly calls to discuss strategy and progress</h3>
                    
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Growth Plan : Targeted strategy with a 6-8 week implementation plan</h3>
                   
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Audit Included : Comprehensive review of your social media presence</h3>
                    
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Content Tips : Personalized suggestions for trending content with examples</h3>
                    
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Consulting + Audit + Growth Plan Section */}
         <div className="consulting-section">
          <div 
            className="consulting-header"
            onClick={() => setAuditExpanded(!auditExpanded)}
          >
            <h2>CONSULTING + AUDIT + GROWTH PLAN</h2>
            <span className={`expand-icon ${auditExpanded ? 'expanded' : ''}`}>+</span>
          </div>
          
          {auditExpanded && (
            <div className="consulting-content">
              <div className="consulting-features">
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>All-Inclusive : Audit + consulting package</h3>
                    
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Enhanced Support : Weekly scheduled calls, and routine communication</h3>
                
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>In-Depth Plan : Detailed growth strategy, 8 - 12 week plan</h3>
                    
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Ongoing Review : Regular audits and analytics/metric tracking</h3>
                    
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Tailored Advice : Customized recommendations, based on trending content, with examples and minor video editing provided
                  </h3>
                    
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>


          <div className="service-header">
          <h1>SOCIAL MEDIA MANAGEMENT</h1>
        </div>
          {/* BASIC Section */}
        <div className="consulting-section">
          <div 
            className="consulting-header"
            onClick={() => setbasicExpanded(!basicexpanded)}
          >
            <h2>BASIC</h2>
            <span className={`expand-icon ${basicexpanded ? 'expanded' : ''}`}>+</span>
          </div>
          
          {basicexpanded && (
            <div className="consulting-content">
              <div className="consulting-features">
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Growth + Content Map (4-6 weeks)</h3>
                    <p></p>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>1 hour of weekly engagement</h3>
                   
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Curated SEO, hashtags, and baseline analytics</h3>
                    
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Trending growth plan, with x2 of posting responsibility + scheduling</h3>
                    
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
    
        {/* STANDARD Section */}
        <div className="consulting-section">
          <div 
            className="consulting-header"
            onClick={() => setstandardExpanded(!standardexpanded)}
          >
            <h2>STANDARD</h2>
            <span className={`expand-icon ${standardexpanded ? 'expanded' : ''}`}>+</span>
          </div>
          
          {standardexpanded && (
            <div className="consulting-content">
              <div className="consulting-features">
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Personalized branding + growth plan (8 weeks)</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>4 hours of weekly engagement</h3>
                    
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>UGC + PR brand deals (Influencer outreach & management)</h3>
                    
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Monthly analytics/metric tracking</h3>
                    
                  </div>
                </div>

                
                 <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>x3 week full posting responsibility & scheduling</h3>
                    
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>

        {/* PREMIUM Section */}
         <div className="consulting-section">
          <div 
            className="consulting-header"
            onClick={() => setpremiumExpanded(!premiumexpanded)}
          >
            <h2>PREMIUM</h2>
            <span className={`expand-icon ${premiumexpanded ? 'expanded' : ''}`}>+</span>
          </div>
          
          {premiumexpanded && (
            <div className="consulting-content">
              <div className="consulting-features">
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Assigned individual manager</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Growth and targeted content plan (12 weeks)</h3>
                    
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Any/all content creation (photo + video editing)</h3>
                    
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Influencer + brand outreach (UGC, PR, brand deals, etc.)</h3>
                    
                  </div>
                </div>

                
                 <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Analytics, Metrics + Engagement data (weekly)</h3>
                    
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Unlimited posting + scheduling responsibility (ALL platforms)</h3>
                    
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>


        <div className="service-header">
          <h1>Marketing + branding</h1>
        </div>
          {/* marketing Section */}
        <div className="consulting-section">
          <div 
            className="consulting-header"
            onClick={() => setpersonExpanded(!personexpanded)}
          >
            <h2>PERSONAL BRANDING (INFLUENCERS/CREATERS)</h2>
            <span className={`expand-icon ${personexpanded ? 'expanded' : ''}`}>+</span>
          </div>
          
          {personexpanded && (
            <div className="consulting-content">
              <div className="consulting-features">
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Image Enhancement: Build a strong personal brand with brand deals, PR, and UGC</h3>
                    
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Custom Strategy: Tailored branding plan</h3>
                   
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Online Presence: Optimize social media profiles</h3>
                    
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Content Creation: Personalized content ideas</h3>
                    
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Reputation Management: Maintain a positive image</h3>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
    
        {/* business Section */}
        <div className="consulting-section">
          <div 
            className="consulting-header"
            onClick={() => setbusinessExpanded(!businessexpanded)}
          >
            <h2>BUSINESS/BRANDING (SHOPS,Services,ETC.)</h2>
            <span className={`expand-icon ${businessexpanded ? 'expanded' : ''}`}>+</span>
          </div>
          
          {businessexpanded && (
            <div className="consulting-content">
              <div className="consulting-features">
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Brand Identity: Develop unique brand elements</h3>
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Target Audience: Identify and reach ideal customers + work with influencers to leverage social media presence</h3>
                    
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Marketing Materials: Design logos, slogans, and more</h3>
                    
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Online Strategy: Optimize website and social media</h3>
                    
                  </div>
                </div>

                
                 <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Consistent Messaging: Ensure brand consistency</h3>
                    
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>


         <div className="service-header">
          <h1>EVENT / MEDIA COVERAGE</h1>
        </div>
          {/* eventstandard Section */}
        <div className="consulting-section">
          <div 
            className="consulting-header"
            onClick={() => seteventExpanded(!eventexpanded)}
          >
            <h2>STANDARD</h2>
            <span className={`expand-icon ${eventexpanded ? 'expanded' : ''}`}>+</span>
          </div>
          
          {eventexpanded && (
            <div className="consulting-content">
              <div className="consulting-features">
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Professional Coverage: Capture high-quality photos and videos of your events</h3>
                    
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Content Creation: Produce engaging content tailored for social media</h3>
                   
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Editing Services: Edit footage into marketing materials, including Instagram Reels, Youtube Shorts, and TikToks</h3>
                    
                  </div>
                </div>
                
                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Social Media Optimization: Ensure content is optimized for maximum engagement</h3>
                    
                  </div>
                </div>

                <div className="consulting-feature">
                  <div className="feature-bullet">•</div>
                  <div>
                    <h3>Comprehensive Packages: Full-service coverage from event to online promotion - please book a consultation to discuss event details</h3>
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

                    