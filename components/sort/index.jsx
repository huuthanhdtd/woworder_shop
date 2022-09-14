import React from 'react';
import CheckNation from './CheckNation';
import CheckWed from './CheckWeb';
import Search from './Search';
import styles from './styles.module.scss';
import { BsFunnel } from 'react-icons/bs';
import SearchPrice from './SearchPrice';
import FormattedInputs from './SearchPrice';

export default function Checked({ checked, setChecked }) {
  return (
    <div className={styles.Checks}>
      {/* <Search /> */}
      <div className={styles.funnel}>
        <span className={styles.icons}>
          <BsFunnel />
        </span>
        <span className={styles.title}> BỘ LỌC TÌM KIẾM</span>
      </div>
      <CheckNation setChecked={setChecked} checked={checked} />
      <CheckWed />
      {/* <SearchPrice /> */}
      <FormattedInputs />
    </div>
  );
}
