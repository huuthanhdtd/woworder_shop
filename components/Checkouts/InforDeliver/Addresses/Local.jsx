import { Button, Grid } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import SelectForm from '../SelectForm';
import styles from './styles.module.scss';

const Local = ({ handleDeliver, deliver, data, state, handleChange }) => {
  return (
    <>
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
                state={state}
                handleChange={handleChange}
              />
            </Grid>
            {data.districts && (
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
            )}
            {data.wards && (
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <SelectForm
                  label={'Phường / xã'}
                  title={'Chọn phường / xã'}
                  name="ward"
                  data={data?.wards?.wards}
                  state={state}
                  handleChange={handleChange}
                />
              </Grid>
            )}
          </Grid>
        </div>
      )}
    </>
  );
};

export default Local;
