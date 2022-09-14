import { Box, Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import styles from './styles.module.scss';

export default function CheckNation({}) {
  const checks = [
    { name: 'UK-GB', slug: 'uk-gb' },
    { name: 'CN-CN', slug: 'cn-cn' },
    { name: 'DE-DE', slug: 'de-de' },
    { name: 'ES-ES', slug: 'ed-es' },
    { name: 'FR-FR', slug: 'fr-fr' },
    { name: 'HS-hàng sẵn', slug: 'hs-hang-san' },
    { name: 'Jp-JP', slug: 'jp-jp' },
  ];
  const [checked, setChecked] = useState([]);
  // const handleChangeOne = (isChecked) => {
  //   if (isChecked) return setChecked(checks.map((data) => data.slug));
  //   else setChecked([]);
  // };

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
      <h2> Quốc gia</h2>
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
