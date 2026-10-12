import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, MapPin, ShieldCheck, Truck, RotateCcw, Wrench } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0b1a11', color: '#e2e8f0', fontFamily: 'sans-serif', borderTop: '4px solid #d97706' }}>
      <style>{`
        .footer-trust-bar {
          background-color: #112d1e;
          border-bottom: 1px solid rgba(217, 119, 6, 0.25);
          padding: 24px 20px;
        }
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .trust-title {
          font-size: 13px;
          font-weight: 800;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .trust-desc {
          font-size: 11px;
          color: #fde68a;
          margin-top: 2px;
        }
        .footer-main {
          padding: 50px 20px 30px 20px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 36px;
        }
        .footer-col-title {
          font-size: 13px;
          font-weight: 900;
          color: #fde68a;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
          border-bottom: 2px solid #d97706;
          display: inline-block;
          padding-bottom: 4px;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-link {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 13px;
          transition: all 0.2s ease;
        }
        .footer-link:hover {
          color: #fde68a;
          padding-left: 6px;
        }
        .footer-input {
          width: 100%;
          padding: 10px 14px;
          border-radius: 4px;
          border: 1px solid #1f4d34;
          background-color: #112d1e;
          color: #ffffff;
          font-size: 13px;
          outline: none;
          margin-bottom: 10px;
        }
        .footer-btn {
          width: 100%;
          background-color: #d97706;
          color: #ffffff;
          border: none;
          padding: 10px;
          border-radius: 4px;
          font-weight: 800;
          font-size: 12px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s;
        }
        .footer-btn:hover {
          background-color: #b45309;
        }
        .footer-bottom {
          background-color: #07120b;
          border-top: 1px solid #143621;
          padding: 20px;
          font-size: 12px;
          color: #94a3b8;
        }
      `}</style>

      {/* 1. Industrial Trust Badges Bar */}
      <div className="footer-trust-bar">
        <div className="footer-container">
          <div className="trust-grid">
            <div className="trust-item">
              <Truck size={32} style={{ color: '#fde68a', shrink: 0 }} />
              <div>
                <div className="trust-title">Nationwide Freight</div>
                <div className="trust-desc">Direct to farm & Job sites</div>
              </div>
            </div>
            <div className="trust-item">
              <ShieldCheck size={32} style={{ color: '#fde68a', shrink: 0 }} />
              <div>
                <div className="trust-title">12-Month Warranty</div>
                <div className="trust-desc">Heavy-duty guaranteed build</div>
              </div>
            </div>
            <div className="trust-item">
              <Wrench size={32} style={{ color: '#fde68a', shrink: 0 }} />
              <div>
                <div className="trust-title">Spare Parts Hub</div>
                <div className="trust-desc">Full replacement stock</div>
              </div>
            </div>
            <div className="trust-item">
              <RotateCcw size={32} style={{ color: '#fde68a', shrink: 0 }} />
              <div>
                <div className="trust-title">Commercial Support</div>
                <div className="trust-desc">7-Day expert sales team</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links & Information */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            
            {/* Company Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <img src="/Logo.png" alt="Agro Logo" style={{ height: '38px', width: 'auto', objectFit: 'contain' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '15px', letterSpacing: '0.5px' }}>AGRO INDUSTRIAL</span>
                  <span style={{ color: '#fde68a', fontSize: '9px', fontWeight: '800', letterSpacing: '1px' }}>USA SUPPLY CO.</span>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '16px' }}>
                Leading USA supplier for heavy-duty container shelters, metal storage sheds, skid steer attachments, and industrial farm machinery.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#cbd5e1' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={15} style={{ color: '#fde68a' }} /> 12351 American Hwy, Dallas, TX 75201
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <PhoneCall size={15} style={{ color: '#fde68a' }} /> 1-888-467-5788 (Toll Free)
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={15} style={{ color: '#fde68a' }} /> support@usaagroequipments.com
                </span>
              </div>
            </div>

            {/* Popular Equipment Categories */}
            <div>
              <div className="footer-col-title">Top Categories</div>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Container Shelters</Link></li>
                <li><Link to="/" className="footer-link">Heavy Duty Metal Sheds</Link></li>
                <li><Link to="/" className="footer-link">Tractors & Mowers</Link></li>
                <li><Link to="/" className="footer-link">Skid Steer Attachments</Link></li>
                <li><Link to="/" className="footer-link">Commercial Greenhouses</Link></li>
                <li><Link to="/" className="footer-link">Soil Compactors & Tillers</Link></li>
              </ul>
            </div>

            {/* Customer Support & Dealer Services */}
            <div>
              <div className="footer-col-title">Support & Dealers</div>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Become an Official Dealer</Link></li>
                <li><Link to="/" className="footer-link">Freight & Delivery Info</Link></li>
                <li><Link to="/" className="footer-link">Warranty & Claims</Link></li>
                <li><Link to="/" className="footer-link">Assembly Video Guides</Link></li>
                <li><Link to="/" className="footer-link">Request Product Catalog</Link></li>
                <li><Link to="/" className="footer-link">Contact Customer Support</Link></li>
              </ul>
            </div>

            {/* Newsletter & Discount Signup */}
            <div>
              <div className="footer-col-title">Farmer Specials</div>
              <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '12px' }}>
                Subscribe to receive seasonal discount alerts and exclusive clearance notifications.
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="footer-input"
                />
                <button type="submit" className="footer-btn">
                  Get Clearance Alerts
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Copyright & Bottom Payment Legal Bar */}
      <div className="footer-bottom">
        <div className="footer-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
          <div>
            © 2026 AGRO INDUSTRIAL USA SUPPLY CO. All rights reserved. Built for American Agriculture.
          </div>
          <div style={{ display: 'flex', gap: '16px', fontSize: '12px' }}>
            <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</Link>
            <span>|</span>
            <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms of Service</Link>
            <span>|</span>
            <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Shipping Policy</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}