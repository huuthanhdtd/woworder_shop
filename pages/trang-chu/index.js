import React, { useEffect, useRef, useState } from 'react';
import News from '../../components/HomePage/News';
import Slider from '../../components/HomePage/Slider';
import Projects from '../../components/HomePage/Projects';
import { useWindowScroll } from 'react-use';

import styles from './styles.module.scss';
import Connective from '../../components/HomePage/Connective';
import IntroduceHome from '../../components/HomePage/Introduce';

const HomePage = ({ articles, categories, slides, projects, homepage }) => {
  const statisticalRef = useRef(null);
  const { y: pageYOffset } = useWindowScroll();
  const [countActive, setCountActive] = useState(false);
  useEffect(() => {
    const element = statisticalRef.current;
    if (
      pageYOffset > element.offsetTop &&
      pageYOffset < element.offsetTop + 1000
    ) {
      setCountActive(true);
    } else {
      setCountActive(false);
    }
  }, [pageYOffset]);
  return (
    <div className={styles.homePage}>
      <Slider slides={slides} projects={projects} articles={articles} />
      <IntroduceHome
        countActive={countActive}
        statisticalRef={statisticalRef}
      />
      <News articles={articles} />
      <Projects />
      <Connective />
    </div>
  );
};
export default HomePage;
