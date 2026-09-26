/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "Araasa",
    suffix: " Cafe",
    tagline: "Aesthetic Cafe & Culinary Experience",
    description: "Araasa Cafe in Sector 62, Noida offers a warm, aesthetic ambiance featuring global cuisine, specialty beverages, artisanal treats, and lush outdoor seating.",
    keywords: "Araasa Cafe, Noida Cafe, Sector 62 Noida, Swiggy Noida, Zomato Noida, Continental food, aesthetic cafe Noida",
    themeColor: "#1b281f",
    domain: "https://www.instagram.com/araasacafe",
    ogImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmSJDTxrpwT2svECgJu2sTk3qe3Mkk4-BYqjs_4BLf51dZ6cDHqSt_fnC_lhVc9pYplz5mnbRsSe0cHvUEYF0Kmpz5fgU2oU8nKPU5T5XlziM3_6ERELOiJkKErv6ya5a0F9Lo7oUA_9Jk=s680-w680-h510-rw",
    faviconEmoji: "🌿",
    whatsappNumber: "919599960570"
  },

  // --- GLOBAL STYLES & THEMING ---
  // Earthy botanical green, warm sand gold, and soft cream palette matching Araasa's ambient vibe
  styles: {
    colors: {
      bg: "#0d130e",
      bgCard: "#162018",
      bgLight: "#1f2c22",
      primary: "#d2a679",
      primaryHover: "#e2be9b",
      text: "#f0ece1",
      textMuted: "#a0aab0",
      accent: "#28392d"
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Welcome to Araasa",
    title: "Savor the Vibe, Taste the Passion",
    description: "Step into an oasis of vibrant flavors, curated brews, and unforgettable dining moments in the heart of Sector 62, Noida.",
    bgImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmSJDTxrpwT2svECgJu2sTk3qe3Mkk4-BYqjs_4BLf51dZ6cDHqSt_fnC_lhVc9pYplz5mnbRsSe0cHvUEYF0Kmpz5fgU2oU8nKPU5T5XlziM3_6ERELOiJkKErv6ya5a0F9Lo7oUA_9Jk=s680-w680-h510-rw",
    stats: [
      { value: "4.8 ★", label: "Guest Satisfaction" },
      { value: "50+", label: "Artisanal Delicacies" },
      { value: "7 Days", label: "Late Night Dining" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "Our Story",
    title: "Where Aesthetic Design Meets Crafted Culinary Art",
    paragraphs: [
      "Nestled in Sector 62, Noida, Araasa Cafe was created as a sanctuary for food lovers, coffee enthusiasts, and social gatherings. Designed with lush greenery, relaxed seating, and elegant ambient lighting, Araasa is built for comfort and connection.",
      "Our menu combines popular global classics with local artisanal touches. From stone-fired wood pizzas and handcrafted pastas to refreshing mocktails and signature brews, every dish is prepared with fresh, premium ingredients."
    ],
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlkFwgMmXb5pIjW4v4Fxy_GyP9awgy_kTQdqJn3Lz_mFtU220AnEoQBD3cukxdSnyVccz7e8mb3XPH43eZxa4TkQEs52LyJXRPQonAevzAMGSqcw4jobPPo9Cj4ieb32h7rYDuHTx3OuHU=s680-w680-h510-rw",
    imageAlt: "Interior seating and ambiance of Araasa Cafe Noida",
    experienceValue: "Top Rated",
    experienceLabel: "Café Destination in Noida"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "Chef's Recommendations",
    title: "Signature Araasa Dishes",
    badge: "Must Try",
    description: "Handcrafted favorites selected by our culinary team to bring out the best flavors of the season.",
    items: [
      {
        badge: "Chef's Pick",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        alt: "Artisanal Wood Fire Pizza",
        diet: "veg",
        title: "Truffle Mushroom & Basil Pizza",
        price: "₹450",
        desc: "Hand-stretched sourdough base with wild mushrooms, mozzarella, fresh basil, and a subtle drizzle of truffle oil."
      },
      {
        badge: "Popular",
        img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600",
        alt: "Signature Cold Brew Drink",
        diet: "veg",
        title: "Araasa Hazelnut Cold Foam Brew",
        price: "₹240",
        desc: "Slow-steeped single-origin cold brew topped with silky hazelnut cream foam and toasted nut powder."
      },
      {
        badge: "House Special",
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600",
        alt: "Creamy Alfredo Pasta dish",
        diet: "nonveg",
        title: "Smoked Chicken Fettuccine",
        price: "₹420",
        desc: "Fresh fettuccine tossed in rich parmesan cream sauce, tender smoked chicken bits, and freshly cracked black pepper."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Dine & Save",
    title: "Exclusive Araasa Offers",
    items: [
      {
        tag: "ONLINE ORDER",
        title: "Flat 15% OFF",
        desc: "Enjoy 15% off when you place your takeout or direct WhatsApp delivery order with us.",
        code: "ARAASA15",
        highlight: false
      },
      {
        tag: "HAPPY HOURS",
        title: "Buy 2 Get 1 Free Mocktails",
        desc: "Available every weekday from 3:00 PM to 7:00 PM on all handcrafted mocktails & chillers.",
        code: "CHILL3",
        highlight: true
      },
      {
        tag: "COMBO SPECIAL",
        title: "Meal For Two @ ₹799",
        desc: "Includes 1 Pizza or Pasta + 1 Starter + 2 Choice Beverages of your preference.",
        code: "DUOPACK",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Explore Our Menu",
    title: "Handcrafted Food & Beverages",
    pdfUrl: "assets/araasa-menu.pdf",
    pdfFilename: "Araasa_Cafe_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "starters", label: "Starters & Small Bites", active: false },
      { id: "mains", label: "Mains & Pizzas", active: false },
      { id: "beverages", label: "Brews & Shakes", active: false }
    ],
    items: [
      {
        category: "starters",
        img: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=600",
        title: "Crispy Peri Peri Fries",
        price: "₹210",
        diet: "veg",
        desc: "Golden tossed potato fries coated with house-special spicy peri-peri seasoning, served with garlic dip.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/araasa-sector-62-rest1143000",
        zomatoUrl: "https://www.zomato.com/ncr/araasa-cafe-sector-62-noida?amp=1"
      },
      {
        category: "mains",
        img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600",
        title: "Classic Margherita Pizza",
        price: "₹380",
        diet: "veg",
        desc: "Crispy thin crust topped with san marzano tomato sauce, fresh mozzarella, cherry tomatoes, and fresh basil.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/araasa-sector-62-rest1143000",
        zomatoUrl: "https://www.zomato.com/ncr/araasa-cafe-sector-62-noida?amp=1"
      },
      {
        category: "mains",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
        title: "Araasa Loaded Chicken Burger",
        price: "₹340",
        diet: "nonveg",
        desc: "Juicy grilled chicken patty topped with melted cheddar, caramelized onions, crispy lettuce, and smoky sauce.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/araasa-sector-62-rest1143000",
        zomatoUrl: "https://www.zomato.com/ncr/araasa-cafe-sector-62-noida?amp=1"
      },
      {
        category: "beverages",
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600",
        title: "Nutella Thick Shake",
        price: "₹260",
        diet: "veg",
        desc: "Rich blend of real Nutella hazelnut spread, whole milk, and vanilla ice cream topped with whipped cream.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/araasa-sector-62-rest1143000",
        zomatoUrl: "https://www.zomato.com/ncr/araasa-cafe-sector-62-noida?amp=1"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Guest Testimonials",
    title: "Loved by Guests Across Noida",
    items: [
      {
        stars: 5,
        text: "\"Araasa Cafe in Sector 62 is an absolute gem! The ambiance is super cozy and photogenic. Food quality is top-notch, especially their stone-baked pizzas and hazelnut coffee. Highly recommended!\"",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
        name: "Ananya Sharma",
        role: "Local Foodie & Visitor"
      },
      {
        stars: 5,
        text: "\"Great place to chill out with friends in Noida. The seating space is comfortable, staff is warm, and the music sets the perfect weekend mood. Will definitely visit again!\"",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
        name: "Rohan Verma",
        role: "Regular Guest"
      },
      {
        stars: 5,
        text: "\"Ordered via Zomato first and fell in love with their pasta! Later visited the actual cafe and the outdoor vibe blew me away. Excellent quality and quick service.\"",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "Pooja Malhotra",
        role: "Google Reviewer"
      }
    ],
    googleCta: {
      title: "Had a great time at Araasa Cafe?",
      desc: "Share your experience with us and help others discover our cafe on Google Maps!",
      url: "https://www.zomato.com/ncr/araasa-cafe-sector-62-noida?amp=1"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Gallery",
    title: "Experience Araasa",
    images: [
      { 
        src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnPapkkAvx3skkN7ykmsSocHUd-NihnjQg1uXBBo2aH97537VaAEiAGJWct5ccxDMyJStLIwtsx7hE5Cy8g4A6iySJV4cJuJ7t1fj7JgmcU-Djea5wSIDzU7SzQDCeBFrTah1yAUX3pZ-RI=s680-w680-h510-rw", 
        alt: "Araasa Cafe interior seating arrangement" 
      },
      { 
        src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlACD407EIu1kD3QfEYOF1awsi7DKCxL9sFHMisyq1L-AFRoRc9RXqHzPFsJlwFIJdEIg3Tv62jPe11RS54KVKpFohWxgncx6SsjDVPl--tIrK0RBoiqVZXR5yw0BQbb0mpPrDHF6r79A=s680-w680-h510-rw", 
        alt: "Outdoor dining ambiance at Araasa" 
      },
      { 
        src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl9AbAd4oLno7hqqv2XQF1fxVmf1iDHWKvhpmE4S9wcvtDXt1ziHtlDN2PxZGhkuid0xCi_RtAsJVUfYIGWkmM0pjat3HZLFcWg3xSDm3L-L-dIVUAQIKlW1ok6ce-jIsQQlceByyzqr0hp=s680-w680-h510-rw", 
        alt: "Signature dishes and beverages at Araasa Cafe" 
      },
      { 
        src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkFgDLPz-yxZyvaNch3InpUTEVGWt-Z2ah0wi2rHjya2wGg5R9vlvuJKgmcJau9yw9ozOvcOHvEyWa55hZ1F8b106IE5mF5hYqM7UDRkcqpIRpQAW-7TKDLPDrVs7WCmyNiR1vTzGRVtMvj=w116-h116-n-k-no-nu", 
        alt: "Cozy corner view inside Araasa Cafe" 
      }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Location & Timings",
    title: "Visit Araasa Cafe",
    description: "Located in the hub of Sector 62, Noida. Drop in for coffee, working sessions, or a late-night feast.",
    address: "Plot No. RN-4, Rasoolpur Nawada, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309",
    hours: [
      "Monday - Thursday: 12:00 PM - 12:00 AM",
      "Friday: 12:00 PM - 12:00 AM",
      "Saturday - Sunday: 12:00 PM - 1:00 AM"
    ],
    email: "contact@araasacafe.com",
    phone: "+91 95999 60570",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5647891234!2d77.362145!3d28.621456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5123456789%3A0x123456789abcdef!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "Araasa Cafe - Bringing exquisite flavors, artisanal drinks, and soothing ambiance to Sector 62, Noida.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/araasacafe?stkn=MTBtMnN1Z2oxcHlmbQ==", iconClass: "ph-instagram-logo" },
      { platform: "swiggy", url: "https://www.swiggy.com/city/noida-1/araasa-sector-62-rest1143000", iconClass: "ph-shopping-bag" },
      { platform: "zomato", url: "https://www.zomato.com/ncr/araasa-cafe-sector-62-noida?amp=1", iconClass: "ph-fork-knife" }
    ],
    copyright: "© 2026 Araasa Cafe. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "Araasa_Guest_WiFi",
    password: "araasacafe2026"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
