import React, { useContext, useEffect, useState } from 'react';
import Page5 from './Ban-lanh-dao/Page5';
import Page3 from './Gia-tri-cot-loi/Page3';
import Page6 from './Giai-thuong/Page6';
import Intro from './Introduce/intro';
import Page4 from './Lich-su-phat-trien/Page4';
import NavIntroduce from './NavIntro/NavIntroduce';
import Page7 from './quy-tac-ung-xu/page7';
import Page2 from './Tamnhin-sumenh/Page2';
import SisionImg from './Tamnhin-sumenh/ImgPage2';
import navs from '../../constants/navsBar.json';
import { Context } from '../../constants/Context';
import { useRouter } from 'next/router';
import Aos from 'aos';

const data = navs[1];
export default function Introduce() {
  const { introduceTpye, isPushIntro } = useContext(Context);
  const router = useRouter();
  useEffect(() => {
    if (isPushIntro === true) {
      router.push(`#${introduceTpye}`);
    }
    Aos.init({
      easing: 'ease-in-sine',
      offset: 100,
    });
  }, [introduceTpye]);
  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', color: '#000' }}>
      <NavIntroduce />
      {data.list.map((item, index) => (
        <div key={index} id={item.idNav}>
          <div data-aos="fade-down">{index === 0 && <Intro />}</div>
          <div>{index === 1 && <SisionImg />}</div>
          <div data-aos="fade-up">{index === 2 && <Page3 />}</div>
          <div data-aos="fade-up">{index === 3 && <Page4 />}</div>
          <div data-aos="fade-up">{index === 4 && <Page5 />}</div>
          <div data-aos="fade-up">{index === 5 && <Page6 />}</div>
          <div data-aos="fade-up">{index === 6 && <Page7 />}</div>
        </div>
      ))}
    </div>
  );
}
