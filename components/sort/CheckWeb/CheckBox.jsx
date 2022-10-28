import React from 'react';
const CheckBox = ({ styles, handleChangeTwo, data, checked }) => {
  return (
    <div className={styles.checked}>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={checked.includes(data.id) ? true : false}
          onChange={(event) => handleChangeTwo(event.target.checked, data.id)}
          className={styles.inputCheck}
        />
        {data.name}
      </label>
    </div>
  );
};

export default CheckBox;
