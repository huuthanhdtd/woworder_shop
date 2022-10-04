import { Grid } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import { checkIfAIsInB, ConvertViToEn } from '../../lib';
import CardProduct from '../CardProduct';
import styles from './styles.module.scss';
import data from '../../constants/database.json';

export default function PageSearch() {
  //   console.log(data);
  const router = useRouter();
  const filteredservice = data.items?.filter((i) => {
    return router.query.searchTerm.length === 0
      ? false
      : checkIfAIsInB(
          ConvertViToEn(router.query.searchTerm),
          ConvertViToEn(i.name)
        );
  });
  console.log('filteredservice', filteredservice.length);
  return (
    <div className={styles.PageSearch}>
      <div className={styles.heading_Page}>
        <h1>Tìm kiếm</h1>
        <p>
          Có <strong>{filteredservice.length} sản phẩm</strong> cho tìm kiếm
        </p>
      </div>
      <div className={styles.content_page}>
        {filteredservice.length > 0 ? (
          <p className={styles.subtext_result}>
            Kết quả tìm kiếm cho <strong>"{router.query.searchTerm}"</strong>
          </p>
        ) : (
          <div className={styles.err}>
            <h2>Không tìm thấy nội dung bạn yêu cầu</h2>
            <span>Không tìm thấy kết quả.</span>
            <span>Vui lòng sử dụng các từ tổng quát hơn và thử lại!</span>
          </div>
        )}
        <Grid container className={styles.Search_Product}>
          {filteredservice.map((data) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              key={data.id}
              className={styles.item}
            >
              <CardProduct data={data} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
