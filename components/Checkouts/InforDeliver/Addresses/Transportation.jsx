import { Button, Grid, TextField } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { getUserData } from '../../../../utils/localstorage';
import SelectForm from '../SelectForm';
import styles from './styles.module.scss';

const Transportation = ({
  deliver,
  data,
  state,
  handleChange,
  handleDeliver,
  handleChangeInforDeliver,
}) => {
  const userData = React.useMemo(() => {
    const getUserDataaa = getUserData('USER_INFOR');
    return getUserDataaa;
  }, []);
  const [addressInput, setAddressInput] = React.useState(userData?.address);
  const handleOnChange = (e) => {
    setAddressInput(e.target.value);
    handleChangeInforDeliver('address', e.target.value);
  };
  return (
    <>
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
            value={addressInput}
            onChange={handleOnChange}
          />
          <Grid container spacing={1}>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <SelectForm
                label={'Tỉnh / thành'}
                title={'Chọn tỉnh / thành'}
                name="city"
                data={data.cities}
                state={state}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <SelectForm
                label={'Quận / huyện'}
                title={'Chọn quận / huyện'}
                name="district"
                data={data?.districts?.districts}
                state={state}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <SelectForm
                label={'Phường / xã'}
                title={'Chọn phường / xã'}
                name="wards"
                data={data?.wards?.wards}
                state={state}
                handleChange={handleChange}
              />
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default Transportation;
