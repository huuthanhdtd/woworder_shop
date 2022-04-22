import React, { useEffect, useState } from 'react';
import styles from './page5edit.module.scss';
import clsx from 'clsx';
import { Button, Grid, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Aos from 'aos';
import TransitionsModal from './Modal';
const staff = [
  {
    id: 1,
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
    id: 2,
    img: 'https://www.novaland.com.vn/Data/Sites/1/media/gioi-thieu/Ph%E1%BA%A1m%20Ti%E1%BA%BFn%20V%C3%A2n.jpg',
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
    id: 3,
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
export default function Page5edit() {
  //   const [active, setActive] = useState(false);
  const [ab, setAb] = useState(1);
  const [maps, setMap] = useState(staff[0]);
  //   const handleClose = () => setActive(false);
  const [openModal, setOpenModal] = React.useState(false);
  useEffect(() => {
    setMap(staff[ab - 1]);
  }, [ab]);
  const handleShow = (data) => {
    setOpenModal(true);
    setAb(data);
  };
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-sine',
      offset: 0,
    });
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.Page5}>
        <h2 data-aos="fade-down" data-aos-duration="500" data-delay="500">
          BAN LÃNH ĐẠO
        </h2>
        <Grid container spacing={2} className={styles.staff}>
          {staff &&
            staff.map((data, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                key={index}
                data-aos="fade-down"
                data-aos-duration="500"
                data-delay="500"
              >
                <div className={styles.media}>
                  <div className={styles.avatar}>
                    <img src={data.img} alt="" />
                  </div>
                  <div
                    className={styles.description}
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-delay="500"
                  >
                    <h4
                      data-aos="fade-left"
                      data-aos-duration="500"
                      data-delay="500"
                    >
                      {data.name}
                    </h4>
                    <p
                      data-aos="fade-left"
                      data-aos-duration="500"
                      data-delay="500"
                    >
                      <span>{data.position}</span>
                    </p>
                    <div
                      className={styles.title}
                      onClick={() => handleShow(data.id)}
                    >
                      <Typography variant="h6">
                        <span onClick={() => handleShow(data.id)}>
                          Xem thông tin chi tiết...
                        </span>
                      </Typography>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
        </Grid>
        <TransitionsModal
          setOpenModal={setOpenModal}
          openModal={openModal}
          img={maps.img}
          name={maps.name}
          Education={maps.Education}
          position={maps.position}
          specialized={maps.specialized}
        />
        {/* <div
          className={clsx(styles.info, {
            [styles.show]: active === true,
          })}
        >
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
          <Grid container spacing={2}>
            <Grid item sm={2}>
              <img src={maps.img} />
            </Grid>
            <Grid item sm={10}>
              <p> {maps.name && maps.name}</p>
              <ul>
                {maps.Education &&
                  maps.Education.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <p>{maps.Education}</p>
            </Grid>
          </Grid>
        </div> */}
      </div>
    </div>
  );
}
