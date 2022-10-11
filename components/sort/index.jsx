import React from 'react';
import CheckWeb from './CheckWeb';
import styles from './styles.module.scss';
import { BsFunnel } from 'react-icons/bs';
import SearchPrice from './SearchPrice';

export default function Checked({
  checked,
  setChecked,
  setPage,
  formPrice,
  setFormPrice,
}) {
  return (
    <div className={styles.checks}>
      <div className={styles.funnel}>
        <span className={styles.icons}>
          <BsFunnel size={19} />
        </span>
        <span className={styles.title}> BỘ LỌC TÌM KIẾM</span>
      </div>
      <CheckWeb setChecked={setChecked} checked={checked} setPage={setPage} />
      <SearchPrice formPrice={formPrice} setFormPrice={setFormPrice} />
    </div>
  );
}
