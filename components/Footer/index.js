import React, { useEffect } from 'react';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';
import styles from './styles.module.scss';

const Footer = ({ corpInfor, navs }) => {
  return (
    <div className={styles.footer}>
      <FooterTop navs={navs} />
      <FooterBottom corpInfor={corpInfor} />
    </div>
  );
};
export default Footer;
