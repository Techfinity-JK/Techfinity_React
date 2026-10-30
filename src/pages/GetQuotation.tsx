import React from 'react';
import './GetQuotation.css';

export const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-page">
      {/* Header Section */}
      <section className="contact-header">
        <div className="contact-header-content">
          <span className="eyebrow">GET A QUOTATION</span>
          <h1>Request a <span className="highlight">Quotation</span> from us!</h1>
          <p>
            Send us a message on Messenger or Viber, kindly attach your requirements, door photos, city and preferred model.
          </p>
        </div>
      </section>
      <section className="get-quotation-main-container">
        <div className='quotation-button-group'>
          <div className="quotation-button-container">
            <a className="quotation-messenger-button" target="_blank" href="https://www.facebook.com/profile.php?id=61551208128036">
              <svg width="24" height="24" viewBox="0 0 24 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.512 3.734 7.206V22l3.41-1.873c.905.25 1.866.386 2.856.386 5.523 0 10-4.145 10-9.255C22 6.145 17.523 2 12 2zm1.066 12.449l-2.548-2.716-4.97 2.716 5.467-5.8 2.617 2.716 4.901-2.716-5.467 5.8z"/>
              </svg>
              Messenger
            </a>
          </div>
          <div className="quotation-button-container">
            <a className="quotation-viber-button" target="_blank" href="viber://chat?number=%2B639463360774">
            <svg width="24" height="24" viewBox="0 0 24 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.34 16.32c-.52-.3-2.61-1.29-3.02-1.44-.41-.15-.71-.22-1.01.22-.3.44-1.16 1.44-1.42 1.74-.26.3-.52.34-1.04.08-.52-.26-2.2-.81-4.19-2.58-1.55-1.38-2.6-3.08-2.9-3.6-.3-.52-.03-.8.23-1.06.23-.23.52-.6.78-.9.26-.3.34-.52.52-.86.17-.34.09-.64-.04-.9-.13-.26-1.01-2.43-1.39-3.33-.37-.88-.74-.76-1.01-.77h-.86c-.3 0-.78.11-1.19.56-.41.45-1.57 1.53-1.57 3.73 0 2.2 1.6 4.33 1.83 4.63.22.3 3.16 4.82 7.65 6.76 1.07.46 1.9.74 2.55.95 1.07.34 2.05.29 2.82.18.86-.13 2.61-1.07 2.98-2.1.37-1.03.37-1.91.26-2.1-.11-.19-.41-.3-.93-.56zm-1.89-10.4c-2.31-2.3-6.05-2.3-8.36 0-.32.32-.32.84 0 1.16.32.32.84.32 1.16 0 1.67-1.66 4.38-1.66 6.04 0 .32.32.84.32 1.16 0 .32-.32.32-.84 0-1.16zm-1.47 2.37c-1.5-1.5-3.93-1.5-5.43 0-.32.32-.32.84 0 1.16.32.32.84.32 1.16 0 .86-.86 2.25-.86 3.11 0 .32.32.84.32 1.16 0 .32-.32.32-.84 0-1.16z"/>
            </svg>
              Viber
            </a>
          </div>
          <div className="quotation-button-container">
            <a className="quotation-email-button" target="_blank" href="mailto:sales@techfinity.ph">
            <svg width="24" height="24" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L8.10764 6.61227L8.10967 6.61396C8.78785 7.11128 9.12714 7.3601 9.49876 7.45621C9.82723 7.54117 10.1725 7.54117 10.501 7.45621C10.8729 7.36001 11.2132 7.11047 11.8926 6.61227C11.8926 6.61227 15.8101 3.60594 18 2M1 11.8002V4.2002C1 3.08009 1 2.51962 1.21799 2.0918C1.40973 1.71547 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H15.8002C16.9203 1 17.4796 1 17.9074 1.21799C18.2837 1.40973 18.5905 1.71547 18.7822 2.0918C19 2.5192 19 3.07899 19 4.19691V11.8036C19 12.9215 19 13.4805 18.7822 13.9079C18.5905 14.2842 18.2837 14.5905 17.9074 14.7822C17.48 15 16.921 15 15.8031 15H4.19691C3.07899 15 2.5192 15 2.0918 14.7822C1.71547 14.5905 1.40973 14.2842 1.21799 13.9079C1 13.4801 1 12.9203 1 11.8002Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
              Email
            </a>
          </div>
        </div>
        <div className="get-quotation-card">
          <p className="card-first-p">1. For us to create you a formal quotation, please send the details below:</p>
          <ul>
            <li className="card-small-p">Name</li>
            <li className="card-small-p">Contact Number</li>
            <li className="card-small-p">Project location Address</li>
            <li className="card-small-p">Target date of the Project</li>
            <li className="card-small-p">Email Address</li>
          </ul>
          <p className="card-small-p">Please send us your complete details forus to contact you better.</p>
        </div>
        <div className="get-quotation-card">
          <p className="card-first-p">2. Send Supporting Details</p>
          <p className="card-small-pb">For Biometric Devices</p>
          <p className="card-small-p">Tell us your authentication method requirements; fingerprint, rfid card, face recognition, palm.</p>
          <p className="card-small-pb">For Door Access</p>
          <p className="card-small-p">Send us clear photos / videos of the door access project to be inspected by our professional technicals.</p>
          <p className="card-small-pb">For CCTV Projects</p>
          <p className="card-small-p">Kindly provide the list of cctv requirements, and the CAD layout or blueprint of the site location.</p>
        </div>
        <div className="get-quotation-card">
          <p className="card-first-p">3. Contact us via Messenger or Viber</p>
          <p className="card-small-p">To help you get a finalized quotation quickly, kindly send the necessary details we need in Viber, Messenger, or Email. Thank you!</p>
          <p className="card-small-pb">Viber</p>
          <p className="card-small-p">+639463360774</p>
          <p className="card-small-pb">Email</p>
          <p className="card-small-p">sales@techfinity.ph</p>
          <p className="card-small-p"></p>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;