import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import Link from 'next/link';
import styles from './address.module.scss';

export default function Address({ setMaps }) {
  const [selects, setSelects] = useState('HCM');
  const address = [
    {
      id: 'HCM',
      label: 'Trụ sở chính',
      map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31353.692419396757!2d106.721907!3d10.795103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1372288295caf7c7!2sC%C3%B4ng%20vi%C3%AAn%20Vinhomes%20Central%20Park!5e0!3m2!1svi!2sus!4v1649321658815!5m2!1svi!2sus',
      data: [
        {
          title: [
            '165 đại lộ 3,',
            'Phường Phước Bình,',
            'Quận 9,',
            'Thành phố Hồ Chí Minh.',
          ],
          phone: '(84) 393 939 393',
          fax: '4000440174',
        },
      ],
    },
    {
      id: 'DN',
      label: 'Văn phòng đại diện tại Đà Nẵng',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.837067686746!2d108.23580131485771!3d16.002751988922046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314211dc8f79cebb%3A0x9c095b5d22ac0295!2zQ8O0bmcgdHkgw4JuIHBow7o!5e1!3m2!1svi!2s!4v1649303507365!5m2!1svi!2s',
      data: [
        {
          title: [
            '28 Phan Bội Châu,',
            'Phường Hòa Thuận,',
            'Thành phố Tam Kỳ,',
            'Tỉnh Quảng Nam.',
          ],
          phone: '(84) 797 797 797',
          fax: '4000440174',
        },
      ],
    },
  ];
  const [ab, setAb] = useState();

  useEffect(() => {
    const result = address.filter((item) => item.id === selects);
    setAb(result);
    setMaps(result[0].map);
  }, [selects]);
  const handleSelects = (e) => {
    setSelects(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className={styles.address}>
      <div className={styles.mrb20}>
        <div className={styles.title_page}>
          <h5>LIÊN HỆ</h5>
        </div>
        <div className={styles.selection}>
          <select onChange={handleSelects}>
            {address &&
              address.map((data, index) => (
                <option key={index} value={data.id}>
                  {data.label}
                </option>
              ))}
          </select>
        </div>
      </div>
      <Grid container spacing={2} style={{ marginBottom: '10px' }}>
        <Grid item xs={12} sm={12} md={6}>
          {ab &&
            ab.map((data, index) => (
              <div className={styles.media} key={index}>
                <div className={styles.media_left}>
                  <img
                    src="https://www.novaland.com.vn/Data/Sites/1/media/Default/bullet.jpg"
                    alt=""
                  />
                </div>
                {ab[index].data &&
                  ab[index].data.map((e, i) => (
                    <div className={styles.media_body} key={i}>
                      {ab[index].data[i].title &&
                        ab[index].data[i].title.map((t, c) => (
                          <div key={c}>
                            {t}
                            <br />
                          </div>
                        ))}
                      <br />
                      <br />
                      ĐT: (84) {e.phone}
                      <br />
                      Fax: {e.fax}
                    </div>
                  ))}
              </div>
            ))}
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
          label="Địa chỉ"
          className={styles.text}
        />
        <TextField
          size="small"
          variant="outlined"
          name="email"
          type="email"
          label="Email"
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
