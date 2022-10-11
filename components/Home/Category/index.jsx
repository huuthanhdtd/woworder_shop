import React from 'react';
import { sortBarHome } from '../../../constants/commonData';
import { sortByPrice } from '../../../utils/sortByPrice';
import SortBar from '../../SortBar';
import SlidesProduct from '../SlideProduct';
import styles from './styles.module.scss';

const Category = ({
  category,
  products,
  sortPriceType,
  setSortPriceType,
  open,
  setOpen,
}) => {
  const sortProducts = React.useMemo(() => {
    if (products?.length > 0) {
      if (sortPriceType) {
        console.log('type', sortPriceType);
        return sortByPrice(products, sortPriceType);
      } else {
        return products;
      }
    } else {
      return products;
    }
  }, [sortPriceType]);
  return (
    <div className={styles.container}>
      {sortProducts?.length > 0 && (
        <>
          <SortBar
            category={category}
            setSortPriceType={setSortPriceType}
            open={open}
            setOpen={setOpen}
            orderData={sortBarHome}
          />
          <SlidesProduct sortProducts={sortProducts} />
        </>
      )}
    </div>
  );
};

export default Category;
