import React, { useState } from 'react';
import { Calculator, ArrowRight, Sparkles, Building, GraduationCap, Briefcase, Award } from 'lucide-react';
import { Button } from '../ui/Button';

interface VolumeEstimatorProps {
  onSelectEstimate?: (estimateData: {
    orgType: string;
    headcount: number;
    estimatedWasteKg: number;
    notebookEquivalent: number;
    treesSavedPerYear: number;
  }) => void;
}

export const VolumeEstimator: React.FC<VolumeEstimatorProps> = ({ onSelectEstimate }) => {
  const [orgType, setOrgType] = useState<'college' | 'corporate' | 'school'>('college');
  const [headcount, setHeadcount] = useState<number>(1500);

  // Benchmarked monthly generation for Indian institutions
  const ratePerPerson = {
    college: 0.85, // Exams, submissions, admin, library
    corporate: 1.25, // Forms, printouts, billing, packaging
    school: 0.50, // Worksheets, notebooks
  }[orgType];

  const estimatedWasteKg = Math.round(headcount * ratePerPerson);
  // 1 standard A5 192-page recycled notebook uses ~250g clean recovered secondary fiber
  const notebookEquivalent = Math.round((estimatedWasteKg * 0.75) / 0.25);
  // 1,000 kg saves 17 trees, so annual (12 months):
  const treesSavedPerYear = Math.max(1, Math.round(((estimatedWasteKg * 12) / 1000) * 17));
  const waterSavedLitersYear = Math.round(((estimatedWasteKg * 12) / 1000) * 26000);

  const complianceBenefit = {
    college: 'Eligible for NAAC Criterion 7.1.3 & 7.1.5 Green Campus Audit Points',
    corporate: 'Generates Auditable Post-Consumer Diversion Data for Corporate ESG Reports',
    school: 'Fulfills CBSE & State Board Environmental Stewardship Best Practices',
  }[orgType];

  const handleApply = () => {
    if (onSelectEstimate) {
      onSelectEstimate({
        orgType,
        headcount,
        estimatedWasteKg,
        notebookEquivalent,
        treesSavedPerYear,
      });
    }
  };

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-warm-white border border-warm-beige shadow-paper-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-warm-beige">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-forest/10 border border-forest/20 text-forest">
            <Calculator className="w-6 h-6" />
          </div>
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-charcoal">
              Institutional Paper Recovery & ESG Estimator
            </h3>
            <p className="text-xs text-charcoal-400 mt-0.5">
              Calculate expected monthly paper yield and closed-loop stationery output for your campus or office
            </p>
          </div>
        </div>
        <span className="text-[11px] font-mono font-bold px-3 py-1.5 rounded-full bg-leaf/20 text-forest-900 w-fit">
          Benchmark Modeling
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Org Type Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-2.5">
              Select Institution Category
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'college', label: 'College / University', icon: <GraduationCap className="w-4 h-4" /> },
                { id: 'corporate', label: 'Corporate Office', icon: <Briefcase className="w-4 h-4" /> },
                { id: 'school', label: 'School / Academy', icon: <Building className="w-4 h-4" /> },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setOrgType(item.id as any)}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-3.5 rounded-2xl border text-xs font-semibold transition-all ${
                    orgType === item.id
                      ? 'bg-forest text-warm-white border-forest shadow-paper'
                      : 'bg-warm border-warm-beige text-charcoal-600 hover:bg-warm-white'
                  }`}
                >
                  {item.icon}
                  <span className="text-center">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Headcount Slider */}
          <div>
            <div className="flex justify-between items-center mb-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-charcoal-400">
                {orgType === 'corporate' ? 'Workforce / Employee Headcount' : 'Student & Faculty Headcount'}
              </label>
              <span className="font-display font-extrabold text-forest text-base px-3 py-0.5 rounded-xl bg-forest/10">
                {headcount.toLocaleString('en-IN')} {orgType === 'corporate' ? 'employees' : 'students'}
              </span>
            </div>
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={headcount}
              onChange={(e) => setHeadcount(Number(e.target.value))}
              className="w-full h-2.5 bg-warm-beige rounded-lg appearance-none cursor-pointer accent-forest focus:outline-none"
            />
            <div className="flex justify-between text-[10px] text-charcoal-400 font-mono mt-1">
              <span>100</span>
              <span>2,500</span>
              <span>5,000</span>
              <span>10,000+</span>
            </div>
          </div>

          {/* Compliance & Audit Note */}
          <div className="p-4 rounded-2xl bg-forest/5 border border-forest/15 flex items-start gap-3 text-xs text-charcoal-600">
            <Award className="w-5 h-5 text-forest shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-forest block">Institutional Compliance Value:</span>
              {complianceBenefit}
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-5 p-7 rounded-3xl bg-charcoal text-warm-white border border-charcoal-600 space-y-4">
          <div className="flex items-center justify-between border-b border-charcoal-600 pb-3">
            <span className="text-xs text-warm-kraft/80 font-medium">Monthly Paper Recovery</span>
            <span className="text-2xl font-display font-extrabold text-leaf">
              ~{estimatedWasteKg.toLocaleString('en-IN')} kg
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-charcoal-600 pb-3">
            <span className="text-xs text-warm-kraft/80 font-medium">Notebook Equivalent / Month</span>
            <span className="text-2xl font-display font-extrabold text-warm-white">
              ~{notebookEquivalent.toLocaleString('en-IN')} books
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-charcoal-600 pb-3">
            <span className="text-xs text-warm-kraft/80 font-medium">Annual Trees Conserved</span>
            <span className="text-2xl font-display font-extrabold text-leaf">
              ~{treesSavedPerYear} mature trees
            </span>
          </div>

          <div className="flex items-center justify-between pb-1">
            <span className="text-xs text-warm-kraft/80 font-medium">Annual Water Saved</span>
            <span className="text-xl font-display font-bold text-warm-kraft">
              ~{(waterSavedLitersYear / 1000).toFixed(0)}k Liters
            </span>
          </div>

          <p className="text-[11px] text-warm-kraft/60 leading-normal pt-2">
            *Estimates represent empirical benchmark averages for institutions in India. PaperX conducts on-site weighment audits for exact operational planning.
          </p>

          {onSelectEstimate && (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleApply}
              className="w-full mt-2"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Transfer Estimate to Partnership Form
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
