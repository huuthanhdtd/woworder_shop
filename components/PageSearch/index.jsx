import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { ConvertViToEn, getScoreByNumberOfPosition } from '../../lib';
import CardProduct from '../CardProduct';
import styles from './styles.module.scss';
import { Pagination } from '@material-ui/lab';
import data from '../../constants/testdata.json';
import { useRouter } from 'next/router';
import axios from 'axios';
import Loading from '../Loading';

export default function PageSearch() {
  const router = useRouter();
  const perPage = 10;
  const [page, setPage] = useState(1);
  const [loadinged, setLoadinged] = useState(true);
  const [dataSearch, setDataSearch] = useState([]);

  useEffect(() => {
    const scrolltotop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    scrolltotop();
    if (!router.isReady) return;
    axios
      .get(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stores/search?limit=${perPage}&page=${page}&brandIds=&query=${router.query.query}`
      )
      .then((res) => setDataSearch(res.data), setLoadinged(false));
  }, [router.query.query, page]);
  const handlePageChange = (e, value) => {
    setPage(value);
  };

  // const dataSortedByScore = data.items
  //   ?.sort(
  //     (a, b) =>
  //       getScoreByNumberOfPosition(
  //         ConvertViToEn(router.query.query || ''),
  //         ConvertViToEn(b.name),
  //         'number'
  //       ) -
  //       getScoreByNumberOfPosition(
  //         ConvertViToEn(router.query.query || ''),
  //         ConvertViToEn(a.name),
  //         'number'
  //       )
  //   )
  //   .filter((i) => {
  //     return router.query.query == ''
  //       ? false
  //       : getScoreByNumberOfPosition(
  //           ConvertViToEn(router.query.query || ''),
  //           ConvertViToEn(i.name),
  //           'boolean'
  //         );
  //   })
  //   .slice(0, 120);
  return loadinged ? (
    <Loading />
  ) : (
    <div className={styles.PageSearch} id="Page_search">
      <div className={styles.heading_Page}>
        <h1>Tìm kiếm</h1>
        <p>
          Có{' '}
          <strong style={{ color: '#000' }}>
            {dataSearch?.included?.totalResult}
            sản phẩm
          </strong>{' '}
          cho tìm kiếm
        </p>
      </div>
      <div className={styles.content_page}>
        {dataSearch?.included?.totalResult > 0 ? (
          <p className={styles.subtext_result}>
            Kết quả tìm kiếm cho <strong>"{router.query.query}"</strong>
          </p>
        ) : (
          <div className={styles.err}>
            <h2>Không tìm thấy nội dung bạn yêu cầu</h2>
            <span>
              Không tìm thấy kết quả
              <span style={{ color: '#000', fontWeight: '700' }}>
                "{router.query.query}"
              </span>
              .
            </span>
            <span> Vui lòng sử dụng các từ tổng quát hơn và thử lại!</span>
          </div>
        )}
        <Grid container className={styles.Search_Product}>
          {dataSearch.items
            // .slice((page - 1) * perPage, page * perPage)
            ?.map((data) => (
              <Grid item xs={6} sm={4} md key={data.id} className={styles.item}>
                <CardProduct data={data} />
              </Grid>
            ))}
        </Grid>
        <div className={styles.Pagination}>
          {dataSearch?.included?.totalResult > 0 ? (
            <Pagination
              count={Math.ceil(dataSearch?.included?.totalResult / perPage)}
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
