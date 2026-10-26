import React from 'react';
import './FormSubmitted.css'

interface FormSubmittedProps {
  userEmail?: string;
  referenceNumber?: string;
  estimatedResponseHours?: number;
  onReset?: () => void;
}

export const FormSubmittedPage: React.FC<FormSubmittedProps> = ({
  userEmail = 'your email address',
  referenceNumber = `#TF-${Math.floor(100000 + Math.random() * 900000)}`,
  estimatedResponseHours = 24,
  onReset,
}) => {
  return (
    <div className="form-submitted-container">
      <div className="submitted-card">
        {/* Animated Checkmark Badge */}
        <div className="success-badge">
          <svg
            className="checkmark-svg"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
            <path
              className="checkmark-check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        {/* Primary Message */}
        <div className="submitted-header">
          <span className="header-chip-success">Message Sent</span>
          <h1>Thank You for Reaching Out!</h1>
          <p>
            We have received your inquiry and our team is already reviewing your request.
          </p>
        </div>

        {/* Inquiry Summary Box */}
        <div className="submission-details">
          <div className="detail-item">
            <span className="detail-label">Reference Number</span>
            <span className="detail-value reference-code">{referenceNumber}</span>
          </div>
          <div className="detail-divider"></div>
          <div className="detail-item">
            <span className="detail-label">Confirmation Sent To</span>
            <span className="detail-value">{userEmail}</span>
          </div>
          <div className="detail-divider"></div>
          <div className="detail-item">
            <span className="detail-label">Expected Response</span>
            <span className="detail-value">Within {estimatedResponseHours} Business Hours</span>
          </div>
        </div>

        {/* Helpful Resources Section */}
        <div className="next-steps-container">
          <p className="next-steps-title">While you wait, you can:</p>
          <div className="next-steps-grid">
            <a href="/demo" className="step-card">
              <div className="step-icon">📖</div>
              <div className="step-text">
                <h3>Browse Support Center</h3>
                <p>Find instant video guides &amp; FAQs for all devices</p>
              </div>
            </a>
            <a href="/biometrics" className="step-card">
              <div className="step-icon">🛡️</div>
              <div className="step-text">
                <h3>Explore Products</h3>
                <p>Discover our latest Access Control &amp; CCTV options</p>
              </div>
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <a href="/" className="btn-primary">
            Return to Home
          </a>
          {onReset ? (
            <button onClick={onReset} className="btn-secondary">
              Submit Another Inquiry
            </button>
          ) : (
            <a href="/contact-us" className="btn-secondary">
              Send Another Message
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormSubmittedPage;