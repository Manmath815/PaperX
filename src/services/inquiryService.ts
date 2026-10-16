import { PartnershipInquiry, ProductInquiry, GeneralContactInquiry, InquiryResponse } from '../types';

/**
 * Validates standard email format
 */
export function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return re.test(email.trim());
}

/**
 * Validates phone number (supports Indian 10-digit mobile & standard international format)
 */
export function isValidPhone(phone: string): boolean {
  const clean = phone.replace(/[\s\-\(\)\+]/g, '');
  return clean.length >= 10 && clean.length <= 15 && /^\d+$/.test(clean);
}

/**
 * Robust, secure inquiry dispatch service.
 * Supports configurable webhook/REST API endpoint via VITE_INQUIRY_ENDPOINT.
 * When unconfigured, it transparently indicates Demonstration Mode, returns a traceable
 * reference ID and verified payload summary without storing sensitive PII in insecure browser storage.
 */
export async function submitPartnershipInquiry(data: PartnershipInquiry): Promise<InquiryResponse> {
  // 1. Anti-spam honeypot detection
  if (data.website_url && data.website_url.trim() !== '') {
    return {
      success: false,
      message: 'Automated spam submission detected.',
    };
  }

  // 2. Client-side field validations
  if (!data.organizationName.trim()) {
    return { success: false, message: 'Please enter your organization or campus name.' };
  }
  if (!data.contactName.trim()) {
    return { success: false, message: 'Please enter a contact person name.' };
  }
  if (!isValidEmail(data.workEmail)) {
    return { success: false, message: 'Please enter a valid official work or academic email address.' };
  }
  if (!isValidPhone(data.phone)) {
    return { success: false, message: 'Please enter a valid phone number (at least 10 digits).' };
  }
  if (!data.city.trim()) {
    return { success: false, message: 'Please specify your city.' };
  }

  const endpoint = import.meta.env.VITE_INQUIRY_ENDPOINT;
  const authToken = import.meta.env.VITE_INQUIRY_AUTH_TOKEN;

  // 3. Live production endpoint path
  if (endpoint && typeof endpoint === 'string' && endpoint.trim().startsWith('http')) {
    try {
      const response = await fetch(endpoint.trim(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(authToken ? { 'Authorization': `Bearer ${authToken}` } : {})
        },
        body: JSON.stringify({
          type: 'partnership_inquiry',
          data,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`);
      }

      return {
        success: true,
        isDemoMode: false,
        message: 'Your institutional partnership inquiry has been successfully transmitted to the PaperX team.',
        inquiryId: `PX-PRT-${Date.now().toString(36).toUpperCase()}`,
        submittedAt: new Date().toLocaleDateString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      };
    } catch (err) {
      console.error('Failed to dispatch inquiry to production endpoint:', err);
      return {
        success: false,
        message: 'Unable to reach the server endpoint at this moment. Please check your network or try again shortly.',
      };
    }
  }

  // 4. Transparent Demonstration Mode (Clearly labeled to user)
  await new Promise((resolve) => setTimeout(resolve, 800)); // Natural simulated network latency
  const demoRef = `PX-DEMO-${Math.floor(100000 + Math.random() * 900000)}`;

  return {
    success: true,
    isDemoMode: true,
    message: 'Inquiry validated successfully in Demonstration Mode. Configure VITE_INQUIRY_ENDPOINT in .env to connect your production endpoint.',
    inquiryId: demoRef,
    submittedAt: new Date().toLocaleDateString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
    payloadSummary: {
      organization: data.organizationName,
      contact: data.contactName,
      service: data.interestedService,
      city: data.city,
    },
  };
}

/**
 * Submit Product or Quotation Inquiry
 */
export async function submitProductInquiry(data: ProductInquiry): Promise<InquiryResponse> {
  // Honeypot check
  if (data.website_url && data.website_url.trim() !== '') {
    return { success: false, message: 'Automated submission rejected.' };
  }

  if (!data.customerName.trim()) {
    return { success: false, message: 'Please provide your name.' };
  }
  if (!isValidEmail(data.email)) {
    return { success: false, message: 'Please provide a valid email address.' };
  }
  if (!isValidPhone(data.phone)) {
    return { success: false, message: 'Please provide a valid contact phone number.' };
  }
  if (!data.estimatedQuantity.trim()) {
    return { success: false, message: 'Please specify the estimated quantity you require.' };
  }

  const endpoint = import.meta.env.VITE_INQUIRY_ENDPOINT;
  const authToken = import.meta.env.VITE_INQUIRY_AUTH_TOKEN;

  if (endpoint && typeof endpoint === 'string' && endpoint.trim().startsWith('http')) {
    try {
      const response = await fetch(endpoint.trim(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(authToken ? { 'Authorization': `Bearer ${authToken}` } : {})
        },
        body: JSON.stringify({
          type: 'product_quote_inquiry',
          data,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`);
      }

      return {
        success: true,
        isDemoMode: false,
        message: 'Your product quotation request has been securely delivered to our sales desk.',
        inquiryId: `PX-QT-${Date.now().toString(36).toUpperCase()}`,
        submittedAt: new Date().toLocaleDateString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      };
    } catch (err) {
      console.error('Failed to submit quote inquiry:', err);
      return {
        success: false,
        message: 'Error connecting to the quotation server. Please try again shortly.',
      };
    }
  }

  // Demonstration mode
  await new Promise((resolve) => setTimeout(resolve, 800));
  const demoRef = `PX-QUOTE-${Math.floor(100000 + Math.random() * 900000)}`;

  return {
    success: true,
    isDemoMode: true,
    message: 'Quotation request validated in Demonstration Mode. Connect VITE_INQUIRY_ENDPOINT to route to live CRM/email.',
    inquiryId: demoRef,
    submittedAt: new Date().toLocaleDateString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
    payloadSummary: {
      product: data.productName || 'General Catalog Request',
      quantity: data.estimatedQuantity,
      customer: data.customerName,
      type: data.inquiryType,
    },
  };
}

/**
 * General Contact Inquiry
 */
export async function submitGeneralContact(data: GeneralContactInquiry): Promise<InquiryResponse> {
  if (data.website_url && data.website_url.trim() !== '') {
    return { success: false, message: 'Automated submission rejected.' };
  }

  if (!data.name.trim()) return { success: false, message: 'Please enter your name.' };
  if (!isValidEmail(data.email)) return { success: false, message: 'Please enter a valid email address.' };
  if (!isValidPhone(data.phone)) return { success: false, message: 'Please enter a valid phone number.' };
  if (!data.message.trim()) return { success: false, message: 'Please enter your message or question.' };

  const endpoint = import.meta.env.VITE_INQUIRY_ENDPOINT;
  const authToken = import.meta.env.VITE_INQUIRY_AUTH_TOKEN;

  if (endpoint && typeof endpoint === 'string' && endpoint.trim().startsWith('http')) {
    try {
      const response = await fetch(endpoint.trim(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(authToken ? { 'Authorization': `Bearer ${authToken}` } : {})
        },
        body: JSON.stringify({
          type: 'general_contact',
          data,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      return {
        success: true,
        isDemoMode: false,
        message: 'Thank you for reaching out. We have received your message.',
        inquiryId: `PX-MSG-${Date.now().toString(36).toUpperCase()}`,
        submittedAt: new Date().toLocaleDateString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      };
    } catch (err) {
      console.error('Contact inquiry error:', err);
      return {
        success: false,
        message: 'Unable to deliver your message at this time. Please try again or email us directly.',
      };
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 800));
  return {
    success: true,
    isDemoMode: true,
    message: 'Message validated in Demonstration Mode. Configure VITE_INQUIRY_ENDPOINT to connect your active mailbox or CRM.',
    inquiryId: `PX-DEMO-MSG-${Math.floor(100000 + Math.random() * 900000)}`,
    submittedAt: new Date().toLocaleDateString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
    payloadSummary: {
      name: data.name,
      category: data.category,
      city: data.city,
    },
  };
}
