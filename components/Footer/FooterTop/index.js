import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Container, Grid } from '@material-ui/core';
import navs from '../../../constants/navsBar.json';

function FooterTop() {
  return (
    <Container maxWidth="lg" className={styles.all}>
      <div className={styles.footerTop}>
        {navs.map((item, index) => (
          <Grid
            className={styles.footerNovalandItem}
            item
            xs={6}
            sm={4}
            lg={2}
            key={index}
          >
            {item.title && (
              <h2>{`${item.title[0].toUpperCase()}${item.title.slice(1)}`}</h2>
            )}
            {item.list &&
              navs[index].list.map((it, i) => (
                <a key={i} href="#">
                  {`${it.title[0].toUpperCase()}${it.title.slice(1)}`}
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
