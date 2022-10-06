import { Grid } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Map from './map';
import styles from './styles.module.scss';
import { MdLocationOn } from 'react-icons/md';
import { FiMail, FiSmartphone } from 'react-icons/fi';
import { BiTimeFive } from 'react-icons/bi';
import { useRouter } from 'next/router';

export default function Contact() {
  const [validationMsg, setValidationMsg] = useState({});
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    phone: '',
    note: '',
  });
  const { name, email, phone, note } = formValue;
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const validatorAll = () => {
    const msg = {};
    if (name.length <= 0) {
      msg.name = 'vui lòng nhập tên của bạn';
    }
    if (email.length <= 0) {
      msg.email = 'vui lòng nhập email của bạn';
    }
    if (phone.length <= 0) {
      msg.phone = 'vui lòng nhập số điện thoại của bạn';
    }
    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const handleSubmit = () => {
    const errmsg = validatorAll();
    if (!errmsg) return;
  };
  const contact = [
    {
      name: 'Địa chỉ',
      icons: <MdLocationOn />,
      desc: '92 đường Nguyễn Du, phường Thạch Thang, quận Hải Châu, Thành phố Đà Nẵng',
    },
    { name: 'Email', icons: <FiMail />, desc: 'khanhbui.com.vn@gmail.com' },
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
            <div
              className={styles.inputContact}
              style={{
                marginBottom: `${validationMsg.name ? '0' : '20px'}`,
              }}
            >
              <input
                name="name"
                value={name || ''}
                type="text"
                placeholder="Tên của bạn"
                className={styles.input}
                onChange={handleOnChange}
              />
              <div className={styles.err}>{validationMsg.name}</div>
            </div>
            <div
              className={styles.inputContact}
              style={{
                marginBottom: `${validationMsg.email ? '0' : '10px'}`,
              }}
            >
              <input
                name="email"
                value={email || ''}
                type="text"
                placeholder="Email của bạn"
                className={styles.input}
                onChange={handleOnChange}
              />
              <div className={styles.err}>{validationMsg.email}</div>
            </div>
            <div
              className={styles.inputContact}
              style={{
                marginBottom: `${validationMsg.phone ? '0' : '10px'}`,
              }}
            >
              <input
                name="phone"
                value={phone || ''}
                type="text"
                placeholder="số điện thoại"
                className={styles.input}
                onChange={handleOnChange}
              />
              <div className={styles.err}>{validationMsg.phone}</div>
            </div>
            <textarea
              name="note"
              value={note || ''}
              type="text"
              placeholder="Nội dung"
              className={styles.contentInput}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button onClick={handleSubmit}>Gửi cho chúng tôi</button>
        </Grid>
      </Grid>
    </div>
  );
}
