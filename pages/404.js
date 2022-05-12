import Link from 'next/link';
import Seo from '../components/seo';
import { fetchAPI } from '../lib/api';
import navBar from '../constants/navsBar.json';
import { useMemo } from 'react';

const NotFound = ({ category }) => {
  const seo = {
    metaTitle: 'Not Found',
  };
  const styles = {
    container: {
      height: ' 80vh',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    link: {},
  };

  /* @@ Add categories to NavBar.json */

  // let newArray = [];
  // newArray = category.map((item) => ({
  //   title: item.attributes.name,
  //   link: item.attributes.link,
  //   slug: item.attributes.slug,
  //   priority: item.attributes.priority,
  // }));

  // const rs = useMemo(() => {
  //   const rr = navBar;
  //   rr.find((item) => item.title === 'giới thiệu').list = newArray;
  //   return rr;
  // }, []);

  return (
    <>
      <Seo seo={seo} />
      <div style={styles.container}>
        <h3>404 | Không tìm thấy trang này.</h3>
        <Link href="/" style={styles.link}>
          Quay lại trang chủ
        </Link>
      </div>
    </>
  );
};

// export const getStaticProps = async () => {
//   const categoryRes = await fetchAPI('/categories', { populate: '*' });
//   return {
//     props: {
//       category: categoryRes.data,
//     },
//     revalidate: 1,
//   };
// };

export default NotFound;
