export type Media = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  type?: 'image' | 'video';
};

export type Spec = {
  key: string;
  value: string;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  subtitle?: string;
  family: "dirt-bike" | "pit-bike" | "atv" | "part";
  status?: "in_stock" | "dealer_only" | "sold_out";
  hero: Media;
  gallery: Media[];
  highlights?: string[];
  specs?: Spec[];
  engine_cc?: number;
  seat_height_mm?: number;
  weight_kg?: number;
  overview?: string;
  warranty?: string;
};