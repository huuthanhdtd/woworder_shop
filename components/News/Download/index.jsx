import { CardMedia } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';
import { MdDownload } from 'react-icons/md';

function DownLoadBox() {
  return (
    <>
      <CardMedia className={styles.container}>
        <h2>Brochure Công ty</h2>
        <div className={styles.content}>
          <div className={styles.brochureIcon}>
            <MdDownload className={styles.icon} />
            <a href="#">Tải Brochure</a>
          </div>
          <span>
            <p>
              Download Bruchure mới nhất của Novaland để hiểu rõ hơn về chứng
              tôi
            </p>
          </span>
        </div>
      </CardMedia>
    </>
  );
}

export default DownLoadBox;
