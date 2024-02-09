const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.jsx'
});

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
const isProd = process.env.NODE_ENV === 'production';

module.exports = withNextra({
  output: 'export',
  assetPrefix: isProd ? `${process.env.PUBLIC_URL}/` : '',
  images: {
    unoptimized: true
  },
  basePath: isProd ? `${PUBLIC_URL}` : ''
});
