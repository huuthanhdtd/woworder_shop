import { Skeleton } from '@material-ui/lab';
import React from 'react';
import dynamic from 'next/dynamic';
import clsx from 'clsx';

const CardProduct = dynamic(() => import('../../CardProduct'), {
  ssr: false,
});

const Box = ({ data, styles }) => {
  const [isVisible, setVisible] = React.useState(false);

  return (
    <div className={styles.product}>
      <div
        onLoad={() => {
          setVisible(true);
        }}
        className={styles.product}
      >
        <CardProduct data={data} />
      </div>
      <div
        className={clsx(styles.skeleton, {
          [styles.remove]: isVisible,
        })}
      >
        <Skeleton variant="rect" width="100%" height="100%" />
        {/* <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="rect" width="80%" height="10%" /> */}
      </div>
    </div>
  );
};

export default React.memo(Box);
