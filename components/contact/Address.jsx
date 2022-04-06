import { Button, Grid, TextField } from '@material-ui/core';
import Link from 'next/link';
import styles from './address.module.scss';
import React from 'react';

export default function Address() {
  return (
    <div className={styles.address}>
      <div className={styles.mrb20}>
        <div className={styles.title_page}>
          <h5>LIÊN HỆ</h5>
        </div>
        <div className={styles.selection}>
          <select name="" id="">
            <option value="">TP HCM</option>
            <option value="">TP ĐN</option>
          </select>
        </div>
      </div>
      <Grid container spacing={2} style={{ marginBottom: '10px' }}>
        <Grid item xs={12} sm={12} md={6}>
          <div className={styles.media}>
            <div className={styles.media_left}>
              <img
                src="https://www.novaland.com.vn/Data/Sites/1/media/Default/bullet.jpg"
                alt=""
              />
            </div>
            <div className={styles.media_body}>
              Tòa nhà văn phòng Novaland,
              <br></br>
              152 Điện Biên Phủ, P.25,
              <br></br>
              Q.Bình Thạnh, TP.HCM
              <br></br>
              <br></br>
              ĐT: (84) 906 35 38 38
              <br></br>
              Fax: (028) 377 52 999
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className={styles.mrb15}>
            <div className={styles.cskh}>
              <div className={styles.liststyle}>
                <img
                  src="https://www.novaland.com.vn/Data/Sites/1/media/Default/bullet.jpg"
                  alt=""
                />
              </div>
              <div className={styles.phone}>
                Tổng đài CSKH:
                <Link href={'tel:1900 63 6666'}>1900 63 6666</Link>
              </div>
            </div>
            <div className={styles.cskh}>
              <div className={styles.liststyle}>
                <img
                  src="https://www.novaland.com.vn/Data/Sites/1/media/Default/bullet.jpg"
                  alt=""
                />
              </div>
              <div className={styles.phone}>
                Thời gian làm việc: 7:00 - 22:00 (Hàng ngày, cả Thứ Bảy & CN)
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={styles.mail}>
        <h2>Mọi thắc mắc, ý kiến đóng góp xin vui lòng gửi về email:</h2>
        <TextField
          size="small"
          variant="outlined"
          name="name"
          type="text"
          label="Họ và tên"
          className={styles.text}
        />
        <TextField
          size="small"
          variant="outlined"
          name="phone"
          type="number"
          label="Điện thoại"
          className={styles.textb}
        />
        <TextField
          size="small"
          variant="outlined"
          name="address"
          type="text"
          label="địa chỉ"
          className={styles.text}
        />
        <TextField
          size="small"
          variant="outlined"
          name="email"
          type="email"
          label="email"
          className={styles.textb}
        />
        <TextField
          variant="outlined"
          name="desc"
          type="text"
          multiline
          rows={4}
          label="Nội Dung"
          className={styles.texta}
        />
        <Button>GỬI ĐI</Button>
      </div>
    </div>
  );
}
