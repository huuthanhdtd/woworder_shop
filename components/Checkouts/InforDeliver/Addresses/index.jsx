import clsx from 'clsx';
import React from 'react';
import Local from './Local';
import styles from './styles.module.scss';
import Transportation from './Transportation';

const Addresses = ({ data, state, deliver, handleChange, handleDeliver }) => {
  return (
    <div className={clsx(styles.address, styles.border)}>
      <Transportation
        data={data}
        state={state}
        deliver={deliver}
        handleChange={handleChange}
        handleDeliver={handleDeliver}
      />
      <Local
        data={data}
        state={state}
        deliver={deliver}
        handleChange={handleChange}
        handleDeliver={handleDeliver}
      />
    </div>
  );
};

export default Addresses;
