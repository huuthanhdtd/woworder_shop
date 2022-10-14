import Image from 'next/image';
import React from 'react';
import loading from '../../assets/image/loading.svg';
import styles from './styles.module.scss';

export default function Loading() {
  return (
    <div className={styles.load}>
      <Image src={loading} width={50} height={50} alt="...loading" />
    </div>
  );
}
