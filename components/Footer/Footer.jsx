import { Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';
import About from './About';
import styles from './styles.module.scss';

const Footer = () => {
  const router = useRouter();
  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.none]: router.pathname === '/checkouts/[id]',
      })}
    >
      <div className={styles.container}>
        <About />
        <div className={styles.copyRight}>
          <Typography variant="body1">
            Copyright &copy; 2022 Khanh Bui. Powered by Tipici
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
