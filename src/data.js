import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
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
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Support',
          href: 'https://support.keyback.io/',
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy',
          href: getPermalink('/privacy'),
        },
      ],
    },

    {
      text: 'Sign In',
      href: 'https://clients.keyback.io/login',
    },
    {
      text: 'Join',
      href: 'https://clients.keyback.io/registration',
    },
  ],

};
  
export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'What Is Keyback', href: './#videos' },
        { text: 'How It Works', href: getPermalink('/#how-it-works-section')},
        { text: 'Pricing', href: getPermalink('/#pricing') },

      ],
    },
    {
      title: 'Affiliates',
      links: [
        { text: 'Affiliates', href: getPermalink('/affiliates') },
        { text: 'Influencers', href: getPermalink('/influencers') },
        { text: 'Terms', href: getPermalink('/aff-terms') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Knowledgbase', href: 'https://support.keyback.io' },
        { text: 'Guarantee', href: getPermalink('/guarantee') },
        { text: 'Help Ticket', href: 'https://keyback.freshdesk.com/support/tickets/new' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Media', href: getPermalink('/media') },
        // { text: 'Articles', href: './blog' },
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
