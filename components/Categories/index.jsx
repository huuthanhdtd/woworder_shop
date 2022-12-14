import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Paginate from '../Pagination';
import Products from './Products';
import Checked from '../Sort';
import styles from './styles.module.scss';
import Router, { useRouter } from 'next/router';
import SortBarMobile from '../SortBarMobile';
import Link from 'next/link';

const CategoriesPage = ({ products, category, lastProductRef, limit }) => {
  const { query } = useRouter();
  /* Filter website */
  const [checked, setChecked] = React.useState([]);
  /* Set page category */
  const [page, setPage] = React.useState(Number(query.id[1]));
  /* Set page item per page */
  const [perPage, setPerPage] = React.useState(limit);
  /* Set Price filter */
  const [formPrice, setFormPrice] = React.useState({
    priceFirst: '',
    priceLast: '',
  });
  /* Set type in order */
  const [sortPriceType, setSortPriceType] = React.useState(null);
  /*Show filter box mobile */
  const [open, setOpen] = React.useState(false);

  const { priceFirst, priceLast } = formPrice;

  React.useEffect(() => {
    setPage(Number(query.id[1]));
  }, [Number(query.id[1])]);
  React.useEffect(() => {
    setChecked(query.id.slice(2));
  }, [category.id]);

  const filteredProducts = React.useMemo(() => {
    return products?.filter((item) => {
      // const check = checked.length > 0 ? checked.includes(item.brandId) : true;
      const check = true;
      const checkPrice = !priceFirst && !priceLast;
      if (check && checkPrice) return check;
      if (!checkPrice && check) {
        let priceToNum = Number(item.sellPrice);
        if (priceToNum >= priceFirst && priceToNum <= priceLast) {
          return true;
        } else {
          return false;
        }
      }
    });
  }, [products, checked, priceFirst, priceLast, sortPriceType]);

  const handleChange = React.useCallback(
    (event, value) => {
      const { id } = query;
      id.splice(1, 1, value);
      Router.push({ pathname: `/categories/[[...id]]`, query: { id } });
      setPage(value);
    },
    [category.id, query.id]
  );
  // console.log(query.id);
  return (
    <div className={styles.wrapper}>
      <SortBarMobile
        category={category}
        setSortPriceType={setSortPriceType}
        open={open}
        setOpen={setOpen}
        formPrice={formPrice}
        setFormPrice={setFormPrice}
        setChecked={setChecked}
        checked={checked}
      />
      <Grid container justifyContent="center" className={styles.container}>
        <Grid item lg={11} md={12} sm={12} xs={12} className={styles.tabBar}>
          <Link href={'/'}>Trang ch???</Link>
          <Typography variant="body2">{`/ ${category.name}`}</Typography>
        </Grid>
        <Grid item lg={2} md={2} className={styles.filterBox}>
          <Checked
            setChecked={setChecked}
            checked={checked}
            setPage={setPage}
            formPrice={formPrice}
            setFormPrice={setFormPrice}
            category={category}
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
            setPage={setPage}
            category={category}
            open={open}
            setOpen={setOpen}
            setSortPriceType={setSortPriceType}
            sortPriceType={sortPriceType}
            products={products}
            query={query}
            lastProductRef={lastProductRef}
          />
          {products.length > 0 && (
            <div
            // ref={lastProductRef}
            >
              <Grid
                container
                justifyContent="center"
                className={styles.pagination}
              >
                <Grid item>
                  <Paginate
                    count={Math.ceil(category.productCount / limit)}
                    page={page}
                    onChange={handleChange}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
export default CategoriesPage;
