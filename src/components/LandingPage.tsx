import React, { useState } from 'react';
import './LandingPage.css';
import ZktecoLogo from '../assets/logos/zkteco.png';
import GrandingLogo from '../assets/logos/granding.png';
import LoockLogo from '../assets/logos/loock.png';
import DahuaLogo from '../assets/logos/dahua.png';
import HikvisionLogo from '../assets/logos/hikvision.png';
import HitiLogo from '../assets/logos/hiti.png';
import HeroVid from '../assets/videos/herovid.mp4';

interface BenefitItem {
  id: string;
  label: string;
  image: string;
  bgImage: string;
  text: React.ReactNode;
}

const benefitData: BenefitItem[] = [
  {
    id: 'warranty',
    label: 'Warranty',
    image: '/images/benefits/warranty.png',
    bgImage: '/images/backgrounds/biometricbackground.png',
    text: (
      <>
        Up to <b>3 years warranty</b> lets you worry about everything else but the device.
      </>
    ),
  },
  {
    id: 'support',
    label: 'Support',
    image: '/images/benefits/aftersalessupport.png',
    bgImage: '/images/backgrounds/aftersalessupportbackground.png',
    text: (
      <>
        After sales support is <b>always open</b> for our clients for free.
      </>
    ),
  },
  {
    id: 'orientation',
    label: 'Orientation',
    image: '/images/benefits/virtualuserorientation.png',
    bgImage: '/images/backgrounds/virtualuserorientationbackground.png',
    text: (
      <>
        User Orientation for <b>"How to use"</b> the device is <b>free</b> after purchase.
      </>
    ),
  },
  {
    id: 'delivery',
    label: 'Delivery',
    image: '/images/benefits/freedelivery.png',
    bgImage: '/images/backgrounds/deliverybackground.png',
    text: (
      <>
        <b>Free</b> delivery for purchases above 10,000php within <b>Metro Manila.</b>
      </>
    ),
  },
];

export const LandingPage: React.FC = () => {
  const [activeBenefit, setActiveBenefit] = useState<BenefitItem>(benefitData[0]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-container" id="hero">
        <div className="hero-container-o">
          <div className="hero-content">
            <h1>Complete Security Solutions for Modern Workplaces & Homes</h1>
            <p>
              From smart door access to CCTV and walkthrough scanners—get reliable, end-to-end security hardware tailored to your space.
            </p>
            <div className="hero-buttons">
              <a href="/contact-us">Get a Quote</a>
              <a
                href="https://www.facebook.com/profile.php?id=61551208128036"
                target="_blank"
                rel="noopener noreferrer"
              >
                Our Page
              </a>
            </div>
          </div>
          <div className="hero-video">
            <video
              src={HeroVid}
              autoPlay
              loop
              muted
              playsInline
              width="100%"
            />
          </div>
        </div>
      </section>

      {/* Dynamic Benefits Section */}
      <section
        id="backgroundSection"
        className="benefits-container"
        style={{ backgroundImage: `url(${activeBenefit.bgImage})` }}
      >
        <div className="benefits-card">
          <div className="benefits-image">
            <img
              id="benefitsImage"
              src={activeBenefit.image}
              alt={activeBenefit.label}
            />
          </div>
          <div className="benefits-buttons">
            {benefitData.map((item) => (
              <button
                key={item.id}
                className={`benefits-btn ${activeBenefit.id === item.id ? 'active' : ''}`}
                onClick={() => setActiveBenefit(item)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="benefits-text">
            <p id="benefitsText">{activeBenefit.text}</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-container">
        <div className="why-choose-us">
          <div className="why-choose-us-header">
            <span>WHY CHOOSE US</span>
            <p>Expertise you can measure and trust.</p>
          </div>
          <div className="why-choose-us-text">
            <p>
              We don't just ship hardware. We architect complete biometric ecosystems — from procurement and integration to long-term maintenance and compliance support.
            </p>
          </div>
        </div>

        <div className="why-choose-us-cards">
          <div className="why-choose-us-cards-div">
            <div
              className="w-12 h-12 rounded-sm flex items-center justify-center mb-6"
              style={{
                background: 'rgb(232, 240, 255)',
                color: 'rgb(0, 82, 204)',
                padding: '12px',
                alignItems: 'center',
                borderRadius: '0.5rem',
                width: 'fit-content',
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M14 3L4 8v7c0 5.5 4.3 10.6 10 12 5.7-1.4 10-6.5 10-12V8L14 3z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 14l3 3 5-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Industry Experience</h3>
            <p>
              Over 15 years deploying biometric systems across government, healthcare, finance, and manufacturing. Our engineers are certified across every major platform.
            </p>
          </div>

          <div className="why-choose-us-cards-div">
            <div
              className="w-12 h-12 rounded-sm flex items-center justify-center mb-6"
              style={{
                background: 'rgba(39, 241, 15, 0.133)',
                color: 'rgb(39, 241, 15)',
                padding: '12px',
                alignItems: 'center',
                borderRadius: '0.5rem',
                width: 'fit-content'
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="4" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9 8V6a5 5 0 0110 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="14" cy="16" r="2" fill="currentColor" />
                <path d="M14 18v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Up to 3-Years Warranty</h3>
            <p>
              Every device we sell is covered by our comprehensive warranty program — up to 3 years on select models. On-site replacement, zero downtime guarantee.
            </p>
          </div>

          <div className="why-choose-us-cards-div">
            <div
              className="w-12 h-12 rounded-sm flex items-center justify-center mb-6"
              style={{
                background: 'rgb(232, 240, 255)',
                color: 'rgb(0, 82, 204)',
                padding: '12px',
                alignItems: 'center',
                borderRadius: '0.5rem',
                width: 'fit-content'
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M5 24c0-4.4 4-8 9-8s9 3.6 9 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M19 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Dedicated Support</h3>
            <p>
              Dedicated account managers, 24/7 technical support, and on-site field engineers available nationwide. We are there before, during, and after installation.
            </p>
          </div>
        </div>

        <div className="why-choose-us-warranty">
          <div className="why-choose-us-group">
            <div className="why-choose-us-warranty-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 3L4 8v7c0 5.5 4.3 10.6 10 12 5.7-1.4 10-6.5 10-12V8L14 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M10 14l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="why-choose-us-warranty-text">
              <p>Comprehensive Warranty Coverage</p>
              <p>18 Months Standard for Basic Devices · Up to 36 Months Premium Coverage</p>
            </div>
          </div>
          <a href="/contact-us">Ask About Warranty</a>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-container" id="clients">
        <div className="trusted-by-organizations">
          <span>TRUSTED BY</span>
          <p>Organizations that rely on our devices.</p>
          <p>
            From healthcare facilities and financial institutions to government agencies and manufacturing plants — our clients demand the highest standard of security.
          </p>
        </div>

        <div className="infinite-scroll">
          <div className="scroll-content" id="scrollContent">
            <img src="/images/clients/joyride.png" alt="Joyride" />
            <img src="/images/clients/idealvision.png" alt="Ideal Vision" />
            <img src="/images/clients/microsourcing.png" alt="Microsourcing" />
            <img src="/images/clients/puyatsteel.jpg" alt="Puyat Steel" />
            <img src="/images/clients/aub.png" alt="AUB" />
            <img src="/images/clients/salesrain.png" alt="Salesrain" />
            <img src="/images/clients/mrkimbob.png" alt="Mr. Kimbob" />
            <img src="/images/clients/andoks.png" alt="Andoks" />
            <img src="/images/clients/sbarro.png" alt="Sbarro" />
            <img src="/images/clients/savers.png" alt="Savers" />
            <img src="/images/clients/joynostalg.png" alt="Joy Nostalg" />
          </div>
        </div>

        <div className="trusted-by-over">
          <p>Trusted by over</p>
          <p>200+ Organizations</p>
          <p>across 30+ industries worldwide</p>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="trusted-brands-container">
        <div className="trusted-brands">
          <div className="trusted-brands-header">
            <div className="trusted-brands-header-left">
              <span>OUR PORTFOLIO</span>
              <h2>
                The world's leading brands for <span>security.</span>
              </h2>
            </div>
            <div className="trusted-brands-header-right">
              <p>
                We are authorized distributors for the top biometric hardware manufacturers. Every device is genuine, warranty-backed, and fully supported by our local team.
              </p>
            </div>
          </div>

          <div className="trusted-brands-grid">
            <div className="card">
              <div className="trusted-brands-card-logo">
                <img src={ZktecoLogo} alt="ZKTeco" />
              </div>
              <p className="trusted-brands-card-p1">ZKTeco</p>
              <p className="trusted-brands-card-p2">Biometric Solutions</p>
              <p className="trusted-brands-card-p3">
                Leading manufacturer of fingerprint terminals and facial recognition access control.
              </p>
            </div>

            <div className="card">
              <div className="trusted-brands-card-logo">
                <img src={GrandingLogo} alt="Granding" />
              </div>
              <p className="trusted-brands-card-p1">Granding Technology</p>
              <p className="trusted-brands-card-p2">Biometrics Solutions</p>
              <p className="trusted-brands-card-p3">
                Specialized manufacturer that features their own reliable biometrics lineup.
              </p>
            </div>

            <div className="card">
              <div className="trusted-brands-card-logo">
                <img src={DahuaLogo} alt="Dahua" />
              </div>
              <p className="trusted-brands-card-p1">Dahua</p>
              <p className="trusted-brands-card-p2">CCTV</p>
              <p className="trusted-brands-card-p3">
                The world-leading video-centric AIoT solution and service provider.
              </p>
            </div>

            <div className="card">
              <div className="trusted-brands-card-logo">
                <img src={HikvisionLogo} alt="Hikvision" />
              </div>
              <p className="trusted-brands-card-p1">Hikvision</p>
              <p className="trusted-brands-card-p2">CCTV</p>
              <p className="trusted-brands-card-p3">
                Provides top-of-the-line AIoT solutions and reliable security camera systems.
              </p>
            </div>

            <div className="card">
              <div className="trusted-brands-card-logo">
                <img src={LoockLogo} alt="LOOCK" />
              </div>
              <p className="trusted-brands-card-p1">LOOCK</p>
              <p className="trusted-brands-card-p2">Smart Lock</p>
              <p className="trusted-brands-card-p3">
                Philippines leading smart entry supplier, trusted through millions of usage experiences.
              </p>
            </div>

            <div className="card">
              <div className="trusted-brands-card-logo">
                <img src={HitiLogo} alt="HiTi" />
              </div>
              <p className="trusted-brands-card-p1">Hiti</p>
              <p className="trusted-brands-card-p2">RFID Printer</p>
              <p className="trusted-brands-card-p3">
                First choice, by over 100,000 studios and 2 million photographers worldwide.
              </p>
            </div>
          </div>

          <div className="trusted-brands-end">
            <div>
              <p className="trusted-brands-end-p1">Don't see your preferred brand?</p>
              <p className="trusted-brands-end-p2">
                We work with 30+ manufacturers. Contact us and we'll source the device you need.
              </p>
            </div>
            <a className="trusted-brands-end-a" href="/contact-us">
              <p>Contact Our Team</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;