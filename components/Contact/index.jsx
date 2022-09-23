import { Grid } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Map from './map';
import styles from './styles.module.scss';
import { MdLocationOn } from 'react-icons/md';
import { FiMail, FiSmartphone } from 'react-icons/fi';
import { BiTimeFive } from 'react-icons/bi';

export default function Contact() {
  const contact = [
    {
      name: 'Địa chỉ',
      icons: <MdLocationOn />,
      desc: '92 đường Nguyễn Du, phường Thạch Thang, quận Hải Châu, Thành phố Đà Nẵng',
    },
    { name: 'Email', icons: <FiMail />, desc: 'happymommy.com.vn@gmail.com' },
    { name: 'Điện thoại', icons: <FiSmartphone />, desc: '0703256868' },
    {
      name: 'Thời gian làm việc',
      icons: <BiTimeFive />,
      desc: 'Thứ 2 đến Chủ nhật từ 7h30 đến 20h30',
    },
  ];
  return (
    <div className={styles.contact}>
      <div className={styles.breadcrumb_shop}>
        <Link href="/"> Trang chủ</Link> / Liên hệ
      </div>
      <Map />
      <Grid container className={styles.Grid_Contact}>
        <Grid item xs={12} sm={6} md={6} className={styles.Grid_itemContact}>
          <h2>Thông tin liên hệ</h2>
          {contact?.map((data, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.illustration}>{data.icons}</div>
              <div className={styles.desc}>
                <strong>{data.name}</strong>
                <br></br>
                {data.desc}
              </div>
            </div>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={styles.formContact}>
          <h2>Gửi thắc mắc cho chúng tôi</h2>
          <p>
            Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng
            tôi sẽ liên lạc lại với bạn sớm nhất có thể .
          </p>
          <div className={styles.formInput}>
            <input
              type="text"
              placeholder="Tên của bạn"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Email của bạn"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="số điện thoại"
              className={styles.input}
            />
            <textarea
              type="text"
              placeholder="Nội dung"
              className={styles.contentInput}
            ></textarea>
          </div>
          <button>Gửi cho chúng tôi</button>
        </Grid>
      </Grid>
    </div>
  );
}
