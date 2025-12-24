import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    handles: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: 'Sending your message...' });

    // Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyCCnEeYyyxI6h4RdwExy1mj6dNfh7V1oqn2OaeFAcXqjUtHNKro1CXvPjn5hngiDBQ/exec';
    
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'firstName': formData.firstName,
          'lastName': formData.lastName,
          'phone': formData.phone,
          'handles': formData.handles,
          'email': formData.email,
          'message': formData.message,
          'subject': 'New Contact Form Submission'
        }).toString()
      });

      // Since we're using 'no-cors' mode, we can't read the response
      // If the submission was successful, the Google Script will send the email
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        handles: '',
        email: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero" data-animate="fade-up">
        <div className="contact-copy">
          <p className="contact-kicker">Book your consultation</p>
          <h1>Let&apos;s plan your growth</h1>
          <p className="contact-desc">
            Our consultations are 15-20 minute phone calls, where we discuss your goals, budget, and overall plan.
            We invite you to ask questions, and take full advantage of creating a growth strategy for your brand.
          </p>
          <p className="contact-desc">
            Please leave us a brief description so we can properly prepare for your consultation.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="contact-form card-hover-effect" 
          data-animate="fade-up"
        >
          {submitStatus.message && (
            <div className={`form-message ${submitStatus.success ? 'success' : 'error'}`}>
              {submitStatus.message}
            </div>
          )}
          
          <div className="form-grid">
            <label className="form-field">
              <span>Name (required)</span>
              <div className="split-inputs">
                <input 
                  type="text" 
                  name="firstName" 
                  placeholder="First Name" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="text" 
                  name="lastName" 
                  placeholder="Last Name" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required 
                />
              </div>
            </label>

            <label className="form-field">
              <span>Phone (required)</span>
              <div className="split-inputs">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="+1" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
            </label>

            <label className="form-field">
              <span>Your Social Media Handle(s) (required)</span>
              <input 
                type="text" 
                name="handles" 
                placeholder="@yourhandle" 
                value={formData.handles}
                onChange={handleChange}
                className="input-tall" 
                required 
              />
            </label>

            <label className="form-field">
              <span>Email (required)</span>
              <input 
                type="email" 
                name="email" 
                placeholder="you@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </label>

            <label className="form-field">
              <span>Message (required)</span>
              <textarea 
                name="message" 
                rows="4" 
                placeholder="Tell us about your goals" 
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </label>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary full-width"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </section>
    </main>
  );
}

export default ContactPage

