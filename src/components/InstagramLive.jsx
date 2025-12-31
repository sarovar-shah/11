import { useEffect } from 'react';

const InstagramLive = () => {
  useEffect(() => {
    // Suppress tracking prevention warnings
    const originalWarn = console.warn;
    const originalError = console.error;
    
    console.warn = (...args) => {
      const message = args[0]?.toString() || '';
      if (message.includes('Tracking Prevention') || message.includes('static.cdninstagram.com')) {
        return; // Suppress tracking prevention warnings
      }
      originalWarn.apply(console, args);
    };
    
    console.error = (...args) => {
      const message = args[0]?.toString() || '';
      if (message.includes('Tracking Prevention') || message.includes('static.cdninstagram.com')) {
        return; // Suppress tracking prevention errors
      }
      originalError.apply(console, args);
    };

    // Function to process Instagram embed
    const processInstagram = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        // Process all Instagram embeds
        window.instgrm.Embeds.process();
      }
    };

    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    script.onerror = () => {
      // Silently handle script loading errors
    };
    
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="instagram.com/embed.js"]');
    if (existingScript) {
      // Script already loaded, process immediately
      if (window.instgrm && window.instgrm.Embeds) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          processInstagram();
        }, 100);
      } else {
        // Wait for instgrm to be available
        const checkInstgrm = setInterval(() => {
          if (window.instgrm && window.instgrm.Embeds) {
            processInstagram();
            clearInterval(checkInstgrm);
          }
        }, 100);
        // Stop checking after 3 seconds
        setTimeout(() => clearInterval(checkInstgrm), 3000);
      }
    } else {
      document.body.appendChild(script);
      
      // When script loads, process Instagram
      script.onload = () => {
        if (window.instgrm && window.instgrm.Embeds) {
          processInstagram();
        }
      };
    }
    
    // Also try to process after a short delay (in case script was already loading)
    setTimeout(() => {
      processInstagram();
    }, 500);

    return () => {
      // Restore original console methods
      console.warn = originalWarn;
      console.error = originalError;
      
      // Cleanup script if it was added by this component
      const scriptToRemove = document.querySelector('script[src*="instagram.com/embed.js"]');
      if (scriptToRemove && scriptToRemove === script) {
        try {
          document.body.removeChild(script);
        } catch (e) {
          // Script may have been removed already
        }
      }
    };
  }, []);

  return (
    <div className="instagram-live-container">
      <blockquote 
        className="instagram-media" 
        data-instgrm-permalink="https://www.instagram.com/urbandesiii/"
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          margin: '1rem',
          maxWidth: '320px',
          minWidth: '280px',
          padding: 0,
          width: '100%',
        }}
      ></blockquote>
    </div>
  );
};

export default InstagramLive;
