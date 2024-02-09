import { useRouter } from 'next/router';

// @See details: https://nextra.site/docs/docs-theme/theme-configuration
export default {
  // Global
  docsRepositoryBase: 'https://github.com/tim2538/try-nextra/blob/main',
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return { titleTemplate: '%s | Backspace' };
    } else {
      return { titleTemplate: 'Backspace' };
    }
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
  logo: <b>Backspace</b>,
  project: { link: 'https://github.com/tim2538/try-nextra' },
  // Side bar
  sidebar: { toggleButton: true },
  // TOC Sidebar
  backToTop: true,
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
      <span>© {new Date().getFullYear()} All Rights Reserved, backspace</span>
    )
  }
};
