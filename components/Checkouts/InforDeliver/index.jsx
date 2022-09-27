import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  Link,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';
import {
  RiArrowRightSLine,
  RiCheckboxBlankCircleFill,
  RiInboxArchiveLine,
} from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { citieslist } from '../../../constants/selectListData';
import styles from './styles.module.scss';
import Image from 'next/image';
import COD from '../../../assets/image/cod.svg';
import BANK from '../../../assets/image/bank.svg';

const addresses = [
  { name: 'Hòa khương, đà nẵng' },
  { name: 'Quận 10, Hồ Chí Minh' },
];

const InforDeliver = ({ token, handleLogin, login }) => {
  const [state, setState] = React.useState({
    city: '',
    district: '',
    wards: '',
  });

  const [data, setData] = React.useState({
    cities: citieslist[0].cities,
    districts: null,
    wards: null,
  });

  const [deliver, setDeliver] = React.useState('deliver');
  const [payment, setPayment] = React.useState('cash');

  const handlePayment = React.useCallback((type) => {
    setPayment(type);
  }, []);

  const handleDeliver = React.useCallback((type) => {
    setDeliver(type);
    setData({
      cities: citieslist[0].cities,
      districts: null,
      wards: null,
    });
    setState({
      city: '',
      district: '',
      wards: '',
    });
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    if (event.target.value === 'Chọn tỉnh / thành') {
      setState({
        city: '',
        district: '',
        wards: '',
      });
      setData({
        cities: citieslist[0].cities,
        districts: null,
        wards: null,
      });
      return;
    }
    setState({
      ...state,
      [name]: event.target.value,
    });
    if (name === 'city') {
      setData({
        ...data,
        districts: data.cities.find((it) => it.name === event.target.value),
      });
    }
    if (name === 'district') {
      setData({
        ...data,
        wards: data.districts.districts.find(
          (it) => it.name === event.target.value
        ),
      });
    }
  };

  const router = useRouter();

  const SelectForm = ({ label, title, name, data }) => {
    return (
      <FormControl variant="outlined" className={styles.selectForm}>
        <InputLabel
          htmlFor="outlined-age-native-simple"
          className={styles.label}
        >
          {label}
        </InputLabel>
        <Select
          native
          value={state[name]}
          onChange={handleChange}
          label={label}
          inputProps={{
            name: name,
            id: 'outlined-age-native-simple',
          }}
        >
          <option defaultValue="#">{title}</option>
          {data &&
            data.map((it, idx) => (
              <option value={it.name} key={idx}>
                {it.name}
              </option>
            ))}
        </Select>
      </FormControl>
    );
  };

  return (
    <div className={styles.infor}>
      <Typography className={styles.title}>Khanh Bui</Typography>
      <div className={styles.tabMenu}>
        <Link href="/">Trang chủ</Link>
        <RiArrowRightSLine className={styles.iconArrow} />
        <Typography variant="body2">Thông tin giao hàng</Typography>
      </div>
      <Typography className={styles.caption}>Thông tin giao hàng</Typography>
      {!login ? (
        <Typography className={styles.questionLogin}>
          Bạn đã có tài khoản?
          {/* <Link href="/account/login"> Đăng nhập</Link> */}
          <Link href="#" onClick={handleLogin}>
            {' '}
            Đăng nhập
          </Link>
        </Typography>
      ) : (
        <div className={styles.user}>
          <div className={styles.iconUser}>
            <AiOutlineUser />
          </div>
          <div className={styles.userInfor}>
            <Typography variant="body2">
              Trần Quang Huy (quanghuy.tipici@gmail.com)
            </Typography>
            <Button
              variant="text"
              className={styles.logout}
              onClick={handleLogin}
            >
              Đăng xuất
            </Button>
          </div>
        </div>
      )}

      <form action="" className={styles.form}>
        {login && (
          <SelectForm
            label={'Thêm địa chỉ mới...'}
            title={'Địa chỉ đã lưu trữ'}
            name="address"
            data={addresses}
          />
        )}

        <TextField
          className={styles.input}
          variant="outlined"
          placeholder="Họ và tên"
        />
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item lg={8} md={8} sm={8} xs={12}>
            <TextField
              className={styles.input}
              variant="outlined"
              placeholder="Email"
            />
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <TextField
              className={styles.input}
              variant="outlined"
              placeholder="Số điện thoại"
            />
          </Grid>
        </Grid>
        <div className={clsx(styles.address, styles.border)}>
          <div className={styles.addressTitle}>
            <Button
              className={clsx(styles.text, styles.button)}
              onClick={() => handleDeliver('deliver')}
            >
              <RiCheckboxBlankCircleFill
                className={clsx(styles.iconCircle, {
                  [styles.activeDeliver]: deliver === 'deliver',
                })}
              />
              Giao tận nơi
            </Button>
          </div>
          {deliver === 'deliver' && (
            <div className={styles.selectAddress}>
              <TextField
                className={styles.input}
                variant="outlined"
                placeholder="Địa chỉ"
              />
              <Grid container spacing={1}>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                  <SelectForm
                    label={'Tỉnh / thành'}
                    title={'Chọn tỉnh / thành'}
                    name="city"
                    data={data.cities}
                  />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                  <SelectForm
                    label={'Quận / huyện'}
                    title={'Chọn quận / huyện'}
                    name="district"
                    data={data?.districts?.districts}
                  />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                  <SelectForm
                    label={'Phường / xã'}
                    title={'Chọn phường / xã'}
                    name="wards"
                    data={data?.wards?.wards}
                  />
                </Grid>
              </Grid>
            </div>
          )}
          <div className={styles.addressTitle}>
            <Button
              className={clsx(styles.text, styles.button, {
                [styles.borderBottom]: deliver === 'local',
              })}
              onClick={() => handleDeliver('local')}
            >
              <RiCheckboxBlankCircleFill
                className={clsx(styles.iconCircle, {
                  [styles.activeDeliver]: deliver === 'local',
                })}
              />
              Nhận tại của hàng
            </Button>
          </div>
          {deliver === 'local' && (
            <div className={styles.selectAddress}>
              <Grid container spacing={1}>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                  <SelectForm
                    label={'Tỉnh / thành'}
                    title={'Chọn tỉnh / thành'}
                    name="city"
                    data={data.cities.filter((it) => it.code === 'DDN')}
                  />
                </Grid>
                {data.districts && (
                  <Grid item lg={4} md={4} sm={4} xs={12}>
                    <SelectForm
                      label={'Quận / huyện'}
                      title={'Chọn quận / huyện'}
                      name="district"
                      data={data?.districts?.districts}
                    />
                  </Grid>
                )}
                {data.wards && (
                  <Grid item lg={4} md={4} sm={4} xs={12}>
                    <SelectForm
                      label={'Phường / xã'}
                      title={'Chọn phường / xã'}
                      name="wards"
                      data={data?.wards?.wards}
                    />
                  </Grid>
                )}
              </Grid>
            </div>
          )}
        </div>
        {deliver === 'local' ? (
          <>
            <Typography className={styles.caption}>
              Chi nhánh còn hàng
            </Typography>

            <div className={clsx(styles.addressLocal, styles.border)}>
              <RiCheckboxBlankCircleFill
                className={clsx(styles.iconCircle, styles.activeDeliver)}
              />
              <strong>{`92 Nguyễn Du: `}</strong>
              <small>92 Nguyễn Du, Quận Hải Châu, Đà Nẵng</small>
            </div>
          </>
        ) : (
          <>
            <Typography className={styles.caption}>
              Phương thức vận chuyển
            </Typography>
            {data.wards ? (
              <div className={clsx(styles.border, styles.deliverCharges)}>
                <Typography variant="h5" className={clsx(styles.text)}>
                  <RiCheckboxBlankCircleFill
                    className={clsx(styles.iconCircle, styles.activeDeliver)}
                  />
                  GIAO TIÊU CHUẨN từ 1-5 ngày
                </Typography>
                <Typography variant="body2" className={styles.text}>
                  25.000 <sup>đ</sup>
                </Typography>
              </div>
            ) : (
              <div className={clsx(styles.border, styles.deliverBox)}>
                <RiInboxArchiveLine className={styles.iconBox} />
                <Typography className={styles.description}>
                  Vui lòng chọn
                  {data.districts === null
                    ? ' tỉnh / thành '
                    : data.wards === null
                    ? ' quận / huyện '
                    : ''}
                  để có danh sách phương thức vận chuyển.
                </Typography>
              </div>
            )}
          </>
        )}

        <Typography className={styles.caption}>
          Phương thức thanh toán
        </Typography>
        <div className={clsx(styles.border, styles.payment)}>
          <Button
            className={clsx(styles.text, styles.btnPayment)}
            onClick={() => handlePayment('cash')}
          >
            <RiCheckboxBlankCircleFill
              className={clsx(styles.iconCircle, {
                [styles.activeDeliver]: payment === 'cash',
              })}
            />
            <Image src={COD} width={70} height={40} />
            Thanh toán tiền mặt khi giao hàng (COD)
          </Button>
          {payment === 'cash' && (
            <div className={styles.desPayment}>
              <Typography variant="body2" className={styles.text}>
                Cảm ơn bạn đã lựa chọn mua sắm tại Happy Mommy, <br /> Nhân viên
                của chúng tôi sẽ sớm liên lạc với bạn qua điện thoại để
                <br /> XÁC NHẬN ĐƠN HÀNG <br /> trước khi giao hàng!
              </Typography>
            </div>
          )}
          <Button
            className={clsx(styles.text, styles.btnPayment, {
              [styles.bottomBorder]: payment === 'bank',
            })}
            onClick={() => handlePayment('bank')}
          >
            <RiCheckboxBlankCircleFill
              className={clsx(styles.iconCircle, {
                [styles.activeDeliver]: payment === 'bank',
              })}
            />
            <Image src={BANK} width={70} height={40} />
            Chuyển khoản qua ngân hàng
          </Button>
          {payment === 'bank' && (
            <div className={styles.desPayment}>
              <Typography variant="body2" className={styles.text}>
                Cảm ơn bạn đã lựa chọn mua sắm tại Happy Mommy. Bạn vui lòng
                chuyển khoản số tiền qua:
                <br />
                Ngân hàng: Vietinbank <br />
                STK: 1078 7579 2651 - Dương Thị Quỳnh Giao <br />
                Nhân viên của chúng tôi sẽ sớm liên lạc với bạn qua điện thoại
                để
                <br />
                XÁC NHẬN ĐƠN HÀNG.
              </Typography>
            </div>
          )}
        </div>
        <div className={styles.boxSubmit}>
          <Button variant="text" className={styles.gotoCarts}>
            Giỏ hàng
          </Button>
          <Button variant="contained" className={styles.submit}>
            Hoàn tất đơn hàng
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InforDeliver;
