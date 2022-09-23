import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import LayoutAccount from '../LayoutAccount';
import { FaRegEdit, FaWindowClose } from 'react-icons/fa';
import styles from './styles.module.scss';
import { upperFirstLetter } from '../../utils/styleText';
import Form from './Form';

const Addresses = () => {
  const [isEditting, setEditting] = React.useState(false);
  const [isNewAdds, setNewAdds] = React.useState(false);

  const handleOpenEditForm = React.useCallback(() => {
    setEditting(!isEditting);
  }, [isEditting]);

  const handleOpenAddNew = React.useCallback(() => {
    setNewAdds(!isNewAdds);
  }, [isNewAdds]);

  const handleClearAddress = () => {
    confirm('Bạn muốn xóa địa chỉ này ?');
  };

  return (
    <LayoutAccount title={'Thông tin địa chỉ'}>
      <Grid container justifyContent="space-between">
        <Grid item lg={6} className={styles.inforAddress}>
          <div className={styles.subtitle}>
            <Typography variant="body2" className={styles.name}>
              {upperFirstLetter('Trần quang huy')}
              <span> (Địa chỉ mặc định)</span>
            </Typography>
            <div className={styles.iconActions}>
              <FaRegEdit
                className={styles.iconClick}
                onClick={handleOpenEditForm}
              />
              <FaWindowClose
                className={styles.iconClick}
                onClick={handleClearAddress}
              />
            </div>
          </div>
          <div className={styles.detail}>
            {!isEditting ? (
              <>
                <Typography variant="body2" className={styles.fullName}>
                  {upperFirstLetter('Trần quang huy')}
                </Typography>
                <div className={styles.rowAddress}>
                  <Typography variant="body2" className={styles.preText}>
                    Công ty:
                  </Typography>
                  <Typography variant="body2" className={styles.text}>
                    a
                  </Typography>
                </div>
                <div className={styles.rowAddress}>
                  <Typography variant="body2" className={styles.preText}>
                    Địa chỉ:
                  </Typography>
                  <Typography variant="body2" className={styles.text}>
                    a
                  </Typography>
                </div>
                <div className={styles.rowAddress}>
                  <Typography variant="body2" className={styles.preText}>
                    Số điện thoại:
                  </Typography>
                  <Typography variant="body2" className={styles.text}>
                    09000000000
                  </Typography>
                </div>
              </>
            ) : (
              <Form submitTitle={'Cập nhật'} cancel={handleOpenEditForm} />
            )}
          </div>
        </Grid>
        <Grid item lg={6} className={styles.inforAddress}>
          <Button className={styles.btnAddNew} onClick={handleOpenAddNew}>
            Nhập địa chỉ mới
          </Button>
          <div className={styles.detail}>
            {isNewAdds ? (
              <Form submitTitle={'Thêm mới'} cancel={handleOpenAddNew} />
            ) : (
              ''
            )}
          </div>
        </Grid>
      </Grid>
    </LayoutAccount>
  );
};

export default Addresses;