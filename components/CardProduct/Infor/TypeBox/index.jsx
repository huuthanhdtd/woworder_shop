import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

const TypeBox = ({ attKey, types, select, setSelect }) => {
  // console.log(select);
  return (
    <div className={styles.boxSizes}>
      <span className={styles.preAtt}>{attKey}:</span>
      <div className={styles.sizes}>
        {types.map((type, idx) => (
          <span
            className={clsx(styles.item, {
              [styles.selected]: type.name === select.name,
            })}
            key={idx}
            style={{ textTransform: 'uppercase' }}
            onClick={() => setSelect({ name: type.name, index: idx })}
          >
            {type.name.length > 3 ? type.name.slice(0, 7) : type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TypeBox;
