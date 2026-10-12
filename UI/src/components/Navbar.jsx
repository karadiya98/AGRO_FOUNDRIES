import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, MapPin, Menu, X, ChevronDown, PhoneCall, ShieldCheck, Grid, Tractor } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../public/Logo.png'; // path apne folder ke hisaab se adjust kar lein

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener for sticky compact header transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    "Container Shelters", "Metal Sheds", "Tractors & Mowers", 
    "Skid Steer Attachments", "Greenhouses", "Soil Compactors",
    "Irrigation & Pumps", "Farm Implements"
  ];

  return (
    <header style={{ 
      width: '100%', 
      fontFamily: 'sans-serif', 
      position: 'fixed', 
      top: 0, 
      left: 0,
      right: 0,
      zIndex: 1000, 
      boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.35)' : 'none',
      transition: 'all 0.3s ease-in-out',
      margin: 0,
      padding: 0,
      borderTop: '3px solid #d97706' // Golden Accent Line at the very top
    }}>
      <style>{`
        body { margin: 0; padding-top: ${isScrolled ? '108px' : '150px'}; transition: padding-top 0.3s ease; }

        .agro-utility-bar { 
          background-color: #0d1b12; 
          color: #d1fae5; 
          font-size: 11px; 
          padding: ${isScrolled ? '0px 16px' : '6px 16px'}; 
          border-bottom: 1px solid #143621;
          transition: all 0.3s ease;
          max-height: ${isScrolled ? '0px' : '36px'};
          overflow: hidden;
          opacity: ${isScrolled ? '0' : '1'};
        }
        .agro-main-header { 
          background-color: #112d1e; 
          color: #ffffff; 
          padding: ${isScrolled ? '10px 16px' : '16px 16px'}; 
          transition: all 0.3s ease;
          
          border-bottom: 3px solid #d97706; /* Golden Accent Line at bottom of main header */
        }
        .agro-sub-bar { 
          background-color: #306851; 
          color: #ffffff; 
          border-top: 1px solid rgba(217, 119, 6, 0.3); 
        }
        .agro-container { 
          max-width: 1280px; 
          margin: 0 auto; 
          display: flex; 
          align-items: center; 
          justify-content: space-between; 
          gap: 16px; 
        }
        
        .agro-search-input { 
          width: 100%; 
          background: #ffffff; 
          color: #111827; 
          border: none; 
          padding: ${isScrolled ? '8px 14px' : '11px 16px'}; 
          border-radius: 6px 0 0 6px; 
          font-size: 14px; 
          outline: none; 
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.06); 
        }
        .agro-search-btn { 
          background-color: #d97706; 
          color: #ffffff; 
          border: none; 
          padding: 0 22px; 
          border-radius: 0 6px 6px 0; 
          cursor: pointer; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          transition: background 0.2s; 
        }
        .agro-search-btn:hover { background-color: #b45309; }
        
        .agro-nav-link { 
          color: #e2e8f0; 
          text-decoration: none; 
          font-size: 12px; 
          font-weight: 700; 
          text-transform: uppercase; 
          padding: 10px 16px; 
          display: inline-block; 
          transition: all 0.2s; 
          letter-spacing: 0.5px; 
        }
        .agro-nav-link:hover { color: #ffb703; background-color: rgba(255, 255, 255, 0.05); }
        
        .agro-badge { 
          background-color: #d97706; 
          color: #ffffff; 
          padding: 5px 12px; 
          border-radius: 4px; 
          font-size: 11px; 
          font-weight: 900; 
          text-transform: uppercase; 
          text-decoration: none; 
          letter-spacing: 0.5px; 
          transition: background 0.2s; 
        }
        .agro-badge:hover { background-color: #b45309; }
        
        .agro-dropdown { 
          position: absolute; 
          top: 100%; 
          left: 0; 
          width: 270px; 
          background-color: #ffffff; 
          color: #1f2937; 
          box-shadow: 0 20px 35px rgba(0,0,0,0.3); 
          border-radius: 0 0 8px 8px; 
          z-index: 100; 
          display: flex; 
          flex-direction: column; 
          border: 1px solid #e5e7eb; 
        }
        .agro-dropdown-item { 
          padding: 12px 18px; 
          color: #374151; 
          text-decoration: none; 
          font-size: 13px; 
          font-weight: 600; 
          border-bottom: 1px solid #f3f4f6; 
          transition: all 0.2s; 
        }
        .agro-dropdown-item:hover { background-color: #fef3c7; color: #92400e; padding-left: 22px; }

        @media (max-width: 992px) {
          .desktop-only { display: none !important; }
          body { padding-top: ${isScrolled ? '65px' : '105px'}; }
        }
        @media (min-width: 993px) {
          .mobile-only { display: none !important; }
        }
      `}</style>

      {/* 1. Utility Top Bar */}
      <div className="agro-utility-bar">
        <div className="agro-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={14} style={{ color: '#ffb703' }} />
            <span style={{ color: '#fde68a', fontWeight: '700' }}>Official USA Agricultural Equipment Distributor</span>
            <span className="desktop-only" style={{ color: '#4b5563', margin: '0 8px' }}>|</span>
            <span className="desktop-only">Certified Heavy-Duty Warranty Included</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span className="desktop-only" style={{ color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <PhoneCall size={12} style={{ color: '#ffb703' }} /> Toll-Free Sales: 1-888-467-5788
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Branding Header */}
      <div className="agro-main-header">
        <div className="agro-container">
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '4px' }}
            className="mobile-only"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} style={{ color: '#ffb703' }} /> : <Menu size={28} style={{ color: '#ffffff' }} />}
          </button>

          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img 
              src={logo} 
              alt="Agro Logo" 
              style={{ height: isScrolled ? '32px' : '42px', width: 'auto', objectFit: 'contain', transition: 'height 0.3s ease' }} 
            />
            <div className="desktop-only" style={{ display: 'flex', flexDirection: 'column', borderLeft: '2px solid rgba(217, 119, 6, 0.4)', paddingLeft: '12px' }}>
              <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '15px', letterSpacing: '0.5px' }}>AGRO INDUSTRIAL</span>
              <span style={{ color: '#fde68a', fontSize: '10px', fontWeight: '800', letterSpacing: '1.5px' }}>USA HEAVY MACHINERY</span>
            </div>
          </Link>

          <div className="desktop-only" style={{ flex: 1, maxWidth: '620px', margin: '0 20px' }}>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', width: '100%' }}>
              <input 
                type="text" 
                placeholder="Search tractors, container shelters, tillage tools, parts..."
                className="agro-search-input"
              />
              <button type="submit" className="agro-search-btn">
                <Search size={20} />
              </button>
            </form>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', textDecoration: 'none' }}>
              <User size={22} style={{ color: '#fde68a' }} />
              <div className="desktop-only" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <span style={{ fontSize: '9px', color: '#fde68a', textTransform: 'uppercase', fontWeight: '800' }}>Welcome</span>
                <span style={{ fontSize: '13px', fontWeight: '800' }}>My Account</span>
              </div>
            </Link>

            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#143621', border: '1px solid #d97706', padding: '6px 12px', borderRadius: '6px', textDecoration: 'none', position: 'relative' }}>
              <ShoppingCart size={20} style={{ color: '#fde68a' }} />
              <div className="desktop-only" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <span style={{ fontSize: '9px', color: '#fde68a', textTransform: 'uppercase', fontWeight: '800' }}>Cart</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#fff' }}>$0.00</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="mobile-only" style={{ marginTop: '10px', width: '100%' }}>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', width: '100%' }}>
            <input 
              type="text" 
              placeholder="Search machinery & parts..."
              className="agro-search-input"
              style={{ padding: '9px 12px', fontSize: '13px' }}
            />
            <button type="submit" className="agro-search-btn" style={{ padding: '0 16px' }}>
              <Search size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* 3. Sub-Bar Category Navigation */}
      <div className="agro-sub-bar desktop-only" >
        <div className="agro-container" style={{ justifyContent: 'space-between' }}>
          
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
              style={{ backgroundColor: '#0d1b12', color: '#fde68a', border: 'none', borderRight: '1px solid rgba(217, 119, 6, 0.3)', padding: '12px 20px', fontSize: '12px', fontWeight: '900', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', letterSpacing: '0.8px' }}
            >
              <Grid size={16} />
              <span>Browse Equipment Categories</span>
              <ChevronDown size={14} style={{ transform: categoryDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </button>

            {categoryDropdownOpen && (
              <div className="agro-dropdown">
                {categories.map((cat, idx) => (
                  <Link key={idx} to="/" onClick={() => setCategoryDropdownOpen(false)} className="agro-dropdown-item">
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <nav style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" className="agro-nav-link" style={{ color: '#fde68a', fontWeight: '900' }}>⚡ Farmer Specials</Link>
            {categories.slice(0, 5).map((cat, index) => (
              <Link key={index} to="/" className="agro-nav-link">{cat}</Link>
            ))}
          </nav>

          <Link to="/" className="agro-badge">Clearance Sale</Link>
        </div>
      </div>

      {/* 4. Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-only" style={{ backgroundColor: '#0b1a11', color: '#ffffff', padding: '16px', borderBottom: '3px solid #d97706', boxShadow: '0 15px 30px rgba(0,0,0,0.5)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', borderBottom: '1px solid rgba(217, 119, 6, 0.3)', paddingBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', color: '#fde68a', letterSpacing: '1px' }}>Explore Catalog</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: '800', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              🏠 Home Dashboard
            </Link>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fde68a', textDecoration: 'none', fontSize: '14px', fontWeight: '800', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              ⚡ Farmer Clearance Specials
            </Link>

            <p style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: '#d97706', marginTop: '8px', marginBottom: '4px', letterSpacing: '1px' }}>Equipment Categories</p>
            {categories.map((cat, index) => (
              <Link key={index} to="/" onClick={() => setMobileMenuOpen(false)} style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '13px', padding: '6px 0 6px 10px', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'block' }}>
                → {cat}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}