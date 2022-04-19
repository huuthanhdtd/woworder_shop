import { StylesContext } from '@material-ui/styles';
import { Parallax } from 'react-parallax';
import styles from './imgPage2.module.scss';

const SisionImg = () => (
  <Parallax
    bgImage="/gioi-thieu/nasa.jpg"
    strength={800}
    className={styles.image}
  >
    <div className={styles.page2}>
      <h2>TẦM NHÌN - SỨ MỆNH</h2>
      <div className={styles.page2_about}>
        <div className={styles.mrb10}></div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className={styles.vision}
        >
          <p>
            <span>Tầm nhìn</span>
          </p>
          <hr />
          <p data-aos="fade-up" data-aos-duration="1000">
            Novaland là Nhà phát triển Bất động sản hàng đầu Việt Nam:{' '}
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            - Bất động sản Công nghiệp
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            - Bất động sản Du lịch
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            - Bất động sản Công nghiệp
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          data-delay="500"
          className={styles.mission}
        >
          <p>
            <span>Sứ mệnh</span>
          </p>
          <hr />
          <p data-aos="fade-up" data-aos-duration="1500">
            - Bất động sản Đô thị
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            - Xây dựng điểm đến
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            - Vun đắp niềm vui
          </p>
        </div>
        <div className={styles.mrb10}></div>
      </div>
    </div>
  </Parallax>
);
export default SisionImg;
