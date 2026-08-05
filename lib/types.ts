export type TransactionType = 'site_visit' | 'spec_quote' | 'professional' | 'supplier_rfq';
export type PartyType = 'provider' | 'supplier';
export type ComplianceMode = 'open' | 'listing_only' | 'licence_required';
export type FieldKind = 'number' | 'text' | 'select' | 'multiselect' | 'boolean' | 'file' | 'address' | 'date';

export interface Industry {
  slug: string;
  name: string;
  icon: string;
  description: string;
  sort_order: number;
}

export interface Niche {
  slug: string;
  name: string;
  industry_slug: string;
  party_type: PartyType;
  transaction_type: TransactionType;
  compliance_mode: ComplianceMode;
  required_credential?: string;
  lead_credit_cost: number;
  avg_job_value_zar: number;
  description: string;
  config?: Record<string, unknown>;
}

export interface QuoteField {
  key: string;
  label: string;
  kind: FieldKind;
  unit?: string;
  options?: string[];
  validation?: { min?: number; max?: number; required?: boolean; maxLength?: number; minLength?: number; max_files?: number };
  ai_hint?: string;
  sort_order: number;
}

export interface ServiceType {
  slug: string;
  name: string;
}

export interface Venture {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  niches: string[];
  services: string[];
  website_url: string;
  support_email: string;
}

export interface Plan {
  slug: string;
  name: string;
  party_type: PartyType;
  tier_rank: number;
  price_monthly: number;
  price_annual: number;
  lead_credits: number | null;
  max_niches: number | null;
  max_regions: number | null;
  ai_quotes: number | null;
  team_seats: number | null;
  features: string[];
  highlight?: boolean;
}
