import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import data from '../../../constants/database.json';
import { ConvertViToEn, getScoreByNumberOfPosition } from '../../../lib';
import styles from './styles.module.scss';

export default function Suggestions({ searchTerm, handleSearch, suggestions }) {
  const [search, setSearch] = useState('');
  const dataSortedByScore = data.items
    ?.sort(
      (a, b) =>
        getScoreByNumberOfPosition(
          ConvertViToEn(searchTerm || search),
          ConvertViToEn(b.name),
          'number'
        ) -
        getScoreByNumberOfPosition(
          ConvertViToEn(searchTerm || search),
          ConvertViToEn(a.name),
          'number'
        )
    )
    .filter((i) => {
      return searchTerm == ''
        ? false
        : getScoreByNumberOfPosition(
            ConvertViToEn(searchTerm || search),
            ConvertViToEn(i.name),
            'boolean'
          );
    });

  useEffect(() => {
    const see = JSON.parse(localStorage.getItem('search'));
    setSearch(see);
  }, []);
  return (
    <>
      {searchTerm.length > 0 ? (
        <div
          className={clsx(styles.suggestions, {
            [styles.active]: suggestions == true,
          })}
        >
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
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
