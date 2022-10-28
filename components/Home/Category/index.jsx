import React, { lazy } from 'react';
import { sortByPrice } from '../../../utils/sortByPrice';
import SortBar from '../../SortBar';
import SlidesProduct from '../SlideProduct';
import styles from './styles.module.scss';

const Category = ({ category, products }) => {
  const [sortPriceType, setSortPriceType] = React.useState(null);
  const sortProducts = React.useMemo(() => {
    if (products?.length > 0) {
      if (sortPriceType) {
        return sortByPrice(products, sortPriceType);
      } else {
        return products;
      }
    } else {
      return products;
    }
  }, [sortPriceType]);
  return (
    <>
      {sortProducts?.length > 0 && (
        <div
          className={styles.container}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          {category.name && (
            <SortBar category={category} setSortPriceType={setSortPriceType} />
          )}
          <SlidesProduct sortProducts={sortProducts} />
        </div>
      )}
    </>
  );
};

export default Category;
