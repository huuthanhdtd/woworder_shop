import React from 'react';
import styles from './styles.module.scss';
import { BsChevronDown } from 'react-icons/bs';
import { orderPrice } from '../../constants/commonData';
import { Button, Paper, Popper, Fade } from '@material-ui/core';
import clsx from 'clsx';

const SelectList = ({ setSortPriceType }) => {
  const [open, setOpen] = React.useState(false);

  const [selectBtnLabel, setSelectBtnLabel] = React.useState(null);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleSelectOrder = (it) => {
    setSortPriceType(it.type);
  };

  const handleSetSortPriceType = (it) => {
    setSelectBtnLabel(it.name);
    setSortPriceType(it.type);
  };

  return (
    <div className={styles.root} onBlur={() => setOpen(false)}>
      <Button className={styles.toggle} onClick={handleClick}>
        {selectBtnLabel ? selectBtnLabel : 'Giá bán'}
        <BsChevronDown />
      </Button>
      <div
        className={clsx(styles.selectType, {
          [styles.active]: open,
        })}
      >
        {orderPrice.map((it, idx) => (
          <Button
            key={idx}
            className={styles.button}
            onClick={() => handleSetSortPriceType(it)}
          >
            {it.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SelectList;
