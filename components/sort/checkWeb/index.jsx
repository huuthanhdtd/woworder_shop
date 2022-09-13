import { Box, Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import styles from './styles.module.scss';

export default function CheckWed({}) {
  const checks = [
    { name: '1688', slug: '1688' },
    { name: 'ADIDAS', slug: 'ADIDAS' },
    { name: 'AMAZON', slug: 'AMAZON' },
    { name: 'ASOS', slug: 'ASOS' },
    { name: 'CONVERSE', slug: 'CONVERSE' },
    { name: 'HM', slug: 'HM' },
    { name: 'IKEA', slug: 'IKEA' },
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
      <h2> Website</h2>
      {/* <FormControlLabel
        label="All"
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
