import React from 'react';
import Seo from '../components/seo';
import { fetchAPI } from '../lib/api';
import HomePage from './trang-chu';

const Home = ({ articles, homepage, corpInfor, slides, projects }) => {
  return (
    <>
      <Seo seo={homepage.attributes.seo} />
      <HomePage
        homepage={homepage}
        articles={articles}
        slides={slides}
        corpInfor={corpInfor}
        projects={projects}
      />
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, slidesRes, homepageRes, corpInforRes, projectsRes] =
    await Promise.all([
      fetchAPI('/news-articles', { populate: '*' }),
      fetchAPI('/slides', { populate: '*' }),
      fetchAPI('/homepage', { populate: '*' }),
      fetchAPI('/corp-infor', { populate: '*' }),
      fetchAPI('/projects', { populate: '*' }),
    ]);

  return {
    props: {
      articles: articlesRes.data,
      slides: slidesRes.data,
      homepage: homepageRes.data,
      corpInfor: corpInforRes.data,
      projects: projectsRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
