import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import data from '../../../../../constants/testdata.json';
import {
  ConvertViToEn,
  getScoreByNumberOfPosition,
  local,
} from '../../../../../lib';
import styles from './styles.module.scss';
import { BiTimeFive } from 'react-icons/bi';

export default function Suggestions({
  searchTerm,
  suggestions,
  setSuggestions,
}) {
  const router = useRouter();
  const [hisSearch, setHisSearch] = useState();
  useEffect(() => {
    if (!hisSearch || !router.query.searchTerm) return;
    local(router.query.searchTerm, hisSearch);
  }, [router.query.searchTerm]);
  useEffect(() => {
    const dataHis = JSON.parse(localStorage?.getItem('searchHistory'));
    if (dataHis >= 8) {
    }
    let arr = [];
    for (let i = dataHis?.length - 1; i >= 0; i--) {
      arr.push(dataHis[i]);
    }
    setHisSearch(arr);
  }, [suggestions]);
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
  const handlemore = () => {
    router.push({
      pathname: '/page-search',
      query: { searchTerm: searchTerm },
    });
    setSuggestions(false);
  };
  const history = (data) => {
    router.push({
      pathname: '/page-search',
      query: { searchTerm: data },
    });
    setSuggestions(false);
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
                <div
                  href={`/${router.query.searchTerm}`}
                  onClick={handlemore}
                  className={styles.more}
                >
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
            {hisSearch?.map((data, idx) => (
              <ul key={idx}>
                <li onClick={() => history(data)}>
                  <BiTimeFive />
                  <span>{data}</span>
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
