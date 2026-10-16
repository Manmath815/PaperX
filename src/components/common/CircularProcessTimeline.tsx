import React, { useState } from 'react';
import { Truck, Layers, Cpu, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  entityRole: 'Direct PaperX Activity' | 'Verified Recycling Partner' | 'Collaborative Network';
  materials: string;
  icon: React.ReactNode;
}

export const CircularProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Waste Paper',
      subtitle: 'Resource Identification',
      description: 'Exam booklets, office filing archives, shredded confidential documents, carton cut-offs, and household magazines are identified for recovery instead of heading to open landfills or incineration.',
      entityRole: 'Collaborative Network',
      materials: 'Colleges, schools, offices, banks & households',
      icon: <Layers className="w-6 h-6 text-forest" />,
    },
    {
      number: '02',
      title: 'Collection',
      subtitle: 'Scheduled Logistics',
      description: 'PaperX facilitates scheduled pickups and institutional deposit bin rotations. We weigh, catalog, and transport recovered paper directly from campus repositories and office hubs.',
      entityRole: 'Direct PaperX Activity',
      materials: 'PaperX collection hubs & partner logistics',
      icon: <Truck className="w-6 h-6 text-forest" />,
    },
    {
      number: '03',
      title: 'Sorting & Processing',
      subtitle: 'Fiber Grading & Pulping',
      description: 'Paper is sorted by fiber grade (white ledger vs kraft vs millboard). In collaboration with accredited paper recycling mills, the paper undergoes contaminant removal, water-efficient hydropulping, and non-chlorine de-inking.',
      entityRole: 'Verified Recycling Partner',
      materials: 'Accredited industrial reprocessing facilities',
      icon: <Cpu className="w-6 h-6 text-forest" />,
    },
    {
      number: '04',
      title: 'Recycled Paper Products',
      subtitle: 'Precision Conversion',
      description: 'The sanitized recycled pulp is cast into uniform sheets, calibrated for thickness and smoothness, and bound into lay-flat journals, heavy-duty retail bags, 75 GSM copier paper, and desk stationery.',
      entityRole: 'Direct PaperX Activity',
      materials: 'Specialized bindery & packaging workshops',
      icon: <BookOpen className="w-6 h-6 text-forest" />,
    },
    {
      number: '05',
      title: 'A New Beginning',
      subtitle: 'Closing the Loop',
      description: 'The finished products return to the very schools, universities, and companies that initiated the collection. When used to completion, they can be recycled again, completing an endless circular loop.',
      entityRole: 'Collaborative Network',
      materials: 'Students, faculty, professionals & consumers',
      icon: <Sparkles className="w-6 h-6 text-forest" />,
    },
  ];

  return (
    <div className="w-full">
      {/* Desktop Horizontal Process Stepper */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-5 gap-3 relative">
          {/* Connection track behind */}
          <div className="absolute top-1/4 left-10 right-10 h-0.5 bg-warm-beige -z-0" />

          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-5 rounded-2xl transition-all duration-300 relative z-10 border ${
                  isSelected 
                    ? 'bg-warm-white border-forest shadow-paper-lg ring-1 ring-forest' 
                    : 'bg-warm/70 border-warm-beige hover:bg-warm-white/90'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${isSelected ? 'bg-forest text-warm-white' : 'bg-warm-beige text-charcoal-400'}`}>
                    {step.number}
                  </span>
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-forest/10' : 'bg-warm-beige/50'}`}>
                    {step.icon}
                  </div>
                </div>

                <h4 className="font-display font-bold text-sm text-charcoal">
                  {step.title}
                </h4>
                <p className="text-[11px] text-charcoal-400 mt-0.5 font-medium">
                  {step.subtitle}
                </p>

                <div className="mt-3 pt-3 border-t border-warm-beige/60">
                  <span className="text-[10px] font-semibold text-forest-600 block">
                    {step.entityRole}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Card */}
        <div className="mt-8 p-8 rounded-3xl bg-warm-white border border-warm-beige shadow-paper-lg">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-mono font-bold text-forest">
                  Stage {steps[activeStep].number} of 05
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-forest/10 text-forest font-medium">
                  {steps[activeStep].entityRole}
                </span>
              </div>

              <h3 className="text-2xl font-display font-extrabold text-charcoal">
                {steps[activeStep].title} — <span className="text-charcoal-400 font-semibold">{steps[activeStep].subtitle}</span>
              </h3>

              <p className="mt-3 text-sm sm:text-base text-charcoal-500 leading-relaxed">
                {steps[activeStep].description}
              </p>
            </div>

            <div className="hidden md:block w-72 shrink-0 p-4 rounded-2xl bg-warm border border-warm-beige text-xs">
              <span className="font-bold text-charcoal uppercase tracking-wider text-[10px] block mb-1">
                Participating Stakeholders
              </span>
              <p className="text-charcoal-500 leading-relaxed">
                {steps[activeStep].materials}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="lg:hidden space-y-4">
        {steps.map((step, idx) => (
          <div 
            key={idx}
            className="p-5 rounded-2xl bg-warm-white border border-warm-beige shadow-paper"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-forest/10 shrink-0">
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-forest">{step.number}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-warm text-charcoal-400 font-medium">
                    {step.entityRole}
                  </span>
                </div>
                <h4 className="font-display font-bold text-base text-charcoal">
                  {step.title}
                </h4>
              </div>
            </div>

            <p className="text-xs text-charcoal-500 leading-relaxed mt-2 pl-11">
              {step.description}
            </p>

            <div className="mt-3 pl-11 text-[11px] text-charcoal-400 font-medium border-t border-warm-beige/40 pt-2">
              <span className="text-charcoal font-semibold">Involved:</span> {step.materials}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
