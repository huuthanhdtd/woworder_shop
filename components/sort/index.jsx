import React from 'react';
import CheckNation from './CheckNation';
import Search from './Search';
import styles from './styles.module.scss';
import { BsFunnel } from 'react-icons/bs';
import SearchPrice from './SearchPrice';
import FormattedInputs from './SearchPrice';

export default function Checked({
  checked,
  setChecked,
  setPage,
  formPrice,
  setFormPrice,
}) {
  return (
    <div className={styles.Checks}>
      {/* <Search /> */}
      <div className={styles.funnel}>
        <span className={styles.icons}>
          <BsFunnel size={19} />
        </span>
        <span className={styles.title}> BỘ LỌC TÌM KIẾM</span>
      </div>
      <CheckNation
        setChecked={setChecked}
        checked={checked}
        setPage={setPage}
      />
      {/* <SearchPrice /> */}

      <FormattedInputs formPrice={formPrice} setFormPrice={setFormPrice} />
    </div>
  );
}
