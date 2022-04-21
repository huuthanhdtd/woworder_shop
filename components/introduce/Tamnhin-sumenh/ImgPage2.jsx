import { Parallax } from 'react-parallax';
import styles from './imgPage2.module.scss';

const SisionImg = () => (
  <div className={styles.mrb8}>
    <div className={styles.page2}>
      <h2 data-aos="fade-down" data-aos-duration="400" data-deylay="500">
        TẦM NHÌN - SỨ MỆNH
      </h2>
      <div className={styles.page2_about}>
        <div className={styles.mrb10}></div>
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-deylay="500"
          className={styles.vision}
        >
          <h3>Tầm nhìn</h3>
          <hr />
          <p data-aos="fade-up" data-aos-duration="500" data-deylay="500">
            Novaland là Nhà phát triển Bất động sản hàng đầu Việt Nam:{' '}
          </p>
          <p data-aos="fade-up" data-aos-duration="500" data-deylay="500">
            - Bất động sản Công nghiệp
          </p>
          <p data-aos="fade-up" data-aos-duration="500" data-deylay="500">
            - Bất động sản Du lịch
          </p>
          <p data-aos="fade-up" data-aos-duration="500" data-deylay="500">
            - Bất động sản Công nghiệp
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          data-delay="500"
          className={styles.mission}
        >
          <h3>Sứ mệnh</h3>
          <hr />
          <p data-aos="fade-up" data-aos-duration="500" data-deylay="500">
            - Bất động sản Đô thị
          </p>
          <p data-aos="fade-up" data-aos-duration="500" data-deylay="500">
            - Xây dựng điểm đến
          </p>
          <p data-aos="fade-up" data-aos-duration="500" data-deylay="500">
            - Vun đắp niềm vui
          </p>
        </div>
        <div className={styles.mrb10}></div>
      </div>
    </div>
    <div className={styles.section}>
      <Parallax
        bgImage="/Banner/banner.jpg"
        strength={300}
        className={styles.image}
      ></Parallax>
    </div>
  </div>
);
export default SisionImg;
