import { useRouter } from 'next/router';
import { comfortaa } from './css/font';

// @See details: https://nextra.site/docs/docs-theme/theme-configuration
const config = {
  // Global
  docsRepositoryBase: 'https://github.com/tim2538/try-nextra/tree/main',
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate: asPath !== '/' ? '%s | Backspace' : 'Backspace',
      additionalLinkTags: [
        {
          rel: 'icon',
          href: '/try-nextra/favicon.ico',
          type: 'image/x-icon'
        }
      ]
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Backspace" />
      <meta
        property="og:description"
        content="Work with smiles and happiness"
      />
    </>
  ),
  primaryHue: { light: 220, dark: 210 },
  primarySaturation: { light: 88, dark: 127 },
  // Navbar
  logo: (
    <>
      <svg width="32" height="32" viewBox="0 0 32 32">
        <circle r="15.46" cx="16" cy="15.46" fill="#ffffff" />
        <path
          d="m 15.0125 0.0472 c -0.8 0.045 -1.8 0.185 -2.625 0.37 c -0.6 0.135 -2.14 0.625 -2.585 0.825 l -0.24 0.105 l 0 4.175 l 0 4.18 l 0.41 -0.385 c 1.11 -1.03 2.64 -1.805 4.2 -2.12 c 2.86 -0.59 5.85 0.27 7.945 2.285 c 0.59 0.565 0.97 1.015 1.36 1.615 c 1.94 2.98 1.94 6.805 0.005 9.79 c -1.78 2.73 -4.97 4.315 -8.17 4.055 c -2.25 -0.18 -4.08 -1.03 -5.675 -2.625 c -1.465 -1.46 -2.195 -2.91 -2.585 -5.125 c -0.04 -0.23 -0.065 -2.39 -0.085 -7.36 l -0.03 -7.04 l -0.45 0.335 c -3.6 2.655 -5.87 6.59 -6.405 11.09 c -0.11 0.935 -0.11 2.615 0 3.55 c 0.44 3.72 2.025 6.99 4.655 9.59 c 3.87 3.835 9.405 5.41 14.8 4.21 c 0.81 -0.18 2.205 -0.65 3.01 -1.015 c 4.67 -2.115 8.065 -6.37 9.065 -11.36 c 0.225 -1.13 0.31 -1.99 0.31 -3.2 c 0 -3.51 -1.06 -6.735 -3.14 -9.535 c -2.52 -3.395 -6.3 -5.65 -10.495 -6.27 c -0.585 -0.085 -2.155 -0.205 -2.475 -0.185 c -0.07 0 -0.43 0.02 -0.8 0.045 z m 0.345 9.595 c -2.48 0.25 -4.565 1.885 -5.415 4.24 c -0.46 1.29 -0.46 2.93 0 4.22 c 0.77 2.145 2.55 3.685 4.785 4.145 c 0.71 0.145 1.765 0.145 2.47 0 c 2.57 -0.53 4.49 -2.45 5.02 -5.02 c 0.145 -0.71 0.145 -1.76 0 -2.47 c -0.465 -2.24 -2.005 -4.02 -4.145 -4.785 c -0.775 -0.275 -1.905 -0.415 -2.715 -0.33 z"
          fill="#1877f2"
        />
      </svg>
      <span
        className="backspace-text"
        style={{
          marginLeft: '.2em',
          fontSize: '1.9rem',
          letterSpacing: -3,
          fontFamily: comfortaa.style.fontFamily,
          fontWeight: 700
        }}
      >
        backspace
      </span>
    </>
  ),
  project: { link: 'https://github.com/tim2538/try-nextra' },
  search: { placeholder: 'Search...' },
  // Side bar
  sidebar: { toggleButton: true },
  // TOC Sidebar
  toc: { backToTop: true },
  editLink: { text: 'Edit this page →' },
  feedback: {
    content: 'Give us feedback →',
    useLink() {
      return 'https://apps.powerapps.com/play/72f35b7e-8ab1-40ad-8d8e-e63c412ee097';
    }
  },
  // End of Page
  gitTimestamp: null,
  // Footer
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} All Rights Reserved,{' '}
        <span
          style={{
            letterSpacing: -1.5,
            fontFamily: comfortaa.style.fontFamily,
            fontWeight: 700
          }}
        >
          backspace
        </span>
      </span>
    )
  }
};

export default config;
