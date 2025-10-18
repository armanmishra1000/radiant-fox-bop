import type { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: "tsx140-gr",
    handle: "tsx-140-gr",
    title: "TSX 140 GR",
    family: "pit-bike",
    msrp: 1999,
    status: "in_stock",
    engine_cc: 140,
    hero: { url: "/placeholders/tsx140-1.webp", alt: "TSX 140 side profile gray/fluoro" },
    gallery: [],
    highlights: ["Tri-Bar chassis", "Linkage suspension", "VS1 forks"],
    specs: [
      { key: "Engine", value: "140cc 4-stroke" },
      { key: "Transmission", value: "Manual 4-speed" },
    ]
  },
  {
    id: "tfx250-en",
    handle: "tfx-250-en",
    title: "TFX 250 EN",
    family: "dirt-bike",
    msrp: 3499,
    status: "in_stock",
    engine_cc: 250,
    hero: { url: "/placeholders/tfx250-1.webp", alt: "TFX 250 Enduro side profile" },
    gallery: [],
    highlights: ["250cc Zongshen engine", "Enduro spec lighting", "Adjustable suspension"],
    specs: [
      { key: "Engine", value: "250cc 4-stroke" },
      { key: "Transmission", value: "Manual 5-speed" },
    ]
  },
  {
    id: "atx125-ut",
    handle: "atx-125-ut",
    title: "ATX 125 UT",
    family: "atv",
    msrp: 1599,
    status: "dealer_only",
    engine_cc: 125,
    hero: { url: "/placeholders/atx125-1.webp", alt: "ATX 125 Utility ATV" },
    gallery: [],
    highlights: ["Utility racks", "Automatic transmission", "Electric start"],
    specs: [
      { key: "Engine", value: "125cc 4-stroke" },
      { key: "Transmission", value: "Automatic (F-N-R)" },
    ]
  }
];