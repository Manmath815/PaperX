import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, MessageSquare, 
  Send, CheckCircle2, AlertCircle, ArrowUpRight, ShieldCheck 
} from 'lucide-react';
import { ContactForm } from '../components/forms/ContactForm';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { siteConfig } from '../config/siteConfig';
import { useSEO } from '../hooks/useSEO';

export const ContactPage: React.FC = () => {
  useSEO({
    title: 'Contact PaperX — Headquarters & Inquiries in Pune, India',
    description: 'Get in touch with PaperX for waste paper collection, bulk product quotation, campus drives, and partnership discussions in Pune, Maharashtra.',
    canonicalPath: '/contact',
  });

  const [whatsappNoticeOpen, setWhatsappNoticeOpen] = useState(false);
  const isWhatsappActive = Boolean(siteConfig.contact.whatsappNumber && siteConfig.contact.whatsappNumber.length >= 10);

  const handleWhatsappClick = (e: React.MouseEvent) => {
    if (!isWhatsappActive) {
      e.preventDefault();
      setWhatsappNoticeOpen(true);
    }
  };

  return (
    <div className="w-full py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-forest block mb-2">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-charcoal tracking-tight">
            Contact PaperX
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal-500 leading-relaxed">
            Have a question about waste paper collection, stationery quotation, or campus partnership? Our Pune operations desk is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Channels & Operational Hub */}
          <div className="lg:col-span-5 space-y-8 text-left">
            {/* Primary Contact Card */}
            <div className="p-8 rounded-3xl bg-warm-white border border-warm-beige shadow-paper space-y-6">
              <h3 className="font-display font-bold text-xl text-charcoal">
                Operations & Headquarters
              </h3>

              <div className="space-y-5 text-xs sm:text-sm text-charcoal-600">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-forest/10 border border-forest/15 text-forest shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-charcoal">Registered Operations Hub</span>
                    <p className="text-charcoal-500 mt-0.5 leading-relaxed">
                      {siteConfig.contact.addressPlaceholder}
                    </p>
                    <span className="text-[11px] text-forest font-semibold block mt-1">
                      Serving Pune, Pimpri-Chinchwad & Maharashtra Clusters
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-forest/10 border border-forest/15 text-forest shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-charcoal">Official Email Desk</span>
                    <a 
                      href={`mailto:${siteConfig.contact.email}`} 
                      className="text-forest font-medium hover:underline block mt-0.5"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <span className="text-[11px] text-charcoal-400 block mt-0.5">
                      Response commitment: {siteConfig.contact.responseCommitment}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-forest/10 border border-forest/15 text-forest shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-charcoal">Commercial Helpline</span>
                    <span className="font-mono text-charcoal block mt-0.5">
                      {siteConfig.contact.phoneDisplay}
                    </span>
                    <span className="text-[11px] text-charcoal-400 block mt-0.5">
                      Configurable business desk line
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-forest/10 border border-forest/15 text-forest shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-charcoal">Operational Hours</span>
                    <p className="text-charcoal-500 mt-0.5">
                      {siteConfig.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Desk Button (Honest Configuration State) */}
              <div className="pt-4 border-t border-warm-beige">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400 block mb-2">
                  Instant Support Channel
                </span>
                {isWhatsappActive ? (
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-xs shadow-sm hover:brightness-105 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Chat on WhatsApp with Business Desk
                  </a>
                ) : (
                  <div className="p-4 rounded-2xl bg-warm border border-warm-beige space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-charcoal flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4 text-forest" /> WhatsApp Business Desk
                      </span>
                      <Badge variant="outline" size="sm">
                        Configurable
                      </Badge>
                    </div>
                    <p className="text-[11px] text-charcoal-400 leading-relaxed">
                      Instant WhatsApp routing activates when an official phone number is supplied via <code className="font-mono bg-warm-white px-1 py-0.5 rounded">VITE_WHATSAPP_NUMBER</code>.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Social Links Card */}
            <div className="p-6 rounded-3xl bg-warm border border-warm-beige">
              <h4 className="font-display font-bold text-sm text-charcoal mb-3">
                Digital Presence & Profiles
              </h4>
              <p className="text-xs text-charcoal-500 mb-4 leading-relaxed">
                Connect with our circular updates, recycling tips, and campus stories:
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-forest">
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-warm-white border border-warm-beige hover:border-forest transition-colors flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3 text-charcoal-400" />
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-warm-white border border-warm-beige hover:border-forest transition-colors flex items-center gap-1"
                >
                  Instagram <ArrowUpRight className="w-3 h-3 text-charcoal-400" />
                </a>
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-warm-white border border-warm-beige hover:border-forest transition-colors flex items-center gap-1"
                >
                  X (Twitter) <ArrowUpRight className="w-3 h-3 text-charcoal-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
