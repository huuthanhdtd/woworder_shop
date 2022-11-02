import React from 'react';
import styles from './styles.module.scss';
import Category from './Category';
import { Context } from '../../constants/Context';

const HomePage = ({ categories, endElementRef }) => {
  const { closeDropDown, setCloseDrop } = React.useContext(Context);

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
      {categories.map((cate, idx) => {
        if (idx + 1 === categories.length) {
          return (
            <div ref={endElementRef} key={idx}>
              <Category category={cate} products={cate.products} />
            </div>
          );
        } else {
          return (
            <Category key={idx} category={cate} products={cate.products} />
          );
        }
      })}
    </div>
  );
};
export default HomePage;
