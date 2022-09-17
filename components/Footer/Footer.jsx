import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import About from './About';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
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
