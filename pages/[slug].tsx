import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import { Box, Typography } from '@mui/material';
import { getAllPosts, getPostBySlug } from '../lib/api';
import remarkGfm from 'remark-gfm';
import PostType from '../interfaces/post';
import styles from '@/styles/Home.module.css';

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  const CodeBlock: CodeComponent = ({
    inline,
    className,
    children,
    ...props
  }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        // TODO: ここのエラーを消したい
        style={materialOceanic as any}
        language={match[1]}
        PreTag="div"
        {...props}
        w={100}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  };
  return (
    <main className={styles.main}>
      <Box sx={{ pb: 4 }}>
        <Typography variant="h3">{post.title}</Typography>
        <Typography variant="h6">{post.date}</Typography>
      </Box>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{ code: CodeBlock }}>
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
