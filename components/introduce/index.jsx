import React, { useContext, useEffect, useMemo } from 'react';
import Page5edit from './Ban-lanh-dao/Page5edit';
import Page3 from './Gia-tri-cot-loi/Page3';
import Page6 from './Giai-thuong/Page6';
import Intro from './Introduce/intro';
import Page4 from './Lich-su-phat-trien/Page4';
import Page7 from './quy-tac-ung-xu/page7';
import Index from './Tamnhin-sumenh/index';
import { Context } from '../../constants/Context';
import { useRouter } from 'next/router';
import Test from './test/Test';

export default function Introduce({ category, parent, introductoryArticle }) {
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
      {data.map((item) => {
        return (
          <Section
            key={item.id}
            item={item}
            introductoryArticle={introductoryArticle}
            parent={parent}
            category={category}
          />
        );
      })}
    </div>
  );
}
const Section = ({ item, introductoryArticle, parent, category }) => {
  switch (item.attributes.slug) {
    case 'gioi-thieu-chung':
      return (
        <div id="gioi-thieu-chung">
          <Intro item={item} />
        </div>
      );
    case 'tam-nhin-su-menh':
      return (
        <div id="tam-nhin-su-menh">
          <Index item={item} introductoryArticle={introductoryArticle} />
        </div>
      );
    case 'doi-tac':
      return (
        <div id="doi-tac">
          <Page3 item={item} parent={parent} />
        </div>
      );
    case 'lich-su-phat-trien':
      return (
        <div id="lich-su-phat-trien">
          <Page4 item={item} introductoryArticle={introductoryArticle} />
        </div>
      );
    case 'ban-lanh-dao':
      return (
        <div id="ban-lanh-dao">
          <Page5edit
            item={item}
            category={category}
            introductoryArticle={introductoryArticle}
          />
        </div>
      );
    case 'giai-thuong':
      return (
        <div id="giai-thuong">
          <Page6 item={item} introductoryArticle={introductoryArticle} />
        </div>
      );
    case 'nhap':
      return (
        <div id="nhap">
          <Test item={item} />
        </div>
      );
    case 'bo-quy-tac-ung-xu':
      return (
        <div id="bo-quy-tac-ung-xu">
          <Page7 item={item} />
        </div>
      );

    default:
      return <></>;
  }
};
