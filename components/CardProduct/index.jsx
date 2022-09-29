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
import Image from 'next/image';
import Hot from '../../assets/image/hot.svg';
import { Link } from '@material-ui/core';

function CardProduct({ data }) {
  const [isDetail, setDetail] = useState(false);

  const router = useRouter();
  const handleDetailProduct = () => {
    router.push('/product/1');
  };
  return (
    <div className={styles.all}>
      <div className={styles.imageWp}>
        <Link href={'/product/1'}>
          <div
            className={clsx(styles.image, {
              [styles.imageDetail]: isDetail,
            })}
            style={{
              backgroundImage: `url(https://img5.thuthuatphanmem.vn/uploads/2021/11/22/hinh-anh-songoku-cap-cuoi-dep_101021714.png)`,
            }}
          ></div>
        </Link>
        <span className={styles.label}>
          <p>Giảm 40%</p>
        </span>
      </div>
      <span className={styles.hot}>
        <Image src={Hot} width={29.25} height={39} />
      </span>
      {/* <span className={styles.option} onClick={() => setDetail(!isDetail)}>
        {isDetail ? (
          <RiCloseCircleLine className={styles.optionIcon} />
        ) : (
          <HiOutlineDotsCircleHorizontal className={styles.optionIcon} />
        )}
      </span> */}
      <div style={{ position: 'relative' }}>
        <Infor isDetail={isDetail} />
        <DeatailInfor isDetail={isDetail} />
      </div>
    </div>
  );
}

export default React.memo(CardProduct);
