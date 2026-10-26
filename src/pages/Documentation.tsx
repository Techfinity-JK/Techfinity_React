import React, { useState } from 'react';
import './Documentation.css';
import SampleQR from '../assets/sample/sampleqr.png'

// Types for data structures
interface QRAction {
  id: string;
  label: string;
  emoji: string;
  qrImageUrl: string;
  videoUrl: string;
}

interface ProductDocumentation {
  id: string;
  model: string;
  description: string;
  actions: QRAction[];
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Sample Data Array - Add or edit product documentation items here
const PRODUCTS_DATA: ProductDocumentation[] = [
  {
    id: 'm06',
    model: 'M06',
    description: 'Pin & RFID Card Access Controller',
    actions: [
      { id: 'm06-troubleshoot', label: 'TROUBLESHOOT', emoji: '🔧', qrImageUrl: SampleQR, videoUrl: 'https://www.youtube.com/watch?v=example' },
      { id: 'm06-enrollment', label: 'ENROLLMENT', emoji: '👤', qrImageUrl: SampleQR, videoUrl: 'https://www.youtube.com/watch?v=example' },
      { id: 'm06-setup', label: 'QUICK SETUP', emoji: '⚡', qrImageUrl: SampleQR, videoUrl: 'https://www.youtube.com/watch?v=example' },
      { id: 'm06-manual', label: 'USER MANUAL', emoji: '📖', qrImageUrl: SampleQR, videoUrl: 'https://www.youtube.com/watch?v=example' },
    ],
  },
  {
    id: 'x6',
    model: 'X6',
    description: 'Fingerprint & RFID Card Access Controller',
    actions: [
      { id: 'x6-troubleshoot', label: 'TROUBLESHOOT', emoji: '🔧', qrImageUrl: SampleQR, videoUrl: 'https://www.youtube.com/watch?v=example' },
      { id: 'x6-enrollment', label: 'ENROLLMENT', emoji: '👤', qrImageUrl: SampleQR, videoUrl: 'https://www.youtube.com/watch?v=example' },
      { id: 'x6-setup', label: 'QUICK SETUP', emoji: '⚡', qrImageUrl: SampleQR, videoUrl: 'https://www.youtube.com/watch?v=example' },
      { id: 'x6-manual', label: 'USER MANUAL', emoji: '📖', qrImageUrl: SampleQR, videoUrl: 'https://www.youtube.com/watch?v=example' },
    ],
  },
  {
    id: 'lx50',
    model: 'LX50',
    description: 'Fingerprint Only Biometrics',
    actions: [
      { id: 'lx50-troubleshoot', label: 'TROUBLESHOOT', emoji: '🔧', qrImageUrl: SampleQR, videoUrl: 'https://www.youtube.com/watch?v=example' },
      { id: 'lx50-enrollment', label: 'ENROLLMENT', emoji: '👤', qrImageUrl: SampleQR, videoUrl: 'https://www.youtube.com/watch?v=example' },
      { id: 'lx50-setup', label: 'QUICK SETUP', emoji: '⚡', qrImageUrl: SampleQR, videoUrl: 'https://www.youtube.com/watch?v=example' },
      { id: 'lx50-manual', label: 'USER MANUAL', emoji: '📖', qrImageUrl: SampleQR, videoUrl: 'https://www.youtube.com/watch?v=example' },
    ],
  },
];

const FAQS_DATA: FAQItem[] = [
  {
    id: 1,
    question: 'How do I reset my device to factory settings?',
    answer: 'Navigate to the device Settings menu → System → Factory Reset. You will be prompted for the admin PIN before proceeding. Scan the relevant QR code above for a step-by-step video guide.',
  },
  {
    id: 2,
    question: 'Why is my fingerprint not being recognized?',
    answer: 'Ensure the sensor is clean and dry. Re-enroll the fingerprint under optimal conditions — use the Enrollment tutorial QR above. Poor lighting or excess moisture are the most common causes of recognition failure.',
  },
  {
    id: 3,
    question: 'How many users can be enrolled on the device?',
    answer: 'The M06 supports up to 3,000 fingerprints, the X6 supports up to 10,000 face templates, and the LX50 supports up to 5,000 multi-biometric records. Contact support for enterprise capacity options.',
  },
  {
    id: 4,
    question: 'Can I integrate the device with third-party software?',
    answer: 'Yes. All devices support Wiegand output and TCP/IP connectivity. SDK documentation and integration guides are available upon request from our technical support team.',
  },
  {
    id: 5,
    question: 'What do I do if the device display shows an error code?',
    answer: 'Scan the Troubleshoot QR code for your specific device model above. The linked video walks through all common error codes. For unlisted codes, contact our support line with your device serial number.',
  },
];

export const DocumentationPage: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleCopyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="documentation-container">
      {/* Hero Section */}
      <section className="demo-hero">
        <div className="header-chip">
          <p>Video Tutorial Hub</p>
        </div>
        <h1>Documentation Archives</h1>
        <p className="demo-hero-p">Scan any QR code with your phone camera to instantly open the corresponding YouTube tutorial for your device — no typing required.</p>
      </section>

      {/* Sub Header */}
      <section className="demo-sub gray-card">
        <div className="supported-products">
          <p>Supported Products:</p>
          <p>{PRODUCTS_DATA.length} models</p>
        </div>
      </section>

      {/* Products & QR Cards Section */}
      <section className="productsQR-section">
        {PRODUCTS_DATA.map((product) => (
          <div key={product.id} className="productQR-card">
            <div className="productQR-top">
              <div className="productQR-text">
                <p>{product.model}</p>
                <p>{product.description}</p>
              </div>
            </div>
            <div className="productQR-bottom">
              {product.actions.map((action) => (
                <div key={action.id} className="productQR-bottom-card">
                  <div className="emoji-bg">
                    <span role="img" aria-label={action.label}>{action.emoji}</span>
                  </div>
                  <p>{action.label}</p>
                  <div className="qr-div">
                    <img src={action.qrImageUrl} alt={`${product.model} ${action.label} QR`} />
                  </div>
                  <div>
                    <button 
                      className="open-button" 
                      onClick={() => handleCopyLink(action.videoUrl)}
                    >
                      {copiedUrl === action.videoUrl ? 'Copied Link!' : 'Open Video'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="demo-faq">
        <div className="faq-container">
          <div className="demo-text">
            <h2>Frequently Asked Questions</h2>
            <p className="faq-p-main">Common issues and answers for all device models.</p>
          </div>
          <div className="faq-button-container">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openFaqId === faq.id;
              const isLast = index === FAQS_DATA.length - 1;

              return (
                <div 
                  key={faq.id} 
                  className={isLast ? 'faq-button-wrapper-no-border' : 'faq-button-wrapper'}
                >
                  <button 
                    className={`faq-button ${isOpen ? 'active' : ''}`}
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <span className="plus-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  <div className={`info-content ${isOpen ? 'show' : 'hidden'}`}>
                    <p className="faq-p">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentationPage;