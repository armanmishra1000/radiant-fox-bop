export type WorkshopResource = {
  id: string;
  title: string;
  description: string;
  category: 'Assembly' | 'Maintenance' | 'Manuals';
  type: 'guide' | 'video' | 'pdf';
  url: string;
};

export const workshopResources: WorkshopResource[] = [
  {
    id: 'ws-1',
    title: 'Pit Bike Assembly Guide',
    description: 'A step-by-step guide to assembling your new pit bike out of the crate. Covers handlebars, front wheel, and fender installation.',
    category: 'Assembly',
    type: 'guide',
    url: '#',
  },
  {
    id: 'ws-2',
    title: 'First Ride Checklist',
    description: 'Before you hit the dirt, follow this checklist to ensure your bike is safe and ready to ride.',
    category: 'Assembly',
    type: 'guide',
    url: '#',
  },
  {
    id: 'ws-3',
    title: 'How to Change Your Oil (Video)',
    description: 'Learn the proper procedure for changing the oil on a 4-stroke engine to keep it running smoothly.',
    category: 'Maintenance',
    type: 'video',
    url: 'https://www.youtube.com',
  },
  {
    id: 'ws-4',
    title: 'Chain Maintenance 101',
    description: 'Proper chain cleaning, lubrication, and tensioning are crucial for safety and performance. Learn how here.',
    category: 'Maintenance',
    type: 'guide',
    url: '#',
  },
  {
    id: 'ws-5',
    title: 'TSX 140 Owner\'s Manual',
    description: 'The official owner\'s manual for the TSX 140, containing detailed specifications and maintenance schedules.',
    category: 'Manuals',
    type: 'pdf',
    url: '#',
  },
  {
    id: 'ws-6',
    title: 'TFX 250 Service Manual',
    description: 'A comprehensive service manual for the TFX 250 for advanced maintenance and repair procedures.',
    category: 'Manuals',
    type: 'pdf',
    url: '#',
  },
];