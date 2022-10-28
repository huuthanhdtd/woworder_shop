import Image from 'next/image';
import React from 'react';
import loading from '../../assets/image/loading1.svg';
import loadingText from '../../assets/image/Loadtext2.svg';
import styles from './styles.module.scss';

export default function Loading() {
  return (
    <div className={styles.load}>
      <Image
        src={loading}
        width={30}
        height={30}
        alt="...loading"
        loading="lazy"
      />
      {/* <Image src={loadingText} width={50} height={15} alt="...loading" /> */}
    </div>
  );
}
