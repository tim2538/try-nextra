const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.jsx'
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
