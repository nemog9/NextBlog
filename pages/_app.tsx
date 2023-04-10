import '@/styles/globals.css';
import { Layout } from '../components/Layout';
import { theme } from '../theme';
import { ThemeProvider } from '@mui/material';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
