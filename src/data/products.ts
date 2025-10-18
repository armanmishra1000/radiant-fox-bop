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
    gallery: [
      { url: "/placeholders/tsx140-1.webp", alt: "TSX 140 side profile" },
      { url: "/placeholders/tsx140-2.webp", alt: "TSX 140 front three-quarter" },
      { url: "/placeholders/tsx140-3.webp", alt: "TSX 140 rear three-quarter" },
    ],
    highlights: ["Tri-Bar chassis", "Linkage suspension", "VS1 forks"],
    specs: [
      { key: "Engine", value: "140cc 4-stroke" },
      { key: "Transmission", value: "Manual 4-speed" },
      { key: "Front Suspension", value: "VS1 forks" },
      { key: "Rear Suspension", value: "Linkage" },
      { key: "Brakes", value: "Hydraulic Disc (Front & Rear)" },
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
    gallery: [
        { url: "/placeholders/tfx250-1.webp", alt: "TFX 250 Enduro side profile" },
    ],
    highlights: ["250cc Zongshen engine", "Enduro spec lighting", "Adjustable suspension"],
    specs: [
      { key: "Engine", value: "250cc Zongshen 4-stroke" },
      { key: "Transmission", value: "Manual 5-speed" },
      { key: "Carburetor", value: "Nibbi PE30" },
      { key: "Final Drive", value: "Chain" },
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
    gallery: [
        { url: "/placeholders/atx125-1.webp", alt: "ATX 125 Utility ATV" },
    ],
    highlights: ["Utility racks", "Automatic transmission", "Electric start"],
    specs: [
      { key: "Engine", value: "125cc 4-stroke" },
      { key: "Transmission", value: "Automatic (F-N-R)" },
      { key: "Starting", value: "Electric Start" },
      { key: "Racks", value: "Front & Rear" },
    ]
  }
];