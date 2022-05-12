import React, { useContext, useEffect, useState } from 'react';
import Page5 from './Ban-lanh-dao/Page5';
import Page5edit from './Ban-lanh-dao/Page5edit';
import Page3 from './Gia-tri-cot-loi/Page3';
import Page6 from './Giai-thuong/Page6';
import Intro from './Introduce/intro';
import Page4 from './Lich-su-phat-trien/Page4';
import NavIntroduce from './NavIntro/NavIntroduce';
import Page7 from './quy-tac-ung-xu/page7';
import Index from './Tamnhin-sumenh/index';
import navs from '../../constants/navsBar.json';
import { Context } from '../../constants/Context';
import { useRouter } from 'next/router';

const data = navs[1];
export default function Introduce({ category, parent, introductoryArticle }) {
  const { introduceTpye, isPushIntro } = useContext(Context);
  const router = useRouter();
  useEffect(() => {
    if (isPushIntro === true) {
      router.push(`#${introduceTpye}`);
    }
  }, [introduceTpye]);
  return (
    <div style={{ margin: '0 auto', color: '#000' }}>
      {/* <NavIntroduce /> */}
      {data.list.map((item, index) => (
        <div key={index} id={item.idNav}>
          <div data-aos="fade-down">
            {index === 0 && <Intro category={category} />}
          </div>
          <div>
            {index === 1 && (
              <Index
                category={category}
                introductoryArticle={introductoryArticle}
              />
            )}
          </div>
          <div>
            {index === 2 && <Page3 category={category} parent={parent} />}
          </div>
          <div>
            {index === 3 && (
              <Page4
                category={category}
                introductoryArticle={introductoryArticle}
              />
            )}
          </div>
          <div>
            {index === 4 && (
              <Page5edit
                category={category}
                introductoryArticle={introductoryArticle}
              />
            )}
          </div>
          <div>
            {index === 5 && (
              <Page6
                category={category}
                introductoryArticle={introductoryArticle}
              />
            )}
          </div>
          <div>{index === 6 && <Page7 category={category} />}</div>
        </div>
      ))}
    </div>
  );
}
