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
      { url: "/placeholders/gallery/gallery-2.webp", alt: "Close-up of a pit bike engine" },
      { url: "/placeholders/gallery/gallery-4.webp", alt: "Rider on a pit bike" },
    ],
    highlights: ["Tri-Bar chassis", "Linkage suspension", "VS1 forks"],
    specs: [
      { key: "Engine", value: "140cc 4-stroke" },
      { key: "Transmission", value: "Manual 4-speed" },
      { key: "Front Suspension", value: "VS1 forks" },
      { key: "Rear Suspension", value: "Linkage" },
      { key: "Brakes", value: "Hydraulic Disc (Front & Rear)" },
    ],
    overview: "The TSX 140 GR is the ultimate pit bike for riders who demand performance. Featuring our signature Tri-Bar chassis for unmatched rigidity and advanced linkage suspension for a plush ride, this bike is built to dominate the backyard track. The potent 140cc engine provides ample power, while the VS1 forks ensure precise handling through any corner.",
    warranty: "This product is covered by a 6-month manufacturer's warranty on parts. This warranty does not cover labor or damage caused by misuse, neglect, or improper assembly. All warranty claims must be submitted through an authorized dealer."
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
        { url: "/placeholders/gallery/gallery-1.webp", alt: "Rider on a dirt bike" },
        { url: "/placeholders/gallery/gallery-5.webp", alt: "Dirt bike in a forest" },
    ],
    highlights: ["250cc Zongshen engine", "Enduro spec lighting", "Adjustable suspension"],
    specs: [
      { key: "Engine", value: "250cc Zongshen 4-stroke" },
      { key: "Transmission", value: "Manual 5-speed" },
      { key: "Carburetor", value: "Nibbi PE30" },
      { key: "Final Drive", value: "Chain" },
    ],
    overview: "Built for the trail, the TFX 250 EN combines a powerful 250cc Zongshen engine with a lightweight, agile chassis. Fully adjustable suspension allows you to dial in the ride for any terrain, while the Enduro-spec lighting system means your adventure doesn't have to end when the sun goes down. This is the perfect machine for serious trail riders and enduro racers.",
    warranty: "This product is covered by a 12-month manufacturer's warranty on parts. This warranty does not cover labor or damage caused by misuse, neglect, or improper assembly. All warranty claims must be submitted through an authorized dealer."
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
        { url: "/placeholders/gallery/gallery-3.webp", alt: "ATV on a scenic overlook" },
        { url: "/placeholders/gallery/gallery-6.webp", alt: "ATV after a muddy ride" },
    ],
    highlights: ["Utility racks", "Automatic transmission", "Electric start"],
    specs: [
      { key: "Engine", value: "125cc 4-stroke" },
      { key: "Transmission", value: "Automatic (F-N-R)" },
      { key: "Starting", value: "Electric Start" },
      { key: "Racks", value: "Front & Rear" },
    ],
    overview: "The ATX 125 UT is a rugged and reliable workhorse. Featuring front and rear utility racks, this ATV is ready to haul gear for any job. The smooth automatic transmission with forward, neutral, and reverse makes it easy to operate, while the electric start ensures hassle-free ignition every time. Perfect for property maintenance or exploring the trails.",
    warranty: "This product is covered by a 6-month manufacturer's warranty on parts. This warranty does not cover labor or damage caused by misuse, neglect, or improper assembly. All warranty claims must be submitted through an authorized dealer."
  }
];