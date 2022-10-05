import { Grid, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {
  checkIfAIsInB,
  ConvertViToEn,
  getScoreByNumberOfPosition,
} from '../../lib';
import CardProduct from '../CardProduct';
import styles from './styles.module.scss';
import data from '../../constants/database.json';
import { AiOutlineSearch } from 'react-icons/ai';
import { Pagination } from '@material-ui/lab';

export default function PageSearch() {
  const perPage = 12;
  const [search, setSearch] = useState('');
  const [temporary, setTemporary] = useState('');
  const [page, setPage] = useState(1);
  const handleTemporary = () => {
    localStorage.setItem('search', JSON.stringify(temporary));
  };
  useEffect(() => {
    const see = JSON.parse(localStorage.getItem('search'));
    setSearch(see);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page]);
  const handlePageChange = (e, value) => {
    setPage(value);
  };
  const dataSortedByScore = data.items
    ?.sort(
      (a, b) =>
        getScoreByNumberOfPosition(
          ConvertViToEn(search),
          ConvertViToEn(b.name)
        ) -
        getScoreByNumberOfPosition(ConvertViToEn(search), ConvertViToEn(a.name))
    )
    .filter((i) => {
      return search == ''
        ? false
        : checkIfAIsInB(ConvertViToEn(search), ConvertViToEn(i.name));
    });
  return (
    <div className={styles.PageSearch}>
      <div className={styles.heading_Page}>
        <h1>Tìm kiếm</h1>
        <p>
          Có <strong>{dataSortedByScore.length} sản phẩm</strong> cho tìm kiếm
        </p>
      </div>
      <div className={styles.content_page}>
        {dataSortedByScore.length > 0 ? (
          <p className={styles.subtext_result}>
            Kết quả tìm kiếm cho <strong>"{search}"</strong>
          </p>
        ) : (
          <div className={styles.err}>
            <h2>Không tìm thấy nội dung bạn yêu cầu</h2>
            <span>
              Không tìm thấy kết quả{' '}
              <span style={{ color: '#000', fontWeight: '700' }}>
                "{search}"
              </span>
              .
            </span>
            <span> Vui lòng sử dụng các từ tổng quát hơn và thử lại!</span>
            <form className={styles.Forminput}>
              <input
                placeholder="Nhập url/mã/tên sản phẩm để tìm..."
                value={temporary || ''}
                type="text"
                className={styles.input}
                onChange={(e) => setTemporary(e.target.value)}
              />
              <button
                type="submit"
                className={styles.iconsearch}
                onClick={handleTemporary}
              >
                <AiOutlineSearch />
              </button>
            </form>
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
          <Pagination
            count={Math.ceil(dataSortedByScore.length / perPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
            shape="rounded"
          />
        </div>
      </div>
    </div>
  );
}
