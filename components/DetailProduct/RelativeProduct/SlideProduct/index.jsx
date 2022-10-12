import React from 'react';
import styles from './styles.module.scss';
// import Slider from 'react-slick';
import CardProduct from '../../../CardProduct';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'));
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

const Slides = ({ data }) => {
  // const settings = {
  //   className: 'slider variable-width',
  //   infinite: true,
  //   slidesToShow: data.length > 5 ? 2 : data.length,
  //   // slidesToShow: 6,
  //   slidesToScroll: 1,
  //   // centerMode: false,
  //   // centerPadding: '0px',
  //   swipeToSlide: true,
  //   variableWidth: data?.length > 5 ? false : true,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 1140,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 3,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 960,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         nextArrow: '',
  //         prevArrow: '',
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 560,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         nextArrow: '',
  //         prevArrow: '',
  //         dots: true,
  //       },
  //     },
  //   ],
  // };
  const settings = {
    className: 'slider variable-width',
    infinite: true,
    slidesToShow: data?.length > 5 ? 6 : data.length,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: data?.length > 5 ? false : true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: data?.length > 4 ? 4 : data.length,
          slidesToScroll: 3,
          infinite: true,
          variableWidth: data?.length > 4 ? false : true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: data?.length > 3 ? 4 : data.length,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: '',
          prevArrow: '',
          dots: true,
          infinite: false,
          variableWidth: data?.length > 3 ? false : true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: data?.length > 2 ? 3 : data.length,
          slidesToScroll: 1,
          nextArrow: '',
          prevArrow: '',
          dots: true,
          variableWidth: data?.length > 2 ? false : true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: data?.length > 1 ? 2 : data.length,
          slidesToScroll: 1,
          nextArrow: '',
          prevArrow: '',
          dots: true,
          variableWidth: data?.length > 1 ? false : true,
        },
      },
    ],
  };
  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
        {data?.map((it, idx) => (
          <div key={idx} className={styles.product}>
            <CardProduct data={it} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Slides;
