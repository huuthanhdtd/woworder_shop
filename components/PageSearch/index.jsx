import { debounce, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { ConvertViToEn, getScoreByNumberOfPosition } from '../../lib';
import CardProduct from '../CardProduct';
import styles from './styles.module.scss';
import { Pagination } from '@material-ui/lab';
import data from '../../constants/testdata.json';
import { useRouter } from 'next/router';
import Loading from '../Loading';

export default function PageSearch() {
  const router = useRouter();
  const perPage = 12;
  const [page, setPage] = useState(1);
  const [loadinged, setLoadinged] = useState(true);
  useEffect(() => {
    if (dataSortedByScore) {
      setLoadinged(false);
    }
  }, [router.query.searchTerm]);
  const handlePageChange = (e, value) => {
    setPage(value);
  };
  const dataSortedByScore = data.items
    ?.sort(
      (a, b) =>
        getScoreByNumberOfPosition(
          ConvertViToEn(router.query.searchTerm || ''),
          ConvertViToEn(b.name),
          'number'
        ) -
        getScoreByNumberOfPosition(
          ConvertViToEn(router.query.searchTerm || ''),
          ConvertViToEn(a.name),
          'number'
        )
    )
    .filter((i) => {
      return router.query.searchTerm == ''
        ? false
        : getScoreByNumberOfPosition(
            ConvertViToEn(router.query.searchTerm || ''),
            ConvertViToEn(i.name),
            'boolean'
          );
    })
    .slice(0, 120);
  return loadinged ? (
    <Loading />
  ) : (
    <div className={styles.PageSearch}>
      <div className={styles.heading_Page}>
        <h1>Tìm kiếm</h1>
        <p>
          Có{' '}
          <strong style={{ color: '#000' }}>
            {dataSortedByScore.length} sản phẩm
          </strong>{' '}
          cho tìm kiếm
        </p>
      </div>
      <div className={styles.content_page}>
        {dataSortedByScore.length > 0 ? (
          <p className={styles.subtext_result}>
            Kết quả tìm kiếm cho <strong>"{router.query.searchTerm}"</strong>
          </p>
        ) : (
          <div className={styles.err}>
            <h2>Không tìm thấy nội dung bạn yêu cầu</h2>
            <span>
              Không tìm thấy kết quả
              <span style={{ color: '#000', fontWeight: '700' }}>
                "{router.query.searchTerm}"
              </span>
              .
            </span>
            <span> Vui lòng sử dụng các từ tổng quát hơn và thử lại!</span>
          </div>
        )}
        <Grid container className={styles.Search_Product}>
          {dataSortedByScore
            .slice((page - 1) * perPage, page * perPage)
            .map((data) => (
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
        <div className={styles.Pagination}>
          {dataSortedByScore.length > 0 ? (
            <Pagination
              count={Math.ceil(dataSortedByScore.length / perPage)}
              page={page}
              onChange={handlePageChange}
              color="primary"
              shape="rounded"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
