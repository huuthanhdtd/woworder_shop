import { Button, Grid, TextField, Typography } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from '../../../lib/services/login';
import { logIn } from '../../../store/actions/auth';
import styles from './styles.module.scss';
import authError from '../../../constants/authError';

const isEmpty = (value) => {
  if (value === null || value === '') return true;
  return false;
};

const Login = () => {
  const dispatch = useDispatch();
  const [change, setChange] = React.useState(false);
  const [formLogin, setForm] = React.useState({
    codeOrUsername: null,
    password: null,
  });
  const [errors, setErrors] = React.useState({
    errUsername: null,
    errPassword: null,
  });
  const { codeOrUsername, password } = formLogin;
  const { errUsername, errPassword } = errors;
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
    // localStorage.setItem('USER_INFOR', JSON.stringify(form));
    // router.push('/cart');
    // if (isEmpty(codeOrUsername) || isEmpty(password)) {
    //   console.log('work');
    // }
    // const response = logInUser(formLogin);
    // console.log(response);
    dispatch(logIn(formLogin));
  };

  const handleOnchange = React.useCallback(
    (event) => {
      const { value, name } = event.target;
      setForm({ ...formLogin, [name]: value });
      if (name === 'codeOrUsername') {
        if (value === '') {
          setErrors({
            ...errors,
            errUsername: 'Vui lòng nhập sđt hoặc code của bạn',
          });
        } else {
          setErrors({
            ...errors,
            errUsername: null,
          });
        }
      }
      if (name === 'password') {
        if (value === '') {
          setErrors({
            ...errors,
            errPassword: 'Vui lòng nhập mật khẩu của bạn',
          });
        } else {
          setErrors({
            ...errors,
            errPassword: null,
          });
        }
      }
    },
    [codeOrUsername, password]
  );

  const { error } = useSelector((state) => state.app);
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
                    placeholder="Mã khách hàng hoặc SĐT"
                    variant="outlined"
                    type="text"
                    name="codeOrUsername"
                    value={codeOrUsername || ''}
                    onChange={(e) => handleOnchange(e)}
                    error={codeOrUsername === '' ? true : false}
                    helperText={errUsername}
                  />
                  <TextField
                    className={styles.input}
                    placeholder="Mật khẩu"
                    type="password"
                    variant="outlined"
                    name="password"
                    value={password || ''}
                    onChange={(e) => handleOnchange(e)}
                    error={password === '' ? true : false}
                    helperText={errPassword}
                  />
                  {/* <Typography variant="body2">
                    This site is protected by reCAPTCHA and the Google Privacy
                    Policy and Terms of Service apply.
                  </Typography> */}
                  <Typography
                    variant="body2"
                    style={{
                      color: 'var(--price-color-)',
                      textAlign: 'center',
                    }}
                  >
                    {error === authError.E_PASSWORD
                      ? 'Mật khẩu không đúng'
                      : error === authError.E_UNAUTHORIZED
                      ? 'Mã hoặc sđt của bạn chưa đúng'
                      : ''}
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
                    <Button
                      className={styles.btn}
                      onClick={handleSubmit}
                      disabled={
                        isEmpty(codeOrUsername) || isEmpty(password)
                          ? true
                          : false
                      }
                    >
                      Đăng nhập
                    </Button>
                    <div className={styles.reqAnother}>
                      {/* <Button onClick={handleForgetPassword}>
                        Quên mật khẩu ?
                      </Button>
                      <br />
                      hoặc  */}
                      {/* <Link href="/account/register">Đăng ký</Link> */}
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
