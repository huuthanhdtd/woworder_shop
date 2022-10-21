import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { FaCheckSquare, FaRegEdit, FaWindowClose } from 'react-icons/fa';
import { upperFirstLetter } from '../../../../utils/styleText';
import Form from '../Form';
import styles from './styles.module.scss';

const BoxAddress = ({ detail, handleDeleteAddress, setDefault }) => {
  const [isPopup, setPopup] = React.useState(false);
  const [isEditting, setEditting] = React.useState(false);

  const handleOpenEditForm = React.useCallback(() => {
    setEditting(!isEditting);
  }, [isEditting]);
  return (
    <div className={styles.container}>
      <div className={styles.subtitle}>
        <Typography variant="body2" className={styles.name}>
          {upperFirstLetter(`${detail.name}`)}
          {setDefault && <span> (Địa chỉ mặc định)</span>}
        </Typography>
        <div className={styles.iconActions}>
          <FaRegEdit
            className={styles.iconClick}
            onClick={handleOpenEditForm}
          />
          <FaWindowClose
            className={styles.iconClick}
            onClick={() => setPopup(!isPopup)}
          />
        </div>
        <div
          className={clsx(styles.popup, {
            [styles.show]: isPopup,
          })}
        >
          <Typography variant="body2">Bạn có muốn xóa địa chỉ này</Typography>
          <div className={styles.actions}>
            <FaCheckSquare
              className={styles.func}
              onClick={() => handleDeleteAddress(detail.id)}
            />
            <FaWindowClose
              className={styles.func}
              onClick={() => setPopup(!isPopup)}
            />
          </div>
        </div>
      </div>
      <div className={styles.detail}>
        {!isEditting ? (
          <>
            <Typography variant="body2" className={styles.fullName}>
              {upperFirstLetter(`${detail.name}`)}
            </Typography>
            <div className={styles.rowAddress}>
              <Typography variant="body2" className={styles.preText}>
                Tỉnh/ thành phố:
              </Typography>
              <Typography variant="body2" className={styles.text}>
                {detail.province}
              </Typography>
            </div>
            <div className={styles.rowAddress}>
              <Typography variant="body2" className={styles.preText}>
                Quận/ huyện:
              </Typography>
              <Typography variant="body2" className={styles.text}>
                {detail.district}
              </Typography>
            </div>
            <div className={styles.rowAddress}>
              <Typography variant="body2" className={styles.preText}>
                Phường/ xã:
              </Typography>
              <Typography variant="body2" className={styles.text}>
                {detail.ward}
              </Typography>
            </div>
            <div className={styles.rowAddress}>
              <Typography variant="body2" className={styles.preText}>
                Địa chỉ:
              </Typography>
              <Typography variant="body2" className={styles.text}>
                {detail.address}
              </Typography>
            </div>
            <div className={styles.rowAddress}>
              <Typography variant="body2" className={styles.preText}>
                Số điện thoại:
              </Typography>
              <Typography variant="body2" className={styles.text}>
                {detail.phone}
              </Typography>
            </div>
          </>
        ) : (
          <Form
            submitTitle={'Cập nhật'}
            cancel={handleOpenEditForm}
            detail={detail}
          />
        )}
      </div>
    </div>
  );
};

export default BoxAddress;
