import React, { useState } from 'react';
import { Layers, ArrowRight, Sparkles, Droplets, CheckCircle2, RefreshCw } from 'lucide-react';

interface TransformationStage {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  fiberState: string;
  environmentalBenefit: string;
  imageUrl: string;
  bulletPoints: string[];
}

export const MaterialMetamorphosis: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  const stages: TransformationStage[] = [
    {
      id: 'waste_collection',
      badge: 'Input Phase',
      title: 'Discarded Academic & Office Paper',
      subtitle: 'Post-consumer exam scripts, filing archives, and carton trim',
      fiberState: 'Pre-consumer & post-consumer mixed cellulose fibers containing print ink, metal staples, and dust.',
      environmentalBenefit: 'Prevents 100% of collected paper from entering open municipal landfills or toxic trash fires.',
      imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=80',
      bulletPoints: [
        'Organized collection bins installed across partner campuses and IT offices',
        'Confidential documents cross-shredded with verification certificates',
        'Mechanical removal of foreign metal clips, plastic bindings, and tapes',
      ],
    },
    {
      id: 'processing',
      badge: 'Refining Phase',
      title: 'Hydropulping & Non-Chlorine De-Inking',
      subtitle: 'Gentle water slurry separation conducted with certified paper mills',
      fiberState: 'Cleaned, sanitized cellulosic slurry with fiber length preserved for tensile durability.',
      environmentalBenefit: 'Saves ~26,000 liters of fresh water and 17 trees per metric ton compared to virgin tree logging.',
      imageUrl: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=1000&q=80',
      bulletPoints: [
        'Warm water hydropulping breaks down paper without destroying fiber length',
        'Enzymatic and air-flotation de-inking extracts print inks cleanly',
        'Zero elemental chlorine (ECF/PCF) bleach ensures zero toxic dioxin release',
      ],
    },
    {
      id: 'reborn_product',
      badge: 'Output Phase',
      title: 'Tactile, Durable Recycled Stationery',
      subtitle: 'Precision calendered sheets, lay-flat thread sewing, and retail packaging',
      fiberState: 'Dense, smooth 75–140 GSM recycled sheets ready for smooth fountain pen and copier use.',
      environmentalBenefit: 'Closes the loop by returning products back to the same colleges and corporate desks.',
      imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
      bulletPoints: [
        'Calendered for uniform thickness and minimal ink bleed-through',
        'Bound with lay-flat 180° Smyth sewing or durable steel twin-wire',
        'Custom embossed with university crests and corporate sustainability logos',
      ],
    },
  ];

  const currentStage = stages[activeStageIndex];

  return (
    <div className="w-full">
      {/* Interactive Metamorphosis Stepper Tabs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8 p-1.5 rounded-2xl bg-warm-white border border-warm-beige shadow-sm">
        {stages.map((stage, idx) => {
          const isActive = activeStageIndex === idx;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageIndex(idx)}
              className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 select-none ${
                isActive
                  ? 'bg-forest text-warm-white shadow-paper'
                  : 'text-charcoal-500 hover:text-charcoal hover:bg-warm'
              }`}
            >
              <span className={`w-5 h-5 rounded-full text-[11px] font-mono flex items-center justify-center ${
                isActive ? 'bg-leaf text-forest-900 font-bold' : 'bg-warm-beige text-charcoal-400'
              }`}>
                0{idx + 1}
              </span>
              <span>{stage.title.split('&')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Transformation Display Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-3xl bg-warm-white border border-warm-beige shadow-paper-lg">
        {/* Left: Imagery with tactile badge overlay */}
        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-warm border border-warm-beige relative group">
            <img
              src={currentStage.imageUrl}
              alt={currentStage.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-forest text-warm-white text-[11px] font-bold uppercase tracking-wider">
                {currentStage.badge}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-warm-white/95 backdrop-blur-sm border border-warm-beige/80 text-xs">
              <span className="font-bold text-forest block text-[10px] uppercase tracking-wider">
                Fiber Microstructure
              </span>
              <p className="text-charcoal-600 mt-0.5 leading-snug">
                {currentStage.fiberState}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Technical Explanation */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-forest block mb-1">
              Phase 0{activeStageIndex + 1} of 03
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal">
              {currentStage.title}
            </h3>
            <p className="text-xs sm:text-sm text-forest-600 font-medium mt-1">
              {currentStage.subtitle}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {currentStage.bulletPoints.map((point, pIdx) => (
              <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-600">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </div>
            ))}
          </div>

          {/* Environmental Gain Box */}
          <div className="p-4 rounded-2xl bg-warm border border-warm-beige flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-forest shrink-0 mt-0.5" />
            <div className="text-xs text-charcoal-600 leading-relaxed">
              <span className="font-bold text-charcoal">Environmental Impact:</span>{' '}
              {currentStage.environmentalBenefit}
            </div>
          </div>

          {/* Next Phase Quick Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-warm-beige">
            <span className="text-xs text-charcoal-400 font-mono">
              Stage 0{activeStageIndex + 1} / 03
            </span>
            <button
              onClick={() => setActiveStageIndex((prev) => (prev + 1) % stages.length)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-forest hover:text-forest-700 transition-colors"
            >
              <span>{activeStageIndex === 2 ? 'Restart Journey' : 'See Next Transformation'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
