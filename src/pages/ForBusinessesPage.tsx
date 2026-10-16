import React, { useState } from 'react';
import { 
  Building2, GraduationCap, Briefcase, RefreshCw, FileText, 
  CheckCircle2, ArrowRight, ShieldCheck, Calculator, Sparkles,
  CalendarCheck, Award, FileSpreadsheet, LockKeyhole, Truck
} from 'lucide-react';
import { PartnershipForm } from '../components/forms/PartnershipForm';
import { VolumeEstimator } from '../components/common/VolumeEstimator';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useSEO } from '../hooks/useSEO';

export const ForBusinessesPage: React.FC = () => {
  useSEO({
    title: 'Business & Institutional Partnerships — Circular Paper Solutions for India',
    description: 'Partner with PaperX for campus paper waste collection drives, confidential corporate document recycling, and co-branded recycled notebooks in India.',
    canonicalPath: '/for-businesses',
  });

  const [selectedService, setSelectedService] = useState<any>('waste_collection');
  const [injectedVolume, setInjectedVolume] = useState<string>('');

  const partnershipTracks = [
    {
      id: 'waste_collection',
      title: 'Institutional Waste Paper Collection',
      icon: <RefreshCw className="w-6 h-6 text-forest" />,
      audience: 'Colleges, Universities & Exam Boards',
      description: 'Scheduled collection of evaluated exam answer books, administrative archives, and library discards. We provide weighing receipts and authorized destruction verification.',
      deliverables: [
        'Organized seasonal or term-end pickup cycles across Maharashtra',
        'Official certificate of recycling & fiber recovery for NAAC criteria',
        'Transparent digital weighment records with itemized receipts',
      ],
    },
    {
      id: 'stationery_procurement',
      title: 'Corporate Recycled Stationery Procurement',
      icon: <Briefcase className="w-6 h-6 text-forest" />,
      audience: 'IT Parks, Banks, Corporate Offices & Enterprises',
      description: 'Replace virgin paper with PaperX 75 GSM copier reams, memo pads, file folders, and meeting notebooks at competitive institutional contract rates.',
      deliverables: [
        'High-speed jam-free copier paper matching standard laser/inkjet specifications',
        'Plastic-free document folders and conference delegate kits',
        'Auditable environmental diversion figures for corporate ESG disclosures',
      ],
    },
    {
      id: 'custom_branding',
      title: 'Custom Co-Branded Stationery',
      icon: <FileText className="w-6 h-6 text-forest" />,
      audience: 'Conferences, Corporate Gifting & Universities',
      description: 'Notebooks, carry bags, and desk organizers personalized with your institution’s emblem, annual theme, or department crest using non-toxic inks.',
      deliverables: [
        'Foil debossing & screen printing on recycled millboard covers',
        'Custom ruled, dot-grid, or blank inner pages with institute watermark',
        'Minimum order quantity starting from 50 units for customized debossing',
      ],
    },
    {
      id: 'campus_drive',
      title: 'Campus Sustainability Collaboration',
      icon: <GraduationCap className="w-6 h-6 text-forest" />,
      audience: 'Student Councils, NSS Wings & Green Campus Clubs',
      description: 'Engage students with end-of-semester collection bins, recycling awareness drives, and student ambassador chapters promoting zero-waste campus habits.',
      deliverables: [
        'Dedicated PaperX collection boxes for dormitories and libraries',
        'Student workshops on circular economy and paper science',
        'Official recognition certificates for student drive organizers',
      ],
    },
  ];

  const onboardingSteps = [
    {
      step: '01',
      title: 'Campus / Facility Audit & Bin Deployment',
      duration: 'Day 1 – 3',
      icon: <Building2 className="w-5 h-5 text-forest" />,
      description: 'Our team coordinates with your administration to assess paper generation points (exam branches, photocopying centers, record rooms) and installs branded PaperX collection bins.',
    },
    {
      step: '02',
      title: 'Scheduled Pickup & Supervised Shredding',
      duration: 'Day 5 – 7',
      icon: <LockKeyhole className="w-5 h-5 text-forest" />,
      description: 'Weighment is verified on-site. Confidential exam sheets and proprietary documents undergo immediate cross-cut shredding with an authorized Certificate of Destruction.',
    },
    {
      step: '03',
      title: 'Closed-Loop Product Return & ESG Ledger',
      duration: 'Day 14',
      icon: <Truck className="w-5 h-5 text-forest" />,
      description: 'Reprocessed notebooks, copier reams, or kraft bags are delivered back to your campus bookstore or office inventory, alongside your official environmental impact ledger.',
    },
  ];

  const handleEstimateApplied = (estimate: {
    orgType: string;
    headcount: number;
    estimatedWasteKg: number;
    notebookEquivalent: number;
    treesSavedPerYear: number;
  }) => {
    setInjectedVolume(`${estimate.estimatedWasteKg} kg/month (Headcount: ${estimate.headcount}, Est. Yield: ${estimate.notebookEquivalent} notebooks/mo)`);
    const formElement = document.getElementById('partnership-form-container');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-forest" />
            <span className="text-xs font-bold uppercase tracking-widest text-forest">
              INSTITUTIONAL B2B COLLABORATION
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-charcoal tracking-tight">
            Your Waste Paper Can Start Something Better.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal-500 leading-relaxed">
            Every year, academic institutions and corporate workspaces generate tons of recoverable paper waste. PaperX provides a structured, responsible pathway to collect, pulp, and return that paper as useful stationery.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 items-center">
            <a
              href="#partnership-form-container"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-forest text-warm-white font-semibold text-sm shadow-paper hover:bg-forest-700 transition-colors"
            >
              Initiate Partnership Discussion <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-xs text-charcoal-400 font-medium">
              • Serving Pune, Mumbai, Pimpri-Chinchwad & expanding Maharashtra clusters
            </span>
          </div>
        </div>

        {/* 3-Step Onboarding Roadmap */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-warm-white border border-warm-beige shadow-paper text-left">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-forest block mb-1">
              Structured Implementation
            </span>
            <h3 className="text-2xl font-display font-extrabold text-charcoal">
              How a PaperX Partnership Rolls Out
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
              A transparent, hassle-free 3-step transition designed to integrate seamlessly into existing facility operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {onboardingSteps.map((s, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-warm border border-warm-beige relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-forest text-warm-white">
                      Step {s.step}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-warm-white border border-warm-beige text-charcoal-600 font-mono">
                      {s.duration}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base text-charcoal mb-2">
                    {s.title}
                  </h4>

                  <p className="text-xs text-charcoal-500 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Core Collaboration Tracks */}
        <div className="mb-20 text-left">
          <SectionHeading
            align="left"
            eyebrow="Collaboration Models"
            title="Tailored Solutions for Your Organization"
            description="Choose the track that fits your operational needs—from term-end exam booklet disposal to routine monthly office deliveries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTracks.map((track) => (
              <div
                key={track.id}
                className="p-8 rounded-3xl bg-warm-white border border-warm-beige shadow-paper hover:shadow-paper-lg transition-all flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-forest/10 border border-forest/15">
                      {track.icon}
                    </div>
                    <Badge variant="green" size="sm">
                      {track.audience}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-display font-bold text-charcoal">
                    {track.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-500 mt-2.5 leading-relaxed">
                    {track.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-warm-beige space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block mb-1">
                      Key Deliverables
                    </span>
                    {track.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-charcoal-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-warm-beige">
                  <button
                    onClick={() => {
                      setSelectedService(track.id);
                      const el = document.getElementById('partnership-form-container');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-forest hover:text-forest-700 flex items-center gap-1.5"
                  >
                    Select this Service in Form →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Volume Estimator Tool */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="Interactive Planner"
            title="Calculate Your Institutional Impact & Yield"
            description="Estimate the volume of paper waste your campus or workforce creates and see the equivalent recycled stationery yield."
          />
          <VolumeEstimator onSelectEstimate={handleEstimateApplied} />
        </div>

        {/* Official Partnership Form Container */}
        <div id="partnership-form-container" className="max-w-4xl mx-auto scroll-mt-28">
          <PartnershipForm
            initialService={selectedService}
            initialVolume={injectedVolume}
          />
        </div>

        {/* Practical Operational Commitment Disclaimer */}
        <div className="mt-20 p-8 rounded-3xl bg-warm border border-warm-beige text-left">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-forest shrink-0 mt-1" />
            <div>
              <h4 className="font-display font-bold text-base text-charcoal">
                Our Operational Commitment to Business & Academic Partners
              </h4>
              <p className="text-xs text-charcoal-500 mt-1.5 leading-relaxed">
                PaperX does not make unverified claims about pickup availability or capacity until an on-site or virtual route assessment is completed with your facilities team. Inquiries are processed by our Pune headquarters, and our team will provide a tailored agreement outlining collection intervals, safety standards, and pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
