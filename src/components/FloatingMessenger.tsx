import React from 'react';
import './FloatingMessenger.css';

export const FloatingMessenger: React.FC = () => {
  return (
    <a
      href="https://www.facebook.com/profile.php?id=61551208128036"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-messenger-btn"
      aria-label="Message us on Facebook"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C6.477 2 2 6.145 2 11.243C2 14.054 3.358 16.555 5.5 18.188V22L9.172 19.89C10.088 20.131 11.041 20.257 12 20.257C17.523 20.257 22 16.112 22 11.014C22 5.917 17.523 2 12 2ZM13 14L10 10.5L4.5 14L10.5 7.5L13.5 11L19 7.5L13 14Z"
          fill="white"
        />
      </svg>
    </a>
  );
};

export default FloatingMessenger;