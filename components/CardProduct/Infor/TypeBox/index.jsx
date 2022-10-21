import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

const TypeBox = ({ attKey, types, select, setSelect }) => {
  return (
    <div className={styles.boxSizes}>
      <span className={styles.preAtt}>{attKey}:</span>
      <div
        className={styles.sizes}
        style={{
          gridTemplateColumns: attKey === 'Màu' && '90%',
        }}
      >
        {types.map((type, idx) => (
          <span
            className={clsx(styles.item, {
              [styles.selected]: type.name === select.name,
            })}
            key={idx}
            style={{ textTransform: 'uppercase' }}
            onClick={() => setSelect({ name: type.name, index: idx })}
          >
            {type.name.length > 3 ? type.name : type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TypeBox;
