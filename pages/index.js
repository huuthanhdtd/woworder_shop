import React from 'react';
import Seo from '../components/seo';
import { fetchAPI } from '../lib/api';
import HomePage from './trang-chu';

const Home = ({
  articles,
  categories,
  homepage,
  typicalProjects,
  corpInfor,
  slides,
}) => {
  return (
    <>
      <Seo seo={homepage.attributes.seo} />
      <HomePage
        homepage={homepage}
        typicalProjects={typicalProjects}
        articles={articles}
        slides={slides}
        corpInfor={corpInfor}
      />
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    articlesRes,
    // categoriesRes,
    slidesRes,
    typicalProjectsRes,
    homepageRes,
    corpInforRes,
  ] = await Promise.all([
    fetchAPI('/news-articles', { populate: '*' }),
    // fetchAPI('/categories', { populate: '*' }),
    fetchAPI('/slides', { populate: '*' }),
    fetchAPI('/typical-projects', { populate: '*' }),
    fetchAPI('/homepage', { populate: '*' }),
    fetchAPI('/corp-infor', { populate: '*' }),

    // fetchAPI('/homepage', {
    //   populate: {
    //     hero: '*',
    //     seo: { populate: '*' },
    //   },
    // }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      // categories: categoriesRes.data,
      slides: slidesRes.data,
      typicalProjects: typicalProjectsRes.data,
      homepage: homepageRes.data,
      corpInfor: corpInforRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
