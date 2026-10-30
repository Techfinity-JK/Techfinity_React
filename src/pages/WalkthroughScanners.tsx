import React from 'react';
import './WalkthroughScanners.css'; // Reuses your product grid & card styling

// Import images (Make sure your file paths match your directory structure)
import D1090Img from '../assets/walkthrough/zkteco-d1090-walkthrough-scanner-9-zones.png';
import D2180Img from '../assets/walkthrough/zkteco-d2180-walkthrough-scanner-18-zones.png';
import MD5000Img from '../assets/walkthrough/zkteco-md5000-walkthrough-scanner-33-zones.png';

interface ProductItem {
  id: string;
  name: string;
  brand: 'ZKTeco' | 'Granding' | 'Generic';
  brandClass: 'brand-zkteco' | 'brand-granding' | 'brand-generic';
  badge?: 'Popular' | 'Outdoor';
  features: string[];
  image: string;
  alt: string;
  description: string;
}
const walkthroughScannerProducts: ProductItem[] = [
  {
    id: 'zk-d1090',
    name: 'ZK-D1090',
    brand: 'ZKTeco',
    brandClass: 'brand-generic',
    features: ['9 Detection Zones'],
    image: D1090Img,
    alt: 'D1090 Walkthrough Scanner',
    description: 'A cost effective 9-zone walk through metal detector, ideal for ensuring human security in schools, public venues, and corporate entrances.',
  },
  {
    id: 'zk-d2180',
    name: 'ZK-D2180',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['18 Detection Zones'],
    image: D2180Img,
    alt: 'D2180 Walkthrough Scanner',
    description: 'An upgraded walk through metal detector with 18 detection zones, a much more pinpoint accuracy in ensuring security of targeting hidden contrabands',
  },
  {
    id: 'zk-md5000',
    name: 'ZK-MD5000',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['33 Detection Zones'],
    image: MD5000Img,
    alt: 'MD5000 Walkthrough Scanner',
    description: 'A high accuracy 33 detection zone metal walkthrough, a must need investment for establishments requiring top security for their private spaces',
  },
];

export const walkthroughScanner: React.FC = () => {
  return (
    <div className="products-page">
      <section className="page-header">
        <span className='eyebrow'>AVAILABLE PRODUCTS</span>
        <h1 className="biometric-main-header">Walkthrough Scanner Products List</h1>
      </section>

      <section className="door-access-cards-container">
        <div className="product-grid">
          {walkthroughScannerProducts.map((product) => (
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

export default walkthroughScanner;