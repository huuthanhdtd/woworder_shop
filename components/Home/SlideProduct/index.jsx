import React from 'react';
import styles from './styles.module.scss';
import Slider from 'react-slick';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import Box from './Box';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#F4F4F5', zIndex: 1 }}
      onClick={onClick}
    >
      <button
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 32,
          height: 32,
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <RiArrowRightSLine size={30} color="#3F3F46" />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#F4F4F5', zIndex: 1 }}
      onClick={onClick}
    >
      <button
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <RiArrowLeftSLine size={30} color="#3F3F46" />
      </button>
    </div>
  );
}

const SlideProduct = ({ sortProducts }) => {
  const settings = {
    className: 'slider variable-width',
    infinite: true,
    slidesToShow: sortProducts?.length > 5 ? 6 : sortProducts.length,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: sortProducts?.length > 5 ? false : true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: sortProducts?.length > 4 ? 5 : sortProducts.length,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: sortProducts?.length > 4 ? false : true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: sortProducts?.length > 3 ? 4 : sortProducts.length,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: '',
          prevArrow: '',
          dots: true,
          infinite: false,
          variableWidth: sortProducts?.length > 3 ? false : true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: sortProducts?.length > 2 ? 3 : sortProducts.length,
          slidesToScroll: 1,
          nextArrow: '',
          prevArrow: '',
          dots: true,
          variableWidth: sortProducts?.length > 2 ? false : true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: sortProducts?.length > 1 ? 2 : sortProducts.length,
          slidesToScroll: 1,
          nextArrow: '',
          prevArrow: '',
          dots: true,
          variableWidth: sortProducts?.length > 1 ? false : true,
        },
      },
    ],
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {sortProducts?.map((item, idx) => (
          <Box data={item} key={idx} styles={styles} />
        ))}
      </Slider>
    </div>
  );
};
export default SlideProduct;
