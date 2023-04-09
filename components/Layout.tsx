import { AppBar, IconButton, Toolbar, Typography, styled } from '@mui/material';
import Link from 'next/link';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  paddingLeft: theme.spacing(8),
  paddingRight: theme.spacing(8),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export const Layout = () => {
  return (
    <StyledAppBar position="static" color="primary">
      <Toolbar>
        <Link href="/">
          <Typography variant="h6">nemog</Typography>
        </Link>
      </Toolbar>
    </StyledAppBar>
  );
};
