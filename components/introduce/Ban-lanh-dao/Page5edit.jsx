import React, { useContext, useEffect, useState } from 'react';
import styles from './page5edit.module.scss';
import { Grid, Typography } from '@material-ui/core';
import Aos from 'aos';
import TransitionsModal from './Modal';
import Image from './image';

export default function Page5edit({ category, introductoryArticle }) {
  //   const [active, setActive] = useState(false);
  //   const handleClose = () => setActive(false);
  const [ab, setAb] = useState(1);
  const [maps, setMap] = useState(introductoryArticle[0]);
  const [openModal, setOpenModal] = React.useState(false);
  const [datas, setDatas] = useState([]);
  const handleShow = (data) => {
    setOpenModal(true);
    setAb(data);
  };

  useEffect(() => {
    setMap(introductoryArticle[ab - 1]);
    Aos.init({
      easing: 'ease-in-sine',
      offset: 0,
    });
  }, [ab]);
  return (
    <div className={styles.main}>
      {category
        .filter((item) => item.attributes.slug === 'ban-lanh-dao')
        .map((data, index) => (
          <div className={styles.Page5} key={index}>
            <h2 data-aos="fade-down" data-aos-duration="500" data-delay="500">
              {data.attributes.name}
            </h2>

            <Grid container spacing={2} className={styles.staff}>
              {introductoryArticle
                .filter(
                  (item) =>
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
                          <span>{data.position}</span>
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
            />
          </div>
        ))}
    </div>
  );
}
