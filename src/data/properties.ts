// ─── Surya Homes · All Dummy Data ───────────────────────────────────────────

export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  gallery: string[];
  amenities: string[];
  description: string;
  agent: string;
  agentPhone: string;
  badge?: string;
  status: 'Ready to Move' | 'Under Construction';
}

export const properties: Property[] = [
  {
    id: 1,
    title: '3 BHK Premium Apartment',
    price: '₹75 L',
    location: 'Sector 150, Greater Noida',
    type: 'Flat',
    bedrooms: 3,
    bathrooms: 2,
    area: 1450,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
    ],
    amenities: ['Swimming Pool', 'Gym', 'Car Parking', '24/7 Security', 'Power Backup', 'Club House'],
    description: 'A spacious 3 BHK premium apartment in the heart of Sector 150. Features modern interiors, top-class amenities, and excellent connectivity to Noida Expressway.',
    agent: 'Rajesh Sharma',
    agentPhone: '+91 98765 43210',
    badge: 'Featured',
    status: 'Ready to Move',
  },
  {
    id: 2,
    title: '200 Sq Yd Residential Plot',
    price: '₹42 L',
    location: 'Knowledge Park III, Greater Noida',
    type: 'Plot',
    bedrooms: 0,
    bathrooms: 0,
    area: 200,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    ],
    amenities: ['Corner Plot', 'Gated Community', 'Wide Roads', 'Underground Drainage', 'Street Lights'],
    description: 'A prime corner plot in the prestigious Knowledge Park III. Surrounded by top schools and hospitals. Ready for immediate construction with all approvals.',
    agent: 'Priya Singh',
    agentPhone: '+91 87654 32109',
    badge: 'Best Value',
    status: 'Ready to Move',
  },
  {
    id: 3,
    title: '4 BHK Luxury Villa',
    price: '₹1.5 Cr',
    location: 'Yamuna Expressway, Greater Noida',
    type: 'Villa',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&q=80',
    ],
    amenities: ['Private Garden', 'Swimming Pool', '2 Car Garage', 'Modular Kitchen', 'Home Theater', 'Solar Panels'],
    description: 'An ultra-luxury 4 BHK villa on the Yamuna Expressway. Designed with imported Italian marble, smart home automation, and a breathtaking private garden.',
    agent: 'Amit Verma',
    agentPhone: '+91 76543 21098',
    badge: 'Premium',
    status: 'Ready to Move',
  },
  {
    id: 4,
    title: '2 BHK Modern Apartment',
    price: '₹38 L',
    location: 'Sector 62, Noida',
    type: 'Flat',
    bedrooms: 2,
    bathrooms: 2,
    area: 980,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
    ],
    amenities: ['Gym', 'Play Area', 'CCTV', 'Intercom', 'Power Backup'],
    description: 'Well-designed 2 BHK apartment with a modern layout and all essential amenities. Located near Sector 62 Metro Station for easy commute.',
    agent: 'Neha Gupta',
    agentPhone: '+91 95432 10987',
    badge: undefined,
    status: 'Ready to Move',
  },
  {
    id: 5,
    title: 'Commercial Office Space',
    price: '₹2.2 Cr',
    location: 'Sector 18, Noida',
    type: 'Commercial',
    bedrooms: 0,
    bathrooms: 4,
    area: 3200,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    ],
    amenities: ['High-Speed Elevator', 'Cafeteria', 'Ample Parking', 'Fiber Internet', '24/7 Security', 'Conference Room'],
    description: 'Premium Grade-A office space in the commercial hub of Sector 18. Ideal for IT companies and MNCs looking for a prime Noida address.',
    agent: 'Suresh Kumar',
    agentPhone: '+91 88765 43210',
    badge: 'New Launch',
    status: 'Under Construction',
  },
  {
    id: 6,
    title: '3 BHK Row House',
    price: '₹92 L',
    location: 'Omega Sector, Greater Noida',
    type: 'Villa',
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    ],
    amenities: ['Private Terrace', 'Stilt Parking', 'Green Belt View', 'Modular Kitchen', 'Security Cabin'],
    description: 'Elegant 3 BHK row house in a peaceful gated society with green belt view. Spacious terrace and open layout make it ideal for families.',
    agent: 'Kavita Sharma',
    agentPhone: '+91 90876 54321',
    badge: undefined,
    status: 'Ready to Move',
  },
];

export const navItems = ['Home', 'Properties', 'About', 'Contact'];

export const stats = [
  { value: 500, suffix: '+', label: 'Properties Listed' },
  { value: 1000, suffix: '+', label: 'Happy Families' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 6, suffix: '', label: 'Cities Covered' },
];

export const features = [
  {
    icon: '🛡️',
    title: 'Trusted & Verified',
    desc: 'Every listing goes through our rigorous 25-point verification process. RERA registered properties only.',
  },
  {
    icon: '💰',
    title: 'Best Price Guarantee',
    desc: 'We negotiate the best deals for you. Transparent pricing with no hidden charges — ever.',
  },
  {
    icon: '👥',
    title: 'Expert Team',
    desc: '50+ certified real estate professionals with deep local market knowledge at your service.',
  },
];

export const testimonials = [
  {
    name: 'Aman Jha ',
    role: 'Investor, Noida',
    text: 'Surya Homes made our dream of owning a home come true. The team was professional and helped us every step of the way.',
    avatar: 'https://i.pravatar.cc/64?img=11',
    rating: 5,
  },
  {
    name: 'Himanshu Pandey',
    role: 'Home Buyer, Greater Noida',
    text: 'Best ROI on my plot investment. Their market knowledge is unmatched. Highly recommend for anyone looking to invest.',
    avatar: 'https://i.pravatar.cc/64?img=47',
    rating: 5,
  },
  {
    name: 'Jyoti Kumari',
    role: 'NRI Buyer, UK',
    text: 'Trusted them from abroad for my villa purchase. Completely transparent process and timely documentation. 10/10!',
    avatar: 'https://i.pravatar.cc/64?img=32',
    rating: 5,
  },
];
