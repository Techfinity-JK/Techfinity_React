import React from 'react';
import './Biometrics.css'; // Reuses your product grid & card styling

// Import images (Make sure your file paths match your directory structure)
import M06Img from '../assets/biometrics/M06-rfid-card-scanner-pin-password.png';
import X6Img from '../assets/biometrics/ZKTeco-X6-biometrics-fingerprint-reader-rfid-card-scanner-pin-password.png';
import SC700Img from '../assets/biometrics/ZKTeco-SC700-biometrics-rfid-card-scanner.png';
import F04Img from '../assets/biometrics/Granding-Technology-F04-fingerprint-reader-rfid-card-scanner.png';
import SF200Img from '../assets/biometrics/ZKTeco-SF200-biometrics-fingerprint-reader-rfid-card-scanner.png';
import F22Img from '../assets/biometrics/ZKTeco-F22-biometrics-fingerprint-reader-rfid-card-scanner.png';
import TF1700Img from '../assets/biometrics/ZKTeco-TF1700-biometrics-fingerprint-reader-rfid-card-scanner-pin-password.png';
import iFace3Img from '../assets/biometrics/ZKTeco-IFACE3-biometrics-fingerprint-reader-rfid-card-scanner-face-recognition.png';
import FA210Img from '../assets/biometrics/ZKTeco-FA210-biometrics-fingerprint-reader-rfid-card-scanner-face-recognition.png';

import AL280Img from '../assets/door-access/ZKTeco-Electromagnetic-lock-AL280.png';
import AL280PZImg from '../assets/door-access/ZKTeco-Z&L-bracket-AL-280-PZ-PL.png';
import UBracketImg from '../assets/door-access/ZKTeco-U-Bracket-LMB-280U.png';
import DropboltDoubleImg from '../assets/door-access/Drop-bolt-lock-double-door-swing.png';
import DropboltUBracketImg from '../assets/door-access/Aluminum-U-bracket-for-bolt.png';
import DropboltFramelessImg from '../assets/door-access/Drop-bolt-lock-for-fully-framless-door.png';

import ExitButtonSquareImg from '../assets/door-access/Door-Exit-Metal-Square.png';
import EmergencyKeySwitchImg from '../assets/door-access/Emergency-Key-Switch.png';
import SmallPushButtonImg from '../assets/door-access/small-push-button-for-reception.png';
import SlimPushButtonImg from '../assets/door-access/Slim-push-button-for-reception.png';
import WirelessRemoteImg from '../assets/door-access/Wireless-remote.png';

import RPSImg from '../assets/door-access/Regulated-Power-Supply.png';
import RPSBatteryImg from '../assets/door-access/Regulated-Power-Supply-With-Backup-Battery.png';
import EBGImg from '../assets/door-access/Emergency-Break-Glass.png';
import LeadAcidBatteryImg from '../assets/door-access/Hitachi-lead-acid-battery.png';

import DoorBuzzerImg from '../assets/door-access/Door-buzzer.png';
import RfidCard125Img from '../assets/door-access/rfid-card-125-khz.png';
import TempDetectionImg from '../assets/door-access/ZKTeco-temperature-detection-module.jpg';
import FR1200Img from '../assets/door-access/ZKTeco-Granding-Fr1200-Slave-Device.png';

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

const doorAccessProducts: ProductItem[] = [
  {
    id: 'm06',
    name: 'M06',
    brand: 'Generic',
    brandClass: 'brand-generic',
    features: ['RFID Card', 'PIN'],
    image: M06Img,
    alt: 'M06 RFID Card Scanner',
    description: 'The M06 device has a compact design suited for modern door access. Built with rfid card and password/pin capabilities, it provides a straightforward functionality without the use of logs/timekeeping.',
  },
  {
    id: 'x6',
    name: 'X6',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['Fingerprint', 'RFID Card', 'PIN'],
    image: X6Img,
    alt: 'X6 Fingerprint Reader',
    description: 'The X6 offers the most budget friendly door access using multiple inputs including fingerprint, rfid card, and password/pin. Still does not have logs/timekeeping.',
  },
  {
    id: 'sc700',
    name: 'SC700',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['RFID Card'],
    image: SC700Img,
    alt: 'SC700 RFID Card Scanner',
    description: 'The SC700 is fully tailored to only accept rfid cards, up to an absurd amount of 30,000 users. This is great for companies who requires their ID as a requirement to open.',
  },
  {
    id: 'f04',
    name: 'F04',
    brand: 'Granding',
    brandClass: 'brand-granding',
    badge: 'Popular',
    features: ['Fingerprint', 'RFID Card'],
    image: F04Img,
    alt: 'F04 Fingerprint Reader',
    description: 'The F04 offers a sleek touchscreen design with fingerprint and rfid card functions. This is a great choice for gyms and membership businesses with its expiration feature.',
  },
  {
    id: 'sf200',
    name: 'SF200',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['Fingerprint', 'RFID Card', 'PIN'],
    image: SF200Img,
    alt: 'SF200 Fingerprint Reader',
    description: 'The SF200, featuring a vertical design, has both fingerprint and rfid card functionalities, with pin / password support.',
  },
  {
    id: 'f22',
    name: 'F22',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['Fingerprint', 'RFID Card'],
    image: F22Img,
    alt: 'F22 Fingerprint Reader',
    description: 'The F22 has a small and compact build featuring a touch pad. Same as the SF200, it can handle fingerprint and rfid card inputs at an even more massive scale, at the cost of no pin / password support.',
  },
  {
    id: 'tf1700',
    name: 'TF1700',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    badge: 'Outdoor',
    features: ['Fingerprint', 'RFID Card', 'PIN', 'Waterproof'],
    image: TF1700Img,
    alt: 'TF1700 Waterproof Reader',
    description: 'Waterproof, the TF1700 is a robust device that can handle harsh outside weather. It can handle fingerprint, rfid card, and password/pin.',
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
    id: 'al-280',
    name: 'AL-280',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['Magnetic Lock'],
    image: AL280Img,
    alt: 'AL-280 Magnetic Lock',
    description: 'The AL-280 is the most common magnetic lock used for most door access applications.',
  },
  {
    id: 'al-280pz-pl',
    name: 'AL-280PZ/PL',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['Bracket'],
    image: AL280PZImg,
    alt: 'AL-280 Z&L Bracket',
    description: 'The AL-280PZ/PL is the bracket needed for AL-280 magnetic lock.',
  },
  {
    id: 'u-bracket',
    name: 'U-bracket',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['Bracket', 'Glass Door'],
    image: UBracketImg,
    alt: 'U-Bracket for Glass Doors',
    description: 'U Bracket is used for frameless glass doors.',
  },
  {
    id: 'dropbolt-lz',
    name: 'Dropbolt + L&Z',
    brand: 'Generic',
    brandClass: 'brand-generic',
    features: ['Dropbolt', 'Bracket'],
    image: DropboltDoubleImg,
    alt: 'Dropbolt with Bracket',
    description: 'Dropbolt with L&Z bracket for double door swing applications.',
  },
  {
    id: 'dropbolt-u',
    name: 'Dropbolt U-bracket',
    brand: 'Generic',
    brandClass: 'brand-generic',
    features: ['Bracket', 'Aluminum'],
    image: DropboltUBracketImg,
    alt: 'Aluminum U-bracket',
    description: 'Aluminum U-bracket for mortised dropbolt installations.',
  },
  {
    id: 'dropbolt-lock',
    name: 'Dropbolt Lock',
    brand: 'Generic',
    brandClass: 'brand-generic',
    features: ['Dropbolt', 'Glass Door'],
    image: DropboltFramelessImg,
    alt: 'Frameless Door Dropbolt',
    description: 'This dropbolt lock is built specifically for fully frameless glass doors with flat glass walls.',
  },
  {
    id: 'exit-square',
    name: 'Exit Button Square',
    brand: 'Generic',
    brandClass: 'brand-generic',
    features: ['Exit Button'],
    image: ExitButtonSquareImg,
    alt: 'Door Exit Button',
    description: 'The most cost effective, standard push button for door exit. Perfect for non-double sided biometric verifications.',
  },
  {
    id: 'emergency-key',
    name: 'Emergency Key Switch',
    brand: 'Generic',
    brandClass: 'brand-generic',
    features: ['Emergency', 'Key Switch'],
    image: EmergencyKeySwitchImg,
    alt: 'Emergency Key Switch',
    description: 'As mentioned in the name, this switch is only used for manual override of the magnetic lock for emergencies and maintenance.',
  },
  {
    id: 'small-push-button',
    name: 'Small Push Button',
    brand: 'Generic',
    brandClass: 'brand-generic',
    features: ['Push Button', 'Reception'],
    image: SmallPushButtonImg,
    alt: 'Small Push Button',
    description: 'Standard quality slim push button used at reception counters.',
  },
  {
    id: 'slim-push-button',
    name: 'Slim Push Button',
    brand: 'Generic',
    brandClass: 'brand-generic',
    features: ['Push Button', 'Metal'],
    image: SlimPushButtonImg,
    alt: 'Slim Metal Push Button',
    description: 'Upgraded metal small push button designed to be long lasting for reception counters.',
  },
  {
    id: 'wireless-remote',
    name: 'Wireless Remote',
    brand: 'Generic',
    brandClass: 'brand-generic',
    features: ['Wireless', 'Remote'],
    image: WirelessRemoteImg,
    alt: 'Wireless Remote Control',
    description: 'Skip the wiring with the hassle free connection and unlock the door with the wireless remote.',
  },
  {
    id: 'rps',
    name: 'RPS',
    brand: 'Generic',
    brandClass: 'brand-generic',
    features: ['Power Supply', '12V 10A'],
    image: RPSImg,
    alt: 'Regulated Power Supply',
    description: 'Standard Regulated Power Supply. 12V, 10A maximum.',
  },
  {
    id: 'rps-battery',
    name: 'RPS w/battery',
    brand: 'Generic',
    brandClass: 'brand-generic',
    features: ['Power Supply', 'Backup'],
    image: RPSBatteryImg,
    alt: 'Power Supply with Battery',
    description: 'Standard Regulated Power Supply with backup battery. Comes with enclosure for outdoor protection. 12V, 10A maximum.',
  },
  {
    id: 'ebg',
    name: 'EBG',
    brand: 'Generic',
    brandClass: 'brand-generic',
    features: ['Emergency', 'Fire Code'],
    image: EBGImg,
    alt: 'Emergency Break Glass',
    description: 'Standard emergency break glass required by local fire codes and national electrical codes (NFPA, NEC, Philippine Electrical Code, etc.).',
  },
  {
    id: 'lead-acid-battery',
    name: 'Lead Acid Battery',
    brand: 'Generic',
    brandClass: 'brand-generic',
    features: ['Battery', 'Backup'],
    image: LeadAcidBatteryImg,
    alt: 'Lead Acid Battery',
    description: 'Backup lead acid battery for door access systems.',
  },
  {
    id: 'door-buzzer',
    name: 'Door Buzzer',
    brand: 'Generic',
    brandClass: 'brand-generic',
    features: ['Buzzer', 'Alert'],
    image: DoorBuzzerImg,
    alt: 'Door Buzzer',
    description: 'Door buzzer for audible alerts when doors are accessed.',
  },
  {
    id: 'rfid-card-125',
    name: 'RFID Card 125khz',
    brand: 'Generic',
    brandClass: 'brand-generic',
    features: ['RFID Card', '125kHz'],
    image: RfidCard125Img,
    alt: 'RFID Card',
    description: 'Extra RFID Card for door access systems.',
  },
  {
    id: 'temp-detection',
    name: 'Temp Detection',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['Temperature', 'Module'],
    image: TempDetectionImg,
    alt: 'Temperature Detection Module',
    description: 'Popular during the pandemic days, this device records temperatures suited for the FA210 device.',
  },
  {
    id: 'fr1200',
    name: 'FR1200',
    brand: 'ZKTeco',
    brandClass: 'brand-zkteco',
    features: ['Fingerprint', 'RFID Card', 'Extension'],
    image: FR1200Img,
    alt: 'FR1200 Slave Device',
    description: 'The FR1200 is a fingerprint and rfid card scanner extension for the F22 device.',
  },
];

export const DoorAccess: React.FC = () => {
  return (
    <div className="products-page">
      <section className="page-header">
        <span className='eyebrow'>AVAILABLE PRODUCTS</span>
        <h1 className="biometric-main-header">Door Access Products List</h1>
      </section>

      <section className="door-access-cards-container">
        <div className="product-grid">
          {doorAccessProducts.map((product) => (
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

export default DoorAccess;