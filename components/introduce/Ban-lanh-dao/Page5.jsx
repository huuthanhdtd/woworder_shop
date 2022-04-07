import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './page5.module.scss';

export default function Page5() {
  const [active, setActive] = useState(1);
  const handleClickNav = (index) => {
    setActive(index);
  };
  const staff = [
    {
      img: 'https://www.novaland.com.vn/Data/Sites/1/media/gioi-thieu/chu-tich-0322.png',
      name: 'Ông Bùi Thành Nhơn',
      position: 'Nhà sáng lập, Chủ tịch Hội đồng Quản trị NovaGroup',
      Education: [
        'Cử nhân Nông nghiệp. Tốt nghiệp Executive MBA, HSB-TUCK, Đại học Dartmouth, Hoa Kỳ.',
        'Là một trong những chủ doanh nghiệp tư nhân đầu tiên tại TP.HCM từ những năm 1980. Thành viên Tổ chức doanh nhân thế giới (YPO - WPO).',
      ],
      specialized:
        'Ngày 20/01/2022, để tập trung lãnh đạo NovaGroup giai đoạn hậu tái cấu trúc, ông Bùi Thành Nhơn quyết định trao quyền và vị trí Chủ tịch Hội đồng Quản trị Công ty Cổ phần Tập đoàn Đầu tư Địa ốc No Va (Tập đoàn Novaland) cho ông Bùi Xuân Huy và bộ máy lãnh đạo mới.',
    },
    {
      img: 'https://www.novaland.com.vn/Data/Sites/1/media/gioi-thieu/anh-huy-2022.jpg',
      name: 'Ông Bùi Xuân Huy',
      position: 'Chủ tịch Hội đồng Quản trị',
      Education: [
        'Ngày 20/01/2022, ông Bùi Xuân Huy được bổ nhiệm vị trí Chủ tịch Hội đồng Quản trị Công ty Cổ phần Tập đoàn Đầu tư Địa ốc No Va (Tập đoàn Novaland)',
        'Tốt nghiệp Kỹ sư Xây dựng và Quản lý Công nghiệp, Đại học Bách khoa TP.HCM',
        'Thạc sỹ Quản trị Kinh doanh quốc tế (DAS/EMBA), Đại học North-Western Thụy Sỹ liên kết với FSB',
        'Gắn bó với Novaland tròn 10 năm. Đặc biệt, giai đoạn 2020 - 2021, trong bối cảnh thị trường BĐS và nền kinh tế nói chung gặp nhiều khó khăn do ảnh hưởng từ dịch bệnh toàn cầu, ông Huy đã bản lĩnh điều hành hoạt động kinh doanh của Tập đoàn phát triển bình ổn, đạt được các mục tiêu tăng trưởng trọng yếu như đã đặt ra tại các kỳ Đại hội đồng Cổ đông.',
        'Với sự tín nhiệm cao từ Hội đồng Quản trị, ông Huy được vinh danh là Lãnh đạo xuất sắc 6 năm liền. Ông cũng được ghi nhận là Doanh nhân BĐS tiêu biểu của năm 2020 và năm 2021 do Tạp chí Nhịp cầu Đầu tư bình chọn. Thương hiệu Novaland những năm gần đây cũng liên tục nhận được nhiều giải thưởng uy tín trong và ngoài nước, như: Nhà phát triển BĐS xuất sắc nhất Việt Nam 2021 (Tạp chí Euro Money), Nhà phát triển BĐS xuất sắc nhất 2021 (Tạp chí Nhịp cầu Đầu tư), Top 50 doanh nghiệp niêm yết tốt nhất 2021 (Forbes), Nơi làm việc tốt nhất Châu Á, Top 10 Báo Cáo Thường Niên,...',
      ],
      specialized:
        'Ông Huy có hơn 27 năm kinh nghiệm trong lĩnh vực xây dựng và quản lý dự án, từng nắm giữ các chức vụ cấp cao tại các công ty xây dựng, tư vấn thiết kế và quản lý dự án đa quốc gia như Công ty Meinhardt Việt Nam và Công ty HBP.',
    },
    {
      img: 'https://www.novaland.com.vn/Data/Sites/1/media/gioi-thieu/chi-chau-0322.png',
      name: 'Bà Hoàng Thu Châu',
      position: 'Chủ tịch Hội đồng Quản trị',
      Education: [
        'Thạc sỹ Quản trị Kinh doanh (DAS/EMBA), Đại học North-Western Thụy Sỹ phối hợp với FSB',
        'Hơn 18 năm kinh nghiệm quản lý tại Novaland Group',
        '2003 - 2010: Kế toán trưởng tại Công ty Cổ phần Tập đoàn Đầu tư Địa ốc No Va',
        '2010 - 2012: Kế toán trưởng tại Công ty Cổ phần Đầu tư No Va',
        '2012 - 11/2016: Phó Tổng Giám đốc Công ty Cổ phần Tập đoàn Đầu tư Địa ốc No Va',
        '11/2016 đến nay: Thành viên Hội đồng Quản trị kiêm Phó Tổng Giám đốc Công ty Cổ phần Tập đoàn Đầu tư Địa ốc No Va',
      ],
      specialized:
        'Ông Huy có hơn 27 năm kinh nghiệm trong lĩnh vực xây dựng và quản lý dự án, từng nắm giữ các chức vụ cấp cao tại các công ty xây dựng, tư vấn thiết kế và quản lý dự án đa quốc gia như Công ty Meinhardt Việt Nam và Công ty HBP.',
    },
  ];
  const CEO = [
    {
      img: 'https://www.novaland.com.vn/Data/Sites/1/media/gioi-thieu/anh-huyen-2022.jpg',
      name: '	Ông Nguyễn Ngọc Huyên',
      position: 'Tổng Giám đốc',
      education: [
        'Ông Huyên tốt nghiệp Kỹ sư Xây dựng tại Đại học Giao thông vận tải Hà Nội và lấy bằng Thạc sỹ Quản lý Dự án và Xây dựng tại Đại học Bách khoa TP.HCM. Ông Huyên đã có gần 20 năm kinh nghiệm trong lĩnh vực quản lý xây dựng công trình dân dụng, tư vấn thiết kế, phát triển và quản lý dự án hạ tầng giao thông trọng điểm (Hầm vượt sông Sài Gòn, đại lộ Đông Tây TP.HCM; Cao tốc TP.HCM - Long Thành - Dầu Giây…).',
      ],
      specialized: [
        'Ông Nguyễn Ngọc Huyên giữ chức Tổng Giám đốc Tập đoàn Novaland từ ngày 20/01/2022.',
        'Ông Huyên được bổ nhiệm làm Phó Tổng Giám đốc Tập đoàn Novaland từ tháng 10/2021 trên cơ sở những đóng góp nổi bật trong công tác quản lý điều hành dự án cũng như năng lực quản trị đầy tiềm năng.',
        'Gia nhập Tập đoàn Novaland năm 2020, Ông Nguyễn Ngọc Huyên từng giữ chức Giám đốc Điều hành Dự án Đô thị. Ông Huyên đã có những đóng góp quan trọng về quy hoạch tổng thể Aqua City - Đô thị sinh thái thông minh quy mô 1,000ha tại Đồng Nai và tham gia trực tiếp về mặt quản lý triển khai dự án như việc áp dụng các giải pháp mới về vật liệu xây dựng thân thiện môi trường, hướng tới phát triển bền vững; tiên phong nghiên cứu công nghệ Smart City để phát triển các dự án đô thị ứng dụng năng lượng sạch, xanh, công nghệ quản lý thông minh…',
      ],
    },
    {
      img: 'https://www.novaland.com.vn/Data/Sites/1/media/gioi-thieu/caoly-0405.png',
      name: '	Bà Võ Thị Cao Ly',
      position: 'Phó Tổng Giám đốc',
      education: [
        'Bà Ly tốt nghiệp cử nhân Xây dựng Dân dụng & Công nghiệp tại Đại học Kiến trúc TP.HCM; cử nhân kinh tế BĐS tại trường Đại học Kinh tế TP.HCM.',
      ],
      specialized: [
        'Bà Võ Thị Cao Ly giữ chức Phó Tổng Giám đốc Tập đoàn Novaland từ ngày 20/01/2022.',
        'Bà Võ Thị Cao Ly gia nhập Novaland từ tháng 10/2015, có gần 15 năm kinh nghiệm trong lĩnh vực quản lý xây dựng, phát triển và quản lý dự án BĐS.',
        'Từ năm 2018, khi Novaland chính thức bước vào thị trường BĐS du lịch nghỉ dưỡng, Bà Ly tiếp nhận chức Giám đốc Khối Điều hành Dự án Nghỉ dưỡng và trực tiếp tham gia điều hành toàn bộ mảng quy hoạch, phát triển và xây dựng đến vận hành các dự án trọng điểm của Tập đoàn. Bà Ly có thành tích nổi bật trong việc dẫn dắt đội ngũ hoàn thành đúng tiến độ loạt Đô thị Du lịch quy mô lớn như NovaWorld Phan Thiet (Bình Thuận), NovaWorld Ho Tram (Bà Rịa - Vũng Tàu)… Giai đoạn vừa qua, Bà Ly được vinh danh là Lãnh đạo xuất sắc 5 năm liên tiếp.',
      ],
    },
  ];
  return (
    <div className={styles.page5}>
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
              HỘI ĐÔNG QUẢN TRỊ
            </span>
          </li>
          <li onClick={() => handleClickNav(2)}>
            <span className={active === 2 ? styles.active_tabs : styles.tabs}>
              BAN GIÁM ĐỐC
            </span>
          </li>
          <div className={styles.Staff}>
            <div
              className={active === 1 ? styles.active_content : styles.content}
            >
              <Grid container spacing={2}>
                {staff &&
                  staff.map((data, index) => (
                    <Grid item sm={12} md={6} lg={6} key={index}>
                      <div className={styles.media}>
                        <div className={styles.avatar}>
                          <img src={data.img} alt="" />
                        </div>
                        <div className={styles.description}>
                          <h4>{data.name}</h4>
                          <p>
                            <span>{data.position}</span>
                          </p>
                          <ul>
                            {staff[index].Education &&
                              staff[index].Education.map((i, e) => (
                                <li key={e}>{i}</li>
                              ))}
                          </ul>
                          <p>{data.specialized}</p>
                        </div>
                      </div>
                    </Grid>
                  ))}
              </Grid>
            </div>
            <div
              className={active === 2 ? styles.active_content : styles.content}
            >
              <Grid container spacing={2}>
                {CEO &&
                  CEO.map((data, index) => (
                    <Grid item sm={12} md={6} lg={6} key={index}>
                      <div className={styles.media}>
                        <div className={styles.avatar}>
                          <img src={data.img} alt="" />
                        </div>
                        <div className={styles.description}>
                          <h4>{data.name}</h4>
                          <p>
                            <span>{data.position}</span>
                          </p>
                          <ul>
                            {CEO[index].education &&
                              CEO[index].education.map((i, e) => (
                                <li key={e}>{i}</li>
                              ))}
                          </ul>
                          {CEO[index].specialized &&
                            CEO[index].specialized.map((item, e) => (
                              <p key={e}>{item}</p>
                            ))}
                        </div>
                      </div>
                    </Grid>
                  ))}
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
