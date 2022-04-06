import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './page5.module.scss';

export default function Page5() {
  const [active, setActive] = useState(1);
  const handleClickNav = (index) => {
    setActive(index);
  };
  return (
    <div className={styles.page5} id="lanh-dao">
      <h2>BAN LÃNH ĐẠO</h2>
      <div className={styles.page5_about}>
        <ul
          style={{
            textAlign: 'center',
          }}
        >
          <li onClick={() => handleClickNav(1)}>
            <span
              className={
                Number(active) === 1 ? styles.active_tabs : styles.tabs
              }
            >
              Hội Đồng Quản trị
            </span>
          </li>
          <li onClick={() => handleClickNav(2)}>
            <span className={active === 2 ? styles.active_tabs : styles.tabs}>
              Ban giám đốc
            </span>
          </li>
          <div className={styles.Staff}>
            <div
              className={active === 1 ? styles.active_content : styles.content}
            >
              <Grid container spacing={2}>
                <Grid item sm={12} md={6} lg={6}>
                  <div className={styles.media}>
                    <div className={styles.avatar}>
                      <img
                        src="https://www.novaland.com.vn/Data/Sites/1/media/gioi-thieu/chu-tich-0322.png"
                        alt=""
                      />
                    </div>
                    <div className={styles.description}>
                      <h4>Ông Bùi Thanh Nhơn</h4>
                      <p style={{ textAlign: 'justify', color: '#898989' }}>
                        Nhà sáng lập, Chủ tịch Hội đồng Quản trị NovaGroup
                      </p>
                      <ul>
                        <li>
                          Cử nhân Nông nghiệp. Tốt nghiệp Executive MBA,
                          HSB-TUCK, Đại học Dartmouth, Hoa Kỳ.
                        </li>
                      </ul>
                      <p style={{ textAlign: 'justify', color: '#00b050' }}>
                        Con người NovaGroup với giá trị cốt lõi:
                      </p>
                      <p style={{ textAlign: 'justify', color: '#00b050' }}>
                        Hiệu quả - Chính trực - Chuyên nghiệp là tài sản quý báu
                        của Tập đoàn; là chìa khóa của sự thành công, sẽ sớm
                        hiện thực được Sứ mạng, Hoài bão của NovaGroup".
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item sm={12} md={6} lg={6}>
                  <div className={styles.media}>
                    <div className={styles.avatar}>
                      <img
                        src="https://www.novaland.com.vn/Data/Sites/1/media/gioi-thieu/chu-tich-0322.png"
                        alt=""
                      />
                    </div>
                    <div className={styles.description}>
                      <h4>Ông Bùi Thanh Nhơn</h4>
                      <p style={{ textAlign: 'justify', color: '#898989' }}>
                        Nhà sáng lập, Chủ tịch Hội đồng Quản trị NovaGroup
                      </p>
                      <ul>
                        <li>
                          Cử nhân Nông nghiệp. Tốt nghiệp Executive MBA,
                          HSB-TUCK, Đại học Dartmouth, Hoa Kỳ.
                        </li>
                      </ul>
                      <p style={{ textAlign: 'justify', color: '#00b050' }}>
                        Con người NovaGroup với giá trị cốt lõi:
                      </p>
                      <p style={{ textAlign: 'justify', color: '#00b050' }}>
                        Hiệu quả - Chính trực - Chuyên nghiệp là tài sản quý báu
                        của Tập đoàn; là chìa khóa của sự thành công, sẽ sớm
                        hiện thực được Sứ mạng, Hoài bão của NovaGroup".
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item sm={12} md={6} lg={6}>
                  <div className={styles.media}>
                    <div className={styles.avatar}>
                      <img
                        src="https://www.novaland.com.vn/Data/Sites/1/media/gioi-thieu/chu-tich-0322.png"
                        alt=""
                      />
                    </div>
                    <div className={styles.description}>
                      <h4>Ông Bùi Thanh Nhơn</h4>
                      <p style={{ textAlign: 'justify', color: '#898989' }}>
                        Nhà sáng lập, Chủ tịch Hội đồng Quản trị NovaGroup
                      </p>
                      <ul>
                        <li>
                          Cử nhân Nông nghiệp. Tốt nghiệp Executive MBA,
                          HSB-TUCK, Đại học Dartmouth, Hoa Kỳ.
                        </li>
                      </ul>
                      <p style={{ textAlign: 'justify', color: '#00b050' }}>
                        Con người NovaGroup với giá trị cốt lõi:
                      </p>
                      <p style={{ textAlign: 'justify', color: '#00b050' }}>
                        Hiệu quả - Chính trực - Chuyên nghiệp là tài sản quý báu
                        của Tập đoàn; là chìa khóa của sự thành công, sẽ sớm
                        hiện thực được Sứ mạng, Hoài bão của NovaGroup".
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>

            <div
              className={active === 2 ? styles.active_content : styles.content}
            >
              <Grid container spacing={2}>
                <Grid item sm={12} md={6} lg={6}>
                  <div className={styles.media}>
                    <div className={styles.avatar}>
                      <img
                        src="https://www.novaland.com.vn/Data/Sites/1/media/gioi-thieu/Ph%E1%BA%A1m%20Ti%E1%BA%BFn%20V%C3%A2n.jpg"
                        alt=""
                      />
                    </div>
                    <div className={styles.description}>
                      <h4>Ông Bùi Thanh Nhơn</h4>
                      <p style={{ textAlign: 'justify', color: '#898989' }}>
                        Nhà sáng lập, Chủ tịch Hội đồng Quản trị NovaGroup
                      </p>
                      <ul>
                        <li>
                          Cử nhân Nông nghiệp. Tốt nghiệp Executive MBA,
                          HSB-TUCK, Đại học Dartmouth, Hoa Kỳ.
                        </li>
                      </ul>
                      <p style={{ textAlign: 'justify', color: '#00b050' }}>
                        Con người NovaGroup với giá trị cốt lõi:
                      </p>
                      <p style={{ textAlign: 'justify', color: '#00b050' }}>
                        Hiệu quả - Chính trực - Chuyên nghiệp là tài sản quý báu
                        của Tập đoàn; là chìa khóa của sự thành công, sẽ sớm
                        hiện thực được Sứ mạng, Hoài bão của NovaGroup".
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item sm={12} md={6} lg={6}>
                  <div className={styles.media}>
                    <div className={styles.avatar}>
                      <img
                        src="https://www.novaland.com.vn/Data/Sites/1/media/gioi-thieu/L%C3%AA%20Qu%E1%BB%91c%20H%C3%B9ng.jpg"
                        alt=""
                      />
                    </div>
                    <div className={styles.description}>
                      <h4>Ông Bùi Thanh Nhơn</h4>
                      <p style={{ textAlign: 'justify', color: '#898989' }}>
                        Nhà sáng lập, Chủ tịch Hội đồng Quản trị NovaGroup
                      </p>
                      <ul>
                        <li>
                          Cử nhân Nông nghiệp. Tốt nghiệp Executive MBA,
                          HSB-TUCK, Đại học Dartmouth, Hoa Kỳ.
                        </li>
                      </ul>
                      <p style={{ textAlign: 'justify', color: '#00b050' }}>
                        Con người NovaGroup với giá trị cốt lõi:
                      </p>
                      <p style={{ textAlign: 'justify', color: '#00b050' }}>
                        Hiệu quả - Chính trực - Chuyên nghiệp là tài sản quý báu
                        của Tập đoàn; là chìa khóa của sự thành công, sẽ sớm
                        hiện thực được Sứ mạng, Hoài bão của NovaGroup".
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item sm={12} md={6} lg={6}>
                  <div className={styles.media}>
                    <div className={styles.avatar}>
                      <img
                        src="https://www.novaland.com.vn/Data/Sites/1/media/gioi-thieu/Nguy%E1%BB%85n%20M%E1%BB%B9%20H%E1%BA%A1nh.jpg"
                        alt=""
                      />
                    </div>
                    <div className={styles.description}>
                      <h4>Ông Bùi Thanh Nhơn</h4>
                      <p style={{ textAlign: 'justify', color: '#898989' }}>
                        Nhà sáng lập, Chủ tịch Hội đồng Quản trị NovaGroup
                      </p>
                      <ul>
                        <li>
                          Cử nhân Nông nghiệp. Tốt nghiệp Executive MBA,
                          HSB-TUCK, Đại học Dartmouth, Hoa Kỳ.
                        </li>
                      </ul>
                      <p style={{ textAlign: 'justify', color: '#00b050' }}>
                        Con người NovaGroup với giá trị cốt lõi:
                      </p>
                      <p style={{ textAlign: 'justify', color: '#00b050' }}>
                        Hiệu quả - Chính trực - Chuyên nghiệp là tài sản quý báu
                        của Tập đoàn; là chìa khóa của sự thành công, sẽ sớm
                        hiện thực được Sứ mạng, Hoài bão của NovaGroup".
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </ul>
      </div>
      <div className={styles.descimg}>
        <img
          src="https://www.novaland.com.vn/Data/Sites/1/News/24/02-gioithieu.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
