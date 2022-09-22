import React from 'react';
import styles from './styles.module.scss';
import { BsChevronDown } from 'react-icons/bs';
import { orderPrice } from '../../constants/commonData';
import { Button, Paper, Popper, Fade } from '@material-ui/core';
import clsx from 'clsx';

const SelectList = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSelectOrder = () => {};

  return (
    <div className={styles.root} onBlur={() => setOpen(false)}>
      <Button className={styles.toggle} onClick={handleClick}>
        Giá bán
        <BsChevronDown />
      </Button>
      <div
        className={clsx(styles.selectType, {
          [styles.active]: open,
        })}
      >
        {orderPrice.map((it, idx) => (
          <Button key={idx} className={styles.button}>
            {it.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SelectList;
