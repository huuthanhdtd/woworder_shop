import { Button, Grid, TextField, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

const Login = () => {
  const [change, setChange] = React.useState(false);
  const handleForgetPassword = () => {
    setChange(!change);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={11}>
        <div className={styles.root}>
          <div className={styles.title}>
            <Typography variant="h6">Đăng nhập</Typography>
          </div>
          <div className={styles.wrapper}>
            <form action="" className={styles.form}>
              {!change ? (
                <>
                  <TextField
                    className={styles.input}
                    placeholder="Email"
                    variant="outlined"
                    type="text"
                  />
                  <TextField
                    className={styles.input}
                    placeholder="Mật khẩu"
                    type="password"
                    variant="outlined"
                  />
                  <Typography variant="body2">
                    This site is protected by reCAPTCHA and the Google Privacy
                    Policy and Terms of Service apply.
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="h6">Phục hồi mật khẩu</Typography>
                  <TextField
                    className={styles.input}
                    placeholder="Email"
                    type="text"
                    variant="outlined"
                  />
                </>
              )}

              <div className={styles.request}>
                {!change ? (
                  <>
                    <Button className={styles.btn}>Đăng nhập</Button>
                    <div className={styles.reqAnother}>
                      <Button onClick={handleForgetPassword}>
                        Quên mật khẩu ?
                      </Button>
                      <br />
                      hoặc <Link href="/account/register">Đăng ký</Link>
                    </div>
                  </>
                ) : (
                  <>
                    <Button className={styles.btn} style={{ width: 100 }}>
                      Gửi
                    </Button>
                    <Button onClick={handleForgetPassword}>Hủy</Button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
