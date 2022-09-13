import { Typography } from '@material-ui/core';
import React from 'react';
import styles from './contactStyles.module.scss';
import Link from 'next/link';
import { footerData } from '../../constants/commonData';

const Contact = () => {
  const data = footerData.contactData;
  return (
    <div className={styles.contact}>
      <Typography variant="h4">{data.contact}</Typography>
      <Typography variant="h6">Địa chỉ:</Typography>
      <Typography variant="body2">{data.address}</Typography>
      <Typography variant="h6">Page:</Typography>
      <Link href={data.page} variant="body2">
        {data.page}
      </Link>
      <Typography variant="h6">Facebook</Typography>
      <Link href={data.facebook} variant="body2">
        {data.facebook}
      </Link>
      <Typography variant="h6">Hotline, zalo, viber</Typography>
      <Typography variant="body2">{data.hotline}</Typography>
    </div>
  );
};

export default Contact;
