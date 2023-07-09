import { Typography } from '@mui/material';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Layout = () => {
    return (
        <Link href='/'>
            <Typography sx={{ py: 2 }} variant='h5' className={styles.header}>
                nemogLog
            </Typography>
        </Link>
    );
};

export default Layout;
