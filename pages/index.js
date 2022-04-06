import React from 'react';
import Articles from '../components/articles';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { fetchAPI } from '../lib/api';
import HomePage from './trang-chu';

const Home = ({ articles, categories, homepage, projects, slides }) => {
  return (
    <>
      <Seo seo={homepage.attributes.seo} />
      <HomePage projects={projects} articles={articles} slides={slides} />
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, slidesRes, projectsRes, homepageRes] =
    await Promise.all([
      fetchAPI('/articles', { populate: '*' }),
      fetchAPI('/categories', { populate: '*' }),
      fetchAPI('/slides', { populate: '*' }),
      fetchAPI('/projects', { populate: '*' }),
      fetchAPI('/homepage', {
        populate: {
          hero: '*',
          seo: { populate: '*' },
        },
      }),
    ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      slides: slidesRes.data,
      projects: projectsRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
