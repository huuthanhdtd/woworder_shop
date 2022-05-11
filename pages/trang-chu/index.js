import React, { useEffect, useRef, useState } from 'react';
import News from '../../components/HomePage/News';
import Slider from '../../components/HomePage/Slider';
import Projects from '../../components/HomePage/Projects';
import { useWindowScroll } from 'react-use';

import styles from './styles.module.scss';
import Connective from '../../components/HomePage/Connective';
import IntroduceHome from '../../components/HomePage/Introduce';

const HomePage = ({
  articles,
  //  categories,
  slides,
  typicalProjects,
  homepage,
}) => {
  const statisticalRef = useRef(null);
  const newsRef = useRef(null);
  const projectRef = useRef(null);

  const { y: pageYOffset } = useWindowScroll();
  const [introduceIntoView, setIntroduceIntoView] = useState(false);
  const [newsIntoView, setNewsIntoView] = useState(false);

  useEffect(() => {
    if (pageYOffset > statisticalRef.current.offsetTop - 200) {
      setIntroduceIntoView(true);
    } else setIntroduceIntoView(false);
    if (pageYOffset > newsRef.current.offsetTop - 500) {
      setNewsIntoView(true);
    } else setNewsIntoView(false);
  }, [pageYOffset]);
  return (
    <div className={styles.homePage}>
      <Slider
        slides={slides}
        //  projects={projects} articles={articles}
      />
      <IntroduceHome
        homepage={homepage}
        introduceIntoView={introduceIntoView}
        statisticalRef={statisticalRef}
      />
      <News articles={articles} newsRef={newsRef} newsIntoView={newsIntoView} />
      <Projects typicalProjects={typicalProjects} projectRef={projectRef} />
      <Connective />
    </div>
  );
};
export default HomePage;
