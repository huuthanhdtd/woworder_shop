import clsx from 'clsx';
import React from 'react';
import { useMemo } from 'react';
import { useRef } from 'react';
import styles from './styles.module.scss';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { RiCloseCircleLine } from 'react-icons/ri';
import Infor from './Infor';
import { useState } from 'react';
import DeatailInfor from './DetailInfor';
function CardProduct() {
  const [isDetail, setDetail] = useState(false);
  return (
    <div className={styles.all}>
      <div className={styles.imageWp}>
        <div
          className={clsx(styles.image, {
            [styles.imageDetail]: isDetail,
          })}
          style={{
            backgroundImage: `url(https://img5.thuthuatphanmem.vn/uploads/2021/11/22/hinh-anh-songoku-cap-cuoi-dep_101021714.png)`,
          }}
        ></div>
      </div>
      <span className={styles.option} onClick={() => setDetail(!isDetail)}>
        {isDetail ? (
          <RiCloseCircleLine className={styles.optionIcon} />
        ) : (
          <HiOutlineDotsCircleHorizontal className={styles.optionIcon} />
        )}
      </span>
      <div style={{ position: 'relative' }}>
        {!isDetail ? <Infor /> : <DeatailInfor />}
      </div>
    </div>
  );
}

export default CardProduct;
