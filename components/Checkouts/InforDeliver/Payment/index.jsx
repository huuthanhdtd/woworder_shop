import { Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import styles from './styles.module.scss';
import COD from '../../../../assets/image/cod.svg';
import BANK from '../../../../assets/image/bank.svg';

const Payments = ({ handlePayment, payment, setAllInforDeliver }) => {
  const handleSelectPayment = (value) => {
    handlePayment(value);
    setAllInforDeliver((prev) => {
      return { ...prev, payment: value };
    });
  };
  return (
    <div className={clsx(styles.border, styles.payment)}>
      <Button
        className={clsx(styles.text, styles.btnPayment)}
        onClick={() => handleSelectPayment('cash')}
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
            Cảm ơn bạn đã lựa chọn mua sắm tại Happy Mommy, <br /> Nhân viên của
            chúng tôi sẽ sớm liên lạc với bạn qua điện thoại để
            <br /> XÁC NHẬN ĐƠN HÀNG <br /> trước khi giao hàng!
          </Typography>
        </div>
      )}
      <Button
        className={clsx(styles.text, styles.btnPayment, {
          [styles.bottomBorder]: payment === 'bank',
        })}
        onClick={() => handleSelectPayment('bank')}
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
            Cảm ơn bạn đã lựa chọn mua sắm tại Happy Mommy. Bạn vui lòng chuyển
            khoản số tiền qua:
            <br />
            Ngân hàng: Vietinbank <br />
            STK: 1078 7579 2651 - Dương Thị Quỳnh Giao <br />
            Nhân viên của chúng tôi sẽ sớm liên lạc với bạn qua điện thoại để
            <br />
            XÁC NHẬN ĐƠN HÀNG.
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Payments;
