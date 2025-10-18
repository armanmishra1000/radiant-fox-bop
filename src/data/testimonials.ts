export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  riderType: 'Beginner' | 'Intermediate' | 'Pro' | 'Weekend Warrior';
  rating: number; // out of 5
};

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'The TSX 140 is an absolute blast! Perfect for the backyard track. The linkage suspension makes a huge difference compared to other bikes in its class.',
    author: 'Mike R.',
    riderType: 'Weekend Warrior',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    quote: 'I was impressed with the build quality of the TFX 250. It handles technical trails with ease and has plenty of power when you need it. Great value for the money.',
    author: 'Jessica L.',
    riderType: 'Intermediate',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    quote: 'Got the ATX 125 for my son. It\'s been super reliable and easy for him to handle. The electric start is a fantastic feature for a youth ATV.',
    author: 'David Chen',
    riderType: 'Beginner',
    rating: 4,
  },
  {
    id: 'testimonial-4',
    quote: 'As a taller rider, I find the ergonomics on the TFX 250 to be surprisingly comfortable for longer rides. The bike feels planted and inspires confidence.',
    author: 'Tom B.',
    riderType: 'Intermediate',
    rating: 5,
  },
];