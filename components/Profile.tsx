import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import SimpleIconsGithub from './icons/GitHub';
import SimpleIconsTwitter from './icons/Twitter';
import SimpleIconsYoutube from './icons/YouTube';
import SimpleIconsZenn from './icons/Zenn';

const Profile = () => {
    return (
        <>
            <Typography variant='h4'>nemog</Typography>
            <Typography>システムエンジニアをしています。</Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                }}
            >
                <Link href='https://github.com/nemog9'>
                    <SimpleIconsGithub />
                </Link>
                <Link href='https://zenn.dev/tomone'>
                    <SimpleIconsZenn />
                </Link>
                <Link href='https://twitter.com/nemog9_'>
                    <SimpleIconsTwitter />
                </Link>
                <Link href='https://www.youtube.com/channel/UCw_spPQfZEes2cC-0Q-bkgg'>
                    <SimpleIconsYoutube />
                </Link>
            </Box>
        </>
    );
};

export default Profile;
