import { useEffect, useState, useCallback, useRef } from 'react'
import ContactPage from './pages/Contact'
import CommunityPage from './pages/Community'
import ServicePage from './pages/Service'
import InstagramLive from './components/InstagramLive' 
import './App.css'

function App() {
  // Initialize currentPage from URL or default to 'home'
  const getPageFromUrl = () => {
    const path = window.location.pathname
    if (path === '/community' || path === '/#community') return 'community'
    if (path === '/service' || path === '/services' || path === '/#service') return 'service'
    if (path === '/contact' || path === '/#contact') return 'contact'
    return 'home'
  }

  const [currentPage, setCurrentPage] = useState(getPageFromUrl())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [heroInView, setHeroInView] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Function to navigate and update URL
  const navigateToPage = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    // Update URL without page reload
    const url = page === 'home' ? '/' : `/${page}`
    window.history.pushState({ page }, '', url)
  }

  // Listen to browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      const page = event.state?.page || getPageFromUrl()
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('popstate', handlePopState)

    // Initialize URL on mount
    const initialPage = getPageFromUrl()
    if (initialPage !== 'home') {
      window.history.replaceState({ page: initialPage }, '', `/${initialPage}`)
    } else {
      window.history.replaceState({ page: 'home' }, '', '/')
    }

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  // Track user interaction to enable unmuting
  useEffect(() => {
    const handleUserInteraction = () => {
      hasUserInteractedRef.current = true
    }

    // Listen for any user interaction
    document.addEventListener('click', handleUserInteraction, { once: true })
    document.addEventListener('touchstart', handleUserInteraction, { once: true })
    document.addEventListener('keydown', handleUserInteraction, { once: true })

    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
    }
  }, [])

  const videoRefs = useRef([])
  const [videoMuted, setVideoMuted] = useState([true])
  const isHoveringRef = useRef([false])
  const hasUserInteractedRef = useRef(false)

  // Simple video data - keeping only 1 reel
  const videoData = [
    {
      id: 1,
      videoUrl: "/assets/Images/hero-video.mp4"
    }
  ]

  // Ensure video plays continuously
  useEffect(() => {
    const playVideo = (videoRef, index) => {
      if (!videoRef) return

      const attemptPlay = () => {
        if (videoRef && videoRef.paused) {
          const playPromise = videoRef.play()
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              setTimeout(() => attemptPlay(), 300)
            })
          }
        }
      }

      attemptPlay()

      const handleCanPlay = () => {
        attemptPlay()
      }

      const handleLoadedData = () => {
        attemptPlay()
      }

      const handleLoadedMetadata = () => {
        attemptPlay()
      }

      let pauseTimeout = null
      const handlePause = () => {
        if (isHoveringRef.current[index]) {
          return
        }
        if (pauseTimeout) {
          clearTimeout(pauseTimeout)
        }
        pauseTimeout = setTimeout(() => {
          if (videoRef && videoRef.paused && !isHoveringRef.current[index]) {
            attemptPlay()
          }
        }, 300)
      }

      const handleEnded = () => {
        if (videoRef) {
          videoRef.currentTime = 0
          attemptPlay()
        }
      }

      const handleTimeUpdate = () => {
        if (videoRef && videoRef.paused) {
          if (Math.random() < 0.1) {
            attemptPlay()
          }
        }
      }

      videoRef.addEventListener('canplay', handleCanPlay)
      videoRef.addEventListener('loadeddata', handleLoadedData)
      videoRef.addEventListener('loadedmetadata', handleLoadedMetadata)
      videoRef.addEventListener('pause', handlePause)
      videoRef.addEventListener('ended', handleEnded)
      videoRef.addEventListener('timeupdate', handleTimeUpdate)

      if (videoRef.readyState >= 2) {
        attemptPlay()
      }

      const playCheckInterval = setInterval(() => {
        if (videoRef && videoRef.paused) {
          attemptPlay()
        }
      }, 1000)

      return () => {
        clearInterval(playCheckInterval)
        videoRef.removeEventListener('canplay', handleCanPlay)
        videoRef.removeEventListener('loadeddata', handleLoadedData)
        videoRef.removeEventListener('loadedmetadata', handleLoadedMetadata)
        videoRef.removeEventListener('pause', handlePause)
        videoRef.removeEventListener('ended', handleEnded)
        videoRef.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }

    const playAllVideos = () => {
      videoRefs.current.forEach((videoRef, index) => {
        if (videoRef) {
          if (!videoRef.paused) return
          
          videoRef.play().catch(() => {
            setTimeout(() => {
              if (videoRef && videoRef.paused) {
                videoRef.play().catch(() => {})
              }
            }, 200)
          })
        }
      })
    }

    playAllVideos()

    const timer1 = setTimeout(() => {
      videoRefs.current.forEach((videoRef, index) => {
        if (videoRef) {
          playVideo(videoRef, index)
        }
      })
      playAllVideos()
    }, 50)

    const timer2 = setTimeout(() => {
      playAllVideos()
    }, 200)

    const timer3 = setTimeout(() => {
      playAllVideos()
    }, 500)

    const timer4 = setTimeout(() => {
      playAllVideos()
    }, 1000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  // Mute video when user navigates to a different page
  useEffect(() => {
    if (currentPage !== 'home') {
      videoRefs.current.forEach((videoRef, index) => {
        if (videoRef) {
          videoRef.muted = true
          setVideoMuted(prev => {
            const newState = [...prev]
            newState[index] = true
            return newState
          })
        }
      })
    }
  }, [currentPage])

  // Add hover event listeners to unmute on hover
  useEffect(() => {
    const cleanupFunctions = []

    const timer = setTimeout(() => {
      videoRefs.current.forEach((videoRef, index) => {
        if (videoRef) {
          const container = videoRef.closest('.video-container')
          if (container) {
            const handleMouseEnter = () => {
              if (currentPage === 'home' && videoRef && hasUserInteractedRef.current) {
                isHoveringRef.current[index] = true
                if (videoRef.paused) {
                  videoRef.play().then(() => {
                    videoRef.muted = false
                    setVideoMuted(prev => {
                      const newState = [...prev]
                      newState[index] = false
                      return newState
                    })
                  }).catch((err) => {
                    console.log('Unmute failed:', err)
                  })
                } else {
                  try {
                    videoRef.muted = false
                    setVideoMuted(prev => {
                      const newState = [...prev]
                      newState[index] = false
                      return newState
                    })
                  } catch (err) {
                    console.log('Unmute failed:', err)
                  }
                }
              }
            }

            const handleMouseLeave = () => {
              isHoveringRef.current[index] = false
              if (videoRef) {
                videoRef.muted = true
                setVideoMuted(prev => {
                  const newState = [...prev]
                  newState[index] = true
                    return newState
                  })
                }
              }

              const handleClick = () => {
                hasUserInteractedRef.current = true
                if (currentPage === 'home' && videoRef) {
                  if (videoRef.paused) {
                    videoRef.play().then(() => {
                      videoRef.muted = false
                      setVideoMuted(prev => {
                        const newState = [...prev]
                        newState[index] = false
                        return newState
                      })
                    }).catch((err) => {
                      console.log('Play/unmute failed:', err)
                    })
                  } else {
                    try {
                      videoRef.muted = false
                      setVideoMuted(prev => {
                        const newState = [...prev]
                        newState[index] = false
                        return newState
                      })
                    } catch (err) {
                      console.log('Unmute failed:', err)
                    }
                  }
                }
              }

              container.addEventListener('mouseenter', handleMouseEnter)
              container.addEventListener('mouseleave', handleMouseLeave)
              container.addEventListener('click', handleClick)

              cleanupFunctions.push(() => {
                container.removeEventListener('mouseenter', handleMouseEnter)
                container.removeEventListener('mouseleave', handleMouseLeave)
                container.removeEventListener('click', handleClick)
              })
            }
          }
        })
      }, 100)

      return () => {
        clearTimeout(timer)
        cleanupFunctions.forEach(cleanup => cleanup())
      }
  }, [currentPage])

  // Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const videoIndex = parseInt(entry.target.dataset.videoIndex)
        const videoRef = videoRefs.current[videoIndex]

        if (videoRef) {
          if (entry.isIntersecting) {
            if (videoRef.paused) {
              videoRef.play().catch(() => {})
            }
          } else {
            const isMobile = window.innerWidth <= 768
            if (isMobile && currentPage === 'home') {
              videoRef.muted = true
              setVideoMuted(prev => {
                const newState = [...prev]
                newState[videoIndex] = true
                return newState
              })
            }
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    setTimeout(() => {
      videoRefs.current.forEach((videoRef, index) => {
        if (videoRef) {
          const container = videoRef.closest('.video-container')
          if (container) {
            container.setAttribute('data-video-index', index)
            observer.observe(container)
          }
        }
      })
    }, 200)

    return () => {
      observer.disconnect()
    }
  }, [currentPage])

  const handleMouseMove = useCallback((e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100
    })
  }, [])

  useEffect(() => {
    const resetAnimations = () => {
      const animatedElements = document.querySelectorAll('[data-animate]')
      animatedElements.forEach(el => {
        el.classList.remove('in-view')
      })
      const childElements = document.querySelectorAll('[data-animate-child]')
      childElements.forEach(el => {
        el.classList.remove('animate-child-in')
      })
    }

    resetAnimations()

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('[data-animate-child]')
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-child-in')
              }, index * 100)
            })
            
            entry.target.classList.add('in-view')
            
            if (entry.target.classList.contains('hero')) {
              setHeroInView(true)
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    )

    setTimeout(() => {
      const animated = document.querySelectorAll('[data-animate]')
      animated.forEach(el => observer.observe(el))
    }, 100)

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      observer.disconnect()
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove, currentPage])

  useEffect(() => {
    const handleScroll = () => {
      const heroVisual = document.querySelector('.hero-visual')
      const heroDiamond = document.querySelector('.hero-diamond-gray')
      const heroFloating = document.querySelectorAll('.hero-floating')
      
      if (heroVisual && window.scrollY < window.innerHeight) {
        const scrollPercent = window.scrollY / window.innerHeight
        
        if (heroDiamond) {
          const base = 'translate(-50%, -50%)'
          heroDiamond.style.transform = `${base} rotate(45deg) translateY(${scrollPercent * 30}px)`
        }
        
        heroFloating.forEach((floating, index) => {
          floating.style.transform = `translateY(${scrollPercent * (10 + index * 5)}px)`
        })
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const heroBaseTransform = 'translate(-50%, -50%)'
  const heroDiamondStyle = {
    transform: `${heroBaseTransform} rotate(45deg) translateY(${(mousePosition.y - 50) * 0.1}px) translateX(${(mousePosition.x - 50) * 0.05}px)`,
    transformOrigin: 'center',
    filter: `brightness(${100 + mousePosition.x * 0.2}%)`
  }

  return (
    <>
      <div className="page">
        <header className="navbar">
          <div className="nav-left">
            <div 
              className="logo-container"
  onClick={() => {
    navigateToPage('home')
  }}
  style={{ 
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '8px 20px',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    transition: 'all 0.3s ease',
    marginLeft: '20px'
  }}
            >
              {/* FIXED LOGO - NO WHITE SPACE */}
               <div style={{
    position: 'relative',
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    overflow: 'hidden',
    padding: '0',
    margin: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
    flexShrink: 0,
    background: 'transparent'
  }}>
                
                {/* LOGO IMAGE - FULL SIZE, NO WHITE SPACE */}
                 <img 
      src="/assets/Images/logo12.png" 
      alt="Eleven Agency Logo" 
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center center',
        position: 'absolute',
        top: '0',
        left: '0',
        transform: 'scale(1.2)',
        filter: 'contrast(1.2) brightness(1.05) saturate(1.15)',
        zIndex: '2',
        borderRadius: '50%'
      }}
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.parentElement.innerHTML = `
          <div style="
            font-size: 24px;
            font-weight: 900;
            color: #000;
            letter-spacing: -1px;
            text-align: center;
            line-height: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
            border-radius: 50%;
          ">11</div>
        `;
      }}
    />
  </div>
              
              {/* Brand Text */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '80px'
              }}>
                 <span 
      style={{
        fontSize: '1.8rem',
        fontWeight: '800',
        letterSpacing: '0.3px',
        background: 'linear-gradient(90deg, #ffffff 0%, #c7c7ff 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
        lineHeight: '1.1',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      Eleven Agency
    </span>
    <span 
      style={{
        fontSize: '0.8rem',
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.6)',
        letterSpacing: '0.5px',
        marginTop: '3px',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      Social Media Excellence
    </span>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={mobileMenuOpen ? 'hamburger open' : 'hamburger'}></span>
            <span className={mobileMenuOpen ? 'hamburger open' : 'hamburger'}></span>
            <span className={mobileMenuOpen ? 'hamburger open' : 'hamburger'}></span>
          </button>
          
          {/* Mobile Menu Backdrop */}
          {mobileMenuOpen && (
            <div 
              className="mobile-menu-backdrop" 
              onClick={() => setMobileMenuOpen(false)}
            ></div>
          )}
          
          {/* Navigation Links */}
          <div className={`nav-right ${mobileMenuOpen ? 'mobile-open' : ''}`} 
            style={{
              gap: '28px',
              marginRight: '35px'
            }}>
            <button className="nav-link" onClick={() => { navigateToPage('home'); setMobileMenuOpen(false); }}>Home</button>
            <button className="nav-link" onClick={() => { navigateToPage('service'); setMobileMenuOpen(false); }}>Services</button>
            <button className="nav-link" onClick={() => { navigateToPage('community'); setMobileMenuOpen(false); }}>Community</button>
            <button className="nav-link" onClick={() => { navigateToPage('contact'); setMobileMenuOpen(false); }}>Contact Us</button>
          </div>
        </header>

        {currentPage === 'contact' ? <ContactPage /> : 
         currentPage === 'community' ? <CommunityPage /> :
         currentPage === 'service' ? <ServicePage /> : (
          <main>
            {/* Enhanced Hero */}
            <section className="hero" data-animate="fade-up">
              <div className="hero-content">
                <h1 data-animate-child>
                  <span className="hero-text-reveal">Eleven Agency</span>
                </h1>
                <p className="hero-kicker" data-animate-child>Performance-driven social growth for creators and businesses.</p>
                <p className="hero-sub" data-animate-child>
                  SOCIAL MEDIA + MARKETING AGENCY | BRAND + INFLUENCER MANAGEMENT
                </p>
                <div className="hero-actions" data-animate-child>
                  <button className="btn btn-primary hero-cta animate-bounce-in" onClick={() => navigateToPage('contact')}>
                    Book a free Consultation
                    <span className="btn-shine"></span>
                  </button>
                </div>
              </div>

              <div className="hero-visual" data-animate="fade-left">
                <div className="hero-diamond-gray" data-animate-child style={heroDiamondStyle}>
                  <div className="instagram-live-diamond">
                    <InstagramLive />
                  </div>
                </div>
                
                <a href='https://www.tiktok.com/@elevenagency.us?lang=en' target="_blank" rel="noopener noreferrer" className="hero-floating hero-floating--left animate-float" data-animate-child style={{ animationDelay: '0.8s' }}>
                  <div className="floating-icon"><img src='/assets/Images/tiktok-256.png' alt="tiktok"/></div>
                  <div className="floating-text">
                    <div className="floating-title">TikTok</div>
                  </div>
                </a>

                <a href='https://www.instagram.com/elevenagency.us/' target="_blank" rel="noopener noreferrer" className="hero-floating hero-floating--right animate-float" data-animate-child style={{ animationDelay: '1s', textDecoration: 'none' }}>
                  <div className="floating-icon">
                    <img src='/assets/Images/instagram.png' alt='Instagram'/>
                  </div>
                  <div className="floating-text">
                    <div className="floating-title">Instagram</div>
                  </div>
                </a>

                
              </div>
            </section>

            {/* What is Eleven Agency Section - STUNNING REDESIGN */}
<section className="what-is-eleven-redesign" data-animate="fade-up">
  <div className="what-is-container">
    {/* Left Content */}
    <div className="what-is-content" data-animate-child>
      <div className="section-tag">
        <span className="tag-dot"></span>
        <span>WHO WE ARE</span>
      </div>
      
      <h2 className="what-is-heading">What is Eleven Agency</h2>
      
      <p className="what-is-text">
        Eleven Agency operates as an <span className="highlight-word">extension of your brand</span>, handling strategy, execution, and optimization so you can focus on running your business. We make your personal and business brands look good through social media platforms.
      </p>
      
      <div className="features-showcase">
        <h3 className="features-title">We combine:</h3>
        <div className="features-list">
          <div className="feature-card" data-animate-child>
            <div className="feature-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <span>High-performing content</span>
          </div>
          
          <div className="feature-card" data-animate-child>
            <div className="feature-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <span>Consistent community engagement</span>
          </div>
          
          <div className="feature-card" data-animate-child>
            <div className="feature-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
            </div>
            <span>Strategic influencer partnerships</span>
          </div>
          
          <div className="feature-card" data-animate-child>
            <div className="feature-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <span>Paid ads that convert</span>
          </div>
        </div>
        
        <div className="ecosystem-badge" data-animate-child>
          <span className="badge-glow">✨</span>
          <p>All working together as <strong>one ecosystem</strong></p>
        </div>
      </div>
    </div>
    
    {/* Right Visual */}
    <div className="what-is-visual" data-animate-child>
      <div className="visual-circle visual-circle-1">
        <div className="circle-content">
          <div className="circle-number">150+</div>
          <div className="circle-label">Brands Served</div>
        </div>
      </div>
      
      <div className="visual-circle visual-circle-2">
        <div className="circle-content">
          <div className="circle-number">1M+</div>
          <div className="circle-label">Reach Growth</div>
        </div>
      </div>
      
      <div className="visual-circle visual-circle-3">
        <div className="circle-content">
          <div className="circle-number">24/7</div>
          <div className="circle-label">Support</div>
        </div>
      </div>
      
      <div className="visual-glow-effect"></div>
    </div>
  </div>
</section>
            {/* Video Gallery Section */}
            <section className="video-gallery" data-animate="fade-up">
              <div className="video-gallery-header" data-animate-child>
                <h2>Subscribe to our network</h2>
              </div>
              
              <div className="video-grid" data-animate-child>
                {videoData.map((video, index) => (
                  <div 
                    key={video.id} 
                    className="video-card"
                    data-animate="fade-up"
                    data-animate-child
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="video-container">
                      <video
                        ref={el => {
                          if (el) {
                            videoRefs.current[index] = el
                            const tryPlay = () => {
                              if (el && el.paused) {
                                el.play().catch(() => {
                                  setTimeout(tryPlay, 200)
                                })
                              }
                            }
                            tryPlay()
                            setTimeout(tryPlay, 100)
                            setTimeout(tryPlay, 300)
                            setTimeout(tryPlay, 600)
                            setTimeout(tryPlay, 1000)
                            
                            el.addEventListener('loadeddata', tryPlay)
                            el.addEventListener('canplay', tryPlay)
                            el.addEventListener('loadedmetadata', tryPlay)
                          }
                        }}
                        src={video.videoUrl}
                        className="video-element"
                        autoPlay
                        muted={videoMuted[index]}
                        loop
                        playsInline
                        preload="auto"
                      />
                    </div>
                  </div>
                ))}
                
                {/* Subscription section */}
                <div className="subscription-replacement" data-animate="fade-up" data-animate-child>
                  <div className="subscribe-details" data-animate="fade-up">
                    <div className="subscription-image-container">
                      <div className="subscription-image-overlay">
                        <h2 className="subscription-title">Monthly Subscription</h2>
                      </div>
                    </div>
                    <div className="subscription-content">
                      <div className="subscription-price">$10.00 /month</div>
                      <ul className="subscription-features">
                        <li className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>WEEKLY trend reports - includes trending audios and content</span>
                        </li>
                        <li className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Tailored content ideas for your target audience & niche</span>
                        </li>
                        <li className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Direct 1-1 access to our managers & social media experts</span>
                        </li>
                        <li className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Customized content & growth plans (we will tell you exactly what & when to post)</span>
                        </li>
                        <li className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>First hand access to brand deals, UGC, and events that collaborate with Urban Desiii.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="subscribe-form-container">
                    <form className="subscribe-form" data-animate="fade-up">
                      <div className="form-grid">
                        <label className="form-field">
                          <span>Name (required)</span>
                          <div className="split-inputs">
                            <input type="text" name="firstName" placeholder="First Name" required />
                            <input type="text" name="lastName" placeholder="Last Name" required />
                          </div>
                        </label>

                        <label className="form-field">
                          <span>Email (required)</span>
                          <input type="email" name="email" placeholder="Email" required />
                        </label>

                        <label className="form-field">
                          <span>Content Niche (required)</span>
                          <input 
                            type="text" 
                            name="niche" 
                            placeholder="Content Niche (ex: lifestyle, beauty, etc.)" 
                            required 
                          />
                        </label>

                        <label className="form-field">
                          <span>Social Media Handles (required)</span>
                          <textarea 
                            name="handles" 
                            rows="6" 
                            placeholder="Enter your social media handles" 
                            required 
                            className="textarea-resizable"
                          />
                        </label>
                      </div>

                      <button type="submit" className="btn btn-primary full-width">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </main>
        )}
      </div>
      
      {/* Footer */}
      <footer className="footer" data-animate="fade-up">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-brand-container">
              <div className="footer-brand" data-animate="fade-up" data-animate-child>
                <div className="logo-container-small">
                  {/* Footer Logo - Smaller but same style */}
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                    border: '3px solid white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    overflow: 'hidden',
                    marginRight: '12px'
                  }}>
                    <img 
                      src="/assets/Images/logo12.png" 
                      alt="Eleven Agency Logo" 
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        filter: 'contrast(1.2)'
                      }}
                    />
                  </div>
                  <span className="logo-text">Eleven Agency</span>
                </div>
              </div>
              
              <div className="email-signup">
                <p className="signup-text">Subscribe to our network</p>
                <p className="signup-subtext">Sign up with your email address to receive news and updates.</p>
                <div className="signup-form">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="email-input"
                    aria-label="Email Address"
                  />
                  <button className="signup-button">Sign Up</button>
                </div>
                <p className="privacy-text">We respect your privacy.</p>
              </div>
            </div>
            <div className="footer-columns">
              {[
                { 
                  title: "FOLLOW", 
                  links: [
                    { name: "Instagram", url: "https://www.instagram.com/elevenagency.us/", icon: "fab fa-instagram" },
                    { name: "TikTok", url: "https://www.tiktok.com/@elevenagency.us?lang=en", icon: "fab fa-tiktok" },
                    { name: "LinkedIn", url: "#", icon: "fab fa-linkedin-in" },
                    { name: "Email", url: "mailto:info@elevenagency.us", icon: "far fa-envelope" }
                  ]
                }
              ].map((col, colIndex) => (
                <div 
                  key={colIndex} 
                  className={`footer-col ${col.title === "FOLLOW" ? "footer-col-follow" : ""}`} 
                  data-animate="fade-up" 
                  data-animate-child
                >
                  <h4>{col.title}</h4>
                  {col.title === "FOLLOW" ? (
                    <div className="social-links">
                      {col.links.map((link, linkIndex) => (
                        <a 
                          key={linkIndex} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          title={link.name}
                        >
                          <i className={link.icon}></i>
                        </a>
                      ))}
                    </div>
                  ) : (
                    col.links.map((link, linkIndex) => (
                      <a 
                        key={linkIndex} 
                        href={link.url || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Eleven Agency. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App