import React, { useContext, useEffect, useMemo, useState } from 'react';
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
import Test from './test/Test';

// const data = navs[1];
export default function Introduce({ category, parent, introductoryArticle }) {
  console.log(category);
  const { introduceTpye, isPushIntro } = useContext(Context);
  const router = useRouter();
  useEffect(() => {
    if (isPushIntro === true) {
      router.push(`#${introduceTpye}`);
    }
  }, [introduceTpye]);
  const data = useMemo(() => {
    const rs = category.reverse().sort(function (a, b) {
      return a.attributes.priority - b.attributes.priority;
    });
    return rs;
  }, []);

  return (
    <div style={{ margin: '0 auto', color: '#000' }}>
      {/* <NavIntroduce /> */}

      {data.map((item) => {
        return (
          <Section
            key={item.id}
            item={item}
            introductoryArticle={introductoryArticle}
            parent={parent}
          />
        );
      })}
    </div>
  );
}
const Section = ({ item, introductoryArticle, parent }) => {
  switch (item.attributes.slug) {
    case 'gioi-thieu-chung':
      return <Intro item={item} />;
    case 'tam-nhin-su-menh':
      return <Index item={item} introductoryArticle={introductoryArticle} />;
    case 'doi-tac':
      return <Page3 item={item} parent={parent} />;
    case 'lich-su-phat-trien':
      return <Page4 item={item} introductoryArticle={introductoryArticle} />;
    case 'ban-lanh-dao':
      return (
        <Page5edit item={item} introductoryArticle={introductoryArticle} />
      );
    case 'giai-thuong':
      return <Page6 item={item} introductoryArticle={introductoryArticle} />;
    case 'nhap':
      return <Test item={item} />;
    case 'bo-quy-tac-ung-xu':
      return <Page7 item={item} />;
    default:
      return <></>;
  }
};
