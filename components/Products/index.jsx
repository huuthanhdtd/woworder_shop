import { Grid } from '@material-ui/core';
import React from 'react';
import CardProduct from '../CardProduct';

const Products = () => {
  return (
    <Grid container>
      {Array.from({ length: 20 }).map((it, idx) => (
        <Grid key={idx} item lg={3}>
          <CardProduct />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
