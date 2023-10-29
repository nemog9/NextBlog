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
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='20px'>
                <Image
                    src='/nemog.jpg'
                    alt='Profile Icon'
                    width='350'
                    height='350'
                    style={imageStyle}
                />
                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Link href='https://github.com/nemog9'>
                    <Box display='flex' alignItems='center' gap='10px'>
                        <SimpleIconsGithub />
                        <Typography>GitHub</Typography>
                    </Box>
                </Link>
                <Link href='https://zenn.dev/tomone'>
                    <Box display='flex' alignItems='center' gap='10px'>
                        <SimpleIconsZenn />
                            <Typography>zenn</Typography>
                    </Box>
                </Link>
                <Link href='https://twitter.com/nemog9_'>
                    <Box display='flex' alignItems='center' gap='10px'>
                            <SimpleIconsTwitter />
                            <Typography>X</Typography>
                    </Box>
                </Link>
                <Link href='https://www.youtube.com/channel/UCw_spPQfZEes2cC-0Q-bkgg'>
                    <Box display='flex' alignItems='center' gap='10px'>
                        <SimpleIconsYoutube />
                        <Typography>YouTube</Typography>
                    </Box>
                </Link>
            </Box>
            </Box>

        </>
    );
};

export default Profile;
