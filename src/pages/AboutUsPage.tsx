import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, Shield, Sparkles, Target, Compass, CheckCircle2, 
  ArrowRight, TreePine, Recycle, Globe 
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionHeading } from '../components/ui/SectionHeading';
import { siteConfig } from '../../src/config/siteConfig';
import { useSEO } from '../hooks/useSEO';

export const AboutUsPage: React.FC = () => {
  useSEO({
    title: 'About PaperX — We See Potential Where Others See Waste',
    description: 'Learn why PaperX was founded in Pune, India to tackle paper waste, champion circular recycling, and make recycled paper products affordable and practical.',
    canonicalPath: '/about',
  });

  const coreValues = [
    {
      title: 'Practical Over Performative',
      description: 'Sustainability must be commercially viable and everyday-accessible, not a niche luxury or high-markup novelty.',
      icon: <Target className="w-5 h-5 text-forest" />,
    },
    {
      title: 'Radical Supply Chain Transparency',
      description: 'We do not claim phantom certifications or fabricate eco-metrics. We clearly state what we do directly and what our recycling mill partners perform.',
      icon: <Shield className="w-5 h-5 text-forest" />,
    },
    {
      title: 'Circular Material Stewardship',
      description: 'Every sheet of paper contains cellulose fiber that can be repurposed up to 5 to 7 times before degrading. We maximize this lifecycle.',
      icon: <Recycle className="w-5 h-5 text-forest" />,
    },
    {
      title: 'Youth & Campus Driven',
      description: 'Colleges and schools represent the highest concentration of future leaders and paper generation. We build student-first recycling habits.',
      icon: <Compass className="w-5 h-5 text-forest" />,
    },
  ];

  return (
    <div className="w-full py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-forest block mb-2">
            The PaperX Story
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-charcoal tracking-tight">
            We See Potential Where Others See Waste.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal-500 leading-relaxed">
            PaperX was born from a straightforward observation across Indian college campuses and corporate corridors: immense piles of paper discarded every semester, while demand for new notebooks and packaging surges every day.
          </p>
        </div>

        {/* Editorial Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-charcoal">
              The Reality of Paper in India
            </h2>
            <p className="text-sm sm:text-base text-charcoal-500 leading-relaxed">
              India is one of the fastest-growing paper consumers globally. From university semester examinations, assignment notebooks, and entrance tests to administrative corporate filings, millions of sheets are written on once and discarded.
            </p>
            <p className="text-sm sm:text-base text-charcoal-500 leading-relaxed">
              Unfortunately, much of this high-grade paper either ends up in open dumps, gets incinerated, or degrades in disorganized storage rooms. Meanwhile, fresh virgin pulp is harvested from forests to produce the next batch of notebooks.
            </p>
            <div className="p-4 rounded-2xl bg-forest/5 border border-forest/15 text-xs text-charcoal-600 leading-relaxed">
              <span className="font-bold text-forest">Our Core Realization:</span> Paper is not garbage—it is pre-sorted, high-density cellulose fiber waiting for a second life. When collected systematically and pulped responsibly, it yields beautiful, durable stationery that rivals virgin paper.
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-warm-beige shadow-paper-lg bg-warm">
              <img
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1000&q=80"
                alt="Stacked notebooks and textured recycled paper showcasing craft and sustainability"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="p-8 sm:p-10 bg-warm-white border-warm-beige text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-forest block mb-2">
              Our Mission
            </span>
            <h3 className="text-2xl font-display font-bold text-charcoal mb-4">
              Making Circular Paper Practical and Accessible
            </h3>
            <p className="text-sm text-charcoal-500 leading-relaxed">
              Our mission is to establish efficient paper recovery loops across Indian colleges, schools, and offices, turning discarded paper into durable, affordable recycled products. We aim to remove the stigma that recycled paper is flimsy or expensive.
            </p>
          </Card>

          <Card className="p-8 sm:p-10 bg-charcoal text-warm-white border-charcoal-600 text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-leaf block mb-2">
              Our Vision
            </span>
            <h3 className="text-2xl font-display font-bold text-warm-white mb-4">
              Every Sheet of Paper Given a Second Life
            </h3>
            <p className="text-sm text-warm-kraft/80 leading-relaxed">
              We envision an educational and commercial ecosystem across India where purchasing stationery from virgin wood pulp is considered obsolete. A future where every notebook on a student's desk was created from the recovered exams of the year before.
            </p>
          </Card>
        </div>

        {/* Core Principles */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="What Guides Us"
            title="Our Operating Principles"
            description="The values behind every collection route, partnership agreement, and product batch."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <Card key={idx} className="p-6 bg-warm-white border-warm-beige text-left flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-2xl bg-forest/10 border border-forest/15 w-fit mb-4">
                    {val.icon}
                  </div>
                  <h4 className="font-display font-bold text-base text-charcoal">
                    {val.title}
                  </h4>
                  <p className="text-xs text-charcoal-500 mt-2 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* The Role of Our Community & Partners */}
        <div className="p-8 sm:p-12 rounded-3xl bg-warm border border-warm-beige shadow-paper text-left mb-20">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-forest block mb-2">
              Collective Stewardship
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-charcoal">
              A System Powered by People
            </h3>
            <p className="text-sm text-charcoal-500 mt-3 leading-relaxed">
              PaperX is not an isolated factory; it is a distributed network. It succeeds because college department heads designate recycling drop boxes, office facility managers schedule monthly shredding pickups, students carry recycled journals, and families sort newspapers at home.
            </p>
            <p className="text-sm text-charcoal-500 mt-3 leading-relaxed">
              We are grateful to every pilot school, corporate manager, and individual who refuses to let paper go to waste.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="p-8 sm:p-12 rounded-3xl bg-forest text-warm-white text-center">
          <h2 className="text-3xl font-display font-bold text-warm-white">
            Be Part of the PaperX Journey
          </h2>
          <p className="text-xs sm:text-sm text-warm-kraft/80 max-w-xl mx-auto mt-2 leading-relaxed">
            Whether you want to organize a collection drive at your campus or switch your team's stationery, we would love to collaborate.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/for-businesses"
              variant="secondary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Partner With Us
            </Button>
            <Button
              to="/products"
              variant="white"
              size="lg"
            >
              View Our Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
