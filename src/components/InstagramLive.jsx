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

    const processInstagram = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };

    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    script.onerror = () => {
      // Silently handle script loading errors
    };
    
    const existingScript = document.querySelector('script[src*="instagram.com/embed.js"]');
    if (existingScript) {
      if (window.instgrm && window.instgrm.Embeds) {
        setTimeout(() => {
          processInstagram();
        }, 100);
      } else {
        const checkInstgrm = setInterval(() => {
          if (window.instgrm && window.instgrm.Embeds) {
            processInstagram();
            clearInterval(checkInstgrm);
          }
        }, 100);
        setTimeout(() => clearInterval(checkInstgrm), 3000);
      }
    } else {
      document.body.appendChild(script);
      
      script.onload = () => {
        if (window.instgrm && window.instgrm.Embeds) {
          processInstagram();
        }
      };
    }
    
    setTimeout(() => {
      processInstagram();
    }, 500);

    return () => {
      console.warn = originalWarn;
      console.error = originalError;
      
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
        data-instgrm-permalink="https://www.instagram.com/elevenagency.us/"
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