import { Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

export default function SortWeb({ setFilters, filters, category }) {
  const { webs } = filters;
  const handleChangeTwo = (name, id) => {
    const index = webs.indexOf(id);
    const isExisted = webs.includes(id);
    if (!isExisted)
      return setFilters((state) => ({ ...state, webs: [...webs, id] }));

    if (isExisted)
      return setFilters((state) => {
        state.webs.splice(index, 1);
        return JSON.parse(JSON.stringify(state));
      });
  };
  return (
    <div className={styles.boxWeb}>
      {category?.brands?.length > 0 && (
        <Typography variant="h6">Website</Typography>
      )}
      <div className={styles.selectItems}>
        {category?.brands?.map((data, idx) => (
          <Button
            key={idx}
            onClick={(event) => handleChangeTwo(data.name, data.id)}
            className={clsx(styles.item, {
              [styles.active]: webs.includes(data.id),
            })}
          >
            {data.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
