import { Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Paginate from '../Pagination';
import Products from './Products';
import Checked from '../Sort';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import SortBarMobile from '../SortBarMobile';
import Link from 'next/link';

const CategoriesPage = ({ products, category }) => {
  const [checked, setChecked] = useState([]);
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(8);
  const router = useRouter();
  /* formPrice value */
  const [formPrice, setFormPrice] = useState({ priceFirst: '', priceLast: '' });
  const { priceFirst, priceLast } = formPrice;
  /* */
  const [filters, setFilters] = React.useState({
    webs: [],
    inOrder: null,
    prices: { priceFirst: '', priceLast: '' },
  });
  const [sortPriceType, setSortPriceType] = React.useState(filters.inOrder);
  const [open, setOpen] = React.useState(false);
  const filteredProducts = React.useMemo(() => {
    return products?.filter((item) => {
      const check = checked.length ? checked.includes(item.data.slug) : true;

      const checkPrice = !priceFirst && !priceLast;

      if (checkPrice) {
        return check;
      } else {
        let priceToNum = Number(item.sellPrice);
        if (check && priceToNum >= priceFirst && priceToNum <= priceLast) {
          return true;
        } else {
          return false;
        }
      }
    });
  }, [products, formPrice, sortPriceType]);

  React.useEffect(() => {
    setPage(1);
  }, [products]);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div className={styles.wrapper}>
      <SortBarMobile
        setSortPriceType={setSortPriceType}
        open={open}
        setOpen={setOpen}
        filters={filters}
        setFilters={setFilters}
      />
      <Grid container justifyContent="center" className={styles.container}>
        <Grid item lg={11} md={12} sm={12} xs={12} className={styles.tabBar}>
          <Link href={'/'}>Trang chủ</Link>
          <Typography variant="body2">{`/ ${category.name}`}</Typography>
        </Grid>
        <Grid item lg={2} md={2} className={styles.filterBox}>
          <Checked
            setChecked={setChecked}
            checked={checked}
            setPage={setPage}
            formPrice={formPrice}
            setFormPrice={setFormPrice}
          />
        </Grid>
        <Grid
          item
          lg={9}
          md={10}
          sm={12}
          xs={12}
          className={styles.wrapProducts}
        >
          <Products
            filteredProducts={filteredProducts}
            page={page}
            perPage={perPage}
            checked={checked}
            setPage={setPage}
            setChecked={setChecked}
            category={category}
            open={open}
            setOpen={setOpen}
            setSortPriceType={setSortPriceType}
            sortPriceType={sortPriceType}
          />
          <Grid container justifyContent="center" className={styles.pagination}>
            <Grid item>
              <Paginate
                count={Math.ceil(filteredProducts.length / perPage)}
                page={page}
                onChange={handleChange}
                color="primary"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default CategoriesPage;
