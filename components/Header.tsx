import { Typography } from '@mui/material';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from './Layout';

const Header = () => {
    return (
        <Link href='/'>
            <Typography sx={{ py: 2 }} variant='h5' className={styles.header}>
                nemog
            </Typography>
        </Link>
    );
};

export default Header;
