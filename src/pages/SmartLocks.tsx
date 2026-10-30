import React from 'react';
import './SmartLocks.css'; // Reuses your product grid & card styling

// Import images (Make sure your file paths match your directory structure)
import A01Img from '../assets/smart-locks/loock-a01-smart-lock.png';
import A02Img from '../assets/smart-locks/loock-a02-smart-lock.png';
import A04Img from '../assets/smart-locks/loock-a04-smart-lock.png';
import A12Img from '../assets/smart-locks/loock-a12-smart-lock.png';
import B02Img from '../assets/smart-locks/loock-b02-smart-lock.png';
import B03Img from '../assets/smart-locks/loock-b03-smart-lock.png';
import B11Img from '../assets/smart-locks/loock-b11-smart-lock.png';
import F03Img from '../assets/smart-locks/loock-f03-smart-lock.png';
import F11Img from '../assets/smart-locks/loock-f11-smart-lock.png';
import F21Img from '../assets/smart-locks/loock-f21-smart-lock.png';
import G01Img from '../assets/smart-locks/loock-g01-smart-lock.png';
import G04Img from '../assets/smart-locks/loock-g04-smart-lock.png';
import G06AImg from '../assets/smart-locks/loock-g06a-smart-lock.png';
import G06BImg from '../assets/smart-locks/loock-g06b-smart-lock.png';
import G24BImg from '../assets/smart-locks/loock-g24b-smart-lock.png';
import S11Img from '../assets/smart-locks/loock-s11-smart-lock.png';
import S12Img from '../assets/smart-locks/loock-s12-smart-lock.png';

interface ProductItem {
  id: string;
  name: string;
  brand: 'ZKTeco' | 'Granding' | 'Loock' | 'Generic';
  brandClass: 'brand-zkteco' | 'brand-granding' | 'brand-loock' | 'brand-generic';
  badge?: 'Popular' | 'Outdoor';
  features: string[];
  image: string;
  alt: string;
  description: string;
}
const smartLockProducts: ProductItem[] = [
  {
    id: 'l-a-01',
    name: 'A-01',
    brand: 'Loock',
    brandClass: 'brand-loock',
    features: ['Pin', 'Card'],
    image: A01Img,
    alt: 'A01 Smart Lock',
    description: 'Deadbolt Type Smartlock',
  },
  {
    id: 'l-a-02',
    name: 'A-02',
    brand: 'Loock',
    brandClass: 'brand-loock',
    features: ['Pin', 'Card', 'Fingerprint'],
    image: A02Img,
    alt: 'A02 Smart Lock',
    description: 'Air BnB Type Smartlock',
  },
  {
    id: 'l-a-04',
    name: 'A-04',
    brand: 'Loock',
    brandClass: 'brand-loock',
    features: ['Pin', 'Card', 'Fingerprint'],
    image: A04Img,
    alt: 'A04 Smart Lock',
    description: 'Air BnB Type Smartlock',
  },
  {
    id: 'l-a-12',
    name: 'A-12',
    brand: 'Loock',
    brandClass: 'brand-loock',
    features: ['Pin', 'Card', 'Fingerprint'],
    image: A12Img,
    alt: 'A12 Smart Lock',
    description: 'Blue Gem Series Air BnB Type Smartlock',
  },
  {
    id: 'l-b-02',
    name: 'B-02',
    brand: 'Loock',
    brandClass: 'brand-loock',
    features: ['Pin', 'Card', 'Fingerprint'],
    image: B02Img,
    alt: 'B02 Smart Lock',
    description: 'Frosted Bedroom Type Smartlock',
  },
  {
    id: 'l-b-03',
    name: 'B-03',
    brand: 'Loock',
    brandClass: 'brand-loock',
    features: ['Pin', 'Fingerprint'],
    image: B03Img,
    alt: 'B03 Smart Lock',
    description: 'Handle Type Bedroom Smartlock',
  },
  {
    id: 'l-f-11',
    name: 'B-11',
    brand: 'Loock',
    brandClass: 'brand-loock',
    features: ['Pin', 'Fingerprint'],
    image: B11Img,
    alt: 'B11 Smart Lock',
    description: 'Bedroom Type Smartlock',
  },
  {
    id: 'l-f-03',
    name: 'F-03',
    brand: 'Loock',
    brandClass: 'brand-loock',
    features: ['Pin', 'Fingerprint', 'Face Recognition'],
    image: F03Img,
    alt: 'F03 Smart Lock',
    description: 'Face Recognition Smartlock',
  },
  {
    id: 'l-f-11',
    name: 'F-11',
    brand: 'Loock',
    brandClass: 'brand-loock',
    features: ['Pin', 'Fingerprint', 'Face Recognition'],
    image: F11Img,
    alt: 'F11 Smart Lock',
    description: 'Face Recognition Smartlock',
  },
  {
    id: 'l-f-21',
    name: 'F-21',
    brand: 'Loock',
    brandClass: 'brand-loock',
    features: ['Pin', 'Fingerprint', 'Face Recognition'],
    image: F21Img,
    alt: 'F21 Smart Lock',
    description: 'Face Recognition Smartlock',
  },
  {
    id: 'l-g-01',
    name: 'G-01',
    brand: 'Loock',
    brandClass: 'brand-loock',
    features: ['Pin', 'Fingerprint'],
    image: G01Img,
    alt: 'G01 Smart Lock',
    description: 'Glass Door Type Smartlock',
  },
  {
    id: 'l-g-04',
    name: 'G-04',
    brand: 'Loock',
    brandClass: 'brand-loock',
    features: ['Pin', 'Fingerprint'],
    image: G04Img,
    alt: 'G04 Smart Lock',
    description: 'Outdoor Type Smartlock',
  },
  {
    id: 'l-g-06-a',
    name: 'G-06A',
    brand: 'Loock',
    brandClass: 'brand-loock',
    features: ['Pin', 'Fingerprint'],
    image: G06AImg,
    alt: 'G06A Smart Lock',
    description: 'Aluminum / Sliding Door Long Handle Smartlock',
  },
  {
    id: 'l-g-06-b',
    name: 'G-06B',
    brand: 'Loock',
    brandClass: 'brand-loock',
    features: ['Pin', 'Fingerprint'],
    image: G06BImg,
    alt: 'G06B Smart Lock',
    description: 'Aluminum / Sliding Door Short Handle Smartlock',
  },
  {
    id: 'l-g-24-b',
    name: 'G-24B',
    brand: 'Loock',
    brandClass: 'brand-loock',
    features: ['Pin', 'Fingerprint'],
    image: G24BImg,
    alt: 'G24B Smart Lock',
    description: 'Face Recognition Smartlock',
  },
  {
    id: 'l-s-11',
    name: 'S-11',
    brand: 'Loock',
    brandClass: 'brand-loock',
    features: ['Pin', 'Card'],
    image: S11Img,
    alt: 'S11 Smart Lock',
    description: 'Stainless Steel Smartlock for Condominiums',
  },
  {
    id: 'l-s-12',
    name: 'S-12',
    brand: 'Loock',
    brandClass: 'brand-loock',
    features: ['Pin', 'Card', 'Fingerprint'],
    image: S12Img,
    alt: 'S12 Smart Lock',
    description: 'Stainless Steel Smartlock for Condominiums with Fingerprint',
  },
];

export const SmartLock: React.FC = () => {
  return (
    <div className="products-page">
      <section className="page-header">
        <span className='eyebrow'>AVAILABLE PRODUCTS</span>
        <h1 className="biometric-main-header">Smart Lock Products List</h1>
      </section>

      <section className="door-access-cards-container">
        <div className="product-grid">
          {smartLockProducts.map((product) => (
            <a href="/contact-us" key={product.id} className="product-card-link">
              <div className="product-card">
                <div className="product-header">
                  <h4>{product.name}</h4>
                  {product.badge === 'Popular' && <span className="popular-badge">Popular</span>}
                  {product.badge === 'Outdoor' && <span className="premium-badge">Outdoor</span>}
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

export default SmartLock;