import { Button, Grid, TextField, Typography } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles.module.scss';

const Login = () => {
  const [change, setChange] = React.useState(false);
  const router = useRouter();
  const handleForgetPassword = () => {
    setChange(!change);
  };
  const form = {
    address: 'hoa vang da nang',
    city: 'DDN',
    company: 'Tipici',
    districts: 'Hòa Vang',
    email: 'huy@gmail.com',
    firstname: 'Tran',
    lastname: 'Quang Huy',
    nation: 'VN',
    phone: '0909000000',
    rewardPoint: 300,
    wards: 'Hòa Khương',
    customerCode: 'M90C90',
  };
  const handleSubmit = () => {
    localStorage.setItem('USER_INFOR', JSON.stringify(form));
    router.push('/cart');
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
                    placeholder="Mã khách hàng hoặc số điện thoại"
                    variant="outlined"
                    type="text"
                  />
                  {/* <TextField
                    className={styles.input}
                    placeholder="Mật khẩu"
                    type="password"
                    variant="outlined"
                  /> */}
                  {/* <Typography variant="body2">
                    This site is protected by reCAPTCHA and the Google Privacy
                    Policy and Terms of Service apply.
                  </Typography> */}
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
                    <Button className={styles.btn} onClick={handleSubmit}>
                      Đăng nhập
                    </Button>
                    <div className={styles.reqAnother}>
                      {/* <Button onClick={handleForgetPassword}>
                        Quên mật khẩu ?
                      </Button>
                      <br />
                      hoặc  */}
                      <Link href="/account/register">Đăng ký</Link>
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
