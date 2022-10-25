import React from 'react';
import styles from './styles.module.scss';

export default function CheckWeb({ checked, setChecked, setPage, brands }) {
  const handleChangeTwo = (isChecked, id) => {
    const index = checked.indexOf(id);
    setPage(1);

    if (isChecked) return setChecked((state) => [...state, id]);

    if (!isChecked && index > -1)
      return setChecked((state) => {
        state.splice(index, 1);
        return JSON.parse(JSON.stringify(state));
      });
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
