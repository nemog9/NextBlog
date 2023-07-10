import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getAllPosts, getAllTags } from '@/lib/api';

const Tag = ({ filteredPosts, tagName }) => {
    return (
        <Layout>
            <Typography variant='h5'># {tagName}</Typography>
            {filteredPosts.map(({ title, date, slug }) => {
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
    );
};

type Params = {
    params: {
        slug: string;
    };
};

export const getStaticProps = async ({ params }: Params) => {
    const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'except', 'tags']);
    const filteredPosts = allPosts
        .filter((post) => post.tags)
        .filter((post) => post.tags.includes(params.slug));

    return {
        props: {
            filteredPosts: filteredPosts,
            tagName: params.slug,
        },
    };
};

export const getStaticPaths = async () => {
    const allTags = getAllTags();

    return {
        paths: allTags.map((tag) => {
            return {
                params: {
                    slug: tag,
                },
            };
        }),
        fallback: false,
    };
};

export default Tag;
