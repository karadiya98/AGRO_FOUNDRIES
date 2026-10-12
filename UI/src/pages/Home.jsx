import React, { useState, useEffect } from 'react';
import { 
  Phone, ShieldCheck, Truck, RotateCcw, Video, ChevronRight, ChevronLeft, 
  ArrowRight, Star, Award, Wrench, CheckCircle, Clock, Percent, FileText, 
  HelpCircle, ChevronDown, Sparkles, ShoppingCart, Eye, Package, DollarSign, Users
} from 'lucide-react';

export default function Home() {
  // 1. EXACT 2 HERO SLIDES STATE & AUTOMATIC TIMER
  const [currentSlide, setCurrentSlide] = useState(0);

 const heroSlides = [
    {
      id: 2,
      badge: "HEAVY MACHINERY & ATTACHMENTS",
      title: "SKID STEER & TRACTOR IMPLEMENTS DIRECT FROM DEPOT",
      description: "Heavy-yield brush cutters, hydraulic augers, rototillers, and rock buckets designed for maximum hydraulic flow efficiency and tough soil conditions.",
      discount: "Direct Depot Pricing • Up to 25% OFF",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 3,
      badge: "YEAR-ROUND CROP PROTECTION",
      title: "COMMERCIAL AGRO GREENHOUSES & IRRIGATION PUMPS",
      description: "Polycarbonate and high-density vinyl multi-span greenhouses paired with high-volume diesel & electric water pumps for agricultural productivity.",
      discount: "12-Month Structural & Motor Warranty",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1920&q=80"
    }
  ];

  // Auto-play interval for the 2 hero slides (Switches every 6 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // 2. TABBED CATALOG STATE
  const [activeTab, setActiveTab] = useState('all');

  // 3. FAQ ACCORDION STATE
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    { id: 'shelters', name: "Container Shelters", count: "28 Models", image: "https://images.unsplash.com/photo-1595974482597-4f878f77cbcf?auto=format&fit=crop&w=500&q=80" },
    { id: 'sheds', name: "Metal Storage Sheds", count: "16 Models", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=500&q=80" },
    { id: 'attachments', name: "Skid Steer Attachments", count: "34 Attachments", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=500&q=80" },
    { id: 'pumps', name: "Irrigation & Water Pumps", count: "20 Systems", image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=500&q=80" }
  ];

  const featuredProducts = [
    { 
      id: 1, 
      name: "30ft x 40ft x 15ft Commercial Container Shelter", 
      model: "CS-304015-HD", 
      category: 'shelters',
      price: "$2,899.00", 
      oldPrice: "$3,499.00", 
      rating: 4.9, 
      reviews: 42, 
      specs: "32oz PVC Polyvinyl • Galvanized Steel • Wind Rated 110 MPH",
      image: "https://images.unsplash.com/photo-1595974482597-4f878f77cbcf?auto=format&fit=crop&w=800&q=80", 
      tag: "Best Seller" 
    },
    { 
      id: 2, 
      name: "72\" Heavy-Duty Skid Steer Hydraulic Brush Cutter", 
      model: "BC-72-SS-HYD", 
      category: 'attachments',
      price: "$3,250.00", 
      oldPrice: "$3,800.00", 
      rating: 5.0, 
      reviews: 29, 
      specs: "Flow 16-26 GPM • 3-Blade Cutting Disc • AR400 Steel",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80", 
      tag: "Heavy Duty" 
    },
    { 
      id: 3, 
      name: "20ft x 30ft Commercial Polycarbonate Agro Greenhouse", 
      model: "GH-2030-PRO", 
      category: 'shelters',
      price: "$1,999.00", 
      oldPrice: "$2,400.00", 
      rating: 4.8, 
      reviews: 21, 
      specs: "UV-Coated Twin Wall • Aluminum Alloy Frame • Automatic Vents",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80", 
      tag: "Top Rated" 
    },
    { 
      id: 4, 
      name: "High-Volume 15HP Diesel Irrigation Water Pump", 
      model: "WP-15HP-DIESEL", 
      category: 'pumps',
      price: "$949.00", 
      oldPrice: "$1,150.00", 
      rating: 4.7, 
      reviews: 36, 
      specs: "Flow 480 GPM • 3\" Suction/Discharge • Electric Start",
      image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80", 
      tag: "In Stock" 
    },
    { 
      id: 5, 
      name: "Heavy-Duty 40ft Double Truss Container Dome Shelter", 
      model: "CS-404020-DT", 
      category: 'shelters',
      price: "$4,599.00", 
      oldPrice: "$5,200.00", 
      rating: 4.9, 
      reviews: 18, 
      specs: "Double Truss Frame • Front & Rear Mechanical Winch Doors",
      image: "https://images.unsplash.com/photo-1595974482597-4f878f77cbcf?auto=format&fit=crop&w=800&q=80", 
      tag: "Commercial" 
    },
    { 
      id: 6, 
      name: "PTO Rotary Tiller 6ft Tractor Attachment", 
      model: "RT-72-PTO", 
      category: 'attachments',
      price: "$1,650.00", 
      oldPrice: "$1,950.00", 
      rating: 4.8, 
      reviews: 31, 
      specs: "Gear Drive • 540 RPM PTO • 42 Heavy Curved Flange Blades",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80", 
      tag: "Popular" 
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? featuredProducts 
    : featuredProducts.filter(p => p.category === activeTab);

  const testimonials = [
    { quote: "Ordered the 30x40 container shelter for our Nebraska farm. Delivery was exceptionally fast and framing build quality is top tier.", author: "Mark D. - Lincoln, NE", rating: 5 },
    { quote: "The skid steer brush cutter plowed through 3 acres of thick brush without a hitch. Incredible hydraulic efficiency.", author: "Jason T. - Boise, ID", rating: 5 },
    { quote: "Reliable dealer support and great warranty coverage. Highly recommend USA Agro Industrial to any commercial operation.", author: "Robert K. - Des Moines, IA", rating: 5 }
  ];

  const faqs = [
    { question: "How are heavy container shelters delivered to farms?", answer: "All shelters and machinery are delivered via liftgate freight or flatbed trucks directly to your specified farm address or commercial job site across the US and Canada." },
    { question: "Are assembly guides and manuals provided with equipment?", answer: "Yes! Every piece of equipment includes detailed step-by-step printed manuals along with HD video assembly guides accessible on our dealer portal." },
    { question: "What warranty covers these agricultural shelters & implements?", answer: "We provide a standard 12-month structural and manufacturer warranty. Extended 3-year commercial protection plans are also available at checkout." },
    { question: "Can I request custom freight quotes for bulk orders?", answer: "Absolutely. Our logistics department coordinates direct volume shipping for commercial agricultural enterprises within 2 hours of inquiry." }
  ];

  return (
    <div style={{ flexGrow: 1, fontFamily: 'sans-serif', backgroundColor: '#f8fafc', overflowX: 'hidden' }}>
      <style>{`
        /* 🎨 ADVANCED THEME & ELEVATION STYLING */
        
        /* 2-SLIDE HERO CAROUSEL */
        .hero-carousel-root { position: relative; width: 100%; height: 580px; background-color: #0b1a11; overflow: hidden; }
        .hero-slide-pane { position: absolute; inset: 0; opacity: 0; transition: opacity 0.8s ease-in-out; display: flex; align-items: center; }
        .hero-slide-pane.active { opacity: 1; z-index: 10; }
        
        .hero-image-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.35); transform: scale(1.06); transition: transform 6s ease-out; }
        .hero-slide-pane.active .hero-image-bg { transform: scale(1); }
        
        .hero-inner-container { position: relative; z-index: 20; max-width: 1280px; width: 100%; margin: 0 auto; padding: 0 20px; display: flex; justify-content: space-between; align-items: center; }
        
        .hero-pill-badge { background-color: #d97706; color: #ffffff; font-size: 11px; font-weight: 900; text-transform: uppercase; padding: 6px 14px; border-radius: 4px; letter-spacing: 1.2px; display: inline-block; margin-bottom: 14px; box-shadow: 0 4px 12px rgba(217, 119, 6, 0.4); }
        .hero-title-main { font-size: 42px; font-weight: 900; color: #ffffff; margin: 0 0 16px 0; line-height: 1.15; max-width: 700px; text-transform: uppercase; letter-spacing: 0.5px; text-shadow: 0 2px 8px rgba(0,0,0,0.5); }
        .hero-desc-text { font-size: 15px; color: #cbd5e1; margin-bottom: 28px; max-width: 600px; line-height: 1.6; }
        
        .gold-btn { background-color: #d97706; color: #ffffff; border: none; font-weight: 800; padding: 14px 32px; border-radius: 6px; cursor: pointer; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); display: inline-flex; align-items: center; gap: 10px; text-decoration: none; box-shadow: 0 6px 20px rgba(217, 119, 6, 0.3); }
        .gold-btn:hover { background-color: #b45309; transform: translateY(-3px); box-shadow: 0 12px 28px rgba(217, 119, 6, 0.5); }
        
        .dark-outline-btn { background: rgba(17, 45, 30, 0.75); border: 2px solid #d97706; color: #fde68a; font-weight: 800; padding: 12px 28px; border-radius: 6px; cursor: pointer; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; transition: all 0.3s ease; margin-left: 14px; }
        .dark-outline-btn:hover { background-color: #d97706; color: #ffffff; transform: translateY(-3px); box-shadow: 0 8px 20px rgba(217, 119, 6, 0.4); }

        .carousel-arrow { position: absolute; top: 50%; transform: translateY(-50%); z-index: 30; background: rgba(11, 26, 17, 0.8); border: 1px solid rgba(217, 119, 6, 0.6); color: #ffffff; padding: 14px; border-radius: 50%; cursor: pointer; transition: all 0.25s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.4); }
        .carousel-arrow:hover { background: #d97706; color: #ffffff; transform: translateY(-50%) scale(1.12); }
        .carousel-arrow.prev { left: 24px; }
        .carousel-arrow.next { right: 24px; }

        .carousel-dots { position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 30; display: flex; gap: 10px; }
        .carousel-dot { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.4); cursor: pointer; transition: all 0.3s ease; }
        .carousel-dot.active { background: #d97706; width: 34px; border-radius: 6px; }

        /* TRUST CARDS WITH HOVER ELEVATION */
        .trust-section { background-color: #ffffff; border-bottom: 1px solid #e2e8f0; }
        .trust-grid { max-width: 1280px; margin: 0 auto; padding: 32px 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; }
        .trust-card { background: #f8fafc; padding: 22px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; gap: 16px; transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; }
        .trust-card:hover { transform: translateY(-6px); box-shadow: 0 16px 32px rgba(0,0,0,0.08); border-color: #d97706; background: #ffffff; }

        /* CATEGORY CARDS WITH POINTER CREATIVITY */
        .category-box { background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.03); transition: all 0.35s ease; cursor: pointer; }
        .category-box:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.12); border-color: #d97706; }
        .category-box:hover img { transform: scale(1.08); }

        /* TAB BUTTONS & PRODUCT CARDS */
        .tab-btn { padding: 10px 22px; border-radius: 6px; font-size: 13px; font-weight: 800; text-transform: uppercase; border: 1px solid #cbd5e1; background: #ffffff; color: #334155; cursor: pointer; transition: all 0.25s ease; }
        .tab-btn.active, .tab-btn:hover { background: #112d1e; color: #fde68a; border-color: #d97706; box-shadow: 0 4px 12px rgba(17, 45, 30, 0.2); }

        .prod-card { background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); position: relative; }
        .prod-card:hover { transform: translateY(-10px); box-shadow: 0 24px 45px rgba(0,0,0,0.12); border-color: #d97706; }
        .prod-img-wrap { position: relative; width: 100%; height: 220px; overflow: hidden; background: #f1f5f9; }
        .prod-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .prod-card:hover .prod-img { transform: scale(1.08); }
        .prod-tag { position: absolute; top: 12px; left: 12px; background: #112d1e; color: #fde68a; font-size: 10px; font-weight: 800; text-transform: uppercase; padding: 4px 10px; border-radius: 4px; border: 1px solid #d97706; box-shadow: 0 2px 6px rgba(0,0,0,0.3); }

        /* INDUSTRIAL CALLOUT & TESTIMONIALS */
        .b2b-banner { background: #112d1e; color: #ffffff; padding: 70px 20px; border-top: 4px solid #d97706; border-bottom: 4px solid #d97706; box-shadow: inset 0 20px 40px rgba(0,0,0,0.4); }
        .testimonial-card { background: #ffffff; padding: 28px; border-radius: 8px; border: 1px solid #e2e8f0; border-top: 4px solid #d97706; box-shadow: 0 6px 16px rgba(0,0,0,0.04); transition: all 0.3s ease; }
        .testimonial-card:hover { transform: translateY(-5px); box-shadow: 0 16px 32px rgba(0,0,0,0.08); }

        @media (max-width: 992px) {
          .hero-title-main { font-size: 30px; }
          .hero-carousel-root { height: 500px; }
          .desktop-helpline-card { display: none !important; }
        }
      `}</style>

      {/* 1. EXACT 2 HERO SLIDES CAROUSEL */}
      <section className="hero-carousel-root">
        {heroSlides.map((slide, index) => (
          <div key={slide.id} className={`hero-slide-pane ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide.image} alt={slide.title} className="hero-image-bg" />
            <div className="hero-inner-container">
              <div>
                <span className="hero-pill-badge">{slide.badge}</span>
                <h1 className="hero-title-main">{slide.title}</h1>
                <p className="hero-desc-text">{slide.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <a href="#catalog" className="gold-btn">
                    Explore Inventory <ArrowRight size={18} />
                  </a>
                  <button className="dark-outline-btn">Request Custom Quote</button>
                </div>
              </div>

              {/* Desktop Sales Hotline Card */}
              <div className="desktop-helpline-card" style={{ background: 'rgba(11, 26, 17, 0.9)', border: '2px solid #d97706', padding: '30px', borderRadius: '12px', width: '330px', backdropFilter: 'blur(12px)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#fde68a', fontWeight: '800', letterSpacing: '1.2px' }}>Toll Free US Sales Line</span>
                <h2 style={{ fontSize: '28px', fontWeight: '900', margin: '8px 0', color: '#ffffff' }}>1-888-467-5788</h2>
                <p style={{ fontSize: '12px', color: '#cbd5e1', margin: 0, lineHeight: '1.5' }}>Speak Directly With Equipment Engineers & Freight Consultants</p>
                <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid rgba(217, 119, 6, 0.4)', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#fde68a', fontWeight: '700' }}>
                  <Phone size={18} style={{ color: '#d97706' }} />
                  <span>Instant Dealer Pricing</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Arrow Controls */}
        <button className="carousel-arrow prev" onClick={() => setCurrentSlide(currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1)}>
          <ChevronLeft size={26} />
        </button>
        <button className="carousel-arrow next" onClick={() => setCurrentSlide(currentSlide === heroSlides.length - 1 ? 0 : currentSlide + 1)}>
          <ChevronRight size={26} />
        </button>

        {/* Slide Indicators Dots */}
        <div className="carousel-dots">
          {heroSlides.map((_, idx) => (
            <div key={idx} className={`carousel-dot ${idx === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(idx)} />
          ))}
        </div>
      </section>

      {/* 2. INDUSTRIAL TRUST BADGES BAR */}
      <section className="trust-section">
        <div className="trust-grid">
          <div className="trust-card">
            <Truck style={{ color: '#d97706', flexShrink: 0 }} size={38} />
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '900', margin: '0 0 3px 0', color: '#112d1e', textTransform: 'uppercase' }}>Nationwide Freight</h3>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Direct job-site & farm delivery across USA</p>
            </div>
          </div>
          <div className="trust-card">
            <ShieldCheck style={{ color: '#d97706', flexShrink: 0 }} size={38} />
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '900', margin: '0 0 3px 0', color: '#112d1e', textTransform: 'uppercase' }}>12-Month Warranty</h3>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Certified structural build guarantee</p>
            </div>
          </div>
          <div className="trust-card">
            <RotateCcw style={{ color: '#d97706', flexShrink: 0 }} size={38} />
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '900', margin: '0 0 3px 0', color: '#112d1e', textTransform: 'uppercase' }}>30-Day Guarantee</h3>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Hassle-free equipment returns policy</p>
            </div>
          </div>
          <div className="trust-card">
            <Wrench style={{ color: '#d97706', flexShrink: 0 }} size={38} />
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '900', margin: '0 0 3px 0', color: '#112d1e', textTransform: 'uppercase' }}>Spare Parts Hub</h3>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Full inventory replacement stock ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BROWSE TOP CATEGORIES */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 20px 20px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
          <div>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#d97706', textTransform: 'uppercase', letterSpacing: '1px' }}>HEAVY CATALOGUE</span>
            <h2 style={{ fontSize: '30px', fontWeight: '900', color: '#112d1e', margin: '4px 0 0 0', textTransform: 'uppercase' }}>Explore Equipment Categories</h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {categories.map((cat) => (
            <div key={cat.id} className="category-box">
              <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
                <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '900', color: '#112d1e', margin: '0 0 4px 0' }}>{cat.name}</h3>
                <span style={{ fontSize: '13px', color: '#d97706', fontWeight: '800' }}>{cat.count} →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TABBED IN-STOCK MACHINERY CATALOGUE */}
      <section id="catalog" style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 20px 70px 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', gap: '16px' }}>
          <div>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#d97706', textTransform: 'uppercase', letterSpacing: '1px' }}>IN-STOCK INVENTORY</span>
            <h2 style={{ fontSize: '30px', fontWeight: '900', color: '#112d1e', margin: '4px 0 0 0', textTransform: 'uppercase' }}>Featured Machinery</h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <button className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All Inventory</button>
            <button className={`tab-btn ${activeTab === 'shelters' ? 'active' : ''}`} onClick={() => setActiveTab('shelters')}>Container Shelters</button>
            <button className={`tab-btn ${activeTab === 'attachments' ? 'active' : ''}`} onClick={() => setActiveTab('attachments')}>Attachments</button>
            <button className={`tab-btn ${activeTab === 'pumps' ? 'active' : ''}`} onClick={() => setActiveTab('pumps')}>Water Pumps</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '30px' }}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="prod-card">
              <div className="prod-img-wrap">
                <span className="prod-tag">{product.tag}</span>
                <img src={product.image} alt={product.name} className="prod-img" />
              </div>

              <div style={{ padding: '22px' }}>
                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{product.model}</span>
                <h3 style={{ fontSize: '16px', fontWeight: '900', color: '#112d1e', margin: '6px 0 10px 0', lineHeight: '1.35' }}>{product.name}</h3>
                
                <p style={{ fontSize: '12px', color: '#475569', backgroundColor: '#f1f5f9', padding: '8px 12px', borderRadius: '4px', margin: '0 0 14px 0', fontWeight: '600', borderLeft: '3px solid #d97706' }}>
                  {product.specs}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
                  <div style={{ display: 'flex', color: '#d97706' }}>
                    <Star size={14} fill="#d97706" />
                    <Star size={14} fill="#d97706" />
                    <Star size={14} fill="#d97706" />
                    <Star size={14} fill="#d97706" />
                    <Star size={14} fill="#d97706" />
                  </div>
                  <span style={{ fontWeight: '900', color: '#112d1e' }}>{product.rating}</span>
                  <span style={{ color: '#94a3b8' }}>({product.reviews} reviews)</span>
                </div>
              </div>

              <div style={{ padding: '16px 22px', borderTop: '1px solid #f1f5f9', background: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '22px', fontWeight: '900', color: '#112d1e', display: 'block', lineHeight: '1' }}>{product.price}</span>
                  <span style={{ fontSize: '12px', color: '#94a3b8', textDecoration: 'line-through' }}>{product.oldPrice}</span>
                </div>
                <button className="gold-btn" style={{ padding: '10px 18px', fontSize: '12px' }}>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. COMMERCIAL B2B CALLOUT BANNER */}
      <section className="b2b-banner">
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: '#d97706', color: '#ffffff', padding: '4px 10px', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', borderRadius: '4px', letterSpacing: '1px' }}>B2B & FARMER SUPPLIER</span>
            <h2 style={{ fontSize: '32px', fontWeight: '900', margin: '14px 0', textTransform: 'uppercase', lineHeight: '1.2' }}>BULK EQUIPMENT ORDERS & DEALER NETWORKS</h2>
            <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
              Equipping large scale agricultural enterprises and commercial contractors across North America. Get volume discount quotes directly from our sales team.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#fde68a', fontWeight: '800' }}>
                <CheckCircle size={18} style={{ color: '#d97706' }} /> Custom Freight Quotes Within 2 Hours
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#fde68a', fontWeight: '800' }}>
                <CheckCircle size={18} style={{ color: '#d97706' }} /> Dedicated Account Manager For Farmers
              </span>
            </div>
          </div>

          <div style={{ backgroundColor: '#0b1a11', border: '2px solid #d97706', padding: '36px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <Award size={48} style={{ color: '#d97706', margin: '0 auto 12px auto' }} />
            <h3 style={{ fontSize: '22px', fontWeight: '900', color: '#ffffff', margin: '0 0 8px 0', textTransform: 'uppercase' }}>Become a Certified Dealer</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>Join over 450+ equipment sales points across the USA and Canada.</p>
            <button className="gold-btn" style={{ width: '100%', justifyContent: 'center' }}>
              Apply For Dealership
            </button>
          </div>
        </div>
      </section>

      {/* 6. FARMER TESTIMONIALS */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '70px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ fontSize: '12px', fontWeight: '800', color: '#d97706', textTransform: 'uppercase', letterSpacing: '1px' }}>SOCIAL PROOF</span>
          <h2 style={{ fontSize: '30px', fontWeight: '900', color: '#112d1e', margin: '4px 0 0 0', textTransform: 'uppercase' }}>Trusted By American Farmers</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div style={{ display: 'flex', color: '#d97706', marginBottom: '12px' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#d97706" />
                ))}
              </div>
              <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '16px' }}>
                "{t.quote}"
              </p>
              <span style={{ fontSize: '13px', fontWeight: '900', color: '#112d1e' }}>{t.author}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQ ACCORDION SECTION */}
      <section style={{ maxWidth: '950px', margin: '0 auto', padding: '0 20px 80px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{ fontSize: '12px', fontWeight: '800', color: '#d97706', textTransform: 'uppercase', letterSpacing: '1px' }}>HELP CENTER</span>
          <h2 style={{ fontSize: '30px', fontWeight: '900', color: '#112d1e', margin: '4px 0 0 0', textTransform: 'uppercase' }}>Frequently Asked Questions</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                style={{ width: '100%', padding: '20px', textAlign: 'left', background: 'none', border: 'none', fontWeight: '900', fontSize: '15px', color: '#112d1e', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span>{faq.question}</span>
                <ChevronDown size={18} style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', color: '#d97706' }} />
              </button>
              {openFaq === idx && (
                <div style={{ padding: '0 20px 20px 20px', fontSize: '14px', color: '#475569', lineHeight: '1.6', borderTop: '1px solid #f1f5f9' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}