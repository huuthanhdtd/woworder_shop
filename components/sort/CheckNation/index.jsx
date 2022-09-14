import React from 'react';
import styles from './styles.module.scss';

export default function CheckNation({ checked, setChecked }) {
  const checks = [
    { name: 'Giày', slug: 'giay' },
    { name: 'Quần áo', slug: 'quan' },
    { name: 'Trang sức', slug: 'trang-suc' },
    { name: 'Nội y', slug: 'noi-y' },
  ];
  const handleChangeTwo = (isChecked, slug) => {
    const index = checked.indexOf(slug);

    if (isChecked) return setChecked((state) => [...state, slug]);

    if (!isChecked && index > -1)
      return setChecked((state) => {
        state.splice(index, 1);
        return JSON.parse(JSON.stringify(state));
      });
  };

  return (
    <div className={styles.checks}>
      <h2> Danh mục</h2>
      <div className={styles.FormControl}>
        {checked &&
          checks.map((data, index) => (
            <div key={index} className={styles.checked}>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  onChange={(event) =>
                    handleChangeTwo(event.target.checked, data.slug)
                  }
                  className={styles.inputCheck}
                />
                {data.name}
              </label>
            </div>
          ))}
      </div>{' '}
    </div>
  );
}
