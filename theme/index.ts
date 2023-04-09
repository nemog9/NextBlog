import { blueGrey, cyan, indigo, teal, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: grey[900],
    },
    secondary: {
      main: '#f50057',
    },
  },
});
