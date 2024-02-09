import '../css/custom.css';
import { prompt } from '../css/theme';

export default function App({ Component, pageProps }) {
  return (
    <main className={prompt.className}>
      <Component {...pageProps} />
    </main>
  );
}
