import React, { createContext, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useWindowScroll, useWindowSize } from 'react-use';

export const Context = createContext();
export default function ContextProvider({ children }) {
  //Banner
  // const bannerRef = useRef(null);
  // const [focusBanner, setFocusBanner] = useState(false);
  // const [sizeImage, setSizeImage] = useState('');
  // //WindowScroll
  // const { y: pageYOffset } = useWindowScroll();

  // const [type, setType] = useState(null);
  // const [isFilter, setFilters] = useState(false);
  // const [isActive, setIsActive] = useState(null);
  // const [isPushIntro, setIsPushIntro] = useState(false);
  // const [openVideo, setOpenVideo] = useState(false);
  // const [contentVideo, setContentVideo] = useState('');

  // const [introduceTpye, setIntroduceType] = useState(null);
  // const handleTypeProjects = (type) => {
  //   setFilters(true);
  //   setType(type);
  //   setIsActive(type);
  // };
  // const handleClickMenuIntroduce = (idNav, link, typePj) => {
  //   if (link !== '/gioi-thieu') {
  //     router.push(`${link}`);
  //     setIsPushIntro(false);
  //   }
  //   setIntroduceType(idNav);
  //   setFilters(true);
  //   setType(typePj);
  //   setIsActive(typePj);
  //   setOpenVideo(false);
  // };

  // //Get Dimensions Screen
  // const hasWindow = typeof window !== 'undefined';

  // function getWindowDimensions() {
  //   const width = hasWindow ? window.innerWidth : null;
  //   const height = hasWindow ? window.innerHeight : null;
  //   return {
  //     width,
  //     height,
  //   };
  // }

  const [pointUsed, setPointUsed] = React.useState(0);
  const { width } = useWindowSize();
  const router = useRouter();

  const value = {
    setPointUsed,
    pointUsed,
    width,
    router,
    // type,
    // handleTypeProjects,
    // setType,
    // isFilter,
    // isActive,
    // handleClickMenuIntroduce,
    // setIntroduceType,
    // introduceTpye,
    // setIsActive,
    // setIsPushIntro,
    // isPushIntro,
    // bannerRef,
    // focusBanner,
    // setFocusBanner,
    // pageYOffset,
    // openVideo,
    // setOpenVideo,
    // contentVideo,
    // setContentVideo,
    // getWindowDimensions,
    // sizeImage,
    // setSizeImage,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
