import { createTheme } from '@mui/material/styles';

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
        fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
        fontWeightRegular: '500',
    },
});

export default Theme;
