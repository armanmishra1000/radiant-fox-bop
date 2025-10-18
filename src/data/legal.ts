export type LegalContentBlock = {
  type: 'heading' | 'paragraph';
  text: string;
};

export type LegalPage = {
  slug: string;
  title: string;
  content: LegalContentBlock[];
};

export const legalPages: LegalPage[] = [
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    content: [
      { type: 'heading', text: '1. Information We Collect' },
      { type: 'paragraph', text: 'We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.' },
      { type: 'heading', text: '2. How We Use Your Information' },
      { type: 'paragraph', text: 'We use the information we collect to provide, maintain, and improve our services, to process transactions, to send you technical notices and support messages, and to communicate with you about products, services, and events.' },
      { type: 'heading', text: '3. Sharing of Information' },
      { type: 'paragraph', text: 'We may share your information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf. We may also share information in response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process.' },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of Service',
    content: [
      { type: 'heading', text: '1. Agreement to Terms' },
      { type: 'paragraph', text: 'By using our services, you agree to be bound by these Terms. If you don’t agree to be bound by these Terms, do not use the services.' },
      { type: 'heading', text: '2. Changes to Terms or Services' },
      { type: 'paragraph', text: 'We may update the Terms at any time, in our sole discretion. If we do so, we’ll let you know by posting the updated Terms on the Site. It’s important that you review the Terms whenever we update them or you use the Services.' },
      { type: 'heading', text: '3. Content Ownership' },
      { type: 'paragraph', text: 'We do not claim any ownership rights in any User Content and nothing in these Terms will be deemed to restrict any rights that you may have to use and exploit your User Content.' },
    ],
  },
];