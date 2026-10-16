export type ProductCategory = 
  | 'notebooks'
  | 'bags'
  | 'printing'
  | 'packaging'
  | 'stationery';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  altText: string;
  specs: ProductSpec[];
  minOrderQuantity?: string;
  materialHighlight: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export interface PartnershipInquiry {
  organizationName: string;
  contactName: string;
  workEmail: string;
  phone: string;
  organizationType: 'school' | 'college' | 'corporate' | 'enterprise' | 'ngo' | 'other';
  approxMonthlyWaste?: string;
  interestedService: 'waste_collection' | 'stationery_procurement' | 'custom_branding' | 'campus_drive' | 'general_partnership';
  city: string;
  message: string;
  website_url?: string; // honeypot spam protection
}

export interface ProductInquiry {
  productId?: string;
  productName?: string;
  inquiryType: 'individual' | 'bulk' | 'sample_kit';
  customerName: string;
  email: string;
  phone: string;
  organization?: string;
  estimatedQuantity: string;
  customizationNeeded: boolean;
  notes: string;
  website_url?: string; // honeypot
}

export interface GeneralContactInquiry {
  name: string;
  email: string;
  phone: string;
  category: 'general' | 'collection' | 'products' | 'campus' | 'media';
  city: string;
  message: string;
  website_url?: string; // honeypot
}

export interface InquiryResponse {
  success: boolean;
  message: string;
  inquiryId?: string;
  isDemoMode?: boolean;
  submittedAt?: string;
  payloadSummary?: Record<string, any>;
}

export interface ImpactTarget {
  id: string;
  label: string;
  targetValue: string;
  unit: string;
  statusText: string;
  description: string;
}
