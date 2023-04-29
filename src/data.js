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
      text: 'Video',
      href: getPermalink('/videos'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),

    },
    {
      text: 'FAQ',
      href: getPermalink('/faq'),
    },


    {
      text: 'Pages',
      links: [
        {
          text: 'About us',
          href: './about',
        },
        {
          text: 'Contact',
          href: './contact',
        },
        {
          text: 'Terms',
          href: getPermalink('./terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('./privacy'),
        },
      ],
    },
    {
      text: 'Affiliates',
      links: [
        {
          text: 'Sign In',
          href: 'https://affiliates.keyback.io/login',
        },
        {
          text: 'Sign Up',
          href: 'https://affiliates.keyback.io/',
        },
        {
          text: 'Terms',
          href: 'https://keyback.io/aff-terms',
        },
      ],
    },
    {
      text: 'LOGIN',
      href: 'https://clients.keyback.io/login',
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
        { text: 'Contact Us', href: './contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: './about' },
        { text: 'Blog', href: './blog' },
        { text: 'Press', href: './press' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-orange-600 hover:underline dark:text-gray-200" href="https://base7.pro/"> Base7</a> · All rights reserved.
  `,
};
