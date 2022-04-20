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
  const [introduceIntoView, setIntroduceIntoView] = useState(false);
  const [newsIntoView, setNewsIntoView] = useState(false);
  const [projectIntoView, setProjectIntoView] = useState(false);

  useEffect(() => {
    if (
      pageYOffset > statisticalRef.current.offsetTop &&
      pageYOffset < newsRef.current.offsetTop
    ) {
      setIntroduceIntoView(true);
    } else setIntroduceIntoView(false);
    if (
      pageYOffset > newsRef.current.offsetTop - 500 &&
      pageYOffset < newsRef.current.offsetTop + 200
    ) {
      setNewsIntoView(true);
    } else setNewsIntoView(false);

    if (
      pageYOffset > projectRef.current.offsetTop - 500 &&
      pageYOffset < projectRef.current.offsetTop + 200
    ) {
      setProjectIntoView(true);
    } else setProjectIntoView(false);
  }, [pageYOffset]);
  return (
    <div className={styles.homePage}>
      <Slider slides={slides} projects={projects} articles={articles} />
      <IntroduceHome
        introduceIntoView={introduceIntoView}
        statisticalRef={statisticalRef}
      />
      <News articles={articles} newsRef={newsRef} newsIntoView={newsIntoView} />
      <Projects projectIntoView={projectIntoView} projectRef={projectRef} />
      <Connective />
    </div>
  );
};
export default HomePage;
