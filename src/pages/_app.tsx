import * as React from 'react';
import '../css/custom.css';
import { prompt } from '../css/font';

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: Record<string, any>;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={prompt.className}>
      <Component {...pageProps} />
    </div>
  );
}
