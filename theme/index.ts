import { blueGrey, cyan, indigo, teal, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Noto_Sans_JP } from 'next/font/google';

const notoSansJp = Noto_Sans_JP({ weight: '700', subsets: ['latin'] });

const Theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#167ac6',
        },
        secondary: {
            main: '#f50057',
        },
    },
    typography: {
        fontFamily: 'Noto Sans JP',
        fontWeightRegular: '600',
    },
});

export default Theme;
