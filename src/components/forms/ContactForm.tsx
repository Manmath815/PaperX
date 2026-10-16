import React, { useState } from 'react';
import { GeneralContactInquiry } from '../../types';
import { submitGeneralContact } from '../../services/inquiryService';
import { Button } from '../ui/Button';
import { CheckCircle2, ShieldAlert, Send, Sparkles } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<GeneralContactInquiry>({
    name: '',
    email: '',
    phone: '',
    category: 'general',
    city: '',
    message: '',
    website_url: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [receiptDetails, setReceiptDetails] = useState<{
    id: string;
    isDemo: boolean;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    const res = await submitGeneralContact(formData);
    setIsLoading(false);

    if (res.success) {
      setIsSuccess(true);
      setReceiptDetails({
        id: res.inquiryId || 'PX-MSG',
        isDemo: !!res.isDemoMode,
      });
    } else {
      setErrorMessage(res.message || 'Unable to submit your inquiry.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: 'general',
      city: '',
      message: '',
      website_url: '',
    });
    setIsSuccess(false);
    setReceiptDetails(null);
  };

  if (isSuccess && receiptDetails) {
    return (
      <div className="p-8 rounded-3xl bg-warm-white border border-warm-beige shadow-paper space-y-4">
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-forest/10 border border-forest/20">
          <CheckCircle2 className="w-6 h-6 text-forest shrink-0 mt-0.5" />
          <div>
            <h4 className="font-display font-bold text-base text-charcoal">
              Message Received
            </h4>
            <p className="text-xs text-charcoal-500 mt-1 leading-relaxed">
              {receiptDetails.isDemo
                ? 'Your message was successfully validated in Demonstration Mode. Configure VITE_INQUIRY_ENDPOINT in .env to deliver real messages directly to your mailbox.'
                : 'Thank you for reaching out to PaperX. Our Pune headquarters team will respond within 24 business hours.'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-warm border border-warm-beige text-xs font-mono flex justify-between">
          <span className="text-charcoal-400">Tracking Reference:</span>
          <span className="font-bold text-forest">{receiptDetails.id}</span>
        </div>

        <Button variant="outline" size="sm" onClick={handleReset} className="w-full">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-warm-white border border-warm-beige shadow-paper space-y-5">
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website_url"
          tabIndex={-1}
          value={formData.website_url}
          onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
          autoComplete="off"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1.5">
          Inquiry Classification *
        </label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
          className="w-full px-3.5 py-2.5 rounded-xl bg-warm border border-warm-beige text-xs text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest transition-colors"
        >
          <option value="general">General Question</option>
          <option value="collection">Waste Paper Collection Query</option>
          <option value="products">Product Specs & Quotation</option>
          <option value="campus">Campus Ambassador / Student Drive</option>
          <option value="media">Press, Media & Community</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Rahul Deshmukh"
            className="w-full px-3.5 py-2.5 rounded-xl bg-warm border border-warm-beige text-xs text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1">
            City *
          </label>
          <input
            type="text"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="e.g. Pune / Mumbai"
            className="w-full px-3.5 py-2.5 rounded-xl bg-warm border border-warm-beige text-xs text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="rahul@example.com"
            className="w-full px-3.5 py-2.5 rounded-xl bg-warm border border-warm-beige text-xs text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1">
            Contact Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98XXXXXXXX"
            className="w-full px-3.5 py-2.5 rounded-xl bg-warm border border-warm-beige text-xs text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1">
          Your Message *
        </label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can we assist your paper recovery or product needs?..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-warm border border-warm-beige text-xs text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest resize-none"
        />
      </div>

      {errorMessage && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="md"
        className="w-full"
        isLoading={isLoading}
        rightIcon={<Send className="w-4 h-4" />}
      >
        Send Message
      </Button>
    </form>
  );
};
