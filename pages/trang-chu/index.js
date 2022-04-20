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
  const newsRef = useRef(null);
  const projectRef = useRef(null);

  const { y: pageYOffset } = useWindowScroll();
  const [elementIntoView, setElementIntoView] = useState('');
  const [newsIntoView, setNewsIntoView] = useState(false);
  const [projectIntoView, setProjectIntoView] = useState(false);

  useEffect(() => {
    if (
      pageYOffset > statisticalRef.current.offsetTop &&
      pageYOffset < newsRef.current.offsetTop
    ) {
      setElementIntoView('gioi-thieu');
    }
    if (
      pageYOffset > newsRef.current.offsetTop - 500 &&
      pageYOffset < newsRef.current.offsetTop + 1500
    ) {
      setNewsIntoView(true);
    }

    if (
      pageYOffset > projectRef.current.offsetTop - 500 &&
      pageYOffset < projectRef.current.offsetTop + 1500
    ) {
      setProjectIntoView(true);
    }
  }, [pageYOffset]);
  return (
    <div className={styles.homePage}>
      <Slider slides={slides} projects={projects} articles={articles} />
      <IntroduceHome
        elementIntoView={elementIntoView}
        statisticalRef={statisticalRef}
      />
      <News articles={articles} newsRef={newsRef} newsIntoView={newsIntoView} />
      <Projects projectIntoView={projectIntoView} projectRef={projectRef} />
      <Connective />
    </div>
  );
};
export default HomePage;
