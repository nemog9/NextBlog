import { Box } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <Box
            sx={{
                p: 4,
                maxWidth: '48rem',
                m: 'auto',
            }}
        >
            {children}
        </Box>
    );
};

export default Layout;
