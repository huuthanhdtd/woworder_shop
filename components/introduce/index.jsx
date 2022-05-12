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
import { reverse } from '../../lib/reverse';

// const data = navs[1];
export default function Introduce({ category, parent, introductoryArticle }) {
  const { introduceTpye, isPushIntro } = useContext(Context);
  const router = useRouter();
  useEffect(() => {
    if (isPushIntro === true) {
      router.push(`#${introduceTpye}`);
    }
  }, [introduceTpye]);
  const data = useMemo(() => {
    const rs = category.sort(function (a, b) {
      return a.attributes.priority - b.attributes.priority;
    });
    console.log(rs);
    return rs;
  }, []);
  useEffect(() => {
    category.map((i) => {
      console.log(i.attributes.slug);
    });

    console.log(category);
  }, []);

  const Render = (slug) => {
    // return <h1>112</h1>;
    switch (slug) {
      case 'gioi-thieu-chung':
        return <Intro category={category} />;
      case 'tam-nhin-su-menh':
        return (
          <Index
            category={category}
            introductoryArticle={introductoryArticle}
          />
        );
      case 'doi-tac':
        return <Page3 category={category} parent={parent} />;
      case 'lich-su-phat-trien':
        return (
          <Page4
            category={category}
            introductoryArticle={introductoryArticle}
          />
        );
      case 'ban-lanh-dao':
        return (
          <Page5edit
            category={category}
            introductoryArticle={introductoryArticle}
          />
        );
      case 'giai-thuong':
        return (
          <Page6
            category={category}
            introductoryArticle={introductoryArticle}
          />
        );
      case 'bo-quy-tac-ung-xu':
        return <Page7 category={category} />;
      default:
        return <></>;
      // break;
    }
  };
  return (
    <div style={{ margin: '0 auto', color: '#000' }}>
      {/* <NavIntroduce /> */}

      {data.map((item) => {
        switch (item.attributes.slug) {
          case 'gioi-thieu-chung':
            return <Intro category={category} />;
          case 'tam-nhin-su-menh':
            return (
              <Index
                category={category}
                introductoryArticle={introductoryArticle}
              />
            );
          case 'doi-tac':
            return <Page3 category={category} parent={parent} />;
          case 'lich-su-phat-trien':
            return (
              <Page4
                category={category}
                introductoryArticle={introductoryArticle}
              />
            );
          case 'ban-lanh-dao':
            return (
              <Page5edit
                category={category}
                introductoryArticle={introductoryArticle}
              />
            );
          case 'giai-thuong':
            return (
              <Page6
                category={category}
                introductoryArticle={introductoryArticle}
              />
            );
          case 'bo-quy-tac-ung-xu':
            return <Page7 category={category} />;
          default:
            return <></>;
          // break;
        }
      })}

      {/* {data.map((item) => (
        <div key={item.attributes.priority} id={item.idNav}>
          <Render slug={item.attributes.slug} />
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
      ))} */}

      {/* {category
        .sort((a, b) => a.atribute.priority - b.atribute.priority)
        .map((item) => (
          <Section key={item.id} data={item} />
        ))} */}
      {/* <Intro category={category} /> */}
      {/* <Index category={category} introductoryArticle={introductoryArticle} />
      <Page3 category={category} parent={parent} />
      <Page4 category={category} introductoryArticle={introductoryArticle} />
      <Page5edit
        category={category}
        introductoryArticle={introductoryArticle}
      />
      <Page6 category={category} introductoryArticle={introductoryArticle} />
      <Page7 category={category} /> */}
    </div>
  );
}
// const Section = ({ data }) => {
//   console.log('Data cua toi la:', data);
//   switch (data.id) {
//     case 6:
//       return <Intro data={data} />;
// case 7:
//   return;
// case 8:
//   return;
// case 9:
//   return;
// case 10:
//   return;
// case 11:
//   return;
// case 12:
//   return;
//     default:
//       return;
//   }
// };
