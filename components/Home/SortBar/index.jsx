import { Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { orderButton, sortBarHome } from '../../../constants/commonData';
import SelectList from '../../DropDown/DropDown';
import styles from './styles.module.scss';

const SortBar = ({ title }) => {
  const [isOrder, setOrder] = React.useState(null);

  const handleOrder = React.useCallback((type) => {
    setOrder(type.name);
  }, []);
  return (
    <div>
      <div className={styles.boxOrder}>
        <Typography variant="h5">{title}</Typography>
        <div className={styles.orderBtn}>
          <Typography variant="h6">Sắp xếp theo</Typography>
          {sortBarHome.map((it, idx) => (
            <Button
              key={idx}
              className={clsx(styles.button, {
                [styles.active]: isOrder === it.name,
              })}
              onClick={() => handleOrder(it)}
            >
              {it.name}
            </Button>
          ))}
          <SelectList />
        </div>
      </div>
    </div>
  );
};

export default SortBar;
