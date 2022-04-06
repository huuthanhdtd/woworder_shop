import { fetchAPI } from '../../lib/api';
import Seo from '../../components/seo';
import { Categories } from '../../components/News/Categories';

const Category = ({ category, categories }) => {
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  };

  return (
    <>
      <Seo seo={seo} />
      <Categories articles={category.attributes.articles.data} />
    </>
  );
};

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI('/categories', { fields: ['slug'] });

  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const matchingCategories = await fetchAPI('/categories', {
    filters: { slug: params.slug },
    populate: {
      articles: {
        populate: '*',
      },
    },
  });
  const allCategories = await fetchAPI('/categories');

  return {
    props: {
      category: matchingCategories.data[0],
      categories: allCategories,
    },
    revalidate: 1,
  };
}

export default Category;
