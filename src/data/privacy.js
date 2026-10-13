export const privacyMeta = {
  updated: 'October 13, 2026',
  email: 'privacy@kartly.app',
  intro:
    'This Privacy Policy explains what information Kartly collects when you use our mobile apps and website, how we use it, who we share it with, and the choices you have. By using Kartly, you agree to the practices described here.',
};

export const privacySections = [
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    blocks: [
      { type: 'p', text: 'We collect information you give us, information created when you use Kartly, and information from partners.' },
      { type: 'h', text: 'Information you provide' },
      {
        type: 'list',
        items: [
          'Account details: name, email address, phone number and password, or basic profile details if you sign in with Google or Apple.',
          'Shipping and billing details: delivery addresses, contact numbers and order notes. Guest checkout collects only what is needed to deliver your order.',
          'Payment information: card payments are processed by Stripe, Apple Pay or Google Pay. Kartly does not store your full card number or CVV.',
          'Content you share: product reviews, ratings, photos, return and exchange requests, and messages to our support team.',
          'Style preferences you choose during sign-up, and your newsletter subscription.',
        ],
      },
      { type: 'h', text: 'Information collected automatically' },
      {
        type: 'list',
        items: [
          'Activity in the app: products you view, search, save to your wishlist, add to cart and purchase.',
          'Device information: device model, operating system, app version, language, IP address and device identifiers.',
          'Approximate location derived from your IP address, used to show regional prices, payment options and delivery availability.',
          'Crash reports and performance data that help us fix bugs.',
        ],
      },
      { type: 'h', text: 'Camera and photos' },
      {
        type: 'p',
        text: 'Visual search and barcode scanning use your camera or photo library only when you start them, and only after you grant permission. Images used for search are processed to find matching products and are not added to your public profile.',
      },
    ],
  },
  {
    id: 'how-we-use',
    title: 'How we use your information',
    blocks: [
      {
        type: 'list',
        items: [
          'To create and manage your account, process orders and payments, arrange delivery and handle returns and refunds.',
          'To show real-time order tracking, receipts and delivery delay alerts.',
          'To personalize your home feed, search results and recommendations based on what you browse and buy.',
          'To run Kartly Rewards: tracking points, tiers and member offers.',
          'To send price-drop and back-in-stock alerts for wishlist items, and promotional messages if you opted in.',
          'To provide customer support and respond to your requests.',
          'To detect and prevent fraud, abuse and security incidents.',
          'To analyze usage, fix problems and improve our products.',
          'To comply with legal, tax and accounting obligations.',
        ],
      },
    ],
  },
  {
    id: 'legal-bases',
    title: 'Legal bases for processing',
    blocks: [
      {
        type: 'p',
        text: 'Where laws such as the GDPR or UK GDPR apply, we process your information on these grounds:',
      },
      {
        type: 'list',
        items: [
          'Contract: to provide the services you request, such as completing an order.',
          'Legitimate interests: to keep Kartly secure, prevent fraud and improve the app, balanced against your rights.',
          'Consent: for marketing messages, push notifications, camera access and optional cookies. You can withdraw consent at any time.',
          'Legal obligation: to keep records required by tax and consumer protection laws.',
        ],
      },
    ],
  },
  {
    id: 'sharing',
    title: 'How we share information',
    blocks: [
      { type: 'p', text: 'We do not sell your personal information. We share it only as described below:' },
      {
        type: 'list',
        items: [
          'Brands and sellers: when you buy from an independent brand, we share the details needed to fulfill your order, such as your name, delivery address and items purchased.',
          'Delivery partners: to deliver your order and provide tracking updates.',
          'Payment providers: Stripe, Apple Pay and Google Pay process payments under their own privacy policies.',
          'Service providers: hosting, analytics, customer support and messaging providers that work for us under contracts limiting how they use data.',
          'Legal and safety: when required by law, or to protect the rights, safety and property of Kartly, our users or others.',
          'Business transfers: if Kartly is involved in a merger, acquisition or sale of assets, your information may be transferred as part of that transaction.',
        ],
      },
      { type: 'p', text: 'Product reviews you post, including your first name and photos, are visible to other Kartly users.' },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies and similar technologies',
    blocks: [
      {
        type: 'p',
        text: 'Our website and app use cookies, local storage and SDKs to keep you signed in, remember your cart, understand how Kartly is used and measure the performance of our campaigns. You can control cookies through your browser settings and limit ad tracking through your device settings. Turning off some cookies may affect how Kartly works.',
      },
    ],
  },
  {
    id: 'retention',
    title: 'Data retention',
    blocks: [
      {
        type: 'p',
        text: 'We keep your information for as long as your account is active or as needed to provide our services. Order and payment records are kept for the period required by tax and accounting laws. When information is no longer needed, we delete or anonymize it.',
      },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    blocks: [
      {
        type: 'p',
        text: 'We use encryption in transit, access controls and regular reviews to protect your information. No method of storage or transmission is completely secure, so we cannot guarantee absolute security. Please keep your password private and let us know if you suspect unauthorized access to your account.',
      },
    ],
  },
  {
    id: 'your-rights',
    title: 'Your rights and choices',
    blocks: [
      { type: 'p', text: 'Depending on where you live, you may have the right to:' },
      {
        type: 'list',
        items: [
          'Access the personal information we hold about you and get a copy of it.',
          'Correct information that is inaccurate or incomplete.',
          'Delete your account and personal information.',
          'Object to or restrict certain processing, including direct marketing.',
          'Withdraw consent you previously gave.',
          'Lodge a complaint with your local data protection authority.',
        ],
      },
      {
        type: 'p',
        text: 'You can update most account details in the app under Profile. To make any other request, email us at the address below. You can unsubscribe from marketing emails with the link in each email, and turn off push notifications or camera access in your device settings.',
      },
      { type: 'h', text: 'Deleting your account' },
      {
        type: 'p',
        text: 'You can delete your account from Profile > Settings > Delete account, or by emailing us. We will delete your personal information within 30 days, except for records we must keep by law, such as order invoices.',
      },
    ],
  },
  {
    id: 'international',
    title: 'International transfers',
    blocks: [
      {
        type: 'p',
        text: 'Kartly serves shoppers in several countries, so your information may be processed outside the country where you live. When we transfer data internationally, we use appropriate safeguards such as standard contractual clauses.',
      },
    ],
  },
  {
    id: 'children',
    title: "Children's privacy",
    blocks: [
      {
        type: 'p',
        text: 'Kartly is not directed to children under 13, and we do not knowingly collect their personal information. If you believe a child has given us personal information, contact us and we will delete it.',
      },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    blocks: [
      {
        type: 'p',
        text: 'We may update this policy from time to time. If we make significant changes, we will notify you in the app or by email before they take effect. The date at the top of this page shows when it was last updated.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact us',
    blocks: [
      {
        type: 'p',
        text: 'If you have questions about this Privacy Policy or how we handle your information, email us at the address below. We aim to respond within 30 days.',
      },
    ],
  },
];
