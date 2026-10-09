export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'App', href: '#screens' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  badge: 'New: Visual search is live',
  title: ['Define yourself', 'in your unique way.'],
  text: 'Kartly brings fashion, home essentials and accessories from independent brands into one fast app. Search smart, get a feed picked for you, and check out in under a minute.',
  rating: '4.8/5',
  ratingNote: 'from 25K+ happy shoppers',
};

export const stats = [
  { value: 500, suffix: 'K+', label: 'App downloads' },
  { value: 2000, suffix: '+', label: 'Independent brands' },
  { value: 4.8, suffix: '★', label: 'Average rating', decimals: 1 },
  { value: 60, suffix: 's', label: 'Average checkout' },
];

export const categories = [
  'Streetwear',
  'Sneakers',
  'Home Essentials',
  'Accessories',
  'Bags',
  'Watches',
  'Activewear',
  'Beauty',
  'Denim',
  'Outerwear',
];

export const steps = [
  {
    icon: 'user',
    title: 'Sign up in seconds',
    text: 'Join with email, phone or Google / Apple, or simply check out as a guest. Pick your style once and we do the rest.',
  },
  {
    icon: 'sparkle',
    title: 'Discover your style',
    text: 'A home feed picked for you, smart search that fixes typos, and curated collections so a huge catalog never feels overwhelming.',
  },
  {
    icon: 'bag',
    title: 'Checkout & track',
    text: 'One-page checkout with cards, Apple Pay, Google Pay or cash on delivery, then follow your order live until it reaches your door.',
  },
];

export const screens = [
  { src: '/images/screen-search.jpg', title: 'Smart Search', text: 'Suggestions as you type.' },
  { src: '/images/screen-saved.jpg', title: 'Saved Items', text: 'Your wishlist, always in sync.' },
  { src: '/images/screen-reviews.jpg', title: 'Real Reviews', text: 'Ratings and photos from buyers.' },
];

export const features = [
  {
    icon: 'search',
    title: 'Smart search',
    text: 'Typo correction, price filters, sorting, visual search and barcode scan.',
    highlight: true,
  },
  { icon: 'sparkle', title: 'Picked for you', text: 'A personalized feed based on what you browse and buy.' },
  { icon: 'zap', title: 'One-minute checkout', text: 'Address autofill, wallets and secure Stripe payments.' },
  { icon: 'truck', title: 'Live order tracking', text: 'Real-time status updates from payment to delivery.' },
  { icon: 'return', title: 'Returns in a tap', text: 'Request returns or exchanges and track your refund in-app.' },
  { icon: 'heart', title: 'Wishlist alerts', text: 'Get notified on price drops and back-in-stock items.' },
  { icon: 'gift', title: 'Rewards & offers', text: 'Earn points on every order, unlock tiers and member deals.' },
];

export const tracking = {
  eyebrow: 'After you buy',
  title: ['Always know where', 'your order is.'],
  text: 'No more emailing support to ask "where is my package?". Everything you need after checkout lives right inside Kartly.',
  points: [
    'Real-time tracking with status updates',
    'Order history and digital receipts',
    'In-app return and exchange requests',
    'Refund status and delivery delay alerts',
  ],
};

export const rewards = {
  eyebrow: 'Kartly Rewards',
  title: 'Shop more, get more.',
  text: 'Every purchase earns points you can redeem at checkout. Climb tiers for exclusive member offers, flash sales and birthday surprises.',
  tiers: [
    { name: 'Silver', points: '0+', perk: '1 point per $1' },
    { name: 'Gold', points: '1,000+', perk: '1.5x points + early sales' },
    { name: 'Black', points: '5,000+', perk: '2x points + free shipping' },
  ],
};

export const reviews = [
  {
    text: 'Checkout literally takes me less than a minute now. Apple Pay, done. I stopped using the website completely.',
    name: 'Sana K.',
    meta: 'Karachi · Shopping for 1 year',
  },
  {
    text: 'The "picked for you" feed is scary good. I found three small brands I now buy from every month.',
    name: 'Daniel R.',
    meta: 'London · Gold member',
    featured: true,
  },
  {
    text: 'Returned a jacket in two taps and got my refund status right in the app. No calls, no emails.',
    name: 'Ayesha M.',
    meta: 'Dubai · Shopping for 6 months',
  },
];

export const faqs = [
  {
    q: 'Is the Kartly app free to download?',
    a: 'Yes. Kartly is free on the App Store and Google Play. You only pay for what you order.',
  },
  {
    q: 'Can I shop without creating an account?',
    a: 'Absolutely. Guest checkout lets you buy right away. You can create an account later to save addresses, earn points and track orders.',
  },
  {
    q: 'Which payment methods are supported?',
    a: 'Credit and debit cards, Apple Pay, Google Pay and cash on delivery in supported regions. Promo codes and loyalty points can be applied at checkout.',
  },
  {
    q: 'How do returns work?',
    a: 'Open your order, tap "Return or exchange", choose the item and reason. You can follow the pickup and refund status right inside the app.',
  },
  {
    q: 'How do I sell my brand on Kartly?',
    a: 'Independent brands can apply through our seller program. Once approved, you get a dashboard to upload products, manage stock and run campaigns.',
  },
];

export const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/markeltree' },
  { name: 'X', href: 'https://x.com/markeltree' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/markeltree/posts/' },
  { name: 'Instagram', href: 'https://www.instagram.com/markeltree' },
];

export const footerLinks = {
  Shop: ['New arrivals', 'Fashion', 'Home essentials', 'Accessories', 'Gift cards'],
  Company: ['About Kartly', 'Careers', 'Press', 'Sell on Kartly'],
  Support: ['Help center', 'Track order', 'Returns', 'Contact us'],
};
