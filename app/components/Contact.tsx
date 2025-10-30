export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-content">
          <h2>Let's Connect!</h2>
          <p>
            I'm always open to discussing new opportunities, interesting projects, or just having 
            a chat about technology. Feel free to reach out if you'd like to collaborate or 
            if you have any questions about my work.
          </p>
          <div className="contact-links">
            <a href="mailto:rushikeshyeole@gmail.com" className="btn-primary">
              📧 Email Me
            </a>
            <a href="https://linkedin.com/in/rushikeshyeole" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              💼 LinkedIn
            </a>
            <a href="https://github.com/rushikeshyeole" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              🐙 GitHub
            </a>
            <a href="https://twitter.com/rushikeshyeole" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              🐦 Twitter
            </a>
          </div>
          <div style={{ marginTop: '48px', padding: '32px', backgroundColor: '#f8f9fa', borderRadius: '12px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#1a1a1a' }}>
              Quick Info
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div>
                <strong style={{ color: '#1a1a1a' }}>Location:</strong>
                <p style={{ color: '#666', margin: '4px 0 0 0' }}>Mumbai, India</p>
              </div>
              <div>
                <strong style={{ color: '#1a1a1a' }}>Status:</strong>
                <p style={{ color: '#666', margin: '4px 0 0 0' }}>Open to opportunities</p>
              </div>
              <div>
                <strong style={{ color: '#1a1a1a' }}>Response Time:</strong>
                <p style={{ color: '#666', margin: '4px 0 0 0' }}>Usually within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}