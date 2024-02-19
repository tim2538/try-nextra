const withNextra = require('nextra')({
  // Tell Nextra to use the custom theme as the layout
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
  defaultShowCopyCode: true,
  flexsearch: {
    codeblocks: true
  },
  codeHighlight: true
});

// If you have other Next.js configurations, you can pass them as the parameter:
const isProd = process.env.NODE_ENV === 'production';

module.exports = withNextra({
  output: 'export',
  assetPrefix: isProd ? '/try-nextra/' : '',
  images: {
    unoptimized: true
  },
  basePath: '/try-nextra'
});
