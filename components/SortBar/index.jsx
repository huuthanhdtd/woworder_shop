import { Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { useWindowSize } from 'react-use';
import { sortBarHome } from '../../constants/commonData';
import SelectList from '../DropDown/DropDown';
import styles from './styles.module.scss';

const SortBar = ({
  category,
  setSortPriceType,
  page,
  totalPage,
  handleChangePage,
  open,
  setOpen,
  orderData,
}) => {
  const router = useRouter();
  const [isOrder, setOrder] = React.useState(null);
  const [cateName, setCateName] = React.useState(false);
  const { width } = useWindowSize();
  const { asPath } = router;

  const handleOrder = (type) => {
    setOrder(type.name);
    if (type.type) {
      setSortPriceType(type.type);
    }
  };
  const handleOpenSortMobile = () => {
    setOpen(!open);
  };
  React.useEffect(() => {
    if (asPath !== '/') {
      if (width < 961) {
        setCateName(true);
        return;
      } else {
        setCateName(false);
        return;
      }
    } else {
      setCateName(true);
    }
  }, [width]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.boxOrder}>
        <div
          className={clsx(styles.menuBar, {
            [styles.none]: router?.asPath !== '/' && width && width > 960,
            [styles.flex]: router?.asPath === '/',
          })}
          suppressHydrationWarning={true}
        >
          {cateName && (
            <Link
              href={`/categories/${category.id}`}
              className={styles.category}
            >
              {category.name}
            </Link>
          )}
          <Button className={styles.orderMobile} onClick={handleOpenSortMobile}>
            <AiOutlineMenuFold />
          </Button>
        </div>
        <div
          className={clsx(styles.orderBtn, {
            [styles.width]: asPath === '/categories/[slug]',
          })}
        >
          <Typography variant="h6">Sắp xếp theo</Typography>

          <div className={clsx(styles.typeOrder)}>
            {orderData.map((it, idx) => (
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
          <SelectList setSortPriceType={setSortPriceType} />
        </div>
        {asPath !== '/' && (
          <div className={styles.selectPage}>
            <Typography variant="body2">
              {page}/{totalPage}
            </Typography>
            <Button
              disabled={page === 1 ? true : false}
              className={styles.arrow}
              onClick={() => handleChangePage('prev')}
            >
              <RiArrowLeftSLine />
            </Button>
            <Button
              disabled={page === totalPage ? true : false}
              className={styles.arrow}
              onClick={() => handleChangePage('next')}
            >
              <RiArrowRightSLine />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortBar;
