import App from 'next/app';
import Head from 'next/head';
import { createContext } from 'react';
import { fetchAPI } from '../lib/api';
import Layout from '../components/layout';
import 'aos/dist/aos.css';
import '../assets/css/style.css';
import '../assets/css/slick.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/router';
import { CartProvider } from 'react-use-cart';
import { setProductViewed } from '../utils/localstorage';
import { Provider } from 'react-redux';
import { store, persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react';

// Store Tpcapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { categories } = pageProps;
  const router = useRouter();
  setProductViewed();
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/khanhbui.ico"
          // href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <GlobalContext.Provider value={global.attributes}>
            <CartProvider>
              <Layout categories={categories}>
                <div
                  style={{
                    marginTop: router.pathname === '/checkouts' ? 0 : '155px',
                  }}
                >
                  <Component {...pageProps} />
                </div>
              </Layout>
            </CartProvider>
          </GlobalContext.Provider>
        </PersistGate>
      </Provider>
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

  const categoryRes = await // fetchAPI('/global', {
  //   populate: {
  //     favicon: '*',
  //     defaultSeo: {
  //       populate: '*',
  //     },
  //   },
  // }),
  fetchAPI('/stores/709313694365910020/products', {
    limit: 8,
    page: 1,
    category: '',
  });

  // Pass the data to our page via props
  return {
    ...appProps,
    pageProps: {
      categories: categoryRes,
    },
  };
};

export default MyApp;
