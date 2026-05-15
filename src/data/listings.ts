// ─── Surya Homes · Marketplace Listings Data ────────────────────────────────

export type ListingType = 'Sale' | 'Rent';
export type PropertyCategory = 'Flat' | 'Villa' | 'Plot' | 'Commercial' | 'Row House' | 'Studio' | 'PG / Hostel';
export type FurnishingStatus = 'Fully Furnished' | 'Semi Furnished' | 'Unfurnished';
export type PossessionStatus = 'Ready to Move' | 'Under Construction' | 'New Launch';
export type FacingDirection = 'East' | 'West' | 'North' | 'South' | 'North-East' | 'North-West' | 'South-East' | 'South-West';

export interface MarketplaceListing {
  id: string;
  listingType: ListingType;
  category: PropertyCategory;
  title: string;
  price: string;
  priceNumeric: number;       // for sorting/filtering (in lakhs for sale, ₹/mo for rent)
  location: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  area: number;               // sq ft
  furnishing: FurnishingStatus;
  possession: PossessionStatus;
  facing?: FacingDirection;
  floor?: string;             // e.g. "3rd of 12"
  totalFloors?: number;
  parking: boolean;
  amenities: string[];
  description: string;
  image: string;
  gallery: string[];
  postedBy: string;
  postedByRole: 'Owner' | 'Agent' | 'Builder';
  postedByPhone: string;
  postedDate: string;         // ISO date string
  badge?: string;
  verified: boolean;
  reraId?: string;
}

export const marketplaceListings: MarketplaceListing[] = [
  // ── FOR SALE ──────────────────────────────────────────────────────────────
  {
    id: 'ml-001',
    listingType: 'Sale',
    category: 'Flat',
    title: '3 BHK Premium Apartment in Sector 150',
    price: '₹ 78 L',
    priceNumeric: 78,
    location: 'Sector 150, Greater Noida',
    city: 'Greater Noida',
    bedrooms: 3,
    bathrooms: 2,
    area: 1480,
    furnishing: 'Semi Furnished',
    possession: 'Ready to Move',
    facing: 'East',
    floor: '7th of 18',
    totalFloors: 18,
    parking: true,
    amenities: ['Swimming Pool', 'Gym', 'Car Parking', '24/7 Security', 'Power Backup', 'Club House', 'Children Play Area'],
    description: 'A spacious 3 BHK premium apartment in the posh Sector 150. Features modern interiors, top-class amenities, and excellent connectivity to Noida Expressway. East-facing with ample natural light throughout the day.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
    postedBy: 'Rajesh Sharma',
    postedByRole: 'Owner',
    postedByPhone: '+91 98765 43210',
    postedDate: '2026-05-01',
    badge: 'Featured',
    verified: true,
    reraId: 'UPRERAPRJ-098234',
  },
  {
    id: 'ml-002',
    listingType: 'Sale',
    category: 'Villa',
    title: '4 BHK Luxury Independent Villa',
    price: '₹ 1.8 Cr',
    priceNumeric: 180,
    location: 'Yamuna Expressway, Greater Noida',
    city: 'Greater Noida',
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    furnishing: 'Fully Furnished',
    possession: 'Ready to Move',
    facing: 'North-East',
    floor: 'Ground + 2',
    parking: true,
    amenities: ['Private Garden', 'Swimming Pool', '2-Car Garage', 'Modular Kitchen', 'Home Theater', 'Solar Panels', 'CCTV', 'Servant Room'],
    description: 'Ultra-luxury 4 BHK villa on Yamuna Expressway. Designed with imported Italian marble, smart home automation, and a breathtaking 800 sq ft private garden. Each room has en-suite bathrooms.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&q=80',
    ],
    postedBy: 'Amit Verma',
    postedByRole: 'Agent',
    postedByPhone: '+91 76543 21098',
    postedDate: '2026-04-28',
    badge: 'Premium',
    verified: true,
    reraId: 'UPRERAPRJ-045123',
  },
  {
    id: 'ml-003',
    listingType: 'Sale',
    category: 'Plot',
    title: '250 Sq Yd Corner Residential Plot',
    price: '₹ 52 L',
    priceNumeric: 52,
    location: 'Knowledge Park IV, Greater Noida',
    city: 'Greater Noida',
    bedrooms: 0,
    bathrooms: 0,
    area: 250,
    furnishing: 'Unfurnished',
    possession: 'Ready to Move',
    facing: 'North',
    parking: false,
    amenities: ['Corner Plot', 'Gated Community', 'Wide Roads', 'Underground Drainage', 'Street Lights', 'Park Facing'],
    description: 'Prime corner plot in the prestigious Knowledge Park IV. Surrounded by top schools and hospitals. Ready for immediate construction with all approvals in place. Clear title with zero disputes.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    ],
    postedBy: 'Priya Singh',
    postedByRole: 'Owner',
    postedByPhone: '+91 87654 32109',
    postedDate: '2026-05-03',
    badge: 'Best Value',
    verified: true,
  },
  {
    id: 'ml-004',
    listingType: 'Sale',
    category: 'Flat',
    title: '2 BHK Modern Apartment near Metro',
    price: '₹ 42 L',
    priceNumeric: 42,
    location: 'Sector 62, Noida',
    city: 'Noida',
    bedrooms: 2,
    bathrooms: 2,
    area: 980,
    furnishing: 'Semi Furnished',
    possession: 'Ready to Move',
    facing: 'West',
    floor: '4th of 10',
    totalFloors: 10,
    parking: true,
    amenities: ['Gym', 'Play Area', 'CCTV', 'Intercom', 'Power Backup', 'Visitor Parking'],
    description: 'Well-designed 2 BHK apartment with modern layout. Located near Sector 62 Metro Station for easy commute. Perfect for young professionals and small families.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
    ],
    postedBy: 'Neha Gupta',
    postedByRole: 'Agent',
    postedByPhone: '+91 95432 10987',
    postedDate: '2026-05-07',
    verified: true,
  },
  {
    id: 'ml-005',
    listingType: 'Sale',
    category: 'Commercial',
    title: 'Grade-A Office Space in Sector 18',
    price: '₹ 2.2 Cr',
    priceNumeric: 220,
    location: 'Sector 18, Noida',
    city: 'Noida',
    bedrooms: 0,
    bathrooms: 4,
    area: 3200,
    furnishing: 'Fully Furnished',
    possession: 'Under Construction',
    parking: true,
    amenities: ['High-Speed Elevator', 'Cafeteria', 'Ample Parking', 'Fiber Internet', '24/7 Security', 'Conference Room', 'Power Backup', 'Fire Safety'],
    description: 'Premium Grade-A office space in the commercial hub of Sector 18. Ideal for IT companies and MNCs. Expected possession Q4 2026.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    ],
    postedBy: 'Suresh Kumar',
    postedByRole: 'Builder',
    postedByPhone: '+91 88765 43210',
    postedDate: '2026-04-20',
    badge: 'New Launch',
    verified: true,
    reraId: 'UPRERAPRJ-078901',
  },
  {
    id: 'ml-006',
    listingType: 'Sale',
    category: 'Row House',
    title: '3 BHK Premium Row House with Terrace',
    price: '₹ 95 L',
    priceNumeric: 95,
    location: 'Omega Sector, Greater Noida',
    city: 'Greater Noida',
    bedrooms: 3,
    bathrooms: 3,
    area: 1850,
    furnishing: 'Semi Furnished',
    possession: 'Ready to Move',
    facing: 'South',
    floor: 'Ground + 1',
    parking: true,
    amenities: ['Private Terrace', 'Stilt Parking', 'Green Belt View', 'Modular Kitchen', 'Security Cabin', 'Rainwater Harvesting'],
    description: 'Elegant 3 BHK row house in a peaceful gated society with green belt view. Spacious private terrace and open layout, ideal for families who love outdoor space.',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    ],
    postedBy: 'Kavita Sharma',
    postedByRole: 'Owner',
    postedByPhone: '+91 90876 54321',
    postedDate: '2026-05-05',
    verified: true,
  },

  // ── FOR RENT ──────────────────────────────────────────────────────────────
  {
    id: 'ml-007',
    listingType: 'Rent',
    category: 'Flat',
    title: '2 BHK Furnished Apartment for Rent',
    price: '₹ 22,000/mo',
    priceNumeric: 22000,
    location: 'Sector 137, Noida',
    city: 'Noida',
    bedrooms: 2,
    bathrooms: 2,
    area: 1050,
    furnishing: 'Fully Furnished',
    possession: 'Ready to Move',
    facing: 'East',
    floor: '9th of 20',
    totalFloors: 20,
    parking: true,
    amenities: ['Swimming Pool', 'Gym', 'CCTV', '24/7 Security', 'Power Backup', 'Wi-Fi Ready'],
    description: 'Beautifully furnished 2 BHK flat with modular kitchen, wardrobes, and AC in all rooms. Perfect for working professionals near Noida-Greater Noida Expressway.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
    ],
    postedBy: 'Rakesh Mishra',
    postedByRole: 'Owner',
    postedByPhone: '+91 91234 56789',
    postedDate: '2026-05-08',
    badge: 'Available Now',
    verified: true,
  },
  {
    id: 'ml-008',
    listingType: 'Rent',
    category: 'Villa',
    title: '4 BHK Independent Villa for Rent',
    price: '₹ 65,000/mo',
    priceNumeric: 65000,
    location: 'Sector 44, Noida',
    city: 'Noida',
    bedrooms: 4,
    bathrooms: 4,
    area: 2800,
    furnishing: 'Semi Furnished',
    possession: 'Ready to Move',
    facing: 'North-West',
    floor: 'Ground + 2',
    parking: true,
    amenities: ['Private Garden', 'Terrace', 'Servant Room', 'Modular Kitchen', 'CCTV', '2-Car Garage'],
    description: 'Spacious 4 BHK independent villa in a prime location. Ideal for large families or corporate executives. 800 sq ft private garden and covered parking for 2 cars.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    ],
    postedBy: 'Deepak Bhatia',
    postedByRole: 'Agent',
    postedByPhone: '+91 80123 45678',
    postedDate: '2026-04-30',
    badge: 'Premium',
    verified: true,
  },
  {
    id: 'ml-009',
    listingType: 'Rent',
    category: 'Studio',
    title: 'Compact Studio Apartment near IT Hub',
    price: '₹ 12,000/mo',
    priceNumeric: 12000,
    location: 'Sector 62, Noida',
    city: 'Noida',
    bedrooms: 1,
    bathrooms: 1,
    area: 420,
    furnishing: 'Fully Furnished',
    possession: 'Ready to Move',
    facing: 'South',
    floor: '5th of 15',
    totalFloors: 15,
    parking: false,
    amenities: ['Gym', 'Cafeteria', 'Laundry', 'Wi-Fi', '24/7 Security', 'Power Backup'],
    description: 'Cosy studio apartment with all modern amenities. Walking distance from Sector 62 Metro Station and IT parks. Ideal for working professionals.',
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80',
    ],
    postedBy: 'Anita Reddy',
    postedByRole: 'Owner',
    postedByPhone: '+91 72345 67890',
    postedDate: '2026-05-09',
    badge: 'Available Now',
    verified: true,
  },
  {
    id: 'ml-010',
    listingType: 'Rent',
    category: 'Commercial',
    title: 'Office Space for Rent in Tech Zone',
    price: '₹ 1,20,000/mo',
    priceNumeric: 120000,
    location: 'Tech Zone IV, Greater Noida',
    city: 'Greater Noida',
    bedrooms: 0,
    bathrooms: 3,
    area: 2000,
    furnishing: 'Fully Furnished',
    possession: 'Ready to Move',
    parking: true,
    amenities: ['Fiber Internet', 'Conference Room', 'Reception Area', 'Power Backup', 'CCTV', 'Cafeteria', 'High-Speed Elevator'],
    description: 'Plug-and-play office space in the heart of Tech Zone. High-speed fiber, fully furnished workstations, and conference rooms. Ready for immediate occupation.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    ],
    postedBy: 'VentureSpace Realty',
    postedByRole: 'Agent',
    postedByPhone: '+91 98001 11222',
    postedDate: '2026-05-02',
    verified: true,
  },
  {
    id: 'ml-011',
    listingType: 'Rent',
    category: 'PG / Hostel',
    title: 'PG Accommodation for Working Professionals',
    price: '₹ 8,500/mo',
    priceNumeric: 8500,
    location: 'Sector 18, Noida',
    city: 'Noida',
    bedrooms: 1,
    bathrooms: 1,
    area: 180,
    furnishing: 'Fully Furnished',
    possession: 'Ready to Move',
    parking: false,
    amenities: ['Wi-Fi', 'Meals Included', 'Laundry', 'CCTV', 'Common Lounge', 'Power Backup'],
    description: 'Safe and hygienic PG accommodation with meals. Single and double-sharing options available. Strict no-party policy. Ideal for working professionals.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    ],
    postedBy: 'HomeStay Noida',
    postedByRole: 'Agent',
    postedByPhone: '+91 97112 33445',
    postedDate: '2026-05-10',
    verified: false,
  },
  {
    id: 'ml-012',
    listingType: 'Rent',
    category: 'Flat',
    title: '3 BHK Semi-Furnished Flat for Rent',
    price: '₹ 32,000/mo',
    priceNumeric: 32000,
    location: 'Sector 78, Noida',
    city: 'Noida',
    bedrooms: 3,
    bathrooms: 2,
    area: 1380,
    furnishing: 'Semi Furnished',
    possession: 'Ready to Move',
    facing: 'North-East',
    floor: '12th of 28',
    totalFloors: 28,
    parking: true,
    amenities: ['Swimming Pool', 'Gym', 'Club House', 'Kids Zone', '24/7 Security', 'Power Backup', 'Intercom'],
    description: 'Airy 3 BHK flat on the 12th floor with panoramic views. Wardrobes and modular kitchen included. Premium society with all amenities.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    ],
    postedBy: 'Sunita Agarwal',
    postedByRole: 'Owner',
    postedByPhone: '+91 96543 21098',
    postedDate: '2026-05-06',
    badge: 'Available Now',
    verified: true,
  },
];

// ─── Form submission type ────────────────────────────────────────────────────
export interface ListingFormData {
  listingType: ListingType;
  category: PropertyCategory;
  title: string;
  city: string;
  location: string;
  price: string;
  area: string;
  bedrooms: string;
  bathrooms: string;
  furnishing: FurnishingStatus;
  possession: PossessionStatus;
  facing: FacingDirection | '';
  floor: string;
  totalFloors: string;
  parking: boolean;
  description: string;
  amenities: string[];
  postedByName: string;
  postedByPhone: string;
  postedByEmail: string;
  postedByRole: 'Owner' | 'Agent' | 'Builder';
  reraId: string;
  agreeToTerms: boolean;
}
