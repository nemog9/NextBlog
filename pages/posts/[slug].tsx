import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Code from '@/components/Code';
import Layout from '@/components/Layout';
import PostType from '@/interfaces/post';
import { getAllPosts, getPostBySlug } from '@/lib/api';

type Props = {
    post: PostType;
};

const Post = ({ post }: Props) => {
    return (
        <Layout>
            <Box sx={{ py: 2 }}>
                <Typography
                    variant='h4'
                    sx={{
                        color: 'primary.main',
                    }}
                >
                    {post.title}
                </Typography>
                <Typography>{post.date}</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                    }}
                >
                    {post.tags &&
                        post.tags.length !== 0 &&
                        post.tags.map((tag) => (
                            <Link href={`/tags/${encodeURIComponent(tag)}`} key={tag}>
                                <Typography
                                    sx={{
                                        color: 'primary.main',
                                    }}
                                >
                                    # {tag}
                                </Typography>
                            </Link>
                        ))}
                </Box>
            </Box>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ code: Code }}>
                {post.content}
            </ReactMarkdown>
        </Layout>
    );
};

type Params = {
    params: {
        slug: string;
    };
};

export const getStaticProps = async ({ params }: Params) => {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'onImage',
        'coverImage',
        'tags',
    ]);
    const content = post.content;

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
};

export const getStaticPaths = async () => {
    const posts = getAllPosts(['slug']);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
};

export default Post;
