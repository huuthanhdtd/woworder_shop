import React from 'react';
import styles from './styles.module.scss';
import SlideProduct from './SlideProduct';

const HomePage = () => {
  const data = ['Khuyến mãi', 'Mẹ và bé', 'Quần áo', 'Gia dụng', 'Điện tử'];
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* {data.map((it, idx) => (
          <SlideProduct key={idx} title={it} />
        ))} */}
      </div>
    </div>
  );
};
export default HomePage;
