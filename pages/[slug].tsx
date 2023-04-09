import ReactMarkdown from 'react-markdown';
import { Box, Typography } from '@mui/material';
import { getAllPosts, getPostBySlug } from '../lib/api';
import remarkGfm from 'remark-gfm';
import PostType from '../interfaces/post';
import styles from '@/styles/Home.module.css';
import { Code } from '../components/Code';
import { MDXProvider } from '@mdx-js/react';

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  return (
    <main className={styles.main}>
      <Box sx={{ pb: 4 }}>
        <Typography variant="h3">{post.title}</Typography>
        <Typography variant="h6">{post.date}</Typography>
      </Box>
      <MDXProvider>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ code: Code }}>
          {post.content}
        </ReactMarkdown>
      </MDXProvider>
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
