import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { getAllTags } from '../../lib/api';

const Tags = ({ allTags }) => {
    return (
        <Box
            sx={{
                p: 4,
                maxWidth: '48rem',
                m: 'auto',
            }}
        >
            <Typography variant='h6'>タグ一覧</Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                }}
            >
                {allTags.map((tag) => {
                    return (
                        <Link href={{ pathname: '/tags/[slug]', query: { slug: tag } }} key={tag}>
                            <Typography># {tag}</Typography>
                        </Link>
                    );
                })}
            </Box>
        </Box>
    );
};

export const getStaticProps = async () => {
    const allTags = getAllTags();

    return {
        props: { allTags },
    };
};

export default Tags;
