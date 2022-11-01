import React from 'react';
import CardProduct from '../../CardProduct';

const Box = ({ data, styles }) => {
  return (
    <div className={styles.product}>
      <CardProduct data={data} />
    </div>
  );
};

export default React.memo(Box);
