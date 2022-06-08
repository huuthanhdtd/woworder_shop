import React, { useContext, useEffect, useState } from 'react';
import styles from './page5edit.module.scss';
import { Grid, Typography } from '@material-ui/core';
import Aos from 'aos';
import TransitionsModal from './Modal';
import Image from '../image';

export default function Page5edit({ item, introductoryArticle }) {
  const [ab, setAb] = useState();
  const [maps, setMap] = useState();
  const [openModal, setOpenModal] = React.useState(false);
  const handleShow = (data) => {
    setOpenModal(true);
    setAb(data);
  };
  useEffect(() => {
    const rs = introductoryArticle.filter((item) => item.id === ab);
    setMap(rs);
    Aos.init({
      easing: 'ease-in-sine',
      offset: 0,
    });
  }, [ab]);

  return (
    <div className={styles.main}>
      {item && (
        <div className={styles.Page5}>
          <h2 data-aos="fade-down" data-aos-duration="500" data-delay="500">
            {item.attributes.name}
          </h2>

          <Grid container spacing={2} className={styles.staff}>
            {introductoryArticle
              .filter(
                (item) =>
                  item.attributes.category.data !== null &&
                  item.attributes.category.data.attributes.name ===
                    'Ban lãnh đạo'
              )
              .map((data, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  key={index}
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-delay="500"
                >
                  <div className={styles.media}>
                    <div className={styles.avatar}>
                      <Image image={data.attributes.image} />
                    </div>
                    <div
                      className={styles.description}
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-delay="500"
                    >
                      <h4
                        data-aos="fade-left"
                        data-aos-duration="500"
                        data-delay="500"
                      >
                        {data.attributes.title}
                      </h4>
                      <p
                        data-aos="fade-left"
                        data-aos-duration="500"
                        data-delay="500"
                      >
                        <span>
                          {data.attributes.content.slice(
                            0,
                            data.attributes.content.indexOf('\n')
                          )}
                        </span>
                      </p>
                      <div
                        className={styles.title}
                        onClick={() => handleShow(data.id)}
                      >
                        <Typography variant="h6">
                          <span onClick={() => handleShow(data.id)}>
                            Xem thông tin chi tiết...
                          </span>
                        </Typography>
                      </div>
                    </div>
                  </div>
                </Grid>
              ))}
          </Grid>
          <TransitionsModal
            setOpenModal={setOpenModal}
            openModal={openModal}
            maps={maps}
            introductoryArticle={introductoryArticle}
          />
        </div>
      )}
    </div>
  );
}
