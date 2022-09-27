import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';

const SelectForm = ({ label, title, name, data, state, handleChange }) => {
  return (
    <FormControl variant="outlined" className={styles.selectForm}>
      <InputLabel htmlFor="outlined-age-native-simple" className={styles.label}>
        {label}
      </InputLabel>
      <Select
        value={state[name]}
        onChange={handleChange}
        label={label}
        inputProps={{
          name: name,
          id: 'outlined-age-native-simple',
        }}
      >
        <MenuItem value="">{title}</MenuItem>
        {data &&
          data.map((it, idx) => (
            <MenuItem value={it.name} key={idx}>
              {it.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default SelectForm;
