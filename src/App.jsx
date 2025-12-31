
// import { useEffect, useState, useCallback, useRef } from 'react'
// import ContactPage from './pages/Contact'
// import SubscribePage from './pages/Subscribe'
// import AboutPage from './pages/About'
// import ServicePage from './pages/Service'
// import InstagramLive from './components/InstagramLive'
// import './App.css'

// function App() {
//   const [currentPage, setCurrentPage] = useState('home')
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [heroInView, setHeroInView] = useState(false)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [currentSlide, setCurrentSlide] = useState(0)
  
//   const slides = [
//     "/assets/Images/image.png",
//     "/assets/Images/image1.png",
//     "/assets/Images/image3.png",
//     "/assets/Images/image4.png",
//     "/assets/Images/image5.png"
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3000); // Change slide every 3 seconds
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const videoRefs = useRef([])

//   // Simple video data with placeholder thumbnails
//   const videoData = [
//     {
//       id: 1,
//       videoUrl: "/assets/Images/hero-video.mp4"
//     },
//     {
//       id: 2,
//       videoUrl: "/assets/Images/hero-video.mp4"
//     },
//     {
//       id: 3,
//       videoUrl: "/assets/Images/hero-video.mp4"
//     },
//     {
//       id: 4,
//       videoUrl: "/assets/Images/hero-video.mp4"
//     }
//   ]

//   // Enhanced mouse tracking for parallax effects
//   const handleMouseMove = useCallback((e) => {
//     setMousePosition({
//       x: (e.clientX / window.innerWidth) * 100,
//       y: (e.clientY / window.innerHeight) * 100
//     })
//   }, [])

//   useEffect(() => {
//     // Reset all animations when page mounts
//     const resetAnimations = () => {
//       const animatedElements = document.querySelectorAll('[data-animate]')
//       animatedElements.forEach(el => {
//         el.classList.remove('in-view')
//       })
//       const childElements = document.querySelectorAll('[data-animate-child]')
//       childElements.forEach(el => {
//         el.classList.remove('animate-child-in')
//       })
//     }

//     resetAnimations()

//     // Enhanced intersection observer with more dynamic animations
//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             // Add staggered delays for child elements
//             const children = entry.target.querySelectorAll('[data-animate-child]')
//             children.forEach((child, index) => {
//               setTimeout(() => {
//                 child.classList.add('animate-child-in')
//               }, index * 100)
//             })
            
//             entry.target.classList.add('in-view')
            
//             // Special handling for hero section
//             if (entry.target.classList.contains('hero')) {
//               setHeroInView(true)
//             }
//           }
//         })
//       },
//       {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px',
//       },
//     )

//     // Small delay to ensure DOM is ready
//     setTimeout(() => {
//       const animated = document.querySelectorAll('[data-animate]')
//       animated.forEach(el => observer.observe(el))
//     }, 100)

//     // Mouse move listener for parallax effects
//     window.addEventListener('mousemove', handleMouseMove)

//     return () => {
//       observer.disconnect()
//       window.removeEventListener('mousemove', handleMouseMove)
//     }
//   }, [handleMouseMove, currentPage])

//   useEffect(() => {
//     const handleScroll = () => {
//       // Add scroll-based parallax to hero elements only
//       const heroVisual = document.querySelector('.hero-visual')
//       const heroDiamond = document.querySelector('.hero-diamond-gray')
//       const heroFloating = document.querySelectorAll('.hero-floating')
      
//       if (heroVisual && window.scrollY < window.innerHeight) {
//         const scrollPercent = window.scrollY / window.innerHeight
        
//         if (heroDiamond) {
//           const base = 'translate(-50%, -50%)'
//           heroDiamond.style.transform = `${base} rotate(45deg) translateY(${scrollPercent * 30}px)`
//         }
        
//         heroFloating.forEach((floating, index) => {
//           floating.style.transform = `translateY(${scrollPercent * (10 + index * 5)}px)`
//         })
//       }
//     }

//     handleScroll()
//     window.addEventListener('scroll', handleScroll, { passive: true })
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Dynamic hero diamond style based on mouse position
//   const heroBaseTransform = 'translate(-50%, -50%)'
//   const heroDiamondStyle = {
//     transform: `${heroBaseTransform} rotate(45deg) translateY(${(mousePosition.y - 50) * 0.1}px) translateX(${(mousePosition.x - 50) * 0.05}px)`,
//     transformOrigin: 'center',
//     filter: `brightness(${100 + mousePosition.x * 0.2}%)`
//   }

//   // Function to scroll to specific section
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     } else {
//       window.scrollTo({ top: 0, behavior: 'smooth' })
//     }
//     setCurrentPage('home')
//   }

//   return (
//     <>
//       <div className="page">
//         <header className="navbar">
//           <div className="nav-left">
//             <div 
//               className="logo-container"
//               onClick={() => {
//                 setCurrentPage('home')
//                 window.scrollTo({ top: 0, behavior: 'smooth' })
//               }}
//               style={{ cursor: 'pointer' }}
//             >
//               <img src="/assets/Images/white_logoo.png" alt="Urban Desiii Logo" className="logo-image" />
//               <span className="logo-text">Urban Desiii</span>
//             </div>

//           </div>
//           <button 
//             className="mobile-menu-toggle"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             <span className={mobileMenuOpen ? 'hamburger open' : 'hamburger'}></span>
//             <span className={mobileMenuOpen ? 'hamburger open' : 'hamburger'}></span>
//             <span className={mobileMenuOpen ? 'hamburger open' : 'hamburger'}></span>
//           </button>
//           {mobileMenuOpen && (
//             <div 
//               className="mobile-menu-backdrop" 
//               onClick={() => setMobileMenuOpen(false)}
//             ></div>
//           )}
//           <div className={`nav-right ${mobileMenuOpen ? 'mobile-open' : ''}`}>
//             <button className="nav-link" onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}>Home</button>
//             <button className="nav-link" onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }}>About</button>
//             <button className="nav-link" onClick={() => { setCurrentPage('service'); setMobileMenuOpen(false); }}>Service</button>
//             <button className="nav-link" onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }}>Contact</button>
//             <button className="nav-link" onClick={() => { setCurrentPage('subscribe'); setMobileMenuOpen(false); }}>Subscribe</button>
//           </div>
//         </header>

//         {currentPage === 'contact' ? <ContactPage /> : 
//          currentPage === 'subscribe' ? <SubscribePage /> : 
//          currentPage === 'about' ? <AboutPage /> :
//          currentPage === 'service' ? <ServicePage /> : (
//           <main>
//             {/* Enhanced Hero */}
//             <section className="hero" data-animate="fade-up">
//               <div className="hero-content">
//                 <p className="hero-kicker" data-animate-child>The First South Asian Influencer Marketing Agency</p>
//                 <h1 data-animate-child>
//                   <span className="hero-text-reveal">The First South Asian <span style={{ display: 'inline-block', marginLeft: '0.5rem' }}>Influencer</span></span>
//                   <br />
//                   <span className="hero-text-reveal" style={{ animationDelay: '0.2s' }}>Marketing</span>
//                   <br />
//                   <span className="hero-text-reveal" style={{ animationDelay: '0.4s' }}>Agency</span>
//                 </h1>
//                 <p className="hero-sub" data-animate-child>
//                   SOCIAL MEDIA + MARKETING AGENCY | BRAND + INFLUENCER MANAGEMENT
//                 </p>
//                 <div className="hero-actions" data-animate-child>
//                   <button className="btn btn-primary hero-cta animate-bounce-in" onClick={() => setCurrentPage('contact')}>
//                     Book a free consultant with our social media experts
//                     <span className="btn-shine"></span>
//                   </button>
//                 </div>
//               </div>

//               <div className="hero-visual" data-animate="fade-left">
//                 {/* Gray diamond shape with Instagram Live inside */}
//                 <div className="hero-diamond-gray" data-animate-child style={heroDiamondStyle}>
//                   <div className="instagram-live-diamond">
//                     <InstagramLive />
//                   </div>
//                 </div>
                
//                 <a href='https://www.tiktok.com/@urbandesiii' target="_blank" rel="noopener noreferrer">
//                   <div className="hero-floating hero-floating--top animate-float" data-animate-child style={{ animationDelay: '0.8s' }}>
//                     <div className="floating-icon"><img src='/assets/Images/tiktok-256.png' alt="tiktok"/></div>
//                     <div className="floating-text">
//                       <div className="floating-title">Tik-tok</div>
//                     </div>
//                   </div>
//                 </a>
//                 <a href='https://www.instagram.com/urbandesiii/?hl=en' className="hero-floating hero-floating--right animate-float" data-animate-child style={{ animationDelay: '1s', textDecoration: 'none' }}>
//                   <div className="floating-icon">
//                     <img src='/assets/Images/instagram.png' alt='Instagram'/>
//                   </div>
//                   <div className="floating-text">
//                     <div className="floating-title">Instagram</div>
//                   </div>
//                 </a>

//                 <a href='https://www.linkedin.com/company/urban-desiii/' className="hero-floating hero-floating--bottom animate-float" data-animate-child style={{ animationDelay: '1.2s', textDecoration: 'none' }}>
//                   <div className="floating-icon">
//                     <img src='/assets/Images/linkedin.png' alt='LinkedIn'/>
//                   </div>
//                   <div className="floating-text">
//                     <div className="floating-title">LinkedIn</div>
//                   </div>
//                 </a>

//                 {/* Removed separate Instagram Live Feed div */}

//                 <div className="hero-card animate-card-hover hero-card-delayed" data-animate-child style={{ animationDelay: '1.5s' }}>
//                   <div className="hero-card-image">
//                     <img 
//                       src={slides[currentSlide]} 
//                       alt={`Slide ${currentSlide + 1}`} 
//                       className="hero-card-profile-image"
//                     />
//                   </div>
//                   <div className="creator-header">
//                     <div>
//                       <div className="creator-name">Urban Desiii @Live Feed</div>
//                     </div>
//                   </div>      
//                 </div>
//               </div>
//             </section>

//             {/* Simple Video Gallery Section */}
//             <section className="video-gallery" data-animate="fade-up">
//               <div className="video-gallery-header" data-animate-child>
//                 <h2>Subscribe to Urban Desiii</h2>
//               </div>
              
//               <div className="video-grid" data-animate-child>
//                 {videoData.map((video, index) => (
//                   <div 
//                     key={video.id} 
//                     className="video-card"
//                     data-animate="fade-up"
//                     data-animate-child
//                     style={{ animationDelay: `${index * 0.1}s` }}
//                   >
//                     <div className="video-container">
//                       <video
//                         ref={el => videoRefs.current[index] = el}
//                         src={video.videoUrl}
//                         className="video-element"
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           </main>
//         )}
//       </div>
      
//       {/* Footer moved outside the .page container */}
//       <footer className="footer" data-animate="fade-up">
//         <div className="footer-content">
//           <div className="footer-top">
//             <div className="footer-brand-container">
//               <div className="footer-brand" data-animate="fade-up" data-animate-child>
//                 <div className="logo-container-small">
//                   <img src="/assets/Images/white_logoo.png" alt="Urban Desiii Logo" className="logo-image small" />
//                   <span className="logo-text">Urban Desiii</span>
//                 </div>
//               </div>
              
//               <div className="email-signup">
//                 <p className="signup-text">Join our email list</p>
//                 <p className="signup-subtext">Sign up with your email address to receive news and updates.</p>
//                 <div className="signup-form">
//                   <input 
//                     type="email" 
//                     placeholder="Email Address" 
//                     className="email-input"
//                     aria-label="Email Address"
//                   />
//                   <button className="signup-button">Sign Up</button>
//                 </div>
//                 <p className="privacy-text">We respect your privacy.</p>
//               </div>
//             </div>
//             <div className="footer-columns">
//               {[
//                 { 
//                   title: "FOLLOW", 
//                   links: [
//                     { name: "Instagram", url: "https://www.instagram.com/urbandesiii/", icon: "fab fa-instagram" },
//                     { name: "TikTok", url: "https://www.tiktok.com/", icon: "fab fa-tiktok" },
//                     { name: "LinkedIn", url: "https://www.linkedin.com/company/urban-desiii/", icon: "fab fa-linkedin-in" },
//                     { name: "Email", url: "mailto:urbandesiii.business@gmail.com", icon: "far fa-envelope" },
//                     { name: "YouTube", url: "https://www.youtube.com/@ashnaparikh", icon: "fab fa-youtube" }
//                   ]
//                 }
//               ].map((col, colIndex) => (
//                 <div 
//                   key={colIndex} 
//                   className={`footer-col ${col.title === "Quick Links" ? "footer-col-quick" : ""} ${col.title === "Support" ? "footer-col-support" : ""} ${col.title === "FOLLOW" ? "footer-col-follow" : ""}`} 
//                   data-animate="fade-up" 
//                   data-animate-child
//                 >
//                   <h4>{col.title}</h4>
//                   {col.title === "FOLLOW" ? (
//                     <div className="social-links">
//                       {col.links.map((link, linkIndex) => (
//                         <a 
//                           key={linkIndex} 
//                           href={link.url} 
//                           target="_blank" 
//                           rel="noopener noreferrer"
//                           title={link.name}
//                         >
//                           <i className={link.icon}></i>
//                         </a>
//                       ))}
//                     </div>
//                   ) : (
//                     col.links.map((link, linkIndex) => (
//                       <a 
//                         key={linkIndex} 
//                         href={link.url || '#'} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         onClick={(e) => {
//                           if (link.action) {
//                             e.preventDefault();
//                             link.action();
//                           }
//                         }}
//                       >
//                         {link.name}
//                       </a>
//                     ))
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <span> 2023 Urban Desiii. All rights reserved.</span>
//           </div>
//         </div>
//       </footer>
//     </>
//   )
// }

// export default App

// 


import { useEffect, useState, useCallback, useRef } from 'react'
import ContactPage from './pages/Contact'
import AboutPage from './pages/About'
import ServicePage from './pages/Service'
import InstagramLive from './components/InstagramLive'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [heroInView, setHeroInView] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Remove currentSlide since we're removing auto-scroll
  // const [currentSlide, setCurrentSlide] = useState(0)
  
  // Remove slides array since we're removing auto-scroll
  // const slides = [
  //   "/assets/Images/image.png",
  //   "/assets/Images/image1.png",
  //   "/assets/Images/image3.png",
  //   "/assets/Images/image4.png",
  //   "/assets/Images/image5.png"
  // ];

  // Remove auto-scroll interval effect
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 3000); // Change slide every 3 seconds
  //   return () => clearInterval(interval);
  // }, [slides.length]);

  const videoRefs = useRef([])
  const [videoMuted, setVideoMuted] = useState([true]) // Start muted for autoplay, will unmute after play
  const hasUnmutedRef = useRef([false]) // Track if we've auto-unmuted

  // Simple video data with placeholder thumbnails - keeping only 1 reel
  const videoData = [
    {
      id: 1,
      videoUrl: "/assets/Images/hero-video.mp4"
    }
  ]

  // Ensure video plays continuously and auto-unmute after it starts
  useEffect(() => {
    const playVideo = (videoRef, index) => {
      if (!videoRef) return

      const attemptPlay = () => {
        if (videoRef.paused) {
          const playPromise = videoRef.play()
          
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                // Video is playing, now unmute it
                if (!hasUnmutedRef.current[index]) {
                  setTimeout(() => {
                    if (videoRef && !videoRef.paused) {
                      videoRef.muted = false
                      hasUnmutedRef.current[index] = true
                      setVideoMuted(prev => {
                        const newState = [...prev]
                        newState[index] = false
                        return newState
                      })
                    }
                  }, 300)
                }
              })
              .catch((error) => {
                // Retry after delay
                setTimeout(() => attemptPlay(), 500)
              })
          }
        }
      }

      // Try to play immediately
      attemptPlay()

      // Also try when video can play
      const handleCanPlay = () => {
        attemptPlay()
      }

      const handleLoadedData = () => {
        attemptPlay()
      }

      const handleLoadedMetadata = () => {
        attemptPlay()
      }

      const handlePause = () => {
        // If video gets paused, try to play it again
        setTimeout(() => {
          if (videoRef && videoRef.paused) {
            attemptPlay()
          }
        }, 100)
      }

      const handleEnded = () => {
        // If video ends, restart it
        videoRef.currentTime = 0
        attemptPlay()
      }

      // Add event listeners
      videoRef.addEventListener('canplay', handleCanPlay)
      videoRef.addEventListener('loadeddata', handleLoadedData)
      videoRef.addEventListener('loadedmetadata', handleLoadedMetadata)
      videoRef.addEventListener('pause', handlePause)
      videoRef.addEventListener('ended', handleEnded)

      // If already loaded, try to play
      if (videoRef.readyState >= 2) {
        attemptPlay()
      }

      return () => {
        videoRef.removeEventListener('canplay', handleCanPlay)
        videoRef.removeEventListener('loadeddata', handleLoadedData)
        videoRef.removeEventListener('loadedmetadata', handleLoadedMetadata)
        videoRef.removeEventListener('pause', handlePause)
        videoRef.removeEventListener('ended', handleEnded)
      }
    }

    // Wait for DOM to be ready, then play videos
    const timer1 = setTimeout(() => {
      videoRefs.current.forEach((videoRef, index) => {
        if (videoRef) {
          playVideo(videoRef, index)
        }
      })
    }, 100)

    // Also try after a longer delay to catch late-loading videos
    const timer2 = setTimeout(() => {
      videoRefs.current.forEach((videoRef, index) => {
        if (videoRef && videoRef.paused) {
          videoRef.play().catch(() => {})
        }
      })
    }, 500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  // Intersection Observer to ensure video plays when in viewport
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
            // Video is in viewport - ensure it's playing
            if (videoRef.paused) {
              videoRef.play().catch(() => {})
            }
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe video containers
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
  }, [])

  // Toggle mute/unmute for a specific video
  const toggleMute = (index) => {
    const newMutedState = [...videoMuted]
    newMutedState[index] = !newMutedState[index]
    setVideoMuted(newMutedState)
    
    if (videoRefs.current[index]) {
      videoRefs.current[index].muted = newMutedState[index]
    }
  }

  // Enhanced mouse tracking for parallax effects
  const handleMouseMove = useCallback((e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100
    })
  }, [])

  useEffect(() => {
    // Reset all animations when page mounts
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

    // Enhanced intersection observer with more dynamic animations
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add staggered delays for child elements
            const children = entry.target.querySelectorAll('[data-animate-child]')
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-child-in')
              }, index * 100)
            })
            
            entry.target.classList.add('in-view')
            
            // Special handling for hero section
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

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const animated = document.querySelectorAll('[data-animate]')
      animated.forEach(el => observer.observe(el))
    }, 100)

    // Mouse move listener for parallax effects
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      observer.disconnect()
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove, currentPage])

  useEffect(() => {
    const handleScroll = () => {
      // Add scroll-based parallax to hero elements only
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

  // Dynamic hero diamond style based on mouse position
  const heroBaseTransform = 'translate(-50%, -50%)'
  const heroDiamondStyle = {
    transform: `${heroBaseTransform} rotate(45deg) translateY(${(mousePosition.y - 50) * 0.1}px) translateX(${(mousePosition.x - 50) * 0.05}px)`,
    transformOrigin: 'center',
    filter: `brightness(${100 + mousePosition.x * 0.2}%)`
  }

  // Function to scroll to specific section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setCurrentPage('home')
  }

  return (
    <>
      <div className="page">
        <header className="navbar">
          <div className="nav-left">
            <div 
              className="logo-container"
              onClick={() => {
                setCurrentPage('home')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              style={{ cursor: 'pointer' }}
            >
              <img src="/assets/Images/white_logoo.png" alt="Urban Desiii Logo" className="logo-image" />
              <span className="logo-text">Urban Desiii</span>
            </div>

          </div>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={mobileMenuOpen ? 'hamburger open' : 'hamburger'}></span>
            <span className={mobileMenuOpen ? 'hamburger open' : 'hamburger'}></span>
            <span className={mobileMenuOpen ? 'hamburger open' : 'hamburger'}></span>
          </button>
          {mobileMenuOpen && (
            <div 
              className="mobile-menu-backdrop" 
              onClick={() => setMobileMenuOpen(false)}
            ></div>
          )}
          <div className={`nav-right ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <button className="nav-link" onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}>Home</button>
            <button className="nav-link" onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }}>About</button>
            <button className="nav-link" onClick={() => { setCurrentPage('service'); setMobileMenuOpen(false); }}>Services</button>
            <button className="nav-link" onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }}>Contact</button>
          </div>
        </header>

        {currentPage === 'contact' ? <ContactPage /> : 
         currentPage === 'about' ? <AboutPage /> :
         currentPage === 'service' ? <ServicePage /> : (
          <main>
            {/* Enhanced Hero */}
            <section className="hero" data-animate="fade-up">
              <div className="hero-content">
                <p className="hero-kicker" data-animate-child>The First South Asian Influencer Marketing Agency</p>
                <h1 data-animate-child>
                  <span className="hero-text-reveal">The First South Asian <span style={{ display: 'inline-block', marginLeft: '0.5rem' }}>Influencer</span></span>
                  <br />
                  <span className="hero-text-reveal" style={{ animationDelay: '0.2s' }}>Marketing</span>
                  <br />
                  <span className="hero-text-reveal" style={{ animationDelay: '0.4s' }}>Agency</span>
                </h1>
                <p className="hero-sub" data-animate-child>
                  SOCIAL MEDIA + MARKETING AGENCY | BRAND + INFLUENCER MANAGEMENT
                </p>
                <div className="hero-actions" data-animate-child>
                  <button className="btn btn-primary hero-cta animate-bounce-in" onClick={() => setCurrentPage('contact')}>
                    Book a free consultant with our social media experts
                    <span className="btn-shine"></span>
                  </button>
                </div>
              </div>

              <div className="hero-visual" data-animate="fade-left">
                {/* Gray diamond shape with Instagram Live inside */}
                <div className="hero-diamond-gray" data-animate-child style={heroDiamondStyle}>
                  <div className="instagram-live-diamond">
                    <InstagramLive />
                  </div>
                </div>
                
                <a href='https://www.tiktok.com/@urbandesiii' target="_blank" rel="noopener noreferrer" className="hero-floating hero-floating--left animate-float" data-animate-child style={{ animationDelay: '0.8s' }}>
                  <div className="floating-icon"><img src='/assets/Images/tiktok-256.png' alt="tiktok"/></div>
                  <div className="floating-text">
                    <div className="floating-title">Tik-tok</div>
                  </div>
                </a>

                <a href='https://www.linkedin.com/company/urban-desiii/' className="hero-floating hero-floating--right animate-float" data-animate-child style={{ animationDelay: '1s', textDecoration: 'none' }}>
                  <div className="floating-icon">
                    <img src='/assets/Images/linkedin.png' alt='LinkedIn'/>
                  </div>
                  <div className="floating-text">
                    <div className="floating-title">LinkedIn</div>
                  </div>
                </a>

                
              </div>
            </section>

            {/* Simple Video Gallery Section */}
            <section className="video-gallery" data-animate="fade-up">
              <div className="video-gallery-header" data-animate-child>
                <h2>Subscribe to Urban Desiii</h2>
              </div>
              
              <div className="video-grid" data-animate-child>
                {/* Keep 1 reel video */}
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
                            // Try to play immediately when ref is set
                            setTimeout(() => {
                              if (el && el.paused) {
                                el.play().catch(() => {})
                              }
                            }, 50)
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
                      <button
                        className="mute-button"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleMute(index)
                        }}
                        aria-label={videoMuted[index] ? "Unmute video" : "Mute video"}
                      >
                        {videoMuted[index] ? (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="white"/>
                          </svg>
                        ) : (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="white"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
                
                {/* Subscription section replacing 3 removed reels - Image on left, Form on right */}
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
      
      {/* Footer moved outside the .page container */}
      <footer className="footer" data-animate="fade-up">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-brand-container">
              <div className="footer-brand" data-animate="fade-up" data-animate-child>
                <div className="logo-container-small">
                  <img src="/assets/Images/white_logoo.png" alt="Urban Desiii Logo" className="logo-image small" />
                  <span className="logo-text">Urban Desiii</span>
                </div>
              </div>
              
              <div className="email-signup">
                <p className="signup-text">Join our email list</p>
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
                    { name: "Instagram", url: "https://www.instagram.com/urbandesiii/", icon: "fab fa-instagram" },
                    { name: "TikTok", url: "https://www.tiktok.com/", icon: "fab fa-tiktok" },
                    { name: "LinkedIn", url: "https://www.linkedin.com/company/urban-desiii/", icon: "fab fa-linkedin-in" },
                    { name: "Email", url: "mailto:urbandesiii.business@gmail.com", icon: "far fa-envelope" },
                    { name: "YouTube", url: "https://www.youtube.com/@ashnaparikh", icon: "fab fa-youtube" }
                  ]
                }
              ].map((col, colIndex) => (
                <div 
                  key={colIndex} 
                  className={`footer-col ${col.title === "Quick Links" ? "footer-col-quick" : ""} ${col.title === "Support" ? "footer-col-support" : ""} ${col.title === "FOLLOW" ? "footer-col-follow" : ""}`} 
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
                        onClick={(e) => {
                          if (link.action) {
                            e.preventDefault();
                            link.action();
                          }
                        }}
                      >
                        {link.name}
                      </a>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App