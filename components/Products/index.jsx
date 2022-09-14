import { Button, Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { useCallback } from 'react';
import { orderButton } from '../../constants/commonData';
import CardProduct from '../CardProduct';
import styles from './styles.module.scss';
import SelectList from '../DropDown/DropDown';
const Products = () => {
  const [isOrder, setOrder] = React.useState(null);

  const handleOrder = useCallback((type) => {
    setOrder(type.name);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.boxOrder}>
        <Typography variant="h6">Sắp xếp theo</Typography>
        {orderButton.map((it, idx) => (
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
      <Grid container>
        {Array.from({ length: 20 }).map((it, idx) => (
          <Grid key={idx} item lg={3} className={styles.card}>
            <CardProduct />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
