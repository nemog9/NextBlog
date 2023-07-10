import { Box, Pagination, PaginationItem, Typography, styled } from '@mui/material';
import Link from 'next/link';
import { getAllPosts } from '../../../lib/api';

const Page = ({ latestPosts, pageNum, pageCount }) => {
    return (
        <Box
            sx={{
                p: 4,
                maxWidth: '48rem',
                m: 'auto',
            }}
        >
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
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Pagination
                    page={pageNum}
                    count={pageCount}
                    renderItem={(item) =>
                        item.disabled || item.page === null ? (
                            <PaginationItem {...item} />
                        ) : (
                            <Link href={`/posts/page/${item.page}`}>
                                <PaginationItem {...item} />
                            </Link>
                        )
                    }
                />
            </Box>
        </Box>
    );
};

export const getStaticProps = async ({ params }) => {
    const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'except']);
    const pageNumber = parseInt(params.slug);
    const latestPosts = allPosts.slice((pageNumber - 1) * 3, pageNumber * 3);
    const pageCount = allPosts.length % 3 === 0 ? allPosts.length / 3 : allPosts.length / 3 + 1;

    return {
        props: {
            latestPosts: latestPosts,
            pageNum: parseInt(params.slug),
            pageCount: pageCount,
        },
    };
};

export const getStaticPaths = async () => {
    const posts = getAllPosts(['slug']);
    const page = posts.length % 3 === 0 ? posts.length / 3 : posts.length / 3 + 1;

    return {
        paths: Array.from(Array(page + 1), (v, k) => k).map((number) => {
            return {
                params: {
                    slug: number.toString(),
                },
            };
        }),
        fallback: false,
    };
};

export default Page;
