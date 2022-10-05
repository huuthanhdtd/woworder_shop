import { useRouter } from 'next/router';
import React from 'react';
import CategoriesPage from '../../components/Categories';
import database from '../../constants/database.json';

const Categories = () => {
  const router = useRouter();
  const {
    items,
    included: { categories, productCategories },
  } = database;
  const category = categories.find((cate) => cate.slug === router.query.slug);
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    const result = [];
    productCategories.filter((product) => {
      if (product.categoryId === category.id) {
        result.push(items.find((it) => it.id === product.productId));
      }
    });
    setProducts(result);
  }, [router.query.slug]);
  return (
    <div>
      <CategoriesPage products={products && products} />
    </div>
  );
};

export default Categories;
