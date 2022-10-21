import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import LayoutAccount from '../../LayoutAccount';
import { FaRegEdit, FaWindowClose, FaCheckSquare } from 'react-icons/fa';
import styles from './styles.module.scss';
import { upperFirstLetter } from '../../../utils/styleText';
import Form from './Form';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { deleteAddressRequest } from '../../../store/actions/customer';
import userData from '../../../constants/userdata.json';
import BoxAddress from './BoxAddress';

const Addresses = ({ user, detail, addresses }) => {
  const dispatch = useDispatch();
  const [isNewAdds, setNewAdds] = React.useState(false);

  const handleOpenAddNew = React.useCallback(() => {
    setNewAdds(!isNewAdds);
  }, [isNewAdds]);

  const handleDeleteAddress = (id) => {
    dispatch(deleteAddressRequest(id));
  };

  return (
    <LayoutAccount title={'Thông tin địa chỉ'}>
      <Grid container justifyContent="space-between">
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className={styles.inforAddress}
        >
          {addresses?.map((detail, idx) => (
            <BoxAddress
              key={idx}
              setDefault={idx === 0 ? true : false}
              detail={detail}
              handleDeleteAddress={handleDeleteAddress}
            />
          ))}
        </Grid>

        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className={styles.inforAddress}
        >
          <Button className={styles.btnAddNew} onClick={handleOpenAddNew}>
            Nhập địa chỉ mới
          </Button>
          <div className={styles.detail}>
            {isNewAdds ? (
              <Form
                submitTitle={'Thêm mới'}
                cancel={handleOpenAddNew}
                detail={addresses[0]}
              />
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
