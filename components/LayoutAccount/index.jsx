import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { myAccount } from '../../constants/commonData';
import { CgEditBlackPoint } from 'react-icons/cg';
import styles from './styles.module.scss';

const LayoutAccount = ({ title, children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <Typography variant="h6"> {title}</Typography>
        </div>
        <Grid container justifyContent="center" className={styles.account}>
          <Grid
            item
            lg={3}
            md={3}
            sm={11}
            xs={12}
            className={styles.tabAccount}
          >
            <Typography variant="h6">Tài khoản</Typography>
            <div className={styles.tabBtn}>
              {myAccount.map((it, idx) => (
                <Button key={idx} className={styles.btn} href={it.link}>
                  <CgEditBlackPoint size={10} style={{ marginRight: 5 }} />
                  {it.name}
                </Button>
              ))}
            </div>
          </Grid>
          <Grid item lg={9} md={9} sm={11} xs={12} className={styles.infor}>
            {children}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LayoutAccount;
