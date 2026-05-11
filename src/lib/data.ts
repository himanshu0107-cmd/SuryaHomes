// ─── Types ──────────────────────────────────────────────────────────────────

export interface Property {
  id: string;
  title: string;
  type: 'Flat' | 'Plot' | 'Commercial' | 'Villa';
  price: number;
  priceLabel: string;
  location: string;
  city: string;
  bhk: number;
  area: number;
  furnished: 'Furnished' | 'Semi-Furnished' | 'Unfurnished';
  possession: 'Ready to Move' | 'Under Construction';
  postedDate: string;
  featured: boolean;
  verified: boolean;
  sold: boolean;
  images: string[];
  amenities: string[];
  description: string;
  agent: string;
  agentPhone: string;
  floor: number;
  totalFloors: number;
  facing: string;
  ageOfProperty: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorAvatar: string;
  thumbnail: string;
  content: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  property: string;
  avatar: string;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  status: 'Planning' | 'In Progress' | 'Completed';
  budget: number;
  startDate: string;
  endDate: string;
  city: string;
  type: string;
  description: string;
  images: string[];
}

// ─── Utility ────────────────────────────────────────────────────────────────

export function formatPrice(price: number): string {
  if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
  if (price >= 100000) return `₹${(price / 100000).toFixed(1)} L`;
  return `₹${price.toLocaleString('en-IN')}`;
}

// ─── Properties Data ────────────────────────────────────────────────────────

export const properties: Property[] = [
  {
    id: 'p1',
    title: '3 BHK Premium Apartment in Sector 150',
    type: 'Flat',
    price: 7500000,
    priceLabel: '₹75 L',
    location: 'Sector 150, Greater Noida',
    city: 'Greater Noida',
    bhk: 3,
    area: 1450,
    furnished: 'Semi-Furnished',
    possession: 'Ready to Move',
    postedDate: '2025-12-01',
    featured: true,
    verified: true,
    sold: false,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    ],
    amenities: ['Parking', 'Gym', 'Lift', 'Security', 'Power Backup', 'Swimming Pool', 'Club House'],
    description: 'Luxurious 3 BHK apartment with stunning views and top-notch amenities. Located in the prime Sector 150 with easy access to Noida Expressway.',
    agent: 'Rajesh Sharma',
    agentPhone: '+91-9876543210',
    floor: 8,
    totalFloors: 18,
    facing: 'East',
    ageOfProperty: 'New',
  },
  {
    id: 'p2',
    title: '200 Sq Yd Residential Plot in Knowledge Park',
    type: 'Plot',
    price: 4200000,
    priceLabel: '₹42 L',
    location: 'Knowledge Park III, Greater Noida',
    city: 'Greater Noida',
    bhk: 0,
    area: 200,
    furnished: 'Unfurnished',
    possession: 'Ready to Move',
    postedDate: '2025-11-15',
    featured: true,
    verified: true,
    sold: false,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
      'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800',
    ],
    amenities: ['Corner Plot', 'Wide Road', 'RERA Approved', 'Electricity', 'Water Supply'],
    description: 'Premium residential plot in Knowledge Park III. RERA approved, corner plot with wide road access. Ideal for building your dream home.',
    agent: 'Priya Singh',
    agentPhone: '+91-9876543211',
    floor: 0,
    totalFloors: 0,
    facing: 'North',
    ageOfProperty: 'NA',
  },
  {
    id: 'p3',
    title: '4 BHK Luxury Villa in Yamuna Expressway',
    type: 'Villa',
    price: 15000000,
    priceLabel: '₹1.5 Cr',
    location: 'Yamuna Expressway, Greater Noida',
    city: 'Greater Noida',
    bhk: 4,
    area: 2800,
    furnished: 'Furnished',
    possession: 'Ready to Move',
    postedDate: '2025-10-20',
    featured: true,
    verified: true,
    sold: false,
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    ],
    amenities: ['Parking', 'Private Garden', 'Smart Home', 'Security', 'Power Backup', 'Modular Kitchen', 'Home Theater'],
    description: 'Exquisite 4 BHK luxury villa with private garden, smart home automation, and world-class finishes. A lifestyle upgrade you deserve.',
    agent: 'Vikram Gupta',
    agentPhone: '+91-9876543212',
    floor: 0,
    totalFloors: 3,
    facing: 'South-West',
    ageOfProperty: '1 Year',
  },
  {
    id: 'p4',
    title: '2 BHK Affordable Flat in Noida Extension',
    type: 'Flat',
    price: 3800000,
    priceLabel: '₹38 L',
    location: 'Noida Extension, Greater Noida West',
    city: 'Greater Noida',
    bhk: 2,
    area: 950,
    furnished: 'Unfurnished',
    possession: 'Ready to Move',
    postedDate: '2025-12-10',
    featured: false,
    verified: true,
    sold: false,
    images: [
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800',
      'https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=800',
    ],
    amenities: ['Parking', 'Lift', 'Security', 'Power Backup', 'Children Play Area'],
    description: '2 BHK flat in the rapidly growing Noida Extension area. Great connectivity to Delhi and Noida with all essential amenities.',
    agent: 'Anjali Verma',
    agentPhone: '+91-9876543213',
    floor: 5,
    totalFloors: 12,
    facing: 'West',
    ageOfProperty: '3 Years',
  },
  {
    id: 'p5',
    title: 'Commercial Office Space in Sector 62 Noida',
    type: 'Commercial',
    price: 9500000,
    priceLabel: '₹95 L',
    location: 'Sector 62, Noida',
    city: 'Noida',
    bhk: 0,
    area: 1200,
    furnished: 'Semi-Furnished',
    possession: 'Ready to Move',
    postedDate: '2025-11-01',
    featured: false,
    verified: true,
    sold: false,
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
    ],
    amenities: ['Parking', 'High-Speed Internet', 'Conference Room', 'Cafeteria', 'Security'],
    description: 'Premium commercial office space in the IT hub of Noida Sector 62. Perfect for startups and established businesses.',
    agent: 'Rahul Mehta',
    agentPhone: '+91-9876543214',
    floor: 4,
    totalFloors: 10,
    facing: 'East',
    ageOfProperty: '5 Years',
  },
  {
    id: 'p6',
    title: '3 BHK Flat near Metro Station, Ghaziabad',
    type: 'Flat',
    price: 5200000,
    priceLabel: '₹52 L',
    location: 'Indirapuram, Ghaziabad',
    city: 'Ghaziabad',
    bhk: 3,
    area: 1250,
    furnished: 'Semi-Furnished',
    possession: 'Ready to Move',
    postedDate: '2025-12-05',
    featured: false,
    verified: false,
    sold: false,
    images: [
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    ],
    amenities: ['Parking', 'Gym', 'Lift', 'Security', 'Power Backup', 'Jogging Track'],
    description: '3 BHK flat near metro station in Indirapuram. Excellent connectivity and well-maintained society with all modern amenities.',
    agent: 'Suresh Kumar',
    agentPhone: '+91-9876543215',
    floor: 7,
    totalFloors: 14,
    facing: 'North-East',
    ageOfProperty: '4 Years',
  },
];

// ─── Blog Posts ──────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'Real Estate Market Trends in Greater Noida 2025',
    excerpt: 'Greater Noida continues to emerge as a top real estate destination with infrastructure development and affordable pricing compared to Delhi NCR.',
    category: 'Market Trends',
    date: '2025-12-08',
    readTime: '5 min read',
    author: 'Arun Sharma',
    authorAvatar: 'https://i.pravatar.cc/60?img=11',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    content: `<h2>Greater Noida Real Estate: A Booming Market</h2><p>The real estate market in Greater Noida has seen remarkable growth in 2025...</p>`,
    tags: ['Greater Noida', 'Investment', 'Market Analysis'],
  },
  {
    id: 'b2',
    title: 'Complete Guide to Stamp Duty in Uttar Pradesh',
    excerpt: 'Everything you need to know about stamp duty rates, registration charges, and the legal process for property purchase in UP.',
    category: 'Legal Guide',
    date: '2025-11-20',
    readTime: '8 min read',
    author: 'Neha Agarwal',
    authorAvatar: 'https://i.pravatar.cc/60?img=47',
    thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    content: `<h2>Stamp Duty in UP</h2><p>Understanding stamp duty is crucial when buying property in Uttar Pradesh...</p>`,
    tags: ['Legal', 'Stamp Duty', 'UP', 'Registration'],
  },
  {
    id: 'b3',
    title: 'Top 5 Investment Tips for First-Time Home Buyers',
    excerpt: 'Planning to buy your first home? These expert tips will help you make an informed decision and avoid common pitfalls.',
    category: 'Investment Tips',
    date: '2025-11-10',
    readTime: '6 min read',
    author: 'Vikram Gupta',
    authorAvatar: 'https://i.pravatar.cc/60?img=33',
    thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800',
    content: `<h2>Smart Investment for First-Time Buyers</h2><p>Buying your first home is one of the biggest financial decisions...</p>`,
    tags: ['Investment', 'First Home', 'Tips'],
  },
  {
    id: 'b4',
    title: 'How to Estimate Construction Costs in 2025',
    excerpt: 'A comprehensive breakdown of construction costs per square foot in Greater Noida, Noida, and NCR region for residential and commercial projects.',
    category: 'Construction Advice',
    date: '2025-10-28',
    readTime: '7 min read',
    author: 'Rahul Mehta',
    authorAvatar: 'https://i.pravatar.cc/60?img=18',
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
    content: `<h2>Construction Costs in NCR</h2><p>Understanding construction costs helps you plan your project better...</p>`,
    tags: ['Construction', 'Cost Estimation', 'NCR'],
  },
  {
    id: 'b5',
    title: 'Why Greater Noida West is the Next Big Thing',
    excerpt: 'Noida Extension (Greater Noida West) is rapidly transforming into a prime residential destination. Here is why you should invest now.',
    category: 'Area Reviews',
    date: '2025-10-15',
    readTime: '4 min read',
    author: 'Priya Singh',
    authorAvatar: 'https://i.pravatar.cc/60?img=45',
    thumbnail: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
    content: `<h2>Greater Noida West: Rising Star</h2><p>Greater Noida West has seen unprecedented growth in recent years...</p>`,
    tags: ['Greater Noida West', 'Area Review', 'Investment'],
  },
  {
    id: 'b6',
    title: 'RERA Registration: What Buyers Must Know',
    excerpt: 'RERA has transformed the real estate sector. Learn how to verify builder registrations and protect your investment.',
    category: 'Legal Guide',
    date: '2025-09-30',
    readTime: '5 min read',
    author: 'Arun Sharma',
    authorAvatar: 'https://i.pravatar.cc/60?img=11',
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    content: `<h2>Understanding RERA</h2><p>RERA or Real Estate Regulatory Authority has been a game-changer...</p>`,
    tags: ['RERA', 'Legal', 'Buyer Protection'],
  },
];

// ─── Testimonials ────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Amit Kumar',
    location: 'Greater Noida',
    rating: 5,
    text: 'Surya Homes made our property purchase journey completely stress-free. Their team guided us through every step, from site visits to registration. We got our dream 3BHK at the best price!',
    property: '3 BHK in Sector 150',
    avatar: 'https://i.pravatar.cc/80?img=12',
  },
  {
    id: 't2',
    name: 'Sunita Sharma',
    location: 'Noida',
    rating: 5,
    text: 'The construction quality of our home built by Surya Homes is exceptional. They completed the project on time and within budget. The 5-year warranty gives us peace of mind.',
    property: 'Residential Construction Project',
    avatar: 'https://i.pravatar.cc/80?img=48',
  },
  {
    id: 't3',
    name: 'Ravi Agarwal',
    location: 'Ghaziabad',
    rating: 5,
    text: 'I was looking for a commercial space for my startup. Surya Homes showed us multiple options and helped negotiate the best deal. Highly professional team!',
    property: 'Commercial Office Space, Noida',
    avatar: 'https://i.pravatar.cc/80?img=7',
  },
  {
    id: 't4',
    name: 'Pooja Verma',
    location: 'Greater Noida West',
    rating: 4,
    text: 'Excellent service! The EMI calculator and price transparency helped us make a confident decision. The legal verification process was thorough and trustworthy.',
    property: '2 BHK Flat, Noida Extension',
    avatar: 'https://i.pravatar.cc/80?img=41',
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'pr1',
    name: 'Surya Residency Phase 1',
    client: 'Private Client',
    status: 'Completed',
    budget: 25000000,
    startDate: '2024-01-15',
    endDate: '2025-06-30',
    city: 'Greater Noida',
    type: 'Residential Construction',
    description: '24-unit residential apartment complex with premium amenities',
    images: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800',
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800',
    ],
  },
  {
    id: 'pr2',
    name: 'TechPark Commercial Complex',
    client: 'Alpha Corp',
    status: 'In Progress',
    budget: 50000000,
    startDate: '2025-03-01',
    endDate: '2026-09-30',
    city: 'Noida',
    type: 'Commercial Construction',
    description: '5-floor commercial complex with modern co-working spaces and retail',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    ],
  },
  {
    id: 'pr3',
    name: 'Royal Villa Interior Fitout',
    client: 'Mr. Sharma',
    status: 'Completed',
    budget: 5000000,
    startDate: '2025-01-10',
    endDate: '2025-04-30',
    city: 'Greater Noida',
    type: 'Interior Design',
    description: 'Complete interior design and fitout for a 4BHK luxury villa',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800',
    ],
  },
  {
    id: 'pr4',
    name: 'Green Township Planning',
    client: 'GreenBuild Developers',
    status: 'Planning',
    budget: 120000000,
    startDate: '2026-01-01',
    endDate: '2028-12-31',
    city: 'Greater Noida',
    type: 'Architectural Planning',
    description: 'Eco-friendly township with 200 residential units and green spaces',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    ],
  },
];

// ─── Cities ──────────────────────────────────────────────────────────────────

export const cities = [
  { name: 'Greater Noida', count: 120, lat: 28.4744, lng: 77.5040 },
  { name: 'Noida', count: 95, lat: 28.5355, lng: 77.3910 },
  { name: 'Ghaziabad', count: 65, lat: 28.6692, lng: 77.4538 },
  { name: 'Delhi NCR', count: 80, lat: 28.7041, lng: 77.1025 },
  { name: 'Lucknow', count: 45, lat: 26.8467, lng: 80.9462 },
  { name: 'Agra', count: 30, lat: 27.1767, lng: 78.0081 },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats = [
  { label: 'Properties Listed', value: 500, suffix: '+', icon: '🏠' },
  { label: 'Cities Covered', value: 10, suffix: '+', icon: '🌆' },
  { label: 'Happy Clients', value: 1000, suffix: '+', icon: '😊' },
  { label: 'Years of Experience', value: 15, suffix: '', icon: '⭐' },
];

// ─── Services ────────────────────────────────────────────────────────────────

export const services = [
  {
    id: 's1',
    icon: '🏗️',
    title: 'Residential Construction',
    description: 'Build your dream home with our expert team. From foundation to finishing, we handle it all with precision and quality.',
    color: '#1A2E4A',
  },
  {
    id: 's2',
    icon: '🏢',
    title: 'Commercial Construction',
    description: 'Modern commercial spaces designed for productivity. Office complexes, retail spaces, and industrial buildings.',
    color: '#D4A017',
  },
  {
    id: 's3',
    icon: '🛋️',
    title: 'Interior Design & Fitout',
    description: 'Transform spaces into stunning environments. Our designers craft interiors that reflect your personality.',
    color: '#1A2E4A',
  },
  {
    id: 's4',
    icon: '🔨',
    title: 'Renovation & Remodeling',
    description: 'Breathe new life into your existing space. From kitchen upgrades to complete home makeovers.',
    color: '#D4A017',
  },
  {
    id: 's5',
    icon: '📐',
    title: 'Architectural Planning',
    description: 'Visionary architectural designs that balance aesthetics, functionality, and sustainability.',
    color: '#1A2E4A',
  },
  {
    id: 's6',
    icon: '📊',
    title: 'Project Management',
    description: 'End-to-end project management ensuring on-time delivery, quality control, and transparent reporting.',
    color: '#D4A017',
  },
];

// ─── Admin mock data ──────────────────────────────────────────────────────────

export const inquiries = [
  { id: 'i1', name: 'Rakesh Jain', phone: '9876501234', email: 'rakesh@email.com', property: 'p1', message: 'Interested in visiting the flat', status: 'New', date: '2025-12-09' },
  { id: 'i2', name: 'Meera Patel', phone: '9876502345', email: 'meera@email.com', property: 'p3', message: 'Want to schedule a site visit', status: 'In Progress', date: '2025-12-08' },
  { id: 'i3', name: 'Deepak Misra', phone: '9876503456', email: 'deepak@email.com', property: 'p5', message: 'Commercial space inquiry for office', status: 'Closed', date: '2025-12-07' },
  { id: 'i4', name: 'Asha Srivastava', phone: '9876504567', email: 'asha@email.com', property: 'p2', message: 'Plot purchase inquiry', status: 'New', date: '2025-12-06' },
];

export const adminUsers = [
  { id: 'u1', name: 'Admin User', email: 'admin@suryahomes.in', role: 'Admin', status: 'Active', joined: '2023-01-01' },
  { id: 'u2', name: 'Rajesh Sharma', email: 'rajesh@suryahomes.in', role: 'Agent', status: 'Active', joined: '2023-06-15' },
  { id: 'u3', name: 'Amit Kumar', email: 'amit@example.com', role: 'Customer', status: 'Active', joined: '2025-11-20' },
  { id: 'u4', name: 'Priya Singh', email: 'priya@suryahomes.in', role: 'Agent', status: 'Active', joined: '2024-02-10' },
];
