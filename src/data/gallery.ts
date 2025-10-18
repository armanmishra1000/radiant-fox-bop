export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  tags: string[];
};

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/placeholders/gallery/gallery-1.webp',
    alt: 'Rider on a dirt bike kicking up dust on a trail.',
    tags: ['dirt-bike', 'action'],
  },
  {
    id: '2',
    src: '/placeholders/gallery/gallery-2.webp',
    alt: 'Close-up of a pit bike engine.',
    tags: ['pit-bike', 'detail'],
  },
  {
    id: '3',
    src: '/placeholders/gallery/gallery-3.webp',
    alt: 'ATV parked on a scenic overlook.',
    tags: ['atv', 'scenic'],
  },
  {
    id: '4',
    src: '/placeholders/gallery/gallery-4.webp',
    alt: 'Group of friends riding pit bikes on a backyard track.',
    tags: ['pit-bike', 'lifestyle'],
  },
  {
    id: '5',
    src: '/placeholders/gallery/gallery-5.webp',
    alt: 'Dirt bike leaning against a tree in a forest.',
    tags: ['dirt-bike', 'scenic'],
  },
  {
    id: '6',
    src: '/placeholders/gallery/gallery-6.webp',
    alt: 'Rider cleaning their ATV after a muddy ride.',
    tags: ['atv', 'maintenance'],
  },
];