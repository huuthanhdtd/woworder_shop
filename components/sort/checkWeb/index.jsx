import { Button, Checkbox, FormControlLabel } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './styles.module.scss';
import { BiChevronsDown, BiChevronsUp } from 'react-icons/bi';

export default function CheckWed({}) {
  const checks = [
    { name: '1688', slug: '1688' },
    { name: 'ADIDAS', slug: 'ADIDAS' },
    { name: 'AMAZON', slug: 'AMAZON' },
    { name: 'ASOS', slug: 'ASOS' },
    { name: 'CONVERSE', slug: 'CONVERSE' },
    { name: 'HM', slug: 'HM' },
    { name: 'PUMA', slug: 'puma' },
    { name: 'ZUNE', slug: 'zune' },
    { name: 'BALENCIAGA', slug: 'balenciaga' },
    { name: 'NIKE', slug: 'nike' },
    { name: 'GUCCI', slug: 'gucci' },
  ];
  const [checked, setChecked] = useState([]);
  const [loadMore, setLoadMore] = useState(7);
  const handleChangeTwo = (isChecked, slug) => {
    const index = checked.indexOf(slug);
    if (isChecked) return setChecked((state) => [...state, slug]);
    if (!isChecked && index > -1)
      return setChecked((state) => {
        state.splice(index, 1);
        return JSON.parse(JSON.stringify(state));
      });
  };
  useEffect(() => {}, [loadMore]);
  const handleMore = () => {
    if (loadMore === 7) {
      setLoadMore(checks.length);
    } else {
      setLoadMore(7);
    }
  };

  return (
    <div className={styles.checks}>
      <h2> Quốc gia</h2>
      <div className={styles.FormControl}>
        {checked &&
          checks.slice(0, loadMore).map((data, index) => (
            <div key={index} className={styles.checked}>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  onChange={(event) =>
                    handleChangeTwo(event.target.checked, data.slug)
                  }
                  className={styles.inputCheck}
                />
                {data.name}
              </label>
            </div>
          ))}
        {checks.length > 7 ? (
          <div className={styles.loadMore} onClick={handleMore}>
            {loadMore === 7 ? (
              <>
                xem thêm <BiChevronsDown />
              </>
            ) : (
              <>
                ẩn bớt <BiChevronsUp />
              </>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
