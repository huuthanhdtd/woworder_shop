import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import CheckBox from './CheckBox';
import styles from './styles.module.scss';

export default function CheckWeb({ checked, setChecked, setPage, brands }) {
  const router = useRouter();

  const handleChangeTwo = (isChecked, id) => {
    let arrIds = [];
    arrIds = router.query.id;
    arrIds.splice(1, 1, '1');
    const indexCheck = checked.indexOf(id);
    const index = arrIds.indexOf(id);

    if (isChecked) {
      setChecked((state) => [...state, id]);
      arrIds.push(id);
      router.push({
        pathname: '/categories/[[...id]]',
        query: { id: arrIds },
      });
      return;
    }
    if (!isChecked && indexCheck > -1) {
      if (index > -1) {
        arrIds.splice(index, 1);
      }
      setChecked((state) => {
        state.splice(indexCheck, 1);

        return JSON.parse(JSON.stringify(state));
      });
      router.push({
        pathname: '/categories/[[...id]]',
        query: { id: arrIds },
      });
      return;
    }
  };
  return (
    <div className={styles.checks}>
      <h2>Website</h2>
      <div className={styles.formControl}>
        {brands?.length > 0 &&
          brands?.map((data, index) => (
            <CheckBox
              key={index}
              styles={styles}
              handleChangeTwo={handleChangeTwo}
              data={data}
              checked={checked}
            />
          ))}
      </div>
    </div>
  );
}
