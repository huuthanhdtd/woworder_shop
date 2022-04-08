import React from 'react';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';
import styles from './styles.module.scss';

const Footer = ({ corpInfor }) => {
  return (
    <div className={styles.footer}>
      <FooterTop />
      <FooterBottom corpInfor={corpInfor} />
    </div>
  );
};
export default Footer;
