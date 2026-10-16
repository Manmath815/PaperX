import React, { useState } from 'react';
import { PartnershipInquiry } from '../../types';
import { submitPartnershipInquiry } from '../../services/inquiryService';
import { Button } from '../ui/Button';
import { CheckCircle2, ShieldAlert, Sparkles, Building2, Send, Copy, Check } from 'lucide-react';

interface PartnershipFormProps {
  initialService?: PartnershipInquiry['interestedService'];
  initialVolume?: string;
  onSuccess?: () => void;
}

export const PartnershipForm: React.FC<PartnershipFormProps> = ({
  initialService = 'waste_collection',
  initialVolume = '',
  onSuccess,
}) => {
  const [formData, setFormData] = useState<PartnershipInquiry>({
    organizationName: '',
    contactName: '',
    workEmail: '',
    phone: '',
    organizationType: 'college',
    approxMonthlyWaste: initialVolume,
    interestedService: initialService,
    city: '',
    message: '',
    website_url: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submissionReceipt, setSubmissionReceipt] = useState<{
    inquiryId: string;
    isDemoMode: boolean;
    submittedAt: string;
    data: PartnershipInquiry;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync if initialVolume changes from calculator
  React.useEffect(() => {
    if (initialVolume) {
      setFormData((prev) => ({ ...prev, approxMonthlyWaste: initialVolume }));
    }
  }, [initialVolume]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    const result = await submitPartnershipInquiry(formData);
    setIsLoading(false);

    if (result.success) {
      setSubmissionReceipt({
        inquiryId: result.inquiryId || 'PX-PRT',
        isDemoMode: !!result.isDemoMode,
        submittedAt: result.submittedAt || new Date().toLocaleString(),
        data: { ...formData },
      });
      if (onSuccess) onSuccess();
    } else {
      setErrorMessage(result.message || 'Please check the entered fields.');
    }
  };

  const handleCopyReceipt = () => {
    if (!submissionReceipt) return;
    const summary = `PaperX B2B Partnership Inquiry\nID: ${submissionReceipt.inquiryId}\nOrganization: ${submissionReceipt.data.organizationName}\nContact: ${submissionReceipt.data.contactName}\nEmail: ${submissionReceipt.data.workEmail}\nPhone: ${submissionReceipt.data.phone}\nService: ${submissionReceipt.data.interestedService}\nCity: ${submissionReceipt.data.city}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResetForm = () => {
    setFormData({
      organizationName: '',
      contactName: '',
      workEmail: '',
      phone: '',
      organizationType: 'college',
      approxMonthlyWaste: '',
      interestedService: 'waste_collection',
      city: '',
      message: '',
      website_url: '',
    });
    setSubmissionReceipt(null);
    setErrorMessage('');
  };

  if (submissionReceipt) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-warm-white border border-warm-beige shadow-paper-lg space-y-6">
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-forest/10 border border-forest/20">
          <CheckCircle2 className="w-8 h-8 text-forest shrink-0 mt-0.5" />
          <div>
            <h3 className="text-xl font-display font-bold text-charcoal">
              Partnership Application Acknowledged
            </h3>
            <p className="text-xs text-charcoal-500 mt-1.5 leading-relaxed">
              {submissionReceipt.isDemoMode ? (
                <>
                  <span className="font-semibold text-forest">Verified in Demonstration Mode:</span> Your partnership profile and recycling specifications have been successfully validated. Configure <code className="bg-warm px-1.5 py-0.5 rounded text-charcoal">VITE_INQUIRY_ENDPOINT</code> in your environment file to dispatch directly to your production API.
                </>
              ) : (
                'Your inquiry has been successfully transmitted to the PaperX operations desk. Our institutional coordinator will review your campus/office profile and connect with you.'
              )}
            </p>
          </div>
        </div>

        {/* Technical receipt details */}
        <div className="p-6 rounded-2xl bg-warm border border-warm-beige font-mono text-xs space-y-3">
          <div className="flex justify-between pb-2 border-b border-warm-beige/80">
            <span className="text-charcoal-400">Tracking Reference:</span>
            <span className="font-bold text-forest">{submissionReceipt.inquiryId}</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-warm-beige/80">
            <span className="text-charcoal-400">Organization:</span>
            <span className="font-semibold text-charcoal">{submissionReceipt.data.organizationName}</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-warm-beige/80">
            <span className="text-charcoal-400">Point of Contact:</span>
            <span className="text-charcoal">{submissionReceipt.data.contactName} ({submissionReceipt.data.phone})</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-warm-beige/80">
            <span className="text-charcoal-400">Service Category:</span>
            <span className="text-charcoal capitalize">{submissionReceipt.data.interestedService.replace('_', ' ')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-charcoal-400">Location Hub:</span>
            <span className="text-charcoal">{submissionReceipt.data.city}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            size="md"
            onClick={handleCopyReceipt}
            className="flex-1"
            leftIcon={copied ? <Check className="w-4 h-4 text-forest" /> : <Copy className="w-4 h-4" />}
          >
            {copied ? 'Reference Copied' : 'Copy Application Summary'}
          </Button>
          <Button
            variant="primary"
            size="md"
            onClick={handleResetForm}
            className="flex-1"
          >
            Submit Another Application
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-warm-white border border-warm-beige shadow-paper-lg">
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-forest block mb-1">
          Institutional Partnership Portal
        </span>
        <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal">
          Start an Institutional Discussion
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-400 mt-2 leading-relaxed">
          Submit your requirements for campus drives, routine office paper collection, or bulk recycled stationery procurement. Our team will follow up with an operational feasibility assessment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Anti-spam honeypot */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="website_url"
            value={formData.website_url}
            onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Org name & Contact name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1.5">
              Organization / Institution Name *
            </label>
            <input
              type="text"
              required
              value={formData.organizationName}
              onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
              placeholder="e.g. Symbiosis Institute of Tech / Infosys Pune"
              className="w-full px-4 py-3 rounded-xl bg-warm border border-warm-beige text-xs sm:text-sm text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1.5">
              Contact Person's Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.contactName}
              onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
              placeholder="e.g. Prof. Rajesh Kulkarni / Sneha Nair"
              className="w-full px-4 py-3 rounded-xl bg-warm border border-warm-beige text-xs sm:text-sm text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Work Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1.5">
              Official / Work Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.workEmail}
              onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
              placeholder="coordinator@institution.ac.in"
              className="w-full px-4 py-3 rounded-xl bg-warm border border-warm-beige text-xs sm:text-sm text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98220 XXXXX"
              className="w-full px-4 py-3 rounded-xl bg-warm border border-warm-beige text-xs sm:text-sm text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest transition-colors"
            />
          </div>
        </div>

        {/* Row 3: Org Type & Interested Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1.5">
              Organization Classification *
            </label>
            <select
              value={formData.organizationType}
              onChange={(e) => setFormData({ ...formData, organizationType: e.target.value as any })}
              className="w-full px-4 py-3 rounded-xl bg-warm border border-warm-beige text-xs sm:text-sm text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest transition-colors"
            >
              <option value="college">University / Degree College</option>
              <option value="school">Primary / Secondary School</option>
              <option value="corporate">Corporate Office / IT Park</option>
              <option value="enterprise">Industrial / Enterprise Campus</option>
              <option value="ngo">Non-Profit / NGO</option>
              <option value="other">Other Commercial Institution</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1.5">
              Primary Service of Interest *
            </label>
            <select
              value={formData.interestedService}
              onChange={(e) => setFormData({ ...formData, interestedService: e.target.value as any })}
              className="w-full px-4 py-3 rounded-xl bg-warm border border-warm-beige text-xs sm:text-sm text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest transition-colors"
            >
              <option value="waste_collection">Institutional Waste-Paper Collection</option>
              <option value="stationery_procurement">Corporate Recycled Stationery Procurement</option>
              <option value="custom_branding">Customized / Co-Branded Notebooks</option>
              <option value="campus_drive">End-of-Semester Campus Sustainability Drive</option>
              <option value="general_partnership">Comprehensive Circular Closed-Loop Partnership</option>
            </select>
          </div>
        </div>

        {/* Row 4: City & Approx Waste Volume */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1.5">
              City / District *
            </label>
            <input
              type="text"
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="e.g. Pune, Pimpri-Chinchwad, Mumbai"
              className="w-full px-4 py-3 rounded-xl bg-warm border border-warm-beige text-xs sm:text-sm text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1.5">
              Approx Monthly Waste Paper Volume (Optional)
            </label>
            <input
              type="text"
              value={formData.approxMonthlyWaste}
              onChange={(e) => setFormData({ ...formData, approxMonthlyWaste: e.target.value })}
              placeholder="e.g. 500 kg / 2 tons / Not yet determined"
              className="w-full px-4 py-3 rounded-xl bg-warm border border-warm-beige text-xs sm:text-sm text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest transition-colors"
            />
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1.5">
            Specific Requirements, Department Needs, or Questions
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your campus schedule, upcoming exam disposal cycles, or annual stationery needs..."
            className="w-full px-4 py-3 rounded-xl bg-warm border border-warm-beige text-xs sm:text-sm text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest transition-colors resize-none"
          />
        </div>

        {/* Operational Disclaimer note */}
        <div className="p-3.5 rounded-xl bg-warm border border-warm-beige text-[11px] text-charcoal-400 leading-relaxed">
          <span className="font-semibold text-charcoal">Note:</span> PaperX reviews all collection inquiries individually based on route feasibility and volume. Submitting this form initiates an exploratory conversation without contractual obligation.
        </div>

        {errorMessage && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
          isLoading={isLoading}
          rightIcon={<Send className="w-4 h-4" />}
        >
          Submit Partnership Inquiry
        </Button>
      </form>
    </div>
  );
};
