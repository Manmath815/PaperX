import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-forest text-warm-white text-xs py-2 px-4 text-center font-medium border-b border-forest-700 relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-leaf/20 text-leaf text-[11px] font-semibold">
          <Sparkles className="w-3 h-3" /> Pilot Phase 1
        </span>
        <span className="text-warm-beige">
          Paper recovery pilots launching across educational institutions & offices in Maharashtra.
        </span>
        <Link 
          to="/for-businesses" 
          className="inline-flex items-center gap-1 text-leaf font-bold hover:underline ml-1"
        >
          Explore Partnerships <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};
