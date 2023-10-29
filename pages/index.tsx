import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import CustomDivider from '@/components/CustomDivider';
import Layout from '@/components/Layout';
import Profile from '@/components/Profile';
import { getAllPosts } from '@/lib/api';

export default function Home({ latestPosts }) {
    return (
        <>
            <Layout>
                <Profile />
            </Layout>
            <CustomDivider />
            {/* <Layout>
                <Typography variant='h5'>Latest Posts</Typography>
                {latestPosts.map(({ title, date, slug }) => {
                    return (
                        <Box sx={{ py: 2 }} key={slug}>
                            <Link href={{ pathname: '/posts/[slug]', query: { slug: slug } }}>
                                <Typography
                                    variant='h6'
                                    sx={{
                                        color: 'primary.main',
                                    }}
                                >
                                    {title}
                                </Typography>
                                <Typography sx={{ p: 0 }}>{date}</Typography>
                            </Link>
                        </Box>
                    );
                })}
            </Layout>
            <CustomDivider /> */}
            {/* <Layout>
                <Typography variant='h5'>Navigation</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                    }}
                >
                    <Link href={{ pathname: '/posts/page/1' }}>
                        <Typography>{'All Posts'}</Typography>
                    </Link>
                    <Link href={{ pathname: '/tags' }}>
                        <Typography>{'All Tags'}</Typography>
                    </Link>
                    <Link href='https://github.com/nemog9/NextBlog'>
                        <Typography>Repository</Typography>
                    </Link>
                </Box>
            </Layout> */}
        </>
    );
}

export const getStaticProps = async () => {
    const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'except']);
    const latestPosts = allPosts.slice(0, 3);
    return {
        props: { latestPosts },
    };
};
