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
  const handleChange1 = (isChecked) => {
    if (isChecked) return setChecked(checks.map((data) => data.slug));
    else setChecked([]);
  };

  const handleChange2 = (isChecked, slug) => {
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
      {/* <FormControlLabel
        label="ALL"
        control={
          <Checkbox
            size="small"
            checked={checked.length === checks.length}
            indeterminate={
              checked.length !== checks.length && checked.length > 0
            }
            onChange={(event) => handleChange1(event.target.checked)}
          />
        }
      /> */}
      <Box className={styles.FormControl}>
        {checked &&
          checks.map((data, index) => (
            <FormControlLabel
              key={index}
              label={data.name}
              control={
                <Checkbox
                  size="small"
                  checked={checked.includes(data.slug)}
                  onChange={(event) =>
                    handleChange2(event.target.checked, data.slug)
                  }
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
            />
          ))}
      </Box>
    </div>
  );
}
