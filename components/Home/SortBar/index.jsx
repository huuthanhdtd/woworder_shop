import { Button, Typography, Link } from '@material-ui/core';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';
import {
  orderButton,
  orderPrice,
  sortBarHome,
} from '../../../constants/commonData';
import SelectList from '../../DropDown/DropDown';
import styles from './styles.module.scss';
import { AiOutlineMenuFold } from 'react-icons/ai';

const SortBar = ({ category, setSortPriceType }) => {
  const [isOrder, setOrder] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleOrder = (type) => {
    setOrder(type.name);
    if (type.type) {
      setSortPriceType(type.type);
    }
  };

  return (
    <div className={styles.wrapper} onBlur={() => setOpen(false)}>
      <div className={styles.boxOrder}>
        <Link href={`/categories/${category.slug}`}>
          <Typography variant="h5">{category.name}</Typography>
        </Link>
        <div className={styles.orderBtn}>
          <Typography variant="h6">Sắp xếp theo</Typography>
          <Button className={styles.orderMobile} onClick={() => setOpen(!open)}>
            <AiOutlineMenuFold size={16} style={{ marginRight: 5 }} />
            <span>Sắp xếp theo</span>
          </Button>
          <div
            className={clsx(styles.typeOrder, {
              [styles.open]: open,
            })}
          >
            {sortBarHome.map((it, idx) => (
              <Button
                key={idx}
                className={clsx(styles.button, {
                  [styles.active]: isOrder === it.name,
                })}
                onClick={() => handleOrder(it)}
              >
                {it.name}
              </Button>
            ))}
            <div className={styles.typeOrderMobile}>
              {orderPrice.map((it, idx) => (
                <Button
                  key={idx}
                  className={clsx(styles.button, {
                    [styles.active]: isOrder === it.name,
                  })}
                  onClick={() => handleOrder(it)}
                >
                  {it.name}
                </Button>
              ))}
            </div>
          </div>
          <SelectList setSortPriceType={setSortPriceType} />
        </div>
      </div>
    </div>
  );
};

export default SortBar;
