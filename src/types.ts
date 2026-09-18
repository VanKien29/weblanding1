export interface Amenity {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  dimensions?: string;
  aspect?: string;
}

export interface ResidenceFeature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  highlight: string;
}

export interface LifestyleStory {
  id: string;
  time: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  secondaryImageUrl?: string;
}

export interface LocationBenchmark {
  duration: string;
  destination: string;
  category: string;
  description: string;
}

export interface ViewingBookingData {
  fullName: string;
  email: string;
  phone: string;
  residencePreference: string;
  preferredDate: string;
  privateNotes: string;
}
