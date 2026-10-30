import React from 'react';
import './AboutUs.css';

import AboutUsHero from '../assets/images/aboutushero.jpg'
import CoreValues from '../assets/images/corevalues.jpg'


export const AboutUs: React.FC = () => {
  return (
    <div className="about-us-page">
      {/* About Us Hero Section */}
      <section className="about-us-header">
        <div className="about-us-container-o">
          <div className="about-us-content">
            <h1>
              Security <span className="highlight">Done Right.</span>
            </h1>
            <p>
              From Door Access Controls to Metal Walkthroughs and Beyond—We've Got You Covered.
            </p>
            <div className="about-buttons">
              <a className="who-we-are-btn" href="#core-values">
                <p>Who We Are</p>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 12h14m-5-5 5 5-5 5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="about-img">
            <img src={AboutUsHero} alt="Techfinity Security Hardware" width="100%" />
          </div>
        </div>

        {/* Key Metrics / Stats Bar */}
        <div className="about-us-stats gray-card">
          <div className="stats-item">
            <p className="stats-number">200+</p>
            <p className="stats-label">PROJECTS LAUNCHED</p>
          </div>
          <div className="stats-item">
            <p className="stats-number">50+</p>
            <p className="stats-label">REPEAT ORDERS</p>
          </div>
          <div className="stats-item">
            <p className="stats-number">30+</p>
            <p className="stats-label">BIDDINGS WON</p>
          </div>
          <div className="stats-item">
            <p className="stats-number">50+</p>
            <p className="stats-label">CLIENT REFERRALS</p>
          </div>
        </div>
      </section>

      {/* Core Values & Mission Section */}
      <section className="core-values-container" id="core-values">
        <div className="core-values-container-o">
          <div className="about-img">
            <img src={CoreValues} alt="Techfinity Core Values" width="100%" />
          </div>
          <div className="about-content">
            <h2 className="values-container-o-h1">
              Technology Solutions for a <span className="highlight-2">Safer Tomorrow.</span>
            </h2>
            <p>
              At <b>Techfinity Security Device Trading</b>, we believe that security should be smart, seamless, and accessible. As a trusted provider of Electronic Identification and Security Solutions in the Philippines, we empower businesses to protect what matters most.
            </p>
          </div>
        </div>

        <div className="values-container-o">
          <div>
            <h2 className="values-container-o-h1">Values that show up in work.</h2>
          </div>
          <div>
            <p>
              Our values are as tight-proof as our security solutions. They're the standards we use to make decisions, build relationships, and hold ourselves accountable.
            </p>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="about-us-stats gray-card">
          <div className="stats-item">
            <div className="stats-item-icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <p className="core-number">Client First</p>
            <p className="stats-label">We will adjust and cater the client's requirements for the best possible service.</p>
          </div>
          <div className="stats-item">
            <div className="stats-item-icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <p className="core-number">Polished</p>
            <p className="stats-label">We take pride in delivering high-quality solutions that exceed our clients' expectations.</p>
          </div>
          <div className="stats-item">
            <div className="stats-item-icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <p className="core-number">Transparency</p>
            <p className="stats-label">We are committed to bring the best products to our clients showcasing the via meetings and demonstrations.</p>
          </div>
          <div className="stats-item">
            <div className="stats-item-icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                <path d="M21 16v2a3 3 0 0 1-3 3h-1" />
              </svg>
            </div>
            <p className="core-number">Support</p>
            <p className="stats-label">We provide reliable support to our clients throughout their journey with our products and services</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;