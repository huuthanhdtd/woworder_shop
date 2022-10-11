import { Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

export default function SortWeb({ setPage, setFilters, filters }) {
  const websites = [
    { name: '1688', slug: '1688' },
    { name: 'ADIDAS', slug: 'ADIDAS' },
    { name: 'AMAZON', slug: 'AMAZON' },
    { name: 'ASOS', slug: 'ASOS' },
    { name: 'CONVERSE', slug: 'CONVERSE' },
    { name: 'HM', slug: 'HM' },
    { name: 'IKEA', slug: 'IKEA' },
  ];
  const { webs } = filters;
  const handleChangeTwo = (name, slug) => {
    const index = webs.indexOf(slug);
    const isExisted = webs.includes(slug);
    // setPage(1);

    if (!isExisted)
      return setFilters((state) => ({ ...state, webs: [...webs, slug] }));

    if (isExisted)
      return setFilters((state) => {
        state.webs.splice(index, 1);
        return JSON.parse(JSON.stringify(state));
      });
  };
  return (
    <div className={styles.boxWeb}>
      <Typography variant="h6">Website</Typography>
      <div className={styles.selectItems}>
        {
          // checked &&
          websites.map((data, idx) => (
            <Button
              key={idx}
              onClick={(event) => handleChangeTwo(data.name, data.slug)}
              className={clsx(styles.item, {
                [styles.active]: webs.includes(data.slug),
              })}
            >
              {data.name}
            </Button>
          ))
        }
      </div>
    </div>
  );
}
