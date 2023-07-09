import '../styles/globals.css';
import { ThemeProvider } from '@mui/material';
import Layout from '../components/Layout';
import theme from '../theme';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Layout />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
