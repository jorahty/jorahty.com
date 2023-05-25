import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider defaultMode="system">
      <CssBaseline />
      <Head>
        <title>James Tennant</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </CssVarsProvider>
  );
}
