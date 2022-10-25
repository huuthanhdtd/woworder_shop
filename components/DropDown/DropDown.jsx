import React from 'react';
import styles from './styles.module.scss';
import { BsChevronDown } from 'react-icons/bs';
import { orderPrice } from '../../constants/commonData';
import { Button } from '@material-ui/core';
import clsx from 'clsx';

const SelectList = ({ setSortPriceType }) => {
  const [open, setOpen] = React.useState(false);
  const [selectBtnLabel, setSelectBtnLabel] = React.useState(null);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleSetSortPriceType = (it) => {
    setSelectBtnLabel(it.name);
    setSortPriceType(it.type);
    setOpen(!open);
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: 'transparent',
          zIndex: open ? 0 : -1,
        }}
        onClick={() => setOpen(!open)}
      />
      <div className={styles.root}>
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
    </>
  );
};

export default SelectList;
