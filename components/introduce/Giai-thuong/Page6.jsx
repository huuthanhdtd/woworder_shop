import React, { useEffect } from 'react';
import PauseOnHover from './slick';
import styles from './page6.module.scss';
import Aos from 'aos';

export default function Page6() {
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-sine',
    });
  }, []);
  return (
    <div className={styles.page6}>
      <h2 data-aos="fade-down" data-aos-duration="500" data-delay="500">
        GIẢI THƯỞNG
      </h2>
      <p data-aos="fade-down" data-aos-duration="500" data-delay="500">
        Những thành tựu của Tập đoàn Novaland được ghi nhận và vinh danh qua
        nhiều giải thưởng và danh hiệu uy tín trong và ngoài nước, thể hiện nỗ
        lực không ngừng của Tập đoàn trong việc tạo ra những sản phẩm chất lượng
        tốt. Quy hoạch tại các vị trí chiến lược, kiến tạo cộng đồng nhân văn
        tiên tiến với môi trường sống tiện nghi, hiện đại cho cư dân, góp phần
        vào sự phát triển bền vững của toàn xã hội.
      </p>
      <PauseOnHover />
      <div>
        {/* <img
          src="https://www.novaland.com.vn/Data/Sites/1/News/24/02-gioithieu.jpg"
          alt=""
          width="100%"
        /> */}
      </div>
    </div>
  );
}
