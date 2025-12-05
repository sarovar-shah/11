import { useEffect, useState, useCallback } from 'react'
import HomePage from './pages/Home'
import ContactPage from './pages/Contact'
import SubscribePage from './pages/Subscribe'
import SignInPage from './pages/SignIn'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [heroInView, setHeroInView] = useState(false)

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
  }, [handleMouseMove, currentPage]) // Add currentPage as dependency

  useEffect(() => {
    const handleScroll = () => {
      // Add scroll-based parallax to hero elements only
      const heroVisual = document.querySelector('.hero-visual')
      const heroDiamond = document.querySelector('.hero-diamond-gray')
      const heroFloating = document.querySelectorAll('.hero-floating')
      
      if (heroVisual && window.scrollY < window.innerHeight) {
        const scrollPercent = window.scrollY / window.innerHeight
        
        if (heroDiamond) {
          heroDiamond.style.transform = `rotate(45deg) translateY(${scrollPercent * 30}px)`
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

  return (
    <div key="creators" className="page">
      <header className="navbar">
        <div className="nav-left">
          <div className="logo-container">
            <img src="/src/assets/Images/logo.png" alt="Urban Desiii Logo" className="logo-image" />
            <span className="logo-text">Urban Desiii</span>
          </div>
        </div>
        <div className="nav-right">
          <button className="nav-link" onClick={() => setCurrentPage('home')}>Home</button>
          <button className="nav-link" onClick={() => setCurrentPage('home')}>About</button>
          <button className="nav-link" onClick={() => setCurrentPage('home')}>Service</button>
          <button className="nav-link" onClick={() => setCurrentPage('contact')}>Contact</button>
          <button className="nav-link" onClick={() => setCurrentPage('subscribe')}>Subscribe</button>
          <button className="btn btn-primary" onClick={() => setCurrentPage('signin')}>Sign In</button>
        </div>
      </header>

      {currentPage === 'contact' ? <ContactPage /> : currentPage === 'subscribe' ? <SubscribePage /> : currentPage === 'signin' ? <SignInPage /> : <HomePage />}

      <footer className="footer" data-animate="fade-up">
        <div className="footer-top">
          <div className="footer-brand" data-animate="fade-up" data-animate-child>
            <div className="logo-container-small">
              <img src="/src/assets/Images/logo.png" alt="Urban Desiii Logo" className="logo-image small" />
              <span className="logo-text">Urban Desiii</span>
            </div>
          </div>
          <div className="footer-columns">
            {[
              { title: "Company", links: ["Agencies", "Brands", "Login", "Sign up", "Get Help"] },
              { title: "Urban Desiii", links: ["For Creators", "For Businesses"] },
              { title: "Info", links: ["Affiliate Program", "Free Migration"] },
              { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
              { title: "Socials", links: ["X", "Instagram", "Facebook", "TikTok", "LinkedIn"] }
            ].map((col, colIndex) => (
              <div key={colIndex} className="footer-col" data-animate="fade-up" data-animate-child>
                <h4>{col.title}</h4>
                {col.links.map((link, linkIndex) => (
                  <a key={linkIndex} href="#" className="footer-link">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Urban Desiii. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default App