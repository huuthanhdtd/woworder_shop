import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles.module.scss';

export default function CheckWeb({ checked, setChecked, setPage, brands }) {
  const router = useRouter();
  const handleChangeTwo = (isChecked, id) => {
    let arrIds = [];
    arrIds = router.query.id;
    const index = arrIds.indexOf(id);
    if (isChecked) {
      arrIds.push(id);
      router.push({
        pathname: '/categories/[[...id]]',
        query: { id: arrIds },
      });
    }

    if (!isChecked && index > -1) {
      arrIds.splice(index, 1);
      router.push({
        pathname: '/categories/[[...id]]',
        query: { id: arrIds },
      });
    }
  };
  return (
    <div className={styles.checks}>
      <h2>Website</h2>
      <div className={styles.formControl}>
        {brands?.length > 0 &&
          brands?.map((data, index) => (
            <div key={index} className={styles.checked}>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  onChange={(event) =>
                    handleChangeTwo(event.target.checked, data.id)
                  }
                  className={styles.inputCheck}
                />
                {data.name}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
}
