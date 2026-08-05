import type { Industry, Niche, QuoteField, Venture, Plan, ServiceType } from './types';

// ─── INDUSTRIES ──────────────────────────────────────────────
export const INDUSTRIES: Industry[] = [
  { slug: 'energy',                name: 'Energy & Solar',                    icon: '⚡', description: 'Solar installations, electricians, energy solutions', sort_order: 1 },
  { slug: 'construction',          name: 'Construction & Trades',             icon: '🏗️', description: 'Builders, contractors, tradespeople', sort_order: 2 },
  { slug: 'security',              name: 'Security',                          icon: '🔒', description: 'CCTV, alarms, electric fence, gate motors, PSIRA-registered', sort_order: 3 },
  { slug: 'property',              name: 'Property & Professional',           icon: '🏠', description: 'Estate agents, lawyers, accountants, insurance brokers', sort_order: 4 },
  { slug: 'automotive',            name: 'Automotive',                        icon: '🚗', description: 'Panel beating, tyres, servicing, detailing', sort_order: 5 },
  { slug: 'supply',                name: 'Suppliers & Wholesale',             icon: '📦', description: 'Electrical, solar and security equipment wholesalers', sort_order: 6 },
  { slug: 'automotive-technology', name: 'Automotive Technology',             icon: '🔧', description: 'ECU repair, diagnostics, key programming, remapping', sort_order: 7 },
  { slug: 'agriculture-technology',name: 'Agriculture Technology',            icon: '🌾', description: 'Smart farming, irrigation, crop monitoring, AI insights', sort_order: 8 },
  { slug: 'hospitality-fintech',   name: 'Hospitality & Payments',           icon: '💳', description: 'Digital tipping, NFC payments, hospitality tech', sort_order: 9 },
  { slug: 'trading-technology',    name: 'Trading Technology',                icon: '📈', description: 'EA development, charting tools, trading infrastructure', sort_order: 10 },
  { slug: 'technology-services',   name: 'Technology & Digital Services',     icon: '💻', description: 'SaaS, AI, mobile apps, APIs, business automation', sort_order: 11 },
];

// ─── NICHES ──────────────────────────────────────────────────
export const NICHES: Niche[] = [
  // Energy
  { slug: 'solar-installers', name: 'Solar Installers', industry_slug: 'energy', party_type: 'provider', transaction_type: 'site_visit', compliance_mode: 'licence_required', required_credential: 'PV GreenCard / Wireman\'s Licence (DoEL)', lead_credit_cost: 5, avg_job_value_zar: 145000, description: 'Grid-tied, off-grid and battery backup solar installations for homes and businesses.' },
  { slug: 'electricians', name: 'Electricians', industry_slug: 'energy', party_type: 'provider', transaction_type: 'site_visit', compliance_mode: 'licence_required', required_credential: 'Wireman\'s Licence / Installation Electrician (DoEL)', lead_credit_cost: 2, avg_job_value_zar: 6500, description: 'Residential and commercial electrical installations, COC certificates and fault finding.' },
  // Security
  { slug: 'cctv-installers', name: 'CCTV Installers', industry_slug: 'security', party_type: 'provider', transaction_type: 'spec_quote', compliance_mode: 'licence_required', required_credential: 'PSIRA Grade C+', lead_credit_cost: 3, avg_job_value_zar: 18000, description: 'HD and IP camera systems for homes, estates, warehouses and commercial premises.' },
  { slug: 'alarm-installers', name: 'Alarm Installers', industry_slug: 'security', party_type: 'provider', transaction_type: 'spec_quote', compliance_mode: 'licence_required', required_credential: 'PSIRA Grade C+', lead_credit_cost: 3, avg_job_value_zar: 14000, description: 'Intruder alarm systems with armed response, monitoring and app integration.' },
  { slug: 'electric-fence', name: 'Electric Fence Installers', industry_slug: 'security', party_type: 'provider', transaction_type: 'spec_quote', compliance_mode: 'licence_required', required_credential: 'Electric Fence CoC', lead_credit_cost: 3, avg_job_value_zar: 22000, description: 'Energiser systems, pulsed electric fencing, perimeter protection and CoC certificates.' },
  { slug: 'gate-motor-installers', name: 'Gate Motor Installers', industry_slug: 'security', party_type: 'provider', transaction_type: 'spec_quote', compliance_mode: 'open', lead_credit_cost: 2, avg_job_value_zar: 9500, description: 'Sliding, swing and bi-fold gate motors with intercom, remote and smart-app control.' },
  // Property
  { slug: 'lawyers', name: 'Lawyers', industry_slug: 'property', party_type: 'provider', transaction_type: 'professional', compliance_mode: 'listing_only', required_credential: 'LPC Fidelity Certificate', lead_credit_cost: 0, avg_job_value_zar: 0, description: 'Conveyancing, commercial law, family law, labour law and dispute resolution.' },
  { slug: 'insurance-brokers', name: 'Insurance Brokers', industry_slug: 'property', party_type: 'provider', transaction_type: 'professional', compliance_mode: 'listing_only', required_credential: 'FSP Number (FSCA)', lead_credit_cost: 0, avg_job_value_zar: 0, description: 'Short-term insurance, life cover, business insurance and gap cover solutions.' },
  { slug: 'estate-agents', name: 'Estate Agents', industry_slug: 'property', party_type: 'provider', transaction_type: 'professional', compliance_mode: 'listing_only', required_credential: 'PPRA Fidelity Fund Certificate', lead_credit_cost: 0, avg_job_value_zar: 0, description: 'Residential and commercial property sales and rentals across South Africa.' },
  { slug: 'accountants', name: 'Accountants', industry_slug: 'property', party_type: 'provider', transaction_type: 'professional', compliance_mode: 'listing_only', required_credential: 'SAICA / SAIPA Membership', lead_credit_cost: 0, avg_job_value_zar: 0, description: 'Tax, bookkeeping, annual financial statements, payroll and BEE compliance.' },
  // Supply
  { slug: 'electrical-wholesalers', name: 'Electrical Wholesalers', industry_slug: 'supply', party_type: 'supplier', transaction_type: 'supplier_rfq', compliance_mode: 'open', lead_credit_cost: 0, avg_job_value_zar: 0, description: 'Cables, DB boards, breakers, conduit, earthing and electrical accessories.' },
  { slug: 'solar-equipment', name: 'Solar Equipment Suppliers', industry_slug: 'supply', party_type: 'supplier', transaction_type: 'supplier_rfq', compliance_mode: 'open', lead_credit_cost: 0, avg_job_value_zar: 0, description: 'Panels, inverters, batteries, mounting and solar accessories at trade prices.' },
  { slug: 'security-equipment', name: 'Security Equipment Suppliers', industry_slug: 'supply', party_type: 'supplier', transaction_type: 'supplier_rfq', compliance_mode: 'open', lead_credit_cost: 0, avg_job_value_zar: 0, description: 'Cameras, DVRs, NVRs, energisers, gate motors and access-control hardware.' },
  // Automotive Technology
  { slug: 'automotive-electronics-diagnostics', name: 'Automotive Electronics Diagnostics', industry_slug: 'automotive-technology', party_type: 'provider', transaction_type: 'site_visit', compliance_mode: 'open', required_credential: 'RMI / IAMESA Membership', lead_credit_cost: 3, avg_job_value_zar: 2800, description: 'Vehicle electronic diagnostics, CAN bus analysis, sensor testing and fault diagnosis using OEM-level scan tools.' },
  { slug: 'ecu-repair-programming', name: 'ECU Repair & Programming', industry_slug: 'automotive-technology', party_type: 'provider', transaction_type: 'site_visit', compliance_mode: 'open', required_credential: 'RMI Membership', lead_credit_cost: 4, avg_job_value_zar: 4500, description: 'ECU repair, cloning, replacement programming, flashing, virginising and data recovery across all vehicle makes.' },
  { slug: 'immobiliser-key-programming', name: 'Immobiliser & Key Programming', industry_slug: 'automotive-technology', party_type: 'provider', transaction_type: 'spec_quote', compliance_mode: 'open', lead_credit_cost: 3, avg_job_value_zar: 3200, description: 'Car key programming, lost-key replacement, immobiliser repair, transponder and keyless entry programming.' },
  { slug: 'vehicle-module-programming', name: 'Vehicle Module Programming', industry_slug: 'automotive-technology', party_type: 'provider', transaction_type: 'site_visit', compliance_mode: 'open', required_credential: 'RMI Membership', lead_credit_cost: 3, avg_job_value_zar: 3800, description: 'BCM, TCU, ABS, airbag, cluster, gateway and comfort module programming and VIN coding.' },
  { slug: 'performance-tuning-remapping', name: 'Performance Tuning & Remapping', industry_slug: 'automotive-technology', party_type: 'provider', transaction_type: 'site_visit', compliance_mode: 'open', lead_credit_cost: 4, avg_job_value_zar: 7500, description: 'Stage 1 & 2 tuning, economy remapping, dyno sessions, transmission tuning and custom calibration.' },
  { slug: 'automotive-workshop-services', name: 'Automotive Workshop Services', industry_slug: 'automotive-technology', party_type: 'provider', transaction_type: 'site_visit', compliance_mode: 'open', required_credential: 'RMI Membership', lead_credit_cost: 2, avg_job_value_zar: 3500, description: 'Mechanical diagnostics, electrical repairs, engine management, pre-purchase inspections and mobile diagnostics.' },
  { slug: 'automotive-parts-ecu-supply', name: 'Automotive Parts & ECU Supply', industry_slug: 'automotive-technology', party_type: 'supplier', transaction_type: 'supplier_rfq', compliance_mode: 'open', lead_credit_cost: 0, avg_job_value_zar: 0, description: 'Used and new ECUs, BCM, TCU, ABS modules, sensors, wiring and diagnostic equipment.' },
  // YieldCore AI
  { slug: 'smart-agriculture-intelligence', name: 'YieldCore AI Smart Agriculture', industry_slug: 'agriculture-technology', party_type: 'provider', transaction_type: 'professional', compliance_mode: 'open', lead_credit_cost: 5, avg_job_value_zar: 48000, description: 'Farm intelligence dashboards, crop monitoring, smart irrigation, yield forecasting and carbon credit monitoring.' },
  { slug: 'agricultural-sensors', name: 'Agricultural Sensors', industry_slug: 'agriculture-technology', party_type: 'supplier', transaction_type: 'supplier_rfq', compliance_mode: 'open', lead_credit_cost: 0, avg_job_value_zar: 0, description: 'Soil moisture, weather, flow and crop sensors for precision agriculture.' },
  { slug: 'irrigation-equipment', name: 'Irrigation Equipment', industry_slug: 'agriculture-technology', party_type: 'supplier', transaction_type: 'supplier_rfq', compliance_mode: 'open', lead_credit_cost: 0, avg_job_value_zar: 0, description: 'Drip, micro and pivot irrigation systems and components.' },
  { slug: 'farm-telemetry-devices', name: 'Farm Telemetry Devices', industry_slug: 'agriculture-technology', party_type: 'supplier', transaction_type: 'supplier_rfq', compliance_mode: 'open', lead_credit_cost: 0, avg_job_value_zar: 0, description: 'Edge devices, gateways, loggers and telemetry hardware for farm monitoring.' },
  { slug: 'greenhouse-equipment', name: 'Greenhouse Equipment', industry_slug: 'agriculture-technology', party_type: 'supplier', transaction_type: 'supplier_rfq', compliance_mode: 'open', lead_credit_cost: 0, avg_job_value_zar: 0, description: 'Climate control, shading, NFT channels and greenhouse infrastructure.' },
  // TipGuard SA
  { slug: 'digital-tipping-platforms', name: 'TipGuard SA Digital Tipping', industry_slug: 'hospitality-fintech', party_type: 'provider', transaction_type: 'professional', compliance_mode: 'open', lead_credit_cost: 3, avg_job_value_zar: 12000, description: 'QR and NFC digital tipping systems for restaurants, hotels, salons, security guards and delivery drivers.' },
  { slug: 'nfc-tipping-hardware', name: 'NFC & Tipping Hardware', industry_slug: 'hospitality-fintech', party_type: 'supplier', transaction_type: 'supplier_rfq', compliance_mode: 'open', lead_credit_cost: 0, avg_job_value_zar: 0, description: 'NFC cards, tags, wristbands, keyrings, QR stands, stickers and branded merchant materials.' },
  // Scope Indices
  { slug: 'algo-trading-automation', name: 'Algorithmic Trading Automation', industry_slug: 'trading-technology', party_type: 'provider', transaction_type: 'professional', compliance_mode: 'open', lead_credit_cost: 5, avg_job_value_zar: 22000, description: 'MT5/MT4 Expert Advisor development, prop firm rule automation, risk management bots and trade copiers.', config: { disclaimer: 'Technology provider only. Not an FSP. Not financial advice.' } },
  { slug: 'trading-charting-tools', name: 'Trading Charting Tools', industry_slug: 'trading-technology', party_type: 'provider', transaction_type: 'professional', compliance_mode: 'open', lead_credit_cost: 4, avg_job_value_zar: 8500, description: 'TradingView indicators, market structure, liquidity sweep, order block and ICT-style charting tools.' },
  { slug: 'trading-infrastructure', name: 'Trading Infrastructure', industry_slug: 'trading-technology', party_type: 'provider', transaction_type: 'professional', compliance_mode: 'open', lead_credit_cost: 5, avg_job_value_zar: 35000, description: 'MT5 bridges, signal APIs, Cloudflare tunnels, VPS setup, account sync and web control panels.' },
  { slug: 'trading-analytics', name: 'Trading Analytics', industry_slug: 'trading-technology', party_type: 'provider', transaction_type: 'professional', compliance_mode: 'open', lead_credit_cost: 3, avg_job_value_zar: 12000, description: 'Strategy backtesting, win-rate analysis, drawdown analysis, Monte Carlo testing and trading journal dashboards.' },
  // Tech Services
  { slug: 'technology-development', name: 'Technology & Digital Development', industry_slug: 'technology-services', party_type: 'provider', transaction_type: 'professional', compliance_mode: 'open', lead_credit_cost: 4, avg_job_value_zar: 28000, description: 'AI development, SaaS platforms, mobile & web apps, API development, NFC tech, IoT integration and WhatsApp automation.' },
];

// ─── VENTURES ────────────────────────────────────────────────
export const VENTURES: Venture[] = [
  {
    slug: 'dr-autotronics',
    name: 'D.R. Autotronics',
    tagline: 'South Africa\'s Automotive Electronics Specialists',
    description: 'D.R. Autotronics is a specialist automotive electronics company offering ECU diagnostics, repair, programming, key replacement, module programming, performance tuning and full workshop services. With a large inventory of used and new ECUs and modules, we are also the trusted parts supplier for other technicians across the country.',
    icon: '🔧',
    color: '#1e3a5f',
    niches: ['automotive-electronics-diagnostics', 'ecu-repair-programming', 'immobiliser-key-programming', 'vehicle-module-programming', 'performance-tuning-remapping', 'automotive-workshop-services', 'automotive-parts-ecu-supply'],
    services: ['ECU Diagnostics', 'ECU Repair & Cloning', 'ECU Software Flashing', 'Lost Key Replacement', 'Transponder Programming', 'BCM / TCU Programming', 'Airbag Module Reset', 'Stage 1 & 2 Remapping', 'Dyno Tuning', 'Mobile Diagnostics', 'Used ECU Sales', 'Bench Testing'],
    website_url: 'https://drautotronics.co.za',
    support_email: 'workshop@drautotronics.co.za',
  },
  {
    slug: 'yieldcore-ai',
    name: 'YieldCore AI',
    tagline: 'Smart Agriculture Intelligence for Southern African Farms',
    description: 'YieldCore AI deploys smart farm intelligence across Southern Africa — real-time crop monitoring, soil and weather sensors, irrigation automation, pest and disease early warning, yield forecasting, satellite imagery and carbon credit monitoring. Built for South African conditions with WhatsApp alert integration and edge-device support for farms with limited connectivity.',
    icon: '🌾',
    color: '#1a5e3a',
    niches: ['smart-agriculture-intelligence', 'agricultural-sensors', 'irrigation-equipment', 'farm-telemetry-devices', 'greenhouse-equipment'],
    services: ['Farm Intelligence Dashboard', 'Crop Monitoring', 'Smart Irrigation', 'Soil Moisture Monitoring', 'Weather Intelligence', 'Disease Early Warning', 'Yield Forecasting', 'Satellite Integration', 'WhatsApp Farm Alerts', 'Carbon MRV Reporting', 'Greenhouse Monitoring', 'Custom AI Deployments'],
    website_url: 'https://yieldcore.ai',
    support_email: 'support@yieldcore.ai',
  },
  {
    slug: 'tipguard-sa',
    name: 'TipGuard SA',
    tagline: 'Digital Tipping Made Simple for South African Businesses',
    description: 'TipGuard SA is South Africa\'s dedicated digital tipping platform — enabling restaurants, hotels, car washes, salons, security guards and delivery drivers to receive tips via QR code and NFC. Supports individual and pooled tipping models, Paystack and PayFast integration, custom branded pages, merchant dashboards and NFC wearables.',
    icon: '💳',
    color: '#7c3aed',
    niches: ['digital-tipping-platforms', 'nfc-tipping-hardware'],
    services: ['QR Code Tipping', 'NFC Tipping', 'Employee Tip Profiles', 'Team Tip Pooling', 'Merchant Dashboard', 'Tip Analytics', 'Custom Branded Pages', 'Paystack Integration', 'PayFast Integration', 'NFC Wristbands', 'NFC Keyrings', 'POS Integration'],
    website_url: 'https://tipguard.co.za',
    support_email: 'support@tipguard.co.za',
  },
  {
    slug: 'scope-indices',
    name: 'Scope Indices',
    tagline: 'Trading Technology, Automation & Charting Tools',
    description: 'Scope Indices builds custom trading technology — MT5 and MT4 Expert Advisors, NinjaTrader strategies, TradingView indicators, signal APIs, Cloudflare bridges, trading dashboards and analytics tools. We specialise in prop-firm rule compliance automation, drawdown protection, multi-account execution and risk management systems. Technology provider only — not an FSP or investment adviser.',
    icon: '📈',
    color: '#b45309',
    niches: ['algo-trading-automation', 'trading-charting-tools', 'trading-infrastructure', 'trading-analytics'],
    services: ['MT5 EA Development', 'MT4 EA Development', 'NinjaTrader Strategies', 'TradingView Indicators', 'Prop Firm Rule Automation', 'Drawdown Protection', 'Trade Copier Development', 'Signal APIs', 'MT5 Bridge Development', 'Cloudflare Tunnel Setup', 'Strategy Backtesting', 'Risk Dashboards'],
    website_url: 'https://scopeindices.co.za',
    support_email: 'support@scopeindices.co.za',
  },
];

// ─── SERVICE TYPES ────────────────────────────────────────────
export const SERVICE_TYPES: Record<string, ServiceType[]> = {
  'solar-installers': [
    { slug: 'grid-tied-hybrid', name: 'Grid-tied Hybrid Install' },
    { slug: 'off-grid', name: 'Off-grid System' },
    { slug: 'battery-backup', name: 'Battery Backup Only' },
    { slug: 'solar-maintenance', name: 'System Maintenance & Fault Finding' },
  ],
  'automotive-electronics-diagnostics': [
    { slug: 'vehicle-electronic-diagnostics', name: 'Vehicle Electronic Diagnostics' },
    { slug: 'ecu-fault-diagnosis', name: 'ECU Fault Diagnosis' },
    { slug: 'wiring-fault-tracing', name: 'Wiring Fault Tracing' },
    { slug: 'can-bus-diagnostics', name: 'CAN Bus Diagnostics' },
    { slug: 'sensor-actuator-testing', name: 'Sensor & Actuator Testing' },
    { slug: 'battery-charging-diagnostics', name: 'Battery & Charging Diagnostics' },
    { slug: 'parasitic-drain-testing', name: 'Parasitic Battery Drain Testing' },
  ],
  'ecu-repair-programming': [
    { slug: 'ecu-repair', name: 'ECU Repair' },
    { slug: 'ecu-cloning', name: 'ECU Cloning' },
    { slug: 'ecu-software-flashing', name: 'ECU Software Flashing' },
    { slug: 'ecu-reprogramming', name: 'ECU Reprogramming' },
    { slug: 'ecu-remapping', name: 'ECU Remapping' },
    { slug: 'ecu-virginising', name: 'ECU Virginising' },
    { slug: 'ecu-data-recovery', name: 'ECU Data Recovery' },
    { slug: 'bench-testing', name: 'Bench Testing' },
    { slug: 'boot-mode-programming', name: 'Boot-Mode Programming' },
  ],
  'immobiliser-key-programming': [
    { slug: 'car-key-programming', name: 'Car Key Programming' },
    { slug: 'lost-key-replacement', name: 'Lost Key Replacement' },
    { slug: 'immobiliser-repair', name: 'Immobiliser Repair' },
    { slug: 'transponder-programming', name: 'Transponder Programming' },
    { slug: 'remote-programming', name: 'Remote Programming' },
    { slug: 'keyless-entry-programming', name: 'Keyless Entry Programming' },
  ],
  'algo-trading-automation': [
    { slug: 'mt5-ea-development', name: 'MT5 Expert Advisor Development' },
    { slug: 'mt4-ea-development', name: 'MT4 Expert Advisor Development' },
    { slug: 'ninjatrader-strategy', name: 'NinjaTrader Strategy Development' },
    { slug: 'tradingview-automation', name: 'TradingView Automation' },
    { slug: 'prop-firm-rule-automation', name: 'Prop Firm Rule Automation' },
    { slug: 'trade-copier-development', name: 'Trade Copier Development' },
    { slug: 'risk-management-automation', name: 'Risk Management Automation' },
  ],
  'smart-agriculture-intelligence': [
    { slug: 'farm-intelligence-dashboard', name: 'Farm Intelligence Dashboard' },
    { slug: 'crop-monitoring', name: 'Crop Monitoring' },
    { slug: 'smart-irrigation-monitoring', name: 'Smart Irrigation Monitoring' },
    { slug: 'yield-forecasting', name: 'Yield Forecasting' },
    { slug: 'carbon-mrv-reporting', name: 'Carbon MRV Reporting' },
    { slug: 'custom-farm-ai-deployment', name: 'Custom Farm AI Deployment' },
  ],
  'digital-tipping-platforms': [
    { slug: 'qr-code-tipping', name: 'QR Code Tipping' },
    { slug: 'nfc-tipping', name: 'NFC Tipping' },
    { slug: 'team-tip-pooling', name: 'Team Tip Pooling' },
    { slug: 'merchant-dashboard', name: 'Merchant Dashboard' },
    { slug: 'nfc-wearable-integration', name: 'NFC Wearable Integration' },
  ],
};

// ─── QUOTE FIELDS ─────────────────────────────────────────────
export const QUOTE_FIELDS: Record<string, QuoteField[]> = {
  'solar-installers': [
    { key: 'monthly_bill_zar', label: 'Average monthly electricity bill', kind: 'number', unit: 'ZAR', validation: { min: 300, required: true }, ai_hint: 'Primary sizing driver. R2000/mo ≈ 5kW.', sort_order: 1 },
    { key: 'property_type', label: 'Property type', kind: 'select', options: ['Freestanding house', 'Townhouse/Complex', 'Apartment', 'Business premises', 'Farm'], validation: { required: true }, sort_order: 2 },
    { key: 'roof_type', label: 'Roof type', kind: 'select', options: ['IBR / Corrugated metal', 'Concrete tile', 'Slate', 'Flat concrete', 'Thatch'], validation: { required: true }, sort_order: 3 },
    { key: 'storey_count', label: 'Number of storeys', kind: 'number', validation: { min: 1, max: 4 }, sort_order: 4 },
    { key: 'backup_only', label: 'Backup only, no grid feed-in?', kind: 'boolean', sort_order: 5 },
    { key: 'roof_photos', label: 'Photos of roof and DB board', kind: 'file', validation: { max_files: 6 }, sort_order: 6 },
  ],
  'automotive-electronics-diagnostics': [
    { key: 'vehicle_make', label: 'Vehicle make', kind: 'text', validation: { required: true }, ai_hint: 'e.g. VW, Toyota, BMW', sort_order: 1 },
    { key: 'vehicle_model', label: 'Vehicle model', kind: 'text', validation: { required: true }, sort_order: 2 },
    { key: 'vehicle_year', label: 'Year of manufacture', kind: 'number', validation: { min: 1990, max: 2026, required: true }, sort_order: 3 },
    { key: 'fuel_type', label: 'Fuel type', kind: 'select', options: ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'LPG'], validation: { required: true }, sort_order: 4 },
    { key: 'vin', label: 'VIN (optional but recommended)', kind: 'text', validation: { maxLength: 17 }, sort_order: 5 },
    { key: 'fault_codes', label: 'Fault codes (DTC)', kind: 'text', ai_hint: 'e.g. P0300, B1234', sort_order: 6 },
    { key: 'vehicle_symptoms', label: 'Describe the problem', kind: 'text', validation: { required: true, minLength: 10 }, sort_order: 7 },
    { key: 'vehicle_starts', label: 'Does the vehicle start?', kind: 'boolean', sort_order: 8 },
    { key: 'vehicle_location', label: 'Vehicle location', kind: 'address', validation: { required: true }, sort_order: 9 },
    { key: 'mobile_service_required', label: 'Mobile / on-site service needed?', kind: 'boolean', sort_order: 10 },
    { key: 'vehicle_photos', label: 'Photos of vehicle / fault indicators', kind: 'file', validation: { max_files: 4 }, sort_order: 11 },
  ],
  'ecu-repair-programming': [
    { key: 'vehicle_make', label: 'Vehicle make', kind: 'text', validation: { required: true }, sort_order: 1 },
    { key: 'vehicle_model', label: 'Vehicle model', kind: 'text', validation: { required: true }, sort_order: 2 },
    { key: 'vehicle_year', label: 'Year of manufacture', kind: 'number', validation: { min: 1990, max: 2026, required: true }, sort_order: 3 },
    { key: 'fuel_type', label: 'Fuel type', kind: 'select', options: ['Petrol', 'Diesel', 'Electric', 'Hybrid'], validation: { required: true }, sort_order: 4 },
    { key: 'ecu_part_number', label: 'ECU part number (if known)', kind: 'text', sort_order: 5 },
    { key: 'fault_codes', label: 'Fault codes (DTC)', kind: 'text', sort_order: 6 },
    { key: 'vehicle_starts', label: 'Does the vehicle start?', kind: 'boolean', sort_order: 7 },
    { key: 'vehicle_symptoms', label: 'Describe the problem', kind: 'text', validation: { required: true, minLength: 10 }, sort_order: 8 },
    { key: 'vehicle_location', label: 'Vehicle location', kind: 'address', validation: { required: true }, sort_order: 9 },
    { key: 'mobile_service_required', label: 'Mobile / on-site service needed?', kind: 'boolean', sort_order: 10 },
  ],
  'immobiliser-key-programming': [
    { key: 'vehicle_make', label: 'Vehicle make', kind: 'text', validation: { required: true }, sort_order: 1 },
    { key: 'vehicle_model', label: 'Vehicle model', kind: 'text', validation: { required: true }, sort_order: 2 },
    { key: 'vehicle_year', label: 'Year of manufacture', kind: 'number', validation: { min: 1990, max: 2026, required: true }, sort_order: 3 },
    { key: 'key_available', label: 'Do you have a working key?', kind: 'boolean', sort_order: 4 },
    { key: 'number_of_keys', label: 'Number of keys to program', kind: 'number', validation: { min: 1, max: 10 }, sort_order: 5 },
    { key: 'immobiliser_fault', label: 'Is the immobiliser active / car not starting?', kind: 'boolean', sort_order: 6 },
    { key: 'vin', label: 'VIN', kind: 'text', validation: { maxLength: 17 }, sort_order: 7 },
    { key: 'vehicle_location', label: 'Vehicle location', kind: 'address', validation: { required: true }, sort_order: 8 },
    { key: 'mobile_service_required', label: 'Mobile service needed?', kind: 'boolean', sort_order: 9 },
  ],
  'algo-trading-automation': [
    { key: 'trading_platform', label: 'Trading platform', kind: 'select', options: ['MT5', 'MT4', 'NinjaTrader', 'TradingView', 'cTrader', 'Other'], validation: { required: true }, sort_order: 1 },
    { key: 'broker_prop_firm', label: 'Broker or prop firm name', kind: 'text', validation: { required: true }, sort_order: 2 },
    { key: 'account_type', label: 'Account type', kind: 'select', options: ['Live funded account', 'Prop firm challenge', 'Prop firm funded', 'Demo'], validation: { required: true }, sort_order: 3 },
    { key: 'instrument', label: 'Primary trading instrument', kind: 'text', validation: { required: true }, ai_hint: 'e.g. XAUUSD, US30, NAS100', sort_order: 4 },
    { key: 'timeframe', label: 'Primary timeframe', kind: 'select', options: ['1m', '5m', '15m', '1H', '4H', 'Daily', 'Multiple'], sort_order: 5 },
    { key: 'strategy_description', label: 'Strategy description', kind: 'text', validation: { required: true, minLength: 20 }, sort_order: 6 },
    { key: 'risk_per_trade_pct', label: 'Risk per trade (%)', kind: 'number', validation: { min: 0.1, max: 10 }, sort_order: 7 },
    { key: 'max_daily_loss_pct', label: 'Maximum daily loss limit (%)', kind: 'number', validation: { min: 0.1, max: 10 }, sort_order: 8 },
    { key: 'max_drawdown_pct', label: 'Maximum total drawdown (%)', kind: 'number', validation: { min: 0.1, max: 30 }, sort_order: 9 },
    { key: 'news_filter', label: 'News filter required?', kind: 'boolean', sort_order: 10 },
    { key: 'dashboard_required', label: 'Web dashboard required?', kind: 'boolean', sort_order: 11 },
    { key: 'source_code_ownership', label: 'Full source code ownership required?', kind: 'boolean', sort_order: 12 },
  ],
  'smart-agriculture-intelligence': [
    { key: 'farm_name', label: 'Farm name', kind: 'text', validation: { required: true }, sort_order: 1 },
    { key: 'farm_location', label: 'Farm location / region', kind: 'address', validation: { required: true }, sort_order: 2 },
    { key: 'farm_size_ha', label: 'Farm size (hectares)', kind: 'number', unit: 'ha', validation: { min: 0.1, required: true }, sort_order: 3 },
    { key: 'crop_type', label: 'Primary crop(s)', kind: 'multiselect', options: ['Maize', 'Wheat', 'Soya', 'Sugar cane', 'Citrus', 'Vegetables', 'Grapes', 'Cotton', 'Livestock', 'Mixed', 'Other'], validation: { required: true }, sort_order: 4 },
    { key: 'irrigation_type', label: 'Irrigation type', kind: 'select', options: ['Drip / Micro', 'Centre pivot', 'Sprinkler', 'Flood / Furrow', 'Rain-fed only', 'Other'], validation: { required: true }, sort_order: 5 },
    { key: 'connectivity', label: 'Connectivity available on farm', kind: 'select', options: ['Fibre', 'LTE / 4G', '3G only', 'Satellite', 'No connectivity'], validation: { required: true }, sort_order: 6 },
    { key: 'main_problems', label: 'Main farming challenges to solve', kind: 'text', validation: { required: true, minLength: 10 }, sort_order: 7 },
    { key: 'satellite_monitoring', label: 'Satellite imagery monitoring required?', kind: 'boolean', sort_order: 8 },
    { key: 'carbon_monitoring', label: 'Carbon credit monitoring required?', kind: 'boolean', sort_order: 9 },
    { key: 'number_of_users', label: 'Number of dashboard users', kind: 'number', validation: { min: 1 }, sort_order: 10 },
  ],
  'digital-tipping-platforms': [
    { key: 'business_name', label: 'Business name', kind: 'text', validation: { required: true }, sort_order: 1 },
    { key: 'business_type', label: 'Business type', kind: 'select', options: ['Restaurant', 'Hotel', 'Car wash', 'Hair / beauty salon', 'Security company', 'Delivery service', 'Event venue', 'Retail', 'Other'], validation: { required: true }, sort_order: 2 },
    { key: 'employee_count', label: 'Number of tip-eligible employees', kind: 'number', validation: { min: 1, required: true }, sort_order: 3 },
    { key: 'branch_count', label: 'Number of branches', kind: 'number', validation: { min: 1 }, sort_order: 4 },
    { key: 'tipping_model', label: 'Tipping model', kind: 'select', options: ['Individual (each employee gets own tips)', 'Pooled (split among team)', 'Both (mixed model)'], validation: { required: true }, sort_order: 5 },
    { key: 'qr_required', label: 'QR codes required?', kind: 'boolean', sort_order: 6 },
    { key: 'nfc_tags_required', label: 'NFC tags required?', kind: 'boolean', sort_order: 7 },
    { key: 'nfc_wearables_required', label: 'NFC wearables required?', kind: 'boolean', sort_order: 8 },
    { key: 'payment_provider', label: 'Preferred payment provider', kind: 'select', options: ['Paystack', 'PayFast', 'Either is fine'], sort_order: 9 },
    { key: 'launch_date', label: 'Target launch date', kind: 'date', sort_order: 10 },
  ],
  'performance-tuning-remapping': [
    { key: 'vehicle_make', label: 'Vehicle make', kind: 'text', validation: { required: true }, sort_order: 1 },
    { key: 'vehicle_model', label: 'Vehicle model', kind: 'text', validation: { required: true }, sort_order: 2 },
    { key: 'vehicle_year', label: 'Year of manufacture', kind: 'number', validation: { min: 1990, max: 2026, required: true }, sort_order: 3 },
    { key: 'fuel_type', label: 'Fuel type', kind: 'select', options: ['Petrol', 'Diesel', 'Electric', 'Hybrid'], validation: { required: true }, sort_order: 4 },
    { key: 'engine_size', label: 'Engine size', kind: 'select', options: ['1.0L', '1.2L', '1.4L', '1.6L', '1.8L', '2.0L', '2.4L', '3.0L', '4.0L+', 'Other'], validation: { required: true }, sort_order: 5 },
    { key: 'tuning_stage', label: 'Desired tuning stage', kind: 'select', options: ['Stage 1 (stock hardware)', 'Stage 2 (hardware mods)', 'Economy remap', 'Transmission only', 'Data log first'], validation: { required: true }, sort_order: 6 },
    { key: 'dyno_required', label: 'Dyno run required?', kind: 'boolean', sort_order: 7 },
    { key: 'current_mods', label: 'Current hardware modifications', kind: 'text', sort_order: 8 },
    { key: 'vehicle_location', label: 'Vehicle location', kind: 'address', validation: { required: true }, sort_order: 9 },
  ],
  'technology-development': [
    { key: 'project_type', label: 'Project type', kind: 'select', options: ['AI Development', 'SaaS Platform', 'Mobile App', 'Web Application', 'API / Integration', 'Dashboard', 'WhatsApp Automation', 'NFC / IoT Solution', 'Other'], validation: { required: true }, sort_order: 1 },
    { key: 'description', label: 'Project description', kind: 'text', validation: { required: true, minLength: 20 }, sort_order: 2 },
    { key: 'budget_range', label: 'Estimated budget (ZAR)', kind: 'select', options: ['Under R10,000', 'R10,000 – R50,000', 'R50,000 – R150,000', 'R150,000 – R500,000', 'R500,000+'], sort_order: 3 },
    { key: 'timeline', label: 'Desired timeline', kind: 'select', options: ['ASAP', '1 month', '2–3 months', '3–6 months', '6+ months'], sort_order: 4 },
    { key: 'source_code_ownership', label: 'Full source code ownership required?', kind: 'boolean', sort_order: 5 },
  ],
};

// ─── PLANS ────────────────────────────────────────────────────
export const PLANS: Plan[] = [
  {
    slug: 'starter', name: 'Starter', party_type: 'provider', tier_rank: 1,
    price_monthly: 399, price_annual: 3990,
    lead_credits: 10, max_niches: 1, max_regions: 2, ai_quotes: 15, team_seats: 1,
    features: ['10 lead credits/month', '1 niche', '2 regions', '15 AI quotes/month', '1 team seat'],
  },
  {
    slug: 'growth', name: 'Growth', party_type: 'provider', tier_rank: 2,
    price_monthly: 899, price_annual: 8990,
    lead_credits: 30, max_niches: 2, max_regions: 5, ai_quotes: 60, team_seats: 3,
    highlight: true,
    features: ['30 lead credits/month', '2 niches', '5 regions', '60 AI quotes/month', 'Supplier pricing access', 'Verified badge', '3 team seats'],
  },
  {
    slug: 'pro', name: 'Pro', party_type: 'provider', tier_rank: 3,
    price_monthly: 1899, price_annual: 18990,
    lead_credits: 90, max_niches: 4, max_regions: 15, ai_quotes: 250, team_seats: 10,
    features: ['90 lead credits/month', '4 niches', '15 regions', '250 AI quotes/month', 'Supplier pricing access', 'Verified badge', 'Priority ranking', '10 team seats'],
  },
  {
    slug: 'elite', name: 'Elite', party_type: 'provider', tier_rank: 4,
    price_monthly: 3499, price_annual: 34990,
    lead_credits: null, max_niches: null, max_regions: null, ai_quotes: null, team_seats: null,
    features: ['Unlimited lead credits', 'Unlimited niches', 'Unlimited regions', 'Unlimited AI quotes', 'API access', 'White label', 'Priority support'],
  },
];

// ─── HELPERS ──────────────────────────────────────────────────
export function getNicheBySlug(slug: string): Niche | undefined {
  return NICHES.find(n => n.slug === slug);
}

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find(i => i.slug === slug);
}

export function getVentureBySlug(slug: string): Venture | undefined {
  return VENTURES.find(v => v.slug === slug);
}

export function getNichesByIndustry(industrySlug: string): Niche[] {
  return NICHES.filter(n => n.industry_slug === industrySlug);
}

export function getVentureForNiche(nicheSlug: string): Venture | undefined {
  return VENTURES.find(v => v.niches.includes(nicheSlug));
}

export function formatZAR(amount: number): string {
  if (amount === 0) return 'Listing only';
  return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(amount);
}

export const TRANSACTION_TYPE_LABELS: Record<string, { label: string; cta: string; color: string }> = {
  site_visit:   { label: 'Site Visit Required', cta: 'Request a Site Visit', color: '#0ea5e9' },
  spec_quote:   { label: 'Instant Quote',        cta: 'Get an Instant Quote', color: '#10b981' },
  professional: { label: 'Professional Service', cta: 'Request a Proposal',   color: '#8b5cf6' },
  supplier_rfq: { label: 'Request a Quote',      cta: 'Send RFQ',             color: '#f59e0b' },
};
