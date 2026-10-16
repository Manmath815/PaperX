# PaperX — Premium Sustainable Paper & Recycling Website

**PaperX** is an Indian sustainable paper startup transforming waste paper from colleges, schools, offices, and households into affordable, high-grade recycled notebooks, bags, copier paper, and stationery.

*Brand Promise:* **Give paper a second life.**  
*Brand Tagline:* **Good Paper. Better Future.**  
*Headquarters & Pilot Hub:* **Pune, Maharashtra, India**

---

## 🌿 Overview of the Digital Experience

This website has been built to commercial production standards. It bridges three strategic personas:
1. **D2C Sustainable Brand:** Premium aesthetic, tactile paper textures, and conscious consumer stationery.
2. **Climate-Tech Startup:** Transparent circular economy journey, measured impact dashboard targets, and waste volume calculations.
3. **B2B Institutional Supplier:** Institutional waste-paper collection agreements, campus sustainability drives, and corporate procurement channels.

### Adherence to Truth in Marketing Standards
- **Zero Fabricated Certifications:** No invented certifications or synthetic awards.
- **Transparent Impact Metrics:** All impact figures are presented in an editable **Startup Target Dashboard** representing Phase 1 rollout goals for Maharashtra.
- **Honest Integration Layer:** Forms validate thoroughly, guard against automated bot spam with honeypots, and clearly state whether they are running in **Demonstration Mode** or connected to an active production endpoint. No fake storage or insecure client-side PII caching is used.

---

## 🛠️ Technology Stack

- **Framework:** React 18 with TypeScript
- **Bundler & Dev Server:** Vite 5
- **Styling & Design System:** Tailwind CSS (custom PaperX palette with organic paper textures)
- **Icons:** Lucide React
- **Routing:** React Router v6
- **Typography:** Plus Jakarta Sans & Manrope (Headings), Inter (Body)

### Color Palette
- **Forest Green:** `#174D37` (Primary brand color, headers, primary buttons)
- **Deep Charcoal:** `#17231E` (High-contrast typography, footers)
- **Warm Off-White:** `#F7F6F0` (Tactile editorial paper background)
- **Fresh Leaf Green:** `#8EBF78` (Accents, badges, active flow states)
- **Muted Beige:** `#E8E1D2` (Card borders, dividers)

---

## 📂 Project Structure

```
PaperX_web/
├── public/
│   ├── favicon.svg              # Custom PaperX leaf-and-paper-fold SVG monogram
│   ├── robots.txt               # Search engine crawler configuration
│   └── sitemap.xml              # XML Sitemap for search engines
├── src/
│   ├── main.tsx                 # Application entry point
│   ├── App.tsx                  # Router with Layout & Route hierarchy
│   ├── index.css                # Tailwind directives & paper grain utilities
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces for products, forms & metrics
│   ├── config/
│   │   ├── siteConfig.ts        # Centralized address, socials, placeholders & targets
│   │   └── productsData.ts      # Authentic product catalog across 5 categories
│   ├── services/
│   │   └── inquiryService.ts    # Secure form dispatch & validation engine
│   ├── hooks/
│   │   ├── useScrollToTop.ts    # Auto-scroll on route transitions
│   │   └── useSEO.ts            # Dynamic document title & OpenGraph updater
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.tsx # Top pilot launch notification
│   │   │   ├── Navbar.tsx          # Responsive navigation & mobile menu
│   │   │   ├── Footer.tsx          # 5-column footer with Pune hub & links
│   │   │   └── Layout.tsx          # Main application shell
│   │   ├── ui/
│   │   │   ├── Button.tsx          # Reusable accessible button variants
│   │   │   ├── Badge.tsx           # Category & status indicators
│   │   │   ├── Card.tsx            # Elevated paper surface card
│   │   │   ├── Modal.tsx           # Accessible modal with keyboard focus lock
│   │   │   ├── Toast.tsx           # Non-intrusive alert container
│   │   │   └── SectionHeading.tsx  # Editorial section heading component
│   │   ├── forms/
│   │   │   ├── ProductInquiryModal.tsx # Product quotation & sample request modal
│   │   │   ├── PartnershipForm.tsx     # B2B institutional collaboration form
│   │   │   └── ContactForm.tsx         # General contact & questions form
│   │   └── common/
│   │       ├── BrandLogo.tsx           # PaperX monogram logo
│   │       ├── TrustStrip.tsx          # Honest value proposition strip
│   │       ├── CircularProcessTimeline.tsx # 5-step circular lifecycle explorer
│   │       ├── ImpactDashboard.tsx     # Editable startup metrics & math
│   │       └── VolumeEstimator.tsx     # B2B waste volume calculator
│   └── pages/
│       ├── HomePage.tsx          # Editorial landing page
│       ├── ProductsPage.tsx      # Filterable catalog with search & specs
│       ├── HowItWorksPage.tsx    # 5-stage closed loop & operational FAQ
│       ├── ForBusinessesPage.tsx # B2B conversion page & volume calculator
│       ├── AboutUsPage.tsx       # Human brand story & circular values
│       ├── ContactPage.tsx       # Pune headquarters & inquiry desk
│       └── NotFoundPage.tsx      # Accessible custom 404 page
├── .env.example                 # Configuration template
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Installation
```bash
# Clone or navigate to the directory
cd PaperX_web

# Install dependencies
npm install
```

### 3. Local Development
```bash
npm run dev
```
The website will start locally at `http://localhost:3000`.

### 4. Production Build
```bash
# Type check and generate optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ⚙️ Environment Configuration

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

| Variable | Description | Default / Fallback |
| :--- | :--- | :--- |
| `VITE_INQUIRY_ENDPOINT` | Webhook URL (Formspree, Make, Zapier, Supabase, etc.) | If empty, runs in **Transparent Demo Mode** |
| `VITE_INQUIRY_AUTH_TOKEN`| Optional Bearer authorization header | Optional |
| `VITE_WHATSAPP_NUMBER`  | 10–12 digit WhatsApp business desk number | If empty, button shows configurable state |
| `VITE_CONTACT_EMAIL`    | Public contact email displayed on the site | `hello@paperx.in` |
| `VITE_APP_URL`          | Canonical base URL for SEO tags | `https://paperx.in` |

---

## 🌐 Deployment Guidelines

### Deploying on Vercel
1. Import repository on [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Add a `vercel.json` rewrite rule for single-page routing if needed:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Deploying on Netlify
Create a `public/_redirects` file with:
```
/*    /index.html   200
```
Then deploy with build command `npm run build` and publish directory `dist`.
