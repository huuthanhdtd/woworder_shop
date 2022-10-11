import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import data from '../../../constants/testdata.json';
import { ConvertViToEn, getScoreByNumberOfPosition } from '../../../lib';
import styles from './styles.module.scss';

export default function Suggestions({ searchTerm, handleSearch, suggestions }) {
  const router = useRouter();
  useEffect(() => {
    const dataHis = JSON.parse(localStorage?.getItem('searchHistory'));
    // console.log(dataHis);
  }, []);
  const dataSortedByScore = data.items
    ?.sort(
      (a, b) =>
        getScoreByNumberOfPosition(
          ConvertViToEn(router.query.searchTerm || '' || searchTerm),
          ConvertViToEn(b.name),
          'number'
        ) -
        getScoreByNumberOfPosition(
          ConvertViToEn(router.query.searchTerm || '' || searchTerm),
          ConvertViToEn(a.name),
          'number'
        )
    )
    .filter((i) => {
      return searchTerm == ''
        ? false
        : getScoreByNumberOfPosition(
            ConvertViToEn(router.query.searchTerm || '' || searchTerm),
            ConvertViToEn(i.name),
            'boolean'
          );
    });
  const history = () => {
    router.push({
      pathname: '/page-search',
      query: { searchTerm: 'li su tim kiem' },
    });
  };
  return (
    <>
      <div
        className={clsx(styles.suggestions, {
          [styles.active]: suggestions == true,
        })}
      >
        {searchTerm.length > 0 ? (
          <>
            {dataSortedByScore.length > 0 ? (
              <>
                {dataSortedByScore.slice(0, 5).map((data, index) => (
                  <div className={styles.item} key={index}>
                    <Link href={`/product/${data.id}`}>
                      <div className={styles.nameAndPrice}>
                        <div className={styles.name}>{data.name}</div>
                        <div className={styles.name}>{data.sellPrice}</div>
                      </div>
                    </Link>
                    <Link href={`/product/${data.id}`}>
                      <div className={styles.image}>
                        <img src={data.imageUrl} />
                      </div>
                    </Link>
                  </div>
                ))}
                <div className={styles.more} onClick={handleSearch}>
                  xem thêm {dataSortedByScore.length} sản phẩm
                </div>
              </>
            ) : (
              <div className={styles.none}>Không có sản phẩm nào ...</div>
            )}
          </>
        ) : (
          <div className={styles.history}>
            <h5> Lịch sử tìm kiếm :</h5>
            <span onClick={history}>Lịch sử tìm kiếm</span>
            <span>Lịch sử tìm kiếm</span>
            <span>Lịch sử tìm kiếm</span>
            <span>Lịch sử tìm kiếm</span>
          </div>
        )}
      </div>
    </>
  );
}
