import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import SimpleIconsGithub from './icons/GitHub';
import SimpleIconsTwitter from './icons/Twitter';
import SimpleIconsYoutube from './icons/YouTube';
import SimpleIconsZenn from './icons/Zenn';

const Profile = () => {
    const imageStyle = {
        borderRadius: '50%',
    };
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    // justifyContent: 'space-between',
                    gap: 12,
                }}
            >
                <Typography variant='h4'>nemog</Typography>
                <Image
                    src='/nemog.jpg'
                    alt='Profile Icon'
                    width={100}
                    height={100}
                    style={imageStyle}
                />
            </Box>
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
