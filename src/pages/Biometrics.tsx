import React from 'react';
import './Biometrics.css';

// Import images (Make sure your paths match your project structure)
import LX50Img from '../assets/biometrics/ZKTeco-LX50-biometrics-fingerprint-reader.png';
import TX628Img from '../assets/biometrics/ZKTeco-TX628-biometrics-fingerprint-reader.png';
import SC700Img from '../assets/biometrics/ZKTeco-SC700-biometrics-rfid-card-scanner.png';
import T8Img from '../assets/biometrics/Granding-Technology-T8-fingerprint-reader-rfid-card-scanner.png';
import FA1000Img from '../assets/biometrics/Granding-Technology-FA1000-rfid-card-scanner-face-recognition.png';
import BK100Img from '../assets/biometrics/ZKTeco-BK100-biometrics-fingerprint-reader-face-recognition.png';
import FA110Img from '../assets/biometrics/Granding-Technology-FA110-fingerprint-reader-face-recognition.png';
import SF200Img from '../assets/biometrics/ZKTeco-SF200-biometrics-fingerprint-reader-rfid-card-scanner.png';
import F22Img from '../assets/biometrics/ZKTeco-F22-biometrics-fingerprint-reader-rfid-card-scanner.png';
import iFace3Img from '../assets/biometrics/ZKTeco-IFACE3-biometrics-fingerprint-reader-rfid-card-scanner-face-recognition.png';
import MB460Img from '../assets/biometrics/ZKTeco-MB460-biometrics-fingerprint-reader-face-recognition.png';
import FA210Img from '../assets/biometrics/ZKTeco-FA210-biometrics-fingerprint-reader-rfid-card-scanner-face-recognition.png';
import XFace100Img from '../assets/biometrics/ZKTeco-XFACE100-biometrics-fingerprint-reader-face-recognition.png';
import UFace800Img from '../assets/biometrics/ZKTeco-UFACE800-biometrics-fingerprint-reader-face-recognition.png';
import MB560VLImg from '../assets/biometrics/ZKTeco-MB560VL-biometrics-fingerprint-reader-face-recognition.png';

interface ProductItem {
  id: string;
  name: string;
  brand: 'ZKTeco' | 'Granding';
  brandClass: 'brand-zkteco' | 'brand-granding';
  badge?: 'Popular' | 'Premium';
  features: string[];
  image: string;
  alt: string;
  description: string;
}

const biometricProducts: ProductItem[] = [
  {
    id: 'lx50',
    name: 'LX50',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['Fingerprint'],
    image: LX50Img,
    alt: 'LX50 Fingerprint Reader',
    description: 'The LX50 is the most budget friendly, fingerprint only, biometric device that we can offer. Good for starting businesses or monitoring on multiple franchises.',
  },
  {
    id: 'tx628',
    name: 'TX628',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['Fingerprint'],
    image: TX628Img,
    alt: 'TX628 Fingerprint Reader',
    description: "The TX628 is technically the same as LX50, but a lot quicker in handling a lot of data, plus six times (6x) the storage of the LX50. If this doesn't convince you to pay a little extra, I don't know what will.",
  },
  {
    id: 'sc700',
    name: 'SC700',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['RFID Card'],
    image: SC700Img,
    alt: 'SC700 RFID Card Scanner',
    description: 'The SC700 is fully tailored to only accept rfid cards, up to an absurd amount of 30,000 users. This is great for companies who requires their ID as attendance.',
  },
  {
    id: 't8',
    name: 'T8',
    brand: 'Granding',
    brandClass: 'brand-granding',
    features: ['Fingerprint', 'RFID Card'],
    image: T8Img,
    alt: 'T8 Fingerprint and RFID Reader',
    description: 'The T8 is the most budget friendly device that offers both fingerprint and rfid card capabilities. It looks like an upgraded version of the LX50 and TX628 line.',
  },
  {
    id: 'fa1000',
    name: 'FA1000',
    brand: 'Granding',
    brandClass: 'brand-granding',
    features: ['RFID Card', 'Face'],
    image: FA1000Img,
    alt: 'FA1000 Face Recognition',
    description: 'The FA1000 has a flat, compact, and modern design that offers rfid card and face recognition functionalities. This is the most budget friendly device for the face recognition line.',
  },
  {
    id: 'bk100',
    name: 'BK100',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['Fingerprint', 'Face'],
    image: BK100Img,
    alt: 'BK100 Face Recognition',
    description: 'The BK100 offers fingerprint and face recognition for up to a thousand users.',
  },
  {
    id: 'fa110',
    name: 'FA110',
    brand: 'Granding',
    brandClass: 'brand-granding',
    badge: 'Popular',
    features: ['Fingerprint', 'Face', 'WiFi'],
    image: FA110Img,
    alt: 'FA110 Face Recognition with WiFi',
    description: 'The FA110 is our most popular device in our product list. It offers the same fingerprint and face capabilities as the BK100, but with wifi.',
  },
  {
    id: 'sf200',
    name: 'SF200',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['Fingerprint', 'RFID Card', 'PIN'],
    image: SF200Img,
    alt: 'SF200 Fingerprint and RFID',
    description: 'The SF200, featuring a vertical design, has both fingerprint and rfid card functionalities, with pin / password support.',
  },
  {
    id: 'f22',
    name: 'F22',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['Fingerprint', 'RFID Card'],
    image: F22Img,
    alt: 'F22 Fingerprint and RFID',
    description: 'The F22 has a small and compact build featuring a touch pad. Same as the SF200, it can handle fingerprint and rfid card inputs at an even more massive scale, at the cost of no pin / password support.',
  },
  {
    id: 'iface3',
    name: 'IFACE3',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['Fingerprint', 'RFID Card', 'Face'],
    image: iFace3Img,
    alt: 'iFace3 Multi-Biometric',
    description: 'The iFace3 can accommodate three biometric data inputs from fingerprints, rfid cards, and face recognition. It has a similar compact design as the F22.',
  },
  {
    id: 'mb460',
    name: 'MB460',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['Fingerprint', 'RFID Card', 'Face'],
    image: MB460Img,
    alt: 'MB460 Multi-Biometric',
    description: 'The MB460 is a cheaper alternative to the iFace3, can scan three types of biometrics at the cost of reducing the amount of maximum users.',
  },
  {
    id: 'fa210',
    name: 'FA210',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['Fingerprint', 'RFID Card', 'Face'],
    image: FA210Img,
    alt: 'FA210 Multi-Biometric',
    description: 'The FA210 has the same specifications of the MB460 with a different design. A special order can be placed to include a wifi option at a price.',
  },
  {
    id: 'xface100',
    name: 'XFACE100',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    badge: 'Premium',
    features: ['Fingerprint', 'Face'],
    image: XFace100Img,
    alt: 'XFace100 Premium Biometric',
    description: 'The XFACE100 is a relatively new high end device primarily used by corporate companies. It offers fingerprint and face recognition inputs with a massive storage count.',
  },
  {
    id: 'uface800',
    name: 'UFACE800',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    badge: 'Premium',
    features: ['Fingerprint', 'Face'],
    image: UFace800Img,
    alt: 'UFace800 Premium Biometric',
    description: "If XFACE100 wasn't already enough, UFACE800 has the capability of XFACE100 but can accommodate even more users. Its high price tag will make sure this modern device will serve you on years to come.",
  },
  {
    id: 'mb560vl',
    name: 'MB560VL',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    badge: 'Premium',
    features: ['Fingerprint', 'RFID Card', 'Face'],
    image: MB560VLImg,
    alt: 'MB560VL Premium Biometric',
    description: "MB560VL is the latest biometric device that handle most of the user's needs. From fingerprint, rfid cards, to face recognition. This is the best biometric device that we can offer for classy corporations.",
  },
];

export const Products: React.FC = () => {
  return (
    <div className="products-page">
      <section className="page-header">
        <span className='eyebrow'>AVAILABLE PRODUCTS</span>
        <h1 className="biometric-main-header">Biometrics Products List</h1>
      </section>

      <section className="biometric-cards-container">
        <div className="product-grid">
          {biometricProducts.map((product) => (
            <a href="/contact-us" key={product.id} className="product-card-link">
              <div className="product-card">
                <div className="product-header">
                  <h4>{product.name}</h4>
                  {product.badge === 'Popular' && <span className="popular-badge">Popular</span>}
                  {product.badge === 'Premium' && <span className="premium-badge">Premium</span>}
                </div>
                <div className="product-img">
                  <img src={product.image} alt={product.alt} />
                  <span className={`brand-badge ${product.brandClass}`}>{product.brand}</span>
                </div>
                <div className="product-features">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="product-desc">
                  <p>{product.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;