import Link from 'next/link';
import React from 'react';
import { navbar, user } from '../../constants/commonData';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Image from 'next/image';
import Logo from '../../assets/image/logo.svg';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.logo}
          onClick={() => router.push('/detail-product/1')}
        >
          <Image src={Logo} width={298.68} height={75.41} />
        </div>
        <div className={styles.navbar}>
          {navbar.map((it, idx) => (
            <div className={styles.item} key={idx}>
              <Link href="/">{it.name}</Link>
            </div>
          ))}
        </div>
        <div className={styles.user}>
          {user.map((it, idx) => (
            <div className={styles.item} key={idx}>
              {it.name === user[0].name && (
                <AiOutlineShoppingCart className={styles.iconCart} />
              )}
              <Link href="/">{it.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
