import App from 'next/app';
import Head from 'next/head';
import { createContext } from 'react';
import { fetchAPI } from '../lib/api';
import { getStrapiMedia } from '../lib/media';
import Layout from '../components/layout';
import '../assets/css/style.css';

// Store Tpcapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  // const { global } = pageProps;
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          // href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Tpcapi

  // const [globalRes, corpRes, categoriesRes, homepageRes] = await Promise.all([
  //   fetchAPI('/global', {
  //     populate: {
  //       favicon: '*',
  //       defaultSeo: {
  //         populate: '*',
  //       },
  //     },
  //   }),
  //   fetchAPI('/corp-infor', { populate: '*' }),
  //   fetchAPI('/categories', { populate: '*' }),
  //   fetchAPI('/homepage', { populate: '*' }),
  // ]);

  // Pass the data to our page via props
  return {
    // ...appProps,
    // pageProps: {
    //   global: globalRes.data,
    // },
  };
};

export default MyApp;
