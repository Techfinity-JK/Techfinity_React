import React from 'react';
import './ContactUs.css';

export const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-page">
      {/* Header Section */}
      <section className="contact-header">
        <div className="contact-header-content">
          <span className="eyebrow">GET IN TOUCH</span>
          <h1>We're Here to Secure <span className="highlight">Your Space</span></h1>
          <p>
            Have questions about our biometric systems, door access solutions, or CCTV hardware? Reach out to our team for expert recommendations and fast quotations.
          </p>
        </div>
      </section>

      {/* Main Content: Info Cards & Your Existing Contact Form */}
      <section className="contact-main-container">
        <div className="contact-grid">
          
          {/* Left Column: Quick Info Cards */}
          <div className="contact-info-column">
            
            {/* Address Card */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 9.92285C5 14.7747 9.24448 18.7869 11.1232 20.3252C11.3921 20.5454 11.5281 20.6568 11.7287 20.7132C11.8849 20.7572 12.1148 20.7572 12.271 20.7132C12.472 20.6567 12.6071 20.5463 12.877 20.3254C14.7557 18.7871 18.9999 14.7751 18.9999 9.9233C18.9999 8.08718 18.2625 6.32605 16.9497 5.02772C15.637 3.72939 13.8566 3 12.0001 3C10.1436 3 8.36301 3.7295 7.05025 5.02783C5.7375 6.32616 5 8.08674 5 9.92285Z" />
                  <path d="M10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9Z" />
                </svg>
              </div>
              <div>
                <h3>Office Address</h3>
                <p>Unit 422 J&amp;T Bldg 3894 Ramon Magsaysay Blvd Sta. Mesa Manila</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z" />
                </svg>
              </div>
              <div>
                <h3>Phone &amp; Mobile</h3>
                <p>(02) 8404-5627<br />0946-3360-774</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 4h20v16H2z" />
                  <path d="m22 4-10 8L2 4" />
                </svg>
              </div>
              <div>
                <h3>Email Support</h3>
                <p>sales@techfinity.ph</p>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h3>Business Hours</h3>
                <p>Monday – Saturday: 8:00 AM – 5:00 PM<br />Sunday: Closed</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactUs;