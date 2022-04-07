import { CardMedia, Link } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';
import { MdDownload } from 'react-icons/md';

function DownLoadBox() {
  const urlDownLoad =
    'https://www.novaland.com.vn/Data/Sites/1/media/brochure/2021/vn_novaland_group_brochure_mini_0701.pdf';
  return (
    <>
      <CardMedia className={styles.container}>
        <h2>Brochure Công ty</h2>
        <div className={styles.content}>
          <div className={styles.brochureIcon}>
            <Link href={urlDownLoad}>
              <MdDownload className={styles.icon} />
            </Link>
            <Link href={urlDownLoad}>Tải Brochure</Link>
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
