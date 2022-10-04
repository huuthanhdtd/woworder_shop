import { Grid } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles.module.scss';

export default function Introduce() {
  const router = useRouter();
  console.log(router);
  return (
    <div className={styles.introduce}>
      <div className={styles.breadcrumb_shop}>
        <Link href="/"> Trang chủ</Link> / Giới thiệu
      </div>
      <div className={styles.about1_introduce}>
        <div className={styles.title_page}>
          <p>KHÁNH BÙI</p>
          <h2>VỀ CHÚNG TÔI</h2>
        </div>
        <Grid container className={styles.sitebox_content}>
          <Grid item className={styles.content} md={6} sm={6} xs={12}>
            Được thành lập vào năm 2016, Khánh Bùi chuyên cung cấp các mặt hàng
            cho mẹ và bé chuẩn nội địa các nước, kèm bill, bay air với slogan
            “MUA LẺ VỚI GIÁ SỈ".
          </Grid>
          <Grid item className={styles.content} md={6} sm={6} xs={12}>
            Khánh Bùi cũng chính là mục đích kinh doanh của chúng tôi, mong muốn
            mỗi sản phẩm và tư vấn mà chúng tôi mang đến sẽ giúp cho mỗi người
            mẹ được hạnh phúc một cách trọn vẹn.
          </Grid>
        </Grid>
      </div>

      <Grid container className={styles.Grid_intro}>
        <Grid item md={6} sm={6} xs={12} className={styles.image}>
          <Image src="/cart/sua.png" width={570} height={669} />
        </Grid>
        <Grid item md={6} sm={6} xs={12} className={styles.commit}>
          <div className={styles.title_commit}>
            <p>CAM KẾT CỦA CHÚNG TÔI</p>
            <h2>CÂU CHUYỆN THƯƠNG HIỆU</h2>
          </div>
          <p>
            Khánh Bùi cam kết mang chỉ mang đến những sản phẩm nội địa được mua
            trực tiếp tại nước ngoài hoặc nhập khẩu chính hãng bao gồm: bỉm, sữa
            công thức, thức ăn dặm, vitamin và thực phẩm chức năng cho mẹ và bé
            cho đến dụng cụ chăm sóc, xe đẩy, xe tập đi, đồ chơi cho bé...
          </p>
          <p>
            Tại Khánh Bùi, chúng tôi còn cung cấp những sản phẩm gia dụng nội
            địa để chăm sóc mẹ và cả nhà. Hơn 2000 sản phẩm đa dạng tại Happy
            Mommy đều thuộc những thương hiệu lớn như Meiji, Merries, dm, HiPP,
            Gerber, Aptamil, Abbott, PediaSure, Nestle, Combi, Ildong Foodis...
            từ Nhật, Nga, Đức, Pháp, Anh, Mỹ, Úc và Hàn Quốc.
          </p>
          <p>
            Với kiến thức và kinh nghiệm cùng với sự yêu thích trẻ con, đội ngũ
            Khánh Bùi tự tin mang đến những tư vấn chuẩn xác và phù hợp cho con
            của bạn.
          </p>
          <p>Khánh Bùi - Siêu thị mẹ và bé - Nơi hành trình làm mẹ bắt đầu!</p>
        </Grid>
      </Grid>
      <div className={styles.about_service}>
        <Grid container className={styles.services}>
          <Grid item sm={4} xs={12} className={styles.support}>
            <Image src="/cart/service1.png" width={50} height={50} />
            <div className={styles.content_support}>
              <h2>Hỗ trợ khách hàng 24/7</h2>
              <p>
                Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất
                lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường dây chăm
                sóc khách hàng của chúng tôi.
              </p>
            </div>
          </Grid>
          <Grid item sm={4} xs={12} className={styles.support}>
            <Image src="/cart/a1.png" width={50} height={50} />
            <div className={styles.content_support}>
              <h2>Đổi trả, hoàn tiền</h2>
              <p>
                Nếu nhận được sản phẩm bị lỗi ngoại quan (có dấu hiệu bị trầy
                xước, hư hỏng bên ngoài, bể vỡ) , quý khách vui lòng liên hệ
                trong vòng 48h kể từ khi nhận hàng thành công.
              </p>
            </div>
          </Grid>
          <Grid item sm={4} xs={12} className={styles.support}>
            <Image src="/cart/a2.png" width={50} height={50} />
            <div className={styles.content_support}>
              <h2>Chính sách bảo mật </h2>
              <p>
                Chúng tôi coi trọng việc bảo mật thông tin và sử dụng các biện
                pháp tốt nhất để bảo vệ thông tin cũng như việc thanh toán của
                khách hàng.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
