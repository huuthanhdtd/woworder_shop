import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';
import styles from './styles.module.scss';
import Box from './Box';

const SlidesProduct = ({ sortProducts }) => {
  return (
    <div className={styles.container}>
      <Swiper
        // slidesPerView={6}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={sortProducts.length > 6 ? true : false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          960: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
      >
        {sortProducts?.map((item, idx) => (
          <SwiperSlide key={item.id}>
            <Box data={item} styles={styles} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlidesProduct;
