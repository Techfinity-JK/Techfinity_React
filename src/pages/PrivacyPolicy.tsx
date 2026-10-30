import React from 'react';
import './PrivacyPolicy.css'; // Reuses your existing layout and card styling

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="contact-us-page">
      {/* Header Section */}
      <section className="contact-header">
        <div className="contact-header-content">
          <span className="eyebrow">PRIVACY POLICY</span>
          <h1>Our Commitment to <span className="highlight">Your Privacy</span></h1>
          <p>
            At Techfinity Security Device Trading, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and handle your personal data when you submit an inquiry through our website.
          </p>
        </div>
      </section>
      
      {/* Main Content Container */}
      <section className="get-quotation-main-container">
        
        {/* Card 1: Information Collection */}
        <div className="get-quotation-card">
          <p className="card-first-p">1. Information We Collect</p>
          <p className="card-small-p">
            When you request a formal quotation on our website, we collect personal information that you voluntarily provide in our inquiry form, including:
          </p>
          <ul>
            <li className="card-small-p">Full Name</li>
            <li className="card-small-p">Contact Number &amp; Email Address</li>
            <li className="card-small-p">Physical or Delivery &amp; Address</li>
            <li className="card-small-p">Any additional details or requirements you include regarding your quote request</li>
          </ul>
        </div>

        {/* Card 2: Use of Information */}
        <div className="get-quotation-card">
          <p className="card-first-p">2. How We Use Your Information</p>
          <p className="card-small-p">
            We collect your information for a single, specific purpose: to generate and send you a formal quotation for our products or services.
          </p>
          <p className="card-small-pb">
            <br /> We do not: <br />
          </p>
          <ul>
            <li className="card-small-p">Sell, rent, trade, or share your personal data with third parties for marketing purposes.</li>
            <li className="card-small-p">Use your information to show targeted advertisements.</li>
            <li className="card-small-p">Create automated behavioral or demographic profiles based on your data.</li>
            <li className="card-small-p">Use tracking or behavioral analytics on the personal data provided in the form.</li>
          </ul>
        </div>

        {/* Card 3: Data Protection */}
        <div className="get-quotation-card">
          <p className="card-first-p">3. How Your Data Is Transmitted and Stored</p>
          <p className="card-small-pb">Email Transmission:</p>
          <p className="card-small-p">
            When you submit the form, your submitted information is processed and delivered directly to our team via EmailJS (a third-party web email service).
          </p>
          <p className="card-small-pb">Local Storage:</p>
          <p className="card-small-p">
            Once received, our staff manually records your contact details and inquiry specifications into our internal client database (maintained locally in spreadsheet format) solely for processing your quote and follow-ups related to your specific inquiry.
          </p>
        </div>

        {/* Card 4: Contact & Inquiries */}
        <div className="get-quotation-card">
          <p className="card-first-p">4. Third-Party Services</p>
          <p className="card-small-p">
            We use EmailJS strictly as a transactional email service provider to route your form submissions to our inbox. EmailJS processes your submitted data only to deliver the email message to us. We encourage you to review EmailJS's Privacy Policy to understand their security and privacy practices.
          </p>
          <br />
          <p className="card-small-p">Apart from routing via EmailJS, your data is not shared with or processed by any external vendors.</p>
        </div>

        {/* Card 5: Data Retention & Security */}
        <div className="get-quotation-card">
          <p className="card-first-p">5. Data Retention & Security</p>
          <p className="card-small-p">
           We retain your contact details in our internal client database only for as long as necessary to fulfill your quote request, maintain records of our communication, or comply with standard record-keeping practices. We implement reasonable physical and operational security measures to safeguard your stored data against unauthorized access or disclosure.
          </p>
        </div>

        {/* Card 6: Your Rights */}
        <div className="get-quotation-card">
          <p className="card-first-p">6. Your Rights</p>
          <p className="card-small-p">
           Depending on your jurisdiction, you have the right to access, update, or request the deletion of the personal information we hold about you. If you would like to review, correct, or remove your data from our internal records, please contact us directly using the details below.
          </p>
        </div>

        {/* Card 7: Contact Us */}
        <div className="get-quotation-card">
          <p className="card-first-p">7. Contact Us</p>
          <p className="card-small-p">
           If you have any questions, concerns, or requests regarding this Privacy Policy or our handling of your personal information, please contact us at:
          </p>
          <ul>
            <li className="card-small-p">Company Name: Techfinity Security Device Trading</li>
            <li className="card-small-p">Email: sales@techfinity.ph</li>
            <li className="card-small-p">Phone: +639463360774</li>
            <li className="card-small-p">Address: Unit 422 J&T Bldg 3894 Ramon Magsaysay Blvd Sta. Mesa Manila</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;