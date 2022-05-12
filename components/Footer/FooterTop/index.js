import React, { useContext, useEffect, useMemo, useState } from 'react';
import styles from './styles.module.scss';
import { Container, Grid } from '@material-ui/core';
import { Context } from '../../../constants/Context';
import { useRouter } from 'next/router';

function FooterTop({ navs }) {
  const router = useRouter();
  const { handleClickMenuIntroduce, setIsPushIntro, isPushIntro } =
    useContext(Context);
  const handleClickMenuFooter = (idNav, link, type) => {
    handleClickMenuIntroduce(idNav, link, type);
    if (isPushIntro === false && link === '/gioi-thieu') {
      router.push('/gioi-thieu');
      setIsPushIntro(true);
    }
  };
  return (
    <Container maxWidth="lg" className={styles.all}>
      <div className={styles.footerTop}>
        {navs &&
          navs.map((item, index) => (
            <Grid
              className={styles.footerNovalandItem}
              item
              xs={6}
              sm={4}
              lg={2}
              key={index}
            >
              {item.title && (
                <h2>{`${item.title[0].toUpperCase()}${item.title.slice(
                  1
                )}`}</h2>
              )}
              {item.list &&
                navs[index].list.map((it, i) => (
                  <h6
                    key={i}
                    onClick={() =>
                      handleClickMenuFooter(it.idNav, it.link, it.type)
                    }
                  >
                    {`${it.title[0].toUpperCase()}${it.title.slice(1)}`}
                  </h6>
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
