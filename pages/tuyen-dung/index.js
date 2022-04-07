import React from 'react';
import Career from '../../components/Career';
import styles from './styles.module.scss';
import { fetchAPI } from '../../lib/api';
import Seo from '../../components/seo';

const CareerPage = ({ articles }) => {
  const seo = {
    metaTitle: 'Tuyển dụng',
    metaDescription: `Career`,
  };
  return (
    <>
      <Seo seo={seo} />
      <div className={styles.careerPage}>
        <Career articles={articles} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes] = await Promise.all([
    fetchAPI('/articles', { populate: '*' }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
    },
    revalidate: 1,
  };
}
export default CareerPage;
