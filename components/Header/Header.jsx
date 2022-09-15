import { Grid, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import { navbar, user } from '../../constants/commonData';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import styles from './styles.module.scss';
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Grid container className={styles.container}>
        <Grid item lg={2} className={styles.logo}>
          Logo
        </Grid>
        <Grid item lg={6} className={styles.navbar}>
          {navbar.map((it, idx) => (
            <div className={styles.item} key={idx}>
              <Link href="/">{it.name}</Link>
            </div>
          ))}
        </Grid>
        <Grid item lg={2} className={styles.user}>
          {user.map((it, idx) => (
            <div className={styles.item} key={idx}>
              {it.name === user[0].name && (
                <AiOutlineShoppingCart color="white" size={15} />
              )}
              <Link href="/">{it.name}</Link>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
