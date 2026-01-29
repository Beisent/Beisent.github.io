import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'Beisent Lab',
  url: 'https://Beisent.github.io',        
  baseUrl: '/BeisentLab/',               
  organizationName: 'Beisent',            
  projectName: 'BeisentLab',             
  deploymentBranch: 'gh-pages',         
  trailingSlash: false,                

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Beisent Lab',
      items: [

      ],
    },
  },
};

export default config;
