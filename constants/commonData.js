export const footerData = {
  introduce: {
    title: 'Giới thiệu Khánh Bùi Order',
    description:
      'Khánh Bùi được thành lập từ 2006, chuyên cung cấp các mặt hàng cho mẹ và bé chuẩn nội địa các nước, kèm bill, bay air với slogan "MUA LẺ VỚI GIÁ SỈ". Khánh Bùi chuyên tã sữa, thực phẩm chức năng, thức ăn dặm, đồ chơi, đồ dùng gia đình và cho mẹ giá tốt.',
  },
  address: {
    address: '229 Lê Thanh Nghị, quần Hải Châu, Tp. Đà Nẵng',
    hotline: '(084) 986 779 777',
    email: 'khanhbui.vn@gmail.com',
  },
  support: {
    title: 'Hỗ trợ khách hàng',
    items: [
      { text: 'Giới thiệu', link: '/introduce', slug: 'gioi-thieu' },
      {
        text: 'Ưu đãi Khánh Bùi',
        link: '/support',
        slug: 'uu-dai-thanh-vien-khanh-bui',
      },
      { text: 'Chính sách vận chuyển' },
      { text: 'Chính sách thanh toán' },
      { text: 'Chính sách đổi trả' },
      { text: 'Chính sách bảo mật' },
      { text: 'Điều khoản dịch vụ' },
      { text: 'Liên hệ', link: '/contact', slug: 'lien-he' },
    ],
  },
  takecare: {
    title: 'Chăm sóc khách hàng',
    phone: '(084) 986 779 777',
    email: 'khanhbui.vn@gmail.com',
    connect: 'Kết nối với Khanh Bui',
  },
};

export const orderButton = [
  {
    name: 'Phổ biến',
    type: 'popular',
  },
  {
    name: 'Mới nhất',
    type: 'new',
  },
  {
    name: 'Bán chạy',
    type: 'hot',
  },
];

export const sortBarHome = [
  {
    name: 'Được yêu thích',
    type: 'like',
  },
  {
    name: 'Mới về',
    type: 'new',
  },
  {
    name: 'Bán chạy',
    type: 'hot',
  },
];

export const orderPrice = [
  {
    name: 'Từ thấp đến cao',
    type: 'ascending',
  },
  {
    name: 'Từ cao đến thấp',
    type: 'descending',
  },
];

export const myAccount = [
  {
    name: 'Thông tin tài khoản',
    link: '/account',
  },
  {
    name: 'Danh sách đơn hàng',
    link: '/account/order-list',
  },
  {
    name: 'Danh sách địa chỉ',
    link: '/account/address',
  },
  {
    name: 'Đăng xuất',
    link: '/',
  },
];
