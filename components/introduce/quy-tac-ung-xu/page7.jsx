import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './page7.module.scss';
import Aos from 'aos';
import ReactMarkdown from 'react-markdown';
import Image from './image';

export default function Page7({ item }) {
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-sine',
      offset: 0,
    });
  }, []);
  return (
    <section>
      {item && (
        <div className={styles.rule}>
          <h2 data-aos="fade-down" data-aos-duration="500" data-delay="500">
            {item.attributes.name}
          </h2>

          <Grid container spacing={2}>
            <Grid
              data-aos="fade-left"
              data-aos-duration="500"
              data-delay="500"
              item
              xs={12}
              sm={12}
              md={12}
              lg={2}
            >
              <Link href={item.attributes.link}>
                <div className={styles.all}>
                  <Image image={item.attributes.image} />
                </div>
              </Link>
            </Grid>
            <Grid
              data-aos="fade-right"
              data-aos-duration="500"
              data-delay="500"
              item
              xs={12}
              sm={12}
              md={12}
              lg={10}
            >
              <ReactMarkdown
                source={item.attributes.content}
                escapeHtml={false}
              />
            </Grid>
          </Grid>
        </div>
      )}
    </section>
  );
}
