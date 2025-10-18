export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: 'Orders' | 'Parts' | 'Assembly' | 'Maintenance';
};

export const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I place an order?',
    answer: 'You can request a quote directly from the product page. A local dealer will then contact you to finalize the purchase, as we do not sell directly to the public online.',
    category: 'Orders',
  },
  {
    id: 'faq-2',
    question: 'What payment methods do you accept?',
    answer: 'Payment methods are determined by the individual dealer who fulfills your order. They typically accept major credit cards, financing, and other standard payment options.',
    category: 'Orders',
  },
  {
    id: 'faq-3',
    question: 'How do I find the right part for my bike?',
    answer: 'You can use our VIN-based parts lookup tool to find the exact parts for your model. If you need further assistance, please contact our support team with your VIN.',
    category: 'Parts',
  },
  {
    id: 'faq-4',
    question: 'Are parts interchangeable between models?',
    answer: 'Some parts may be interchangeable, but we strongly recommend using parts specifically designed for your model to ensure safety and performance. Always check the part description or consult with a dealer.',
    category: 'Parts',
  },
  {
    id: 'faq-5',
    question: 'Does my bike come assembled?',
    answer: 'Bikes are typically shipped in a crate and require some assembly (e.g., attaching handlebars, front wheel, and fender). We recommend professional assembly by a qualified mechanic.',
    category: 'Assembly',
  },
  {
    id: 'faq-6',
    question: 'What is the recommended maintenance schedule?',
    answer: 'Please refer to the owner\'s manual for your specific model for the recommended maintenance schedule. Regular oil changes, chain adjustments, and bolt checks are crucial for longevity and safety.',
    category: 'Maintenance',
  },
];