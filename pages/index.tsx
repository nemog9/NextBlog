import { Box, Divider, Typography } from '@mui/material';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import Profile from '../components/Profile';
import Post from '../interfaces/post';
import { getAllPosts } from '../lib/api';
import styles from '../styles/Home.module.css';

export default function Home({ latestPosts }) {
    return (
        <>
            <Profile />
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
            <main className={styles.main}>
                <Typography variant='h5'>Posts</Typography>
                {latestPosts.map(({ title, date, slug }) => {
                    return (
                        <Box sx={{ py: 2 }} key={slug}>
                            <Link href={{ pathname: '/[slug]', query: { slug: slug } }}>
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
                <Link href={{ pathname: '/posts/page/1' }}>
                    <Typography>Posts</Typography>
                </Link>
                <Link href={{ pathname: '/tags' }}>
                    <Typography>Tags</Typography>
                </Link>
            </main>
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
