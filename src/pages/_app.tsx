import { CssBaseline, PaletteMode, Theme, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import '../css/custom.css';
import { theme, prompt } from '../css/theme';

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: Record<string, any>;
}

export default function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState<PaletteMode>(
    prefersDarkMode ? 'dark' : 'light'
  );

  React.useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const appliedTheme: Theme = React.useMemo(() => theme(mode), [mode]);

  return (
    <ThemeProvider theme={appliedTheme}>
      {/* <CssBaseline /> */}
      <div className={prompt.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
