import { useRouter } from 'next/router';
import React from 'react';
import CategoriesPage from '../../components/Categories';
// import database from '../../constants/database.json';
import { fetchAPI } from '../../lib/api';

const Categories = ({ category }) => {
  const router = useRouter();
  const {
    items,
    included: { categories, productCategories },
  } = category;
  // const category = categories.find((cate) => cate.slug === router.query.slug);
  // const [products, setProducts] = React.useState([]);
  // React.useEffect(() => {
  //   const result = [];
  //   productCategories.filter((product) => {
  //     if (product.categoryId === category.id) {
  //       result.push(items.find((it) => it.id === product.productId));
  //     }
  //   });
  //   setProducts(result);
  // }, [router.query.slug]);
  // console.log('category', category);
  return (
    <div>
      {items.products.length > 0 && (
        <CategoriesPage products={items.products} category={items} />
      )}
    </div>
  );
};

export default Categories;

export const getStaticPaths = async () => {
  const categoriesRes = await fetchAPI('/stores/categories', {
    fields: ['id'],
  });
  return {
    paths: categoriesRes.items.map((category) => ({
      params: {
        id: category.id,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const categoryRes = await fetchAPI(`/stores/categories/${params.id}`, {
    limit: 10,
    page: 1,
  });

  return {
    props: {
      category: categoryRes,
    },
    revalidate: 1,
  };
};
