import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './page7.module.scss';
import Aos from 'aos';
import ReactMarkdown from 'react-markdown';
import Image from './image';

export default function Page7({ category }) {
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-sine',
      offset: 0,
    });
  }, []);
  return (
    <section>
      {category
        .filter((item) => item.attributes.slug === 'bo-quy-tac-ung-xu')
        .map((data, index) => (
          <div className={styles.rule} key={index}>
            <h2 data-aos="fade-down" data-aos-duration="500" data-delay="500">
              {data.attributes.name}
            </h2>

            <Grid container spacing={2}>
              <Grid
                data-aos="fade-left"
                data-aos-duration="500"
                data-delay="500"
                item
                sm={12}
                md={12}
                lg={2}
              >
                <div className={styles.all}>
                  {/* {console.log(data.attributes.image)} */}
                  <Link href={data.attributes.link}>
                    {/* <img src="/gioi-thieu/icon.png" alt="" /> */}
                    <Image image={data.attributes.image} />
                  </Link>
                </div>
              </Grid>
              <Grid
                data-aos="fade-right"
                data-aos-duration="500"
                data-delay="500"
                item
                sm={12}
                md={12}
                lg={10}
              >
                <ReactMarkdown
                  source={data.attributes.content}
                  escapeHtml={false}
                />
              </Grid>
            </Grid>
          </div>
        ))}
    </section>
  );
}
