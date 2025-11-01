export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  tags: string[];
};

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/gallery/72d20a6c824a9b6f23a31e9ec5cc61a4.jpg',
    alt: 'Rider leaning into a dusty berm on a dirt bike.',
    tags: ['dirt-bike', 'action'],
  },
  {
    id: '2',
    src: '/gallery/a723db39347a53d254aec6b73445a5bf.jpg',
    alt: 'Pit bike staged in the paddock before a race.',
    tags: ['pit-bike', 'lifestyle'],
  },
  {
    id: '3',
    src: '/gallery/b9944855bf8b5afefbad8f9d38958474.jpg',
    alt: 'ATV splashing through a shallow stream on the trail.',
    tags: ['atv', 'action'],
  },
  {
    id: '4',
    src: '/gallery/c8e8052e37a6e936f2a5e37834d13ca8.jpg',
    alt: 'Close-up of a motocross bike cooling off in the pits.',
    tags: ['dirt-bike', 'detail'],
  },
  {
    id: '5',
    src: '/gallery/d998139f2cf31b6d918941ba1b289761.jpg',
    alt: 'Group of riders lined up with their dirt bikes at sunset.',
    tags: ['dirt-bike', 'lifestyle'],
  },
  {
    id: '6',
    src: '/gallery/e83a8ccf0f8b670a7d2d3574b0264c0a.jpg',
    alt: 'ATV climbing over rocky terrain on an overcast day.',
    tags: ['atv', 'technical'],
  },
];