import React, { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log({ email, message });
    // Replace with actual form submission logic (e.g., send to an API endpoint or email service)
    // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify({ email, message }) })
    setStatus('Message sent successfully! We will get back to you soon.');
    setEmail('');
    setMessage('');
    setTimeout(() => setStatus(''), 3000); // Clear status after 3 seconds
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          Have a project in mind or want to learn more about our capabilities? Drop us a line.
        </p>
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: '#ccc', fontSize: '0.9rem', fontWeight: '500' }}>Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '14px', borderRadius: '6px', border: '1px solid #444', backgroundColor: '#1f1f1f', color: '#fff', fontSize: '1rem' }}
              placeholder="you@example.com"
            />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', color: '#ccc', fontSize: '0.9rem', fontWeight: '500' }}>Your Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="6"
              style={{ width: '100%', padding: '14px', borderRadius: '6px', border: '1px solid #444', backgroundColor: '#1f1f1f', color: '#fff', fontSize: '1rem' }}
              placeholder="Tell us about your project or inquiry..."
            />
          </div>
          <button type="submit" className="button" style={{width: '100%', padding: '15px', fontSize: '1.1rem'}} disabled={status === 'Sending...'}>
            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
          </button>
          {status && !status.includes('Sending...') && (
            <p style={{ marginTop: '20px', textAlign: 'center', color: status.includes('successfully') ? '#28a745' : '#dc3545' }}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
