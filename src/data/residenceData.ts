import { Amenity, GalleryItem, ResidenceFeature, LifestyleStory, LocationBenchmark } from '../types';

export const RESIDENCE_STATS = [
  {
    number: '48',
    label: 'PRIVATE RESIDENCES',
    detail: 'Full-floor and duplex configurations with private elevator vestibules',
  },
  {
    number: '32–68',
    label: 'FLOORS',
    detail: 'Elevated between 180 and 340 meters above the metropolitan canopy',
  },
  {
    number: '360°',
    label: 'CITY VIEWS',
    detail: 'Unobstructed vistas spanning the bay, harbor, and southern horizon',
  },
  {
    number: '12,000',
    label: 'SQ FT PRIVATE AMENITIES',
    detail: 'Three dedicated levels curated exclusively for Aurelia proprietors',
  },
];

export const RESIDENCE_FEATURES: ResidenceFeature[] = [
  {
    id: 'windows',
    title: 'Floor-to-ceiling windows',
    tagline: 'Framing Endless Panoramas',
    description: 'Custom-engineered 3.8-meter low-iron acoustically decoupled glass panels invite continuous natural light while shielding against external noise.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    highlight: '3.8m acoustic insulated glass',
  },
  {
    id: 'terraces',
    title: 'Private terraces',
    tagline: 'Seamless Indoor-Outdoor Living',
    description: 'Cantilevered loggias paved in honed Jura limestone provide private open-air dining and lounge spaces suspended hundreds of meters above the city.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    highlight: 'Deep cantilevered stone loggias',
  },
  {
    id: 'materials',
    title: 'Premium materials',
    tagline: 'Master Craftsman Artistry',
    description: 'Bookmatched Calacatta Oro marble, custom brushed champagne bronze hardware, and hand-scraped fumed French oak floors curated across European quarries.',
    imageUrl: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1800&q=85',
    highlight: 'Calacatta Oro & French Oak',
  },
  {
    id: 'smart-living',
    title: 'Smart living',
    tagline: 'Invisible Intuitive Technology',
    description: 'Discreet biometrics, automated circadian lighting scenes, motorized silent solar shading, and individualized multi-zone climate air filtration.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    highlight: 'Circadian integration & HEPA purification',
  },
];

export const HORIZONTAL_GALLERY: GalleryItem[] = [
  {
    id: 'living-room',
    title: 'Grand Living Room',
    category: 'Penthouse Salon',
    description: 'Double-height ceilings with panoramic southern exposure and custom carved travertine fireplace mantelpiece.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
    dimensions: '1,450 sq ft · 14 ft Ceilings',
  },
  {
    id: 'master-bedroom',
    title: 'Master Bedroom Suite',
    category: 'Private Sanctuaries',
    description: 'Corner primary retreat featuring dual dressing chambers lined in smoked oak, private morning loggia, and freestanding soaking tub overlooking the harbor.',
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=85',
    dimensions: '980 sq ft · Dual Dressing Suites',
  },
  {
    id: 'infinity-pool',
    title: 'Cantilevered Infinity Pool',
    category: 'Level 54 Oasis',
    description: 'A 25-meter heated saltwater infinity pool jutting out into the open sky with underwater acoustic audio systems.',
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1800&q=85',
    dimensions: '25m Saltwater Pool · Suspended Glass Edge',
  },
  {
    id: 'sky-lounge',
    title: 'Sky Lounge & Observatoire',
    category: 'Level 65 Resident Lounge',
    description: 'Bespoke bar surfaced in backlit onyx, private humidor lockers, and custom seating configured for intimate private receptions.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85',
    dimensions: 'Level 65 · Private Sommelier Service',
  },
  {
    id: 'private-dining',
    title: 'Private Dining & Wine Vault',
    category: 'Culinary Pavilions',
    description: 'Seating for 20 guests with an adjoining commercial catering kitchen and temperature-controlled 2,500-bottle reserve cellar.',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=85',
    dimensions: '20-Guest Banquet Room · 2,500 Bottle Vault',
  },
  {
    id: 'night-view',
    title: 'Nocturne Skyline Terrace',
    category: 'Atmospheric Dusk',
    description: 'The glowing city grid unfolding beneath, framed by radiant bronze fins reflecting the twilight glow.',
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1800&q=85',
    dimensions: '360° Unobstructed Dusk Horizons',
  },
];

export const LIFESTYLE_STORIES: LifestyleStory[] = [
  {
    id: 'morning',
    time: '07:30 AM',
    title: 'Morning rituals',
    subtitle: 'Waking in the Clouds',
    description: 'Sunlight filtering through sheer linen curtains as the aroma of single-origin espresso fills the morning terrace. Begin your day with panoramic clarity 200 meters above the awakening city.',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'wellness',
    time: '11:00 AM',
    title: 'Private wellness',
    subtitle: 'Restoration Without Departure',
    description: 'Step into your subterranean thermal suite. Private hydrotherapy circuits, Finnish cedar saunas, and bespoke somatic treatments tailored by resident therapists.',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'dining',
    time: '07:00 PM',
    title: 'Fine dining',
    subtitle: 'Culinary Masterpieces at Home',
    description: 'Host intimate multi-course dinners prepared by Michelin-starred guest chefs in the residents private dining pavilion, paired with selections from your personal cellar locker.',
    imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=85',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'evening',
    time: '10:30 PM',
    title: 'Skyline evenings',
    subtitle: 'Quiet Splendor Under the Stars',
    description: 'A nightcap by the open firepit on your private terrace. The distant hum of the metropolis dissolved into absolute calm and elevated privacy.',
    imageUrl: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1600&q=85',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=85',
  },
];

export const AMENITIES_LIST: Amenity[] = [
  {
    id: 'infinity-pool',
    number: '01',
    title: 'Infinity Pool',
    subtitle: 'Suspended Sky Pool',
    description: 'A 25-meter heated saltwater infinity pool cantilevered on the 54th floor, accompanied by private cabanas, dedicated towel and refreshment service, and panoramic sunset exposure.',
    specs: ['Level 54 Elevation', 'Heated Saltwater Filtration', 'Private Daybeds & Cabanas', 'Towel & Refreshment Attendant'],
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1800&q=85',
  },
  {
    id: 'gym',
    number: '02',
    title: 'Private Gym',
    subtitle: 'Performance Sanctuary',
    description: 'Equipped with bespoke Technogym Artis series machinery, dedicated Pilates reformer studio, private personal training alcoves, and panoramic city views.',
    specs: ['Artis Connected Systems', 'Pilates Reformer Studio', 'Private Training Suites', 'Physiotherapy Consultation Room'],
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=85',
  },
  {
    id: 'spa',
    number: '03',
    title: 'Wellness Spa',
    subtitle: 'Thermal & Hydrotherapy Baths',
    description: 'Designed as an underground sanctuary of silence, incorporating Japanese hinoki wood soaking tubs, marble hammam steam rooms, ice deluge showers, and relaxation lounges.',
    specs: ['Honed Travertine Hammam', 'Hinoki Cedar Soaking Onsen', 'Cryo Plunge & Halotherapy', 'Private Treatment Suites'],
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85',
  },
  {
    id: 'sky-lounge',
    number: '04',
    title: 'Sky Lounge',
    subtitle: 'Observatoire & Cocktail Salon',
    description: 'Soaring 60 floors above the streets, this resident-only aerie offers fireside seating, signature cocktails curated by master mixologists, and an expansive telescope observation deck.',
    specs: ['Level 60 Panorama', 'Curated Rare Spirits Library', 'Fireside Cigar & Cognac Loggia', 'Private Event Reservation'],
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85',
  },
  {
    id: 'fine-dining',
    number: '05',
    title: 'Fine Dining',
    subtitle: 'The Chef\'s Table & Wine Vault',
    description: 'An intimate dining room seating up to 20 guests, equipped with a fully appointed commercial demonstration kitchen suitable for private chef dinners and sommelier tastings.',
    specs: ['Seating for 20 Guests', 'Professional Commercial Kitchen', '2,500-Bottle Temperature Vault', 'Private Chef On-Demand'],
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=85',
  },
  {
    id: 'cinema',
    number: '06',
    title: 'Private Cinema',
    subtitle: 'Dolby Atmos Screening Room',
    description: 'A 14-seat screening salon upholstered in sound-absorbing acoustic mohair velvet, featuring laser projection and state-of-the-art immersive audio calibration.',
    specs: ['14 Reclining Mohair Seats', '4K Christie Laser Projection', 'Custom 32-Channel Dolby Atmos', 'Private Concession Bar'],
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=85',
  },
];

export const LOCATION_BENCHMARKS: LocationBenchmark[] = [
  {
    duration: '10 MIN',
    destination: 'CITY CENTER',
    category: 'Cultural & Civic Core',
    description: 'Direct arterial access to premier concert halls, museums, and flagship luxury fashion houses.',
  },
  {
    duration: '15 MIN',
    destination: 'INTERNATIONAL AIRPORT',
    category: 'Global Connectivity',
    description: 'Chauffeured corridor or private rooftop helipad transfers connecting seamlessly to worldwide terminals.',
  },
  {
    duration: '5 MIN',
    destination: 'BUSINESS DISTRICT',
    category: 'Financial Capital',
    description: 'Minutes away from leading corporate headquarters, global embassies, and high-finance institutions.',
  },
];

export const NEIGHBORHOOD_LANDMARKS = [
  { name: 'Grand Opera & Symphony Hall', dist: '0.8 mi', cat: 'Culture' },
  { name: 'Royal Yacht Marina & Quay', dist: '1.2 mi', cat: 'Leisure' },
  { name: 'Avenue of Haute Couture', dist: '0.4 mi', cat: 'Shopping' },
  { name: 'Three-Star Michelin Culinary Mile', dist: '0.6 mi', cat: 'Gastronomy' },
  { name: 'Private Jet Terminal & Helipad', dist: '3.5 mi', cat: 'Aviation' },
];

export const ARCHITECTURE_DETAILS = {
  architect: 'Foster & V. Laurent Architects',
  interiorDesign: 'Atelier Aurelia & Liaigre Studio',
  landscape: 'Piet Oudolf Landscape Design',
  height: '342 meters / 1,122 feet',
  structure: 'Reinforced aerodynamic concrete core with diagrid steel exoskeleton',
  materials: 'Roman Travertine, Fluted Champagne Bronze, Low-Iron Acoustic Solar Glass',
};
