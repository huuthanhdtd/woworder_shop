import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Container, Grid } from '@material-ui/core';

function FooterTop() {
  const footerList = [
    {
      title: 'Giới thiệu',
      list: [
        'Giới thiệu chung',
        'Tầm nhìn - Sứ mệnh',
        'Giá trị cốt lõi',
        'Lịch sử phát triển',
        'Ban ãnh đạo',
        'Giải thưởng',
        'Bộ quy tắc ứng sử',
      ],
    },

    {
      title: 'Dự án',
      list: ['Bất động sản Đô thị', 'Bất động sản Đô thị Du lịch'],
    },
    {},
    {
      title: 'Tin tức',
      list: [
        'Thông tin thị trường',
        'Thông tin Novaland',
        'Thông tin báo chí',
        'Video',
      ],
    },
    {
      title: 'Phát triển bền vững',
      list: [
        'Hội đồng phát triển bền vững',
        'Quản trị Tập đoàn',
        'Quản trị nguồn nhân lực',
        'Quản trị thương hiệu Novaland',
        'Môi trường',
        'Hoạt động Cộng đồng',
      ],
    },
    {
      title: 'Tuyển dụng',
    },
  ];
  return (
    <Container maxWidth="lg" className={styles.all}>
      <div className={styles.footerTop}>
        {footerList.map((footerItem, index) => (
          <Grid
            className={styles.footerNovalandItem}
            item
            xs={6}
            sm={4}
            lg={2}
            key={index}
          >
            {footerItem.title && <h2>{footerItem.title}</h2>}
            {footerItem.list &&
              footerList[index].list.map((item, i) => (
                <a key={i} href="#">
                  {item}
                </a>
              ))}
          </Grid>
        ))}
      </div>
      <p>
        Lưu ý: Hình ảnh mang tính minh họa. Mọi thông tin trẻn website này đúng
        tại thời điểm phát hành và có thể được điều chỉnh mà không cần báo
        trước.
      </p>
    </Container>
  );
}

export default FooterTop;
