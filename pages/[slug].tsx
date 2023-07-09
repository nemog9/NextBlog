import { Box, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Code from '../components/Code';
import PostType from '../interfaces/post';
import { getAllPosts, getPostBySlug } from '../lib/api';
import styles from '../styles/Home.module.css';

type Props = {
    post: PostType;
};

const Post = ({ post }: Props) => {
    return (
        <main className={styles.main}>
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
            </Box>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ code: Code }}>
                {post.content}
            </ReactMarkdown>
        </main>
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
