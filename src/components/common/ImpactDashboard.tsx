import React from 'react';
import { Target, Info, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const ImpactDashboard: React.FC = () => {
  return (
    <div className="w-full">
      {/* Transparency Banner */}
      <div className="mb-6 p-4 rounded-2xl bg-forest/5 border border-forest/15 flex items-start gap-3">
        <Info className="w-5 h-5 text-forest shrink-0 mt-0.5" />
        <div className="text-xs text-charcoal-500 leading-relaxed">
          <span className="font-bold text-forest">Honest Impact Commitment:</span> The figures below represent our active operational capacity targets and pilot milestones for the Maharashtra region. As an early-stage circular startup, we report verified milestones transparently to our partner institutions rather than claiming speculative numbers.
        </div>
      </div>

      {/* Target Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {siteConfig.impactTargets.map((item) => (
          <div 
            key={item.id}
            className="p-6 rounded-3xl bg-warm-white border border-warm-beige shadow-paper hover:shadow-paper-lg transition-all duration-200 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-forest/5 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-forest/10 text-forest">
                  {item.statusText}
                </span>
                <Target className="w-4 h-4 text-forest-400" />
              </div>

              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal tracking-tight">
                  {item.targetValue}
                </span>
                <span className="text-xs font-semibold text-charcoal-400">
                  {item.unit}
                </span>
              </div>

              <h4 className="font-display font-bold text-sm text-charcoal mt-2">
                {item.label}
              </h4>

              <p className="text-xs text-charcoal-400 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Environmental Equivalent Formula Explanation */}
      <div className="mt-8 p-6 rounded-3xl bg-charcoal text-warm-white border border-charcoal-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-bold tracking-widest text-leaf">
              Circular Economy Math
            </span>
            <h4 className="text-lg font-display font-bold mt-1 text-warm-white">
              Why Every Metric Ton of Recovered Paper Matters
            </h4>
            <p className="text-xs sm:text-sm text-warm-kraft/80 mt-2 leading-relaxed">
              According to established environmental life-cycle analyses, recycling 1 metric ton (1,000 kg) of post-consumer paper conserves roughly 17 trees, avoids 7,000 gallons of water usage, and eliminates approximately 3 cubic yards of landfill clutter.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <div className="p-3.5 rounded-2xl bg-charcoal-800 border border-charcoal-600 text-center min-w-[130px]">
              <span className="block text-xl font-bold font-display text-leaf">~17</span>
              <span className="text-[11px] text-warm-kraft/70">Trees Saved / Ton</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-charcoal-800 border border-charcoal-600 text-center min-w-[130px]">
              <span className="block text-xl font-bold font-display text-leaf">~26,000 L</span>
              <span className="text-[11px] text-warm-kraft/70">Water Conserved / Ton</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
