import { Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiListUnordered,
} from 'react-icons/ri';
import { useWindowSize } from 'react-use';
import { orderPrice, orderButton } from '../../constants/commonData';
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
}) => {
  const { asPath } = useRouter();
  const [isOrder, setOrder] = React.useState(null);
  const [cateName, setCateName] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(false);
  const { width } = useWindowSize();

  const handleOrder = (type) => {
    setOrder(type.name);
    // if (type.type === 'ascending' || type.type === 'descending') {
    setSortPriceType(type.type);
    // }
  };
  const handleOpenSortMobile = () => {
    setOpen(!open);
  };

  const handleActiveDropdown = () => {
    setDropdown(!dropdown);
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
    <div className={styles.wrapper} onBlur={() => setDropdown(false)}>
      <div className={styles.boxOrder}>
        <div
          className={clsx(styles.menuBar, {
            [styles.none]: asPath && asPath !== '/' && width && width > 960,
            [styles.flex]: asPath && asPath === '/',
          })}
          suppressHydrationWarning={true}
        >
          {cateName && (
            <Link
              href={`/categories/[[...id]]`}
              as={`/categories/${category.id}/1`}
              className={styles.category}
            >
              {category.name}
            </Link>
          )}
          {asPath === '/' ? (
            <Button
              className={styles.orderMobile}
              onClick={handleActiveDropdown}
            >
              <RiListUnordered />
            </Button>
          ) : (
            <Button
              className={styles.orderMobile}
              onClick={handleOpenSortMobile}
            >
              <AiOutlineMenuFold />
            </Button>
          )}
        </div>
        <div
          className={clsx(styles.orderBtn, {
            // [styles.width]: asPath === '/categories/[id]',
          })}
        >
          <Typography variant="h6">Sắp xếp theo</Typography>

          <div
            className={clsx(styles.typeOrder, {
              [styles.expand]: dropdown,
            })}
            // style={{ height: dropdown ? 'auto' : 0 }}
          >
            {orderButton.map((it, idx) => (
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
            {asPath === '/' && (
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
            )}
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
              disabled={page === totalPage || totalPage == 0 ? true : false}
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
