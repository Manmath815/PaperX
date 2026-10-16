import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, Layers, Factory, BookOpen, Repeat, ShieldCheck, 
  ArrowRight, CheckCircle2, AlertCircle, HelpCircle 
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useSEO } from '../hooks/useSEO';

export const HowItWorksPage: React.FC = () => {
  useSEO({
    title: 'How It Works — The PaperX Closed-Loop Recycling Model',
    description: 'Learn how PaperX collects waste paper from campuses and offices, coordinates industrial pulping with verified recycling partners, and turns it into premium stationery in India.',
    canonicalPath: '/how-it-works',
  });

  const stages = [
    {
      num: '01',
      title: 'Paper Collection from Organizations & Households',
      scope: 'Direct PaperX Activity',
      tagline: 'Streamlined Logistics & Dedicated Institutional Bins',
      description: 'Paper waste is segregated at source in colleges, universities, corporate offices, and residential communities. PaperX provides branded collection deposit receptacles and coordinates scheduled vehicle pickups tailored to academic exam cycles and office filing schedules.',
      keyPoints: [
        'Routine and on-demand pickups for institutions',
        'Confidential document handling protocols',
        'Weighed on-site with transparent digital recovery receipts',
      ],
      partnerNote: 'Collection logistics and campus bin infrastructure are managed directly by the PaperX operations team.',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '02',
      title: 'Sorting & Responsible Grading',
      scope: 'Direct PaperX Activity',
      tagline: 'Fiber Separation & Decontamination',
      description: 'Collected paper is brought to local aggregation hubs where it is sorted by grade: white ledger (exam papers, copiers), kraft corrugated board, and mixed prints. Plastics, metal paperclips, spiral bindings, and moisture-damaged fibers are carefully removed.',
      keyPoints: [
        'Separation into high-grade white paper vs kraft board',
        'Manual and automated foreign material removal',
        'Baling into high-density cubes to optimize transport efficiency',
      ],
      partnerNote: 'Initial grading and sorting are conducted at our regional aggregation facility in Pune.',
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '03',
      title: 'Conversion into Recycled Pulp',
      scope: 'Verified Recycling Partners',
      tagline: 'Hydropulping, Screen Cleaning & Non-Chlorine De-Inking',
      description: 'The sorted paper bales are dispatched to accredited industrial paper reprocessing mills. Here, fibers are immersed in warm water inside massive hydropulpers, breaking them down into clean cellulose slurry. Non-chlorine flotation de-inking removes print inks without toxic effluence.',
      keyPoints: [
        'Energy & water-efficient closed-loop hydropulping',
        'Zero elemental chlorine bleach utilized',
        'Pulp sanitization and fiber strength calibration',
      ],
      partnerNote: 'Industrial heavy pulping and chemical-free de-inking are executed by accredited paper-mill recycling partners under strict environmental oversight.',
      image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '04',
      title: 'Crafting Recycled Paper Products',
      scope: 'Direct PaperX & Specialist Binderies',
      tagline: 'Precision Converting, Cutting & Lay-Flat Binding',
      description: 'Sanitized paper sheets and boards are cut, ruled with vegetable-based soy inks, and bound into notebooks, office reams, heavy-duty retail bags, and conference gift sets. We maintain strict quality control on paper caliper, smoothness, and spine endurance.',
      keyPoints: [
        'Lay-flat thread sewn and twin-wire notebook construction',
        '140 GSM reinforced kraft carry bags with twisted handles',
        'Co-branding options with university crests and corporate insignias',
      ],
      partnerNote: 'Finishing, binding design, quality verification, and custom debossing are led directly by the PaperX creative workshop.',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '05',
      title: 'A Circular Economy in Action',
      scope: 'Collaborative Ecosystem',
      tagline: 'Closing the Material Loop Indefinitely',
      description: 'The recycled stationery is delivered back to universities for semester examinations, corporate teams for daily work, and local businesses for retail packaging. When used, the paper can be recovered again, preventing virgin tree harvesting and keeping landfills clean.',
      keyPoints: [
        'Closed-loop return to participating partner institutions',
        'Measurable reduction in corporate and campus carbon footprint',
        'Encourages ongoing student and employee environmental stewardship',
      ],
      partnerNote: 'Achieved collaboratively between PaperX, institutional administrators, student bodies, and facility managers.',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="w-full py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-forest block mb-2">
            The Circular Methodology
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-charcoal tracking-tight">
            How Waste Paper Becomes Useful Products
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal-500 leading-relaxed">
            Paper should never be a single-use material. Explore our five-stage circular pathway—from institutional desk collections to verified partner reprocessing and final product delivery.
          </p>

          <div className="mt-6">
            <Button
              to="/for-businesses"
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Schedule a Collection Discussion
            </Button>
          </div>
        </div>

        {/* Operational Division Transparency Callout */}
        <div className="mb-16 p-6 rounded-3xl bg-warm-white border border-warm-beige shadow-paper flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-forest/10 border border-forest/20 text-forest shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-charcoal">
                Operational Transparency
              </h3>
              <p className="text-xs text-charcoal-500 mt-1 max-w-2xl leading-relaxed">
                To maintain commercial efficiency, <strong>PaperX</strong> directly oversees campus & office waste logistics, collection bin networks, sorting, product design, and distribution. Heavy industrial pulping and de-inking are carried out in collaboration with verified paper-mill partners.
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-forest text-warm-white whitespace-nowrap shrink-0">
            Verified Supply Chain
          </span>
        </div>

        {/* 5-Step Detailed Process Cards */}
        <div className="space-y-12">
          {stages.map((stage, idx) => (
            <div
              key={stage.num}
              className={`p-8 sm:p-10 rounded-3xl bg-warm-white border border-warm-beige shadow-paper grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Information */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-forest text-warm-white">
                    Step {stage.num}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-warm border border-warm-beige text-charcoal-600">
                    {stage.scope}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal">
                  {stage.title}
                </h2>

                <p className="text-xs font-bold uppercase tracking-wider text-forest">
                  {stage.tagline}
                </p>

                <p className="text-xs sm:text-sm text-charcoal-500 leading-relaxed">
                  {stage.description}
                </p>

                <div className="pt-2 space-y-2">
                  {stage.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-charcoal-600">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-warm-beige text-[11px] text-charcoal-400 italic">
                  *Operational note: {stage.partnerNote}
                </div>
              </div>

              {/* Context Photo */}
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-warm-beige bg-warm relative">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Virgin vs Recycled Lifecycle Comparison */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-warm border border-warm-beige shadow-paper">
          <SectionHeading
            eyebrow="Environmental Rationale"
            title="Virgin Paper vs. PaperX Circular Paper"
            description="Comparing conventional linear paper manufacturing against the closed-loop recovery pathway."
          />

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-warm-beige text-charcoal-400 uppercase text-[11px] font-bold tracking-wider">
                  <th className="py-3 px-4">Life Cycle Dimension</th>
                  <th className="py-3 px-4 text-charcoal-500">Traditional Virgin Paper</th>
                  <th className="py-3 px-4 text-forest font-bold">PaperX Circular Recovery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-beige text-charcoal-600">
                <tr>
                  <td className="py-4 px-4 font-semibold text-charcoal">Raw Fiber Sourcing</td>
                  <td className="py-4 px-4 text-red-700/80">Felling virgin eucalyptus and pine trees</td>
                  <td className="py-4 px-4 text-forest font-medium">100% recovered university & office paper</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-charcoal">Water Footprint</td>
                  <td className="py-4 px-4">High fresh water consumption per ton</td>
                  <td className="py-4 px-4 text-forest font-medium">Conserves ~26,000 liters water per ton reused</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-charcoal">Bleaching Process</td>
                  <td className="py-4 px-4">Often relies on elemental chlorine compounds</td>
                  <td className="py-4 px-4 text-forest font-medium">Non-chlorine enzymatic flotation de-inking</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-charcoal">Landfill Burden</td>
                  <td className="py-4 px-4">Single-use disposal contributes to municipal waste</td>
                  <td className="py-4 px-4 text-forest font-medium">Diverts ~3 cubic yards landfill volume per ton</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-charcoal">Supply Chain Locality</td>
                  <td className="py-4 px-4">Centralized mills, distant freight routes</td>
                  <td className="py-4 px-4 text-forest font-medium">Regional collection and distribution hubs in India</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Frequently Asked Operational Questions */}
        <div className="mt-20 max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Operational & Logistics Details"
            description="Clear answers about paper collection, data security, and minimum batch requirements."
          />

          <div className="space-y-4">
            {[
              {
                q: 'What types of waste paper can be collected from our institution?',
                a: 'We collect exam answer scripts, student notebooks, discarded photocopy reams, printer paper, unbleached kraft packaging, textbooks, and office filing paper. Heavily laminated plasticized sheets or food-stained paper cannot be processed.',
              },
              {
                q: 'How does PaperX handle confidential examination papers and corporate files?',
                a: 'Confidential examination papers and proprietary corporate documents can be processed through supervised industrial cross-cut shredding prior to pulping. We issue a formal Certificate of Destruction upon request for regulatory compliance.',
              },
              {
                q: 'Is there a minimum volume required for PaperX vehicle pickup?',
                a: 'For scheduled free vehicle pickups, we typically look for a minimum batch threshold of 250 kg in the Pune/Mumbai pilot zones. For smaller quantities, institutions can aggregate their volume in PaperX deposit bins across a semester.',
              },
              {
                q: 'Can colleges buy back notebooks made from their own waste paper?',
                a: 'Yes! This is our flagship Closed-Loop Campus Program. We can turn your university’s semester exam waste into co-branded academic notebooks that are distributed to your incoming students.',
              },
            ].map((faq, fIdx) => (
              <div key={fIdx} className="p-6 rounded-2xl bg-warm-white border border-warm-beige shadow-paper text-left">
                <h4 className="font-display font-bold text-base text-charcoal flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-forest shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-500 mt-2 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-forest text-warm-white text-center">
          <h2 className="text-3xl font-display font-bold text-warm-white">
            Ready to Setup a Collection Discussion?
          </h2>
          <p className="text-xs sm:text-sm text-warm-kraft/80 max-w-xl mx-auto mt-2 leading-relaxed">
            Our campus and enterprise coordinators are ready to evaluate your institution’s paper waste volumes and design a convenient collection rhythm.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/for-businesses"
              variant="secondary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Schedule a Collection Discussion
            </Button>
            <Button
              to="/contact"
              variant="white"
              size="lg"
            >
              Contact Our Operations Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
