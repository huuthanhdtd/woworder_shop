import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from '../image';
import styles from './intro.module.scss';
export default function Intro({ item }) {
  return (
    <>
      {item && (
        <div className={styles.page}>
          <h2>{item.attributes.name}</h2>
          <div className={styles.MainIntroduction}>
            <div className={styles.CompanyProfile}>
              <ReactMarkdown
                source={item.attributes.content}
                escapeHtml={false}
              />
            </div>
            <div className={styles.ImgCompany}>
              <Image image={item.attributes.image} />
            </div>
          </div>
          <div></div>
        </div>
      )}
    </>
  );
}
