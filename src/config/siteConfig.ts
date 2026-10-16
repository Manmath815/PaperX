import { ImpactTarget } from '../types';

export const siteConfig = {
  name: 'PaperX',
  tagline: 'Good Paper. Better Future.',
  promise: 'Give paper a second life.',
  mission: 'To make responsible paper consumption practical, accessible, and commercially viable across Indian schools, colleges, and enterprises.',
  
  // Real editable placeholders
  contact: {
    city: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    addressPlaceholder: 'Plot 42, Eco Hub Industrial Area, Pune, Maharashtra 411014, India',
    email: (import.meta.env.VITE_CONTACT_EMAIL as string) || 'hello@paperx.in',
    phoneDisplay: '+91 (020) 2554-XXXX', // Clearly indicated placeholder
    phoneConfigured: false, // Set to true when actual phone is connected
    whatsappNumber: (import.meta.env.VITE_WHATSAPP_NUMBER as string) || '',
    workingHours: 'Monday – Saturday: 9:30 AM – 6:30 PM IST',
    responseCommitment: 'Within 24 business hours',
  },

  socials: {
    linkedin: 'https://linkedin.com/company/paperx-india',
    instagram: 'https://instagram.com/paperx.india',
    twitter: 'https://twitter.com/paperx_in',
    github: 'https://github.com/paperx-sustainability',
  },

  // Transparent impact target dashboard (NO fabricated statistics)
  impactTargets: [
    {
      id: 'target_recovery',
      label: 'Target Waste Recovery',
      targetValue: '50,000+',
      unit: 'kg / quarter',
      statusText: 'Phase 1 Rollout Goal',
      description: 'Capacity planned for institutional paper collection across Pune & Mumbai pilot clusters.',
    },
    {
      id: 'target_institutions',
      label: 'Campus & Office Pilots',
      targetValue: '25+',
      unit: 'Colleges & Offices',
      statusText: 'Pilot Intake Open',
      description: 'Active onboarding of forward-thinking schools, colleges, and corporate workspaces.',
    },
    {
      id: 'target_catalog',
      label: 'Circulated Products',
      targetValue: '18+',
      unit: 'Curated SKUs',
      statusText: 'Production Ready',
      description: 'Handcrafted journals, heavy-duty kraft bags, 75 GSM recycled copiers, and desk kits.',
    },
    {
      id: 'target_diversion',
      label: 'Landfill Diversion Ratio',
      targetValue: '100%',
      unit: 'Recovered Fiber',
      statusText: 'Zero-Waste Commitment',
      description: 'All collected post-consumer waste is channeled into certified hydropulping & reprocessing.',
    },
  ] as ImpactTarget[],

  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Our Products', href: '/products' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'For Businesses', href: '/for-businesses' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};
