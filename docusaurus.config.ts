import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SIPs',
  tagline: 'Subjektify Improvement Proposals',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sips.subjektify.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'subjektify', // Usually your GitHub org/user name.
  projectName: 'sips', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    './index',
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    navbar: {
      title: 'SIPs',
      logo: {
        alt: 'Subjektify Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: 'all', label: 'All' },
        { to: 'core', label: 'Core' },
        { to: 'interface', label: 'Interface' },
        { to: 'meta', label: 'Meta' },
        { to: 'informational', label: 'Informational' },
        {
          href: 'https://github.com/subjektify/sips',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'SIPs',
          items: [
            {
              label: 'Core',
              to: '/core',
            },
            {
              label: 'Interface',
              to: '/interface',
            },
            {
              label: 'Meta',
              to: '/meta',
            },
            {
              label: 'Informational',
              to: '/informational',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/subjektify',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/subjektifylabs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/subjektify/sips',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Subjektify Labs Ltd.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
