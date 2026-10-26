import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './FillForm.css';

export const FillForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate(); // Initialize router navigation

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus('Sending...');

    // Replace these with your actual EmailJS credentials or environment variables
    const SERVICE_ID = 'service_gsitdn9';
    const TEMPLATE_ID = 'template_p1vimcp';
    const PUBLIC_KEY = 'xxKS0v3FAYc4MwLgb';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setIsSubmitting(false);
          formRef.current?.reset();
          // Redirect to the form submitted / thank you page on success
          navigate('/form-submitted');
        },
        (error) => {
          setStatus('Failed to send message, please try again.');
          setIsSubmitting(false);
          console.error('EmailJS Error:', error.text);
        }
      );
  };

  return (
    <section className="contacts-container">
      <div className="contacts-card">
        <div className="contacts-card-title">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.99951 22.3525L6.90446 20.8285L6.91847 20.8177C7.31561 20.5 7.51601 20.3397 7.7396 20.2255C7.9402 20.123 8.1541 20.0484 8.37476 20.0031C8.62347 19.952 8.88254 19.952 9.40259 19.952H20.2539C21.6513 19.952 22.3508 19.952 22.885 19.6798C23.3554 19.4401 23.7381 19.0573 23.9778 18.5869C24.25 18.0526 24.25 17.3539 24.25 15.9565V6.44816C24.25 5.05077 24.25 4.35103 23.9778 3.81677C23.7381 3.34637 23.3546 2.96419 22.8842 2.72451C22.3495 2.45203 21.6504 2.45203 20.2502 2.45203H5.75024C4.35011 2.45203 3.64953 2.45203 3.11475 2.72451C2.64434 2.96419 2.26217 3.34637 2.02248 3.81677C1.75 4.35155 1.75 5.05214 1.75 6.45227V20.791C1.75 22.1231 1.75 22.7891 2.02307 23.1312C2.26056 23.4287 2.62054 23.6018 3.00122 23.6014C3.43894 23.6009 3.9593 23.1846 4.99951 22.3525Z" stroke="#0B928E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="contacts-card-p">Get in touch with&nbsp;<b>Techfinity</b>&nbsp;today!</p>
        </div>

        <form ref={formRef} onSubmit={sendEmail} id="contact-form">
          <div className='field-container'>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="ejs_name" required />
          </div>
          <div className='field-container'>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" name="ejs_phone" required />
          </div>
          <div className='field-container'>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="ejs_email" required />
          </div>
          <div className='field-container'>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="ejs_message" rows={8} required></textarea>  
          </div>

          <button type="submit" className="contact-submit" disabled={isSubmitting}>
            <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M6 12.95L10.2426 17.1926L18.727 8.70728" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>

        <p id="status">{status}</p>
      </div>
    </section>
  );
};

export default FillForm;