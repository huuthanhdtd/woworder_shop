import { Button, debounce, Grid, TextField } from '@material-ui/core';
import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';
import styles from './styles.module.scss';
import { BsArrowReturnRight, BsSearch } from 'react-icons/bs';
import clsx from 'clsx';
import { checkIfAIsInB, ConvertViToEn } from '../../../lib';

export default function CheckWed({}) {
  const checks = [
    { name: 'ADIDAS', slug: 'ADIDAS' },
    { name: 'AMAZON', slug: 'AMAZON' },
    { name: 'ASOS', slug: 'ASOS' },
    { name: 'BALENCIAGA', slug: 'balenciaga' },
    { name: 'CONVERSE', slug: 'CONVERSE' },
    { name: 'HM', slug: 'HM' },
    { name: 'PUMA', slug: 'puma' },
    { name: 'ZUNE', slug: 'zune' },
    { name: 'NIKE', slug: 'nike' },
    { name: 'GUCCI', slug: 'gucci' },
    { name: 'CHANEL', slug: 'chanel' },
    { name: 'LOUIS VUITTON.', slug: 'lv' },
    { name: 'DIOR', slug: 'dior' },
    { name: 'HERMÈS', slug: 'hermes' },
    { name: 'DOLCE & GABBANA', slug: 'd&g' },
    { name: 'VERSACE', slug: 'versace' },
    { name: 'PRADA', slug: 'prada' },
    { name: 'BURBERRY', slug: 'burnerry' },
    { name: 'ARMANI', slug: 'armani' },
    { name: 'RALPH LAUREN', slug: 'ralphlauren' },
    { name: 'GIVENCHY', slug: 'givenchy' },
    { name: 'Rolex ', slug: 'rolex' },
    { name: 'Tom Ford', slug: 'tomford' },
  ];
  const [checked, setChecked] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const handleChangeTwo = (isChecked, slug) => {
    const index = checked.indexOf(slug);
    if (isChecked) return setChecked((state) => [...state, slug]);
    if (!isChecked && index > -1)
      return setChecked((state) => {
        state.splice(index, 1);
        return JSON.parse(JSON.stringify(state));
      });
  };
  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }
  useEffect(() => {
    // const rs = checks.reduce((prev, cur) => {
    //   return prev.find((it) => it.name.slice(0, 1) === cur.name.slice(0, 1))
    //     ? prev
    //     : [...prev, cur];
    // }, []);
    // setAlphabet(rs);
  }, [loadMore]);
  const handleMore = () => {
    if (loadMore == false) {
      setLoadMore(true);
    } else {
      setLoadMore(false);
    }
  };
  return (
    <div className={styles.checks}>
      <h2> Website</h2>
      <div className={styles.FormControl}>
        {checked &&
          checks.slice(0, 7).map((data, index) => (
            <div key={index} className={styles.checked}>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  onChange={(event) =>
                    handleChangeTwo(event.target.checked, data.slug)
                  }
                  className={styles.inputCheck}
                  checked={checked.includes(data.slug)}
                />
                {data.name}
              </label>
            </div>
          ))}

        {checks.length > 7 ? (
          <div className={styles.loadMore}>
            <div className={styles.icons} onClick={handleMore}>
              xem thêm <BsArrowReturnRight />
            </div>
            <div
              className={clsx(styles.backgroundModal, {
                [styles.active]: loadMore == true,
              })}
              onClick={handleMore}
            ></div>
            <div
              className={clsx(styles.show, {
                [styles.active]: loadMore == true,
              })}
            >
              <div className={styles.searchTitle}>
                <div className={styles.title}>Website</div>
                <div className={styles.search}>
                  <TextField
                    type="text"
                    size="small"
                    variant="outlined"
                    placeholder="nhập website cần tìm"
                    className={styles.inputSearch}
                    onChange={debounce(handleSearchTermChange, 250)}
                  />
                  <div className={styles.iconsInput}>
                    <BsSearch />
                  </div>
                </div>
              </div>
              <div className={styles.CheckTitle}>
                <Grid container className={styles.GridCheckPosition}>
                  {checked &&
                    checks
                      .filter((item) => {
                        return searchTerm.length === 0
                          ? true
                          : checkIfAIsInB(
                              ConvertViToEn(searchTerm),
                              ConvertViToEn(item.name)
                            );
                      })
                      .map((data, index) => (
                        <Grid
                          item
                          xs={6}
                          sm={6}
                          md={3}
                          key={index}
                          className={styles.itemMore}
                        >
                          <label className={styles.label}>
                            <input
                              type="checkbox"
                              onChange={(event) =>
                                handleChangeTwo(event.target.checked, data.slug)
                              }
                              checked={checked.includes(data.slug)}
                              className={styles.inputCheck}
                            />
                            {data.name}
                          </label>
                        </Grid>
                      ))}
                </Grid>
              </div>
              <div className={styles.confirmTitle}>
                <Button onClick={handleMore}>Đóng</Button>
              </div>
              <div></div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
