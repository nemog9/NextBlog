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
        fontFamily: 'Noto Sans JP',
        fontWeightRegular: '600',
    },
});

export default Theme;
