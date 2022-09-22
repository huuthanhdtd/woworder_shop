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

const SortBar = ({ title }) => {
  const [isOrder, setOrder] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleOrder = React.useCallback((type) => {
    setOrder(type.name);
  }, []);
  return (
    <div className={styles.wrapper} onBlur={() => setOpen(false)}>
      <div className={styles.boxOrder}>
        <Link href={`/categories/${title}`}>
          <Typography variant="h5">{title}</Typography>
        </Link>
        <div className={styles.orderBtn}>
          <Typography variant="h6">Sắp xếp theo</Typography>
          <Button className={styles.orderMobile} onClick={() => setOpen(!open)}>
            <AiOutlineMenuFold size={16} style={{ marginRight: 5 }} />
            Sắp xếp theo
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
          <SelectList />
        </div>
      </div>
    </div>
  );
};

export default SortBar;
