const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
});

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
const isProd = process.env.NODE_ENV === 'production';

module.exports = withNextra({
  assetPrefix: isProd ? '/your-github-repo-name/' : '',
  images: {
    unoptimized: true
  }
});
