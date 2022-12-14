import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
// import data from '../../../../../constants/testdata.json';
import {
  ConvertViToEn,
  getScoreByNumberOfPosition,
  local,
} from '../../../../../lib';
import styles from './styles.module.scss';
import { BiTimeFive } from 'react-icons/bi';
import axios from 'axios';
import { convertCurrency } from '../../../../../utils/convertCurrency';

export default function Suggestions({
  searchTerm,
  suggestions,
  setSuggestions,
  dataSearch,
}) {
  const router = useRouter();
  const [hisSearch, setHisSearch] = useState();
  useEffect(() => {
    if (!hisSearch || !router.query.query) return;
    local(router.query.query, hisSearch);
  }, [router.query.query]);
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
  // const dataSortedByScore = data.items
  //   ?.sort(
  //     (a, b) =>
  //       getScoreByNumberOfPosition(
  //         ConvertViToEn(router.query.query || '' || searchTerm),
  //         ConvertViToEn(b.name),
  //         'number'
  //       ) -
  //       getScoreByNumberOfPosition(
  //         ConvertViToEn(router.query.query || '' || searchTerm),
  //         ConvertViToEn(a.name),
  //         'number'
  //       )
  //   )
  //   .filter((i) => {
  //     return searchTerm == ''
  //       ? false
  //       : getScoreByNumberOfPosition(
  //           ConvertViToEn(router.query.query || '' || searchTerm),
  //           ConvertViToEn(i.name),
  //           'boolean'
  //         );
  //   });

  const handlemore = () => {
    router.push({
      pathname: '/page-search',
      query: { query: searchTerm },
    });
    setSuggestions(false);
  };
  const history = (data) => {
    router.push({
      pathname: '/page-search',
      query: { query: data },
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
            {dataSearch?.included?.totalResult > 0 ? (
              <>
                {dataSearch?.items.slice(0, 5).map((data, index) => (
                  <div
                    className={styles.item}
                    key={index}
                    onClick={() => setSuggestions(false)}
                  >
                    <Link href={`/product/${data.id}`}>
                      <div className={styles.nameAndPrice}>
                        <div className={styles.name}>{data.name}</div>
                        <div className={styles.name}>
                          {convertCurrency(data.sellPrice)}
                        </div>
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
                  href={`/${router.query.query}`}
                  onClick={handlemore}
                  className={styles.more}
                >
                  xem th??m {dataSearch?.included?.totalResult} s???n ph???m
                </div>
              </>
            ) : (
              <div className={styles.none}>Kh??ng c?? s???n ph???m n??o ...</div>
            )}
          </>
        ) : (
          <div className={styles.history}>
            <h5> L???ch s??? t??m ki???m :</h5>
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
