import { Box, Divider } from '@mui/material';

const CustomDivider = () => {
    return (
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
    );
};

export default CustomDivider;
