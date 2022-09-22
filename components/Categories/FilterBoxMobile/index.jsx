import { Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import { CgCloseR } from 'react-icons/cg';
import { orderButton, orderPrice } from '../../../constants/commonData';
import styles from './styles.module.scss';

const FilterMobile = ({ listFilter, checked, setChecked, setPage }) => {
  const checks = [
    { name: '1688', slug: '1688' },
    { name: 'ADIDAS', slug: 'ADIDAS' },
    { name: 'AMAZON', slug: 'AMAZON' },
    { name: 'ASOS', slug: 'ASOS' },
    { name: 'CONVERSE', slug: 'CONVERSE' },
    { name: 'HM', slug: 'HM' },
    { name: 'IKEA', slug: 'IKEA' },
  ];
  const prices = [
    { name: '0-100.000', slug: '1688' },
    { name: '200.000-500.000', slug: 'ADIDAS' },
    { name: '500.000-1.000.000', slug: 'AMAZON' },
    { name: '1.000.000-5.000.000', slug: 'ASOS' },
    { name: 'Hơn 5.000.000', slug: 'CONVERSE' },
  ];
  const handleChangeTwo = (isChecked, slug) => {
    const index = checked.indexOf(slug);
    setPage(1);

    if (isChecked) return setChecked((state) => [...state, slug]);

    if (!isChecked && index > -1)
      return setChecked((state) => {
        state.splice(index, 1);
        return JSON.parse(JSON.stringify(state));
      });
  };
  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.active]: listFilter,
      })}
    >
      <div className={styles.content}>
        <div>
          <Typography className={styles.title} variant="h6">
            Website
          </Typography>
          {checked &&
            checks.map((data, index) => (
              <div key={index} className={styles.checked}>
                <label className={styles.label}>
                  <input
                    type="checkbox"
                    onChange={(event) =>
                      handleChangeTwo(event.target.checked, data.slug)
                    }
                    className={styles.inputCheck}
                  />
                  {data.name}
                </label>
              </div>
            ))}
        </div>
        <div>
          <Typography className={styles.title} variant="h6">
            Khoảng giá
          </Typography>
          {checked &&
            prices.map((data, index) => (
              <div key={index} className={styles.checked}>
                <label className={styles.label}>
                  <input
                    type="checkbox"
                    onChange={(event) =>
                      handleChangeTwo(event.target.checked, data.slug)
                    }
                    className={styles.inputCheck}
                  />
                  {data.name}
                </label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilterMobile;
