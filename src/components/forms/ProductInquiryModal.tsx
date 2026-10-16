import React, { useState, useEffect } from 'react';
import { Product, ProductInquiry } from '../../types';
import { submitProductInquiry } from '../../services/inquiryService';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CheckCircle2, ShieldAlert, Sparkles, Download, Copy, Check } from 'lucide-react';

interface ProductInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: Product | null;
  allProducts: Product[];
}

export const ProductInquiryModal: React.FC<ProductInquiryModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
  allProducts,
}) => {
  const [inquiryType, setInquiryType] = useState<'individual' | 'bulk' | 'sample_kit'>('bulk');
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [quantity, setQuantity] = useState('');
  const [customizationNeeded, setCustomizationNeeded] = useState(false);
  const [notes, setNotes] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submissionResult, setSubmissionResult] = useState<{
    inquiryId: string;
    isDemoMode: boolean;
    submittedAt: string;
    payload: any;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setSelectedProductId(selectedProduct.id);
    } else if (allProducts.length > 0 && !selectedProductId) {
      setSelectedProductId(allProducts[0].id);
    }
  }, [selectedProduct, allProducts]);

  const activeProduct = allProducts.find((p) => p.id === selectedProductId) || selectedProduct;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    const payload: ProductInquiry = {
      productId: activeProduct?.id,
      productName: activeProduct?.name || 'General Inquired Item',
      inquiryType,
      customerName,
      email,
      phone,
      organization: organization.trim() || undefined,
      estimatedQuantity: quantity,
      customizationNeeded,
      notes,
      website_url: honeypot,
    };

    const result = await submitProductInquiry(payload);
    setIsLoading(false);

    if (result.success) {
      setSubmissionResult({
        inquiryId: result.inquiryId || 'PX-INQ',
        isDemoMode: !!result.isDemoMode,
        submittedAt: result.submittedAt || new Date().toLocaleString(),
        payload,
      });
    } else {
      setErrorMessage(result.message || 'Validation error. Please verify your entries.');
    }
  };

  const handleResetAndClose = () => {
    setSubmissionResult(null);
    setErrorMessage('');
    onClose();
  };

  const copyReceipt = () => {
    if (!submissionResult) return;
    const text = `PaperX Inquiry Receipt\nID: ${submissionResult.inquiryId}\nProduct: ${submissionResult.payload.productName}\nQty: ${submissionResult.payload.estimatedQuantity}\nContact: ${submissionResult.payload.customerName} (${submissionResult.payload.email})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleResetAndClose}
      title={submissionResult ? 'Inquiry Receipt' : 'Request Product Quotation'}
      description={
        submissionResult 
          ? 'Confirmation & technical transmission record'
          : 'Direct quotation & sample kit inquiries for schools, offices, and individuals'
      }
      maxWidth="xl"
    >
      {submissionResult ? (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-forest/10 border border-forest/20 flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-forest shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-bold text-base text-charcoal">
                Quotation Request Validated
              </h4>
              <p className="text-xs text-charcoal-500 mt-1 leading-relaxed">
                {submissionResult.isDemoMode
                  ? 'Your inquiry has been formatted and validated in Demonstration Mode. In production, this dispatches securely to the PaperX sales webhook or CRM.'
                  : 'Your inquiry has been dispatched to the PaperX commercial desk.'}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-warm border border-warm-beige text-xs space-y-2.5 font-mono">
            <div className="flex justify-between pb-2 border-b border-warm-beige">
              <span className="text-charcoal-400">Reference ID:</span>
              <span className="font-bold text-forest">{submissionResult.inquiryId}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-warm-beige">
              <span className="text-charcoal-400">Timestamp:</span>
              <span className="text-charcoal">{submissionResult.submittedAt}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-warm-beige">
              <span className="text-charcoal-400">Selected Product:</span>
              <span className="font-bold text-charcoal text-right max-w-[200px] truncate">{submissionResult.payload.productName}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-warm-beige">
              <span className="text-charcoal-400">Quantity / Scale:</span>
              <span className="text-charcoal">{submissionResult.payload.estimatedQuantity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal-400">Requester:</span>
              <span className="text-charcoal">{submissionResult.payload.customerName} ({submissionResult.payload.email})</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={copyReceipt} 
              className="flex-1"
              leftIcon={copied ? <Check className="w-4 h-4 text-forest" /> : <Copy className="w-4 h-4" />}
            >
              {copied ? 'Copied Receipt' : 'Copy Reference'}
            </Button>
            <Button variant="primary" size="sm" onClick={handleResetAndClose} className="flex-1">
              Done
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot field for spam bots */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_url_hp">Leave empty</label>
            <input
              id="website_url_hp"
              type="text"
              name="website_url"
              tabIndex={-1}
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              autoComplete="off"
            />
          </div>

          {/* Inquiry Type Toggle */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-2">
              Inquiry Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'bulk', label: 'Bulk Institution' },
                { id: 'sample_kit', label: 'Sample Kit' },
                { id: 'individual', label: 'Individual / Retail' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setInquiryType(t.id as any)}
                  className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all ${
                    inquiryType === t.id
                      ? 'bg-forest text-warm-white border-forest shadow-sm'
                      : 'bg-warm border-warm-beige text-charcoal-600 hover:bg-warm-white'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1.5">
              Target Product Item
            </label>
            <select
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-warm border border-warm-beige text-xs font-medium text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest"
            >
              {allProducts.map((p) => (
                <option key={p.id} value={p.id}>
                  [{p.categoryLabel}] {p.name}
                </option>
              ))}
            </select>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Aditi Sharma"
                className="w-full px-3.5 py-2.5 rounded-xl bg-warm border border-warm-beige text-xs text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1">
                Organization / College (Optional)
              </label>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="e.g. Pune Engineering College"
                className="w-full px-3.5 py-2.5 rounded-xl bg-warm border border-warm-beige text-xs text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="aditi@organization.org"
                className="w-full px-3.5 py-2.5 rounded-xl bg-warm border border-warm-beige text-xs text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98XXXXXXXX"
                className="w-full px-3.5 py-2.5 rounded-xl bg-warm border border-warm-beige text-xs text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest"
              />
            </div>
          </div>

          {/* Quantity & Customization */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1">
                Estimated Quantity Needed *
              </label>
              <input
                type="text"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="e.g. 200 notebooks / 10 reams"
                className="w-full px-3.5 py-2.5 rounded-xl bg-warm border border-warm-beige text-xs text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest"
              />
            </div>

            <div className="pt-5 sm:pt-4">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={customizationNeeded}
                  onChange={(e) => setCustomizationNeeded(e.target.checked)}
                  className="w-4 h-4 text-forest rounded border-warm-beige focus:ring-forest"
                />
                <span className="text-xs text-charcoal font-medium">
                  Require Custom Logo Debossing / Print
                </span>
              </label>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1">
              Custom Requirements or Delivery Timeline
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tell us about specific sizes, delivery cities, or questions..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-warm border border-warm-beige text-xs text-charcoal focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-forest resize-none"
            />
          </div>

          {errorMessage && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-2">
            <Button type="button" variant="ghost" size="sm" onClick={handleResetAndClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="md" isLoading={isLoading}>
              Submit Quotation Inquiry
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
