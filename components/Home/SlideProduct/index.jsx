import React from 'react';
import styles from './styles.module.scss';
import Slider from 'react-slick';
import CardProduct from '../../CardProduct';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import dynamic from 'next/dynamic';

// const Slider = dynamic(() => import('react-slick'));
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
    slidesToScroll: -1,
    // centerMode: true,
    // centerPadding: '0px',
    swipeToSlide: true,
    variableWidth: sortProducts?.length > 5 ? false : true,
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
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: '',
          prevArrow: '',
          dots: true,
          variableWidth: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: '',
          prevArrow: '',
          dots: true,
          variableWidth: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: '',
          prevArrow: '',
          dots: true,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {sortProducts?.map((item, idx) => (
          <div key={item.id} className={styles.product}>
            <CardProduct data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SlideProduct;
