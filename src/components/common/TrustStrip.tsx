import React from 'react';
import { RefreshCw, Wallet, Building2, ShieldCheck } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const pillars = [
    {
      icon: <RefreshCw className="w-5 h-5 text-forest" />,
      title: 'Reuse Valuable Resources',
      description: 'Diverting discarded university & office paper into clean circular pulp.',
    },
    {
      icon: <Wallet className="w-5 h-5 text-forest" />,
      title: 'Affordable Recycled Products',
      description: 'High-quality sustainable stationery priced for everyday real-world utility.',
    },
    {
      icon: <Building2 className="w-5 h-5 text-forest" />,
      title: 'Solutions for Institutions & Workspaces',
      description: 'Streamlined waste-paper pickups and scheduled recycled supply deliveries.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-forest" />,
      title: 'Transparent Closed-Loop Mission',
      description: 'Committed to honest recycling without greenwashing or inflated claims.',
    },
  ];

  return (
    <section className="border-y border-warm-beige bg-warm-white/70 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-forest/10 border border-forest/15 shrink-0 mt-0.5">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold font-display text-charcoal">
                  {pillar.title}
                </h3>
                <p className="text-xs text-charcoal-400 mt-1 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
