# Crony Electronics Pvt Ltd - Corporate Web Application

> **Pioneering Energy Saving Products & Industrial Engineering Since 1993**

A high-performance modern web application for **Crony Electronics Pvt Ltd**, engineered with React, Vite, and custom CSS. Showcasing 30+ years of industrial innovation across microprocessor digital AC energy savers, breakthrough solid-state voltage regulation (VRP), sustainable daylight harvesting, and German nora® high-performance rubber floor coverings.

---

## ⚡ Key Highlights & Features

- **Full-Screen 100vh Hero Slider**: Cinematic single-background Ken Burns slow-zoom animation powered by Swiper with fluid horizontal sliding transitions.
- **Corporate Portfolio & Showcase**: Highlighting flagship products (Microprocessor AC Saver, Solid State VRP, Elastoclad Thermal Barrier, nora® Cleanroom/ESD Rubber Floorings).
- **Interactive Working Process & Tabs**: Responsive, centered step-by-step industrial engineering methodology.
- **Enterprise Client Portfolio**: Featuring trusted corporate partnerships with ONGC, Indian Railways, L&T, Mahindra & Mahindra, Hindalco, and Kirloskar.
- **Dynamic Request a Quote Modal**: Context-aware industrial RFQ modal allowing clients to select specific product lines and request engineering audits.
- **Optimized & Responsive**: Mobile-first architecture, sub-second Vite HMR, and smooth GPU-accelerated micro-animations.

---

## 🛠 Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Vanilla CSS, Bootstrap 5 grid utilities, Flaticon & FontAwesome icons
- **Carousels & Animation**: Swiper.js with custom GPU-accelerated Ken Burns transforms
- **Build Tool**: Vite (Lightning-fast HMR and optimized production bundles)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Saishhhhhhh/cronyelectronics.git

# 2. Navigate to project root
cd cronyelectronics

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

The application will be live at `http://localhost:5173`.

---

## 📦 Production Build

```bash
# Build optimized production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```
├── public/
│   └── assets/             # Vendor scripts, fonts, and industrial photography
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Header.jsx
│   │   ├── HeroSlider.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── WorkingProcess.jsx
│   │   ├── ProjectsSlider.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ClientsSlider.jsx
│   │   ├── NewsSection.jsx
│   │   ├── QuoteModal.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── cronyData.js    # Centralized company data, products & projects
│   ├── App.css             # Main styling, animations & theme overrides
│   ├── App.jsx             # Main layout and modal state
│   └── main.jsx            # Application entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 📄 License & Ownership

© 1993–2026 Crony Electronics Pvt Ltd. All rights reserved.
