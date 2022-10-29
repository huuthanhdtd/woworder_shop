import React from 'react';
import styles from './styles.module.scss';
import { BsChevronDown } from 'react-icons/bs';
import { orderPrice } from '../../constants/commonData';
import { Button } from '@material-ui/core';
import clsx from 'clsx';
import { Context } from '../../constants/Context';

const SelectList = ({ setSortPriceType }) => {
  const { setCloseDrop, closeDropDown } = React.useContext(Context);
  const [selectBtnLabel, setSelectBtnLabel] = React.useState(null);
  const handleClick = () => {
    setCloseDrop(!closeDropDown);
  };

  const handleSetSortPriceType = (it) => {
    setSelectBtnLabel(it.name);
    setSortPriceType(it.type);
    setCloseDrop(!closeDropDown);
  };

  return (
    <>
      <div className={styles.root}>
        <Button className={styles.toggle} onClick={handleClick}>
          {selectBtnLabel ? selectBtnLabel : 'Giá bán'}
          <BsChevronDown />
        </Button>
        <div
          className={clsx(styles.selectType, {
            [styles.active]: closeDropDown,
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
