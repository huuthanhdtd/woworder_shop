import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { RiCloseCircleLine } from 'react-icons/ri';
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
  return (
    <div className={styles.all}>
      <div className={styles.imageWp}>
        <Link href={`/product/${data.id}`}>
          <div
            className={clsx(styles.image, {
              [styles.imageDetail]: isDetail,
            })}
            style={{
              backgroundImage: `url(${data.imageUrl})`,
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
        <Infor isDetail={isDetail} product={data} />
        <DeatailInfor isDetail={isDetail} />
      </div>
    </div>
  );
}

export default React.memo(CardProduct);
