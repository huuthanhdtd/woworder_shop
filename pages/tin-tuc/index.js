import { fetchAPI } from '../../lib/api';
import Seo from '../../components/seo';
import NewsPage from '../../components/News';

const Category = ({ category, categories }) => {
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  };

  return (
    <>
      <Seo seo={seo} />
      <NewsPage
        articles={category.attributes.articles.data}
        title={category.attributes.name}
      />
    </>
  );
};

export async function getStaticProps() {
  const matchingCategories = await fetchAPI('/categories', {
    filters: { slug: 'tin-tuc' },
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
