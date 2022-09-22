import React from 'react';
import styles from './styles.module.scss';
import Slider from 'react-slick';
import CardProduct from '../../CardProduct';
import SortBar from '../SortBar';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { Button } from '@material-ui/core';

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

const SlideProduct = ({ title }) => {
  const settings = {
    className: 'center',
    infinite: true,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: '0px',
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className={styles.wrapper}>
      <SortBar title={title} />
      <Slider {...settings}>
        {Array.from({ length: 10 }).map((it, idx) => (
          <CardProduct key={idx} />
        ))}
      </Slider>
    </div>
  );
};
export default SlideProduct;
