import React, { useContext, useEffect, useState } from 'react';
import Page5 from './Ban-lanh-dao/Page5';
import Page3 from './Gia-tri-cot-loi/Page3';
import Page6 from './Giai-thuong/Page6';
import Intro from './Introduce/intro';
import Page4 from './Lich-su-phat-trien/Page4';
import NavIntroduce from './NavIntro/NavIntroduce';
import Page7 from './quy-tac-ung-xu/page7';
import Page2 from './Tamnhin-sumenh/Page2';
import navs from '../../constants/navsBar.json';
import { Context } from '../../constants/Context';
import { useRouter } from 'next/router';

const data = navs[1];
export default function Introduce() {
  const { introduceTpye, isPushIntro } = useContext(Context);
  const router = useRouter();
  useEffect(() => {
    if (isPushIntro === true) {
      router.push(`#${introduceTpye}`);
    }
  }, [introduceTpye]);
  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', color: '#000' }}>
      <NavIntroduce />
      {data.list.map((item, index) => (
        <div key={index} id={item.idNav}>
          {index === 0 && <Intro />}
          {index === 1 && <Page2 />}
          {index === 2 && <Page3 />}
          {index === 3 && <Page4 />}
          {index === 4 && <Page5 />}
          {index === 5 && <Page6 />}
          {index === 6 && <Page7 />}
        </div>
      ))}
    </div>
  );
}
