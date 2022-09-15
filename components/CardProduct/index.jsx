import clsx from 'clsx';
import React from 'react';
import { useMemo } from 'react';
import { useRef } from 'react';
import styles from './styles.module.scss';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { RiCloseCircleLine } from 'react-icons/ri';
import { AiFillFire } from 'react-icons/ai';
import Infor from './Infor';
import { useState } from 'react';
import DeatailInfor from './DetailInfor';
import { useRouter } from 'next/router';
function CardProduct() {
  const [isDetail, setDetail] = useState(false);

  const router = useRouter();
  const handleDetailProduct = () => {
    router.push('/detail-product/1');
  };
  return (
    <div className={styles.all}>
      <div className={styles.imageWp}>
        <div
          onClick={handleDetailProduct}
          className={clsx(styles.image, {
            [styles.imageDetail]: isDetail,
          })}
          style={{
            backgroundImage: `url(https://img5.thuthuatphanmem.vn/uploads/2021/11/22/hinh-anh-songoku-cap-cuoi-dep_101021714.png)`,
          }}
        ></div>
        <span className={styles.label}>
          <p>Giảm 40%</p>
        </span>
      </div>
      <span className={styles.hot}>
        <AiFillFire className={styles.hotIcon} />
        <p>Hot</p>
      </span>
      <span className={styles.option} onClick={() => setDetail(!isDetail)}>
        {isDetail ? (
          <RiCloseCircleLine className={styles.optionIcon} />
        ) : (
          <HiOutlineDotsCircleHorizontal className={styles.optionIcon} />
        )}
      </span>
      <div style={{ position: 'relative' }}>
        <Infor isDetail={isDetail} />
        <DeatailInfor isDetail={isDetail} />
        {/* {!isDetail ? <Infor /> : <DeatailInfor />} */}
      </div>
    </div>
  );
}

export default CardProduct;
