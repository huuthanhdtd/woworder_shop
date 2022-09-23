import { Grid } from '@material-ui/core';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { footerData } from '../../constants/commonData';
import clsx from 'clsx';

export default function Support() {
  const [activeNav, setActiveNav] = useState(true);
  const { support } = footerData;
  console.log();
  const handleShowNavItem = () => {
    if (activeNav === true) {
      setActiveNav();
    } else {
      setActiveNav(true);
    }
  };
  return (
    <div className={styles.support}>
      <div className={styles.breadcrumb_shop}>
        <Link href="/"> Trang chủ</Link> / Liên hệ
      </div>
      <Grid container className={styles.detail}>
        <Grid item xs={12} sm={12} md={8} className={styles.item_detail}>
          <div className={styles.items}>
            <h3>HAPPY MOMMY CLUB</h3>
            <h4>
              CHƯƠNG TRÌNH ƯU ĐÃI THÀNH VIÊN
              <br></br>
              HAPPY MOMMY CLUB
            </h4>
            <br />
            <p>
              Với mỗi đơn hàng thành công, quý khách sẽ nhận được điểm tích lũy
              vào tài khoản thành viên. Số điểm này có thể sử dụng để đổi lấy
              một trong các ưu đãi:
            </p>
            <ul className={styles.ul_detail}>
              <li>Giảm giá chiết khấu trực tiếp trên đơn hàng</li>
              <li>
                Đổi thưởng: Voucher hot, Sản phẩm cửa hàng, Quà tặng độc quyền
                từ thương hiệu
              </li>
            </ul>
            Và hàng trăm ưu đãi hot mỗi tháng khi trở thành thành viên của Happy
            Mommy Club!
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={styles.menu}>
          <h3 onClick={handleShowNavItem}>{support.title} </h3>
          <ul
            className={clsx(styles.Ul_item, {
              [styles.active]: activeNav === true,
            })}
            style={{
              height: activeNav === true ? `${support.items.length * 44}px` : 0,
            }}
          >
            {support.items.map((data, index) => (
              <li className={styles.li_item} key={index}>
                {data.text === 'Giới thiệu' || data.text === 'Liên hệ' ? (
                  <Link href={data.link}>{data.text}</Link>
                ) : (
                  <Link href={`/support/${data.slug}`}>{data.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}
