import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { myAccount } from '../../constants/commonData';
import { CgEditBlackPoint } from 'react-icons/cg';
import styles from './styles.module.scss';
import Link from 'next/link';
import { BsMenuUp } from 'react-icons/bs';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/actions/auth';

const LayoutAccount = ({ title, children }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleLogout = () => {
    dispatch(logOut());
  };
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
            <Typography variant="h6" onClick={() => setOpen(!open)}>
              <BsMenuUp className={styles.iconMenu} />
              Tài khoản
            </Typography>

            <div
              className={clsx(styles.tabBtn, {
                [styles.active]: open,
              })}
            >
              {myAccount.slice(0, 3).map((it, idx) => (
                <Button key={idx} className={styles.btn}>
                  <Link href={it.link} className={styles.link}>
                    <div>
                      <CgEditBlackPoint size={10} style={{ marginRight: 5 }} />
                      {it.name}
                    </div>
                  </Link>
                </Button>
              ))}
              <Button onClick={handleLogout} className={styles.btn}>
                {/* <div> */}
                <CgEditBlackPoint size={10} style={{ marginRight: 5 }} />
                {myAccount[3].name}
                {/* </div> */}
              </Button>
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
