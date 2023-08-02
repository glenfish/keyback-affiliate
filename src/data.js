import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Sass',
    //       href: getPermalink('/landing/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/landing/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/landing/mobile-app'),
    //     },
    //   ],
    // },
     {
       text: 'Videos',
       href: getPermalink('/videos'),
     },

    {
      text: 'FAQ',
      href: getPermalink('/faq'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),

    },

    {
      text: 'Pages',
      links: [
        {
          text: 'About',
          href: './about',
        },
        {
          text: 'Contact',
          href: './contact',
        },
        {
          text: 'Support',
          href: 'https://keyback.freshdesk.com/',
        },
        {
          text: 'Terms',
          href: getPermalink('./terms'),
        },
        {
          text: 'Privacy',
          href: getPermalink('./privacy'),
        },
      ],
    },
    // {
    //   text: 'Affiliates',
    //   links: [
    //     {
    //       text: 'Sign In',
    //       href: 'https://affiliates.keyback.io/login',
    //     },
    //     {
    //       text: 'Sign Up',
    //       href: 'https://affiliates.keyback.io/',
    //     },
    //   ],
    // },
    {
      text: 'Sign In',
      href: 'https://clients.keyback.io/login',
    },
    {
      text: 'Join',
      href: 'https://clients.keyback.io/registration',
    },
  ],
  // actions: [
  //   { type: 'button', text: 'Sign In', href: 'https://clients.keyback.io/login' }
  // ],
};
  
export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'What Is Keyback', href: './#videos' },
        { text: 'How It Works', href: './#how-it-works-section' },
        { text: 'Pricing', href: './#pricing' },

      ],
    },
    {
      title: 'Affiliates',
      links: [
        { text: 'Affiliates', href: '/affiliates' },
        { text: 'Influencers', href: '/influencers' },
        { text: 'Terms', href: '/aff-terms' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Knowledgbase', href: 'https://support.keyback.io' },
        { text: 'Guarantee', href: '/guarantee' },
        { text: 'Help Ticket', href: 'https://keyback.freshdesk.com/support/tickets/new' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: './about' },
        { text: 'Contact', href: './contact' },
        { text: 'Media', href: './media' },
        // { text: 'Articles', href: './blog' },
        // { text: 'Press', href: './press' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  // socialLinks: [
  //   { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  //   { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss') },
  // ],
  footNote: `
    
    Made by <a class="text-orange-600 hover:underline dark:text-gray-200" href="https://base7.pro/"> Base7</a> · All rights reserved. &copy; 2023
  `,
};
