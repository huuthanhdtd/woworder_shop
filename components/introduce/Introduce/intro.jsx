import React from 'react';
import styles from './intro.module.scss';
export default function Intro({ nav }) {
  const intro = [
    {
      title: 'SƠ LƯỢC VỀ CÔNG TY',
      img: 'https://www.novaland.com.vn/Data/Sites/1/media/gioi-thieu/a1.jpg',
      list: [
        'NovaGroup hướng đến Tầm nhìn: là Tập đoàn đầu tư và phát triển kinh tế hàng đầu Việt Nam. Hoạt động trong các lĩnh vực: Dịch vụ - Công nghệ - Công nghiệp.',
        'Sứ mệnh: NovaGroup - điểm kết nối cộng đồng doanh nghiệp.',
        '“NovaGroup bằng nguồn lực trong hệ sinh thái của Tập đoàn; kết nối, hỗ trợ Doanh nghiệp Việt tạo ra những sản phẩm vượt trội, những dịch vụ trải nghiệm đẳng cấp để cùng hòa nhập vào Cộng đồng Quốc tế”.',
        'Tập đoàn Novaland - nhân tố chính trong hệ sinh thái NovaGroup - là Thương hiệu uy tín hàng đầu trong lĩnh vực đầu tư và phát triển BĐS tại Việt Nam.',
        'Trên tổng quỹ đất khoảng 10.600 ha, Tập đoàn Novaland hiện phát triển 03 dòng sản phẩm chủ lực, gồm: BĐS Đô thị, BĐS Du lịch, và BĐS Công nghiệp.',
        'Trải qua hành trình 30 năm hình thành và phát triển, Novaland hiện sở hữu danh mục gần 50 dự án BĐS; không chỉ dừng lại ở các dự án BĐS nhà ở tại Trung tâm TP.HCM, Tập đoàn còn đầu tư mạnh mẽ loạt dự án BĐS quy mô lớn, với những công trình và sản phẩm dẫn đầu xu hướng, tác động tích cực đến quá trình phát triển đô thị và phát triển du lịch tại các tỉnh thành phía Nam.',
        'Novaland là Công ty niêm yết trong nhóm VN30, và niêm yết trái phiếu trên Sở Giao dịch Chứng khoán Singapore.',
      ],
    },
  ];
  return (
    <div className={styles.page}>
      <h1>Giới thiệu chung</h1>
      {intro &&
        intro.map((data, index) => (
          <div className={styles.MainIntroduction} key={index}>
            <div className={styles.CompanyProfile}>
              <p>
                <strong>{data.title}</strong>
              </p>
              {intro[index] &&
                intro[index].list.map((item, i) => <p key={i}>{item}</p>)}
            </div>
            <div className={styles.ImgCompany}>
              <img src={data.img} width="100%" />
            </div>
          </div>
        ))}

      <div>
        <img
          src="https://www.novaland.com.vn/Data/Sites/1/News/20/gioithieu-1.jpg"
          width="100%"
        />
      </div>
    </div>
  );
}
