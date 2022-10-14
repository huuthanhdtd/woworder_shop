import React from 'react';
import styles from './styles.module.scss';
import Infor from './Infor';
import Image from 'next/image';
import Hot from '../../assets/image/hot.svg';
import { CardMedia } from '@material-ui/core';
import { addProduct } from '../../utils/localstorage';
import Link from 'next/link';

function CardProduct({ data }) {
  const handleSaveProductToLocal = () => {
    addProduct(data);
  };
  return (
    <div className={styles.wrapProduct}>
      <div className={styles.imageWp} onClick={handleSaveProductToLocal}>
        <Link href={`/product/${data.id}`}>
          <CardMedia className={styles.image} image={data.imageUrl}></CardMedia>
        </Link>
        <span className={styles.label}>
          <p>Giảm 40%</p>
        </span>
        <span className={styles.hot}>
          <Image src={Hot} width={29.25} height={39} />
        </span>
      </div>

      <div className={styles.addToCart}>
        <Infor product={data} />
      </div>
    </div>
  );
}

export default React.memo(CardProduct);
