import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from './image';
import styles from './intro.module.scss';
export default function Intro({ nav, category }) {
  return (
    <>
      {category &&
        category
          .filter((item) => item.attributes.slug === 'gioi-thieu-chung')
          .map((data, index) => (
            <div className={styles.page} key={index}>
              <h2>{data.attributes.name}</h2>
              <div className={styles.MainIntroduction}>
                <div className={styles.CompanyProfile}>
                  <ReactMarkdown
                    source={data.attributes.content}
                    escapeHtml={false}
                  />
                </div>
                <div className={styles.ImgCompany}>
                  <Image image={data.attributes.image} />
                </div>
              </div>
              <div></div>
            </div>
          ))}
    </>
  );
}
