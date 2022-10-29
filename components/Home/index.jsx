import React from 'react';
import styles from './styles.module.scss';
import Category from './Category';
import Aos from 'aos';
import { Context } from '../../constants/Context';

const HomePage = ({ categories }) => {
  const { closeDropDown, setCloseDrop } = React.useContext(Context);
  // React.useEffect(() => {
  Aos.init({ delay: 100 });
  // }, []);
  return (
    <div className={styles.root}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: '100%',
          backgroundColor: 'transparent',
          zIndex: closeDropDown ? 0 : -1,
        }}
        onClick={() => setCloseDrop(!closeDropDown)}
      />
      {categories.slice(0, 10).map((cate, idx) => {
        return <Category key={idx} category={cate} products={cate.products} />;
      })}
    </div>
  );
};
export default HomePage;
