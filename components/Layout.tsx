import { Typography } from '@mui/material';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export const Layout = () => {
  return (
      <Link href="/">
        <Typography sx={{ py: 2 }} variant="h4" className={styles.header}>nemogLog</Typography>
      </Link>
  );
};
