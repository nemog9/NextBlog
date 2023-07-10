import '../styles/globals.css';
import { Box, Divider, ThemeProvider } from '@mui/material';
import { Noto_Sans_JP } from 'next/font/google';
import Layout from '../components/Layout';
import theme from '../theme';

const notoSansJp = Noto_Sans_JP({ weight: '700', subsets: ['latin'] });

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <style jsx global>{`
                html {
                    font-family: ${notoSansJp};
                }
            `}</style>
            <Layout />
            <Box
                sx={{
                    px: 2,
                }}
            >
                <Divider
                    sx={{
                        borderColor: 'primary.main',
                        borderBottomWidth: 2,
                        mx: 4,
                        maxWidth: '48rem',
                        m: 'auto',
                    }}
                />
            </Box>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
