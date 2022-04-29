import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import Link from 'next/link';
import styles from './address.module.scss';
// import isEmpty from 'validator/lib/isEmpty';
// import isEmail from 'validator/lib/isEmail';
// import axios from 'axios';
// import TransitionsModal from './Modal';

export default function Address({ setMaps }) {
  const [selects, setSelects] = useState('HCM');
  // const [openModal, setOpenModal] = React.useState(false);
  const [ab, setAb] = useState();
  // const [validationMsg, setValidationMsg] = useState({});
  // const [userName, setUserName] = useState('');
  // const [formValue, setFormValue] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   address: '',
  //   content: '',
  // });
  // const { name, email, phone, address, content } = formValue;
  const add = [
    {
      id: 'HCM',
      label: 'Trụ sở chính',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.134577659386!2d108.46542121437983!3d15.58445695638701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169dd043fcfaf8d%3A0x3ae83e857c9cc3cb!2zQ8O0bmcgVHkgQ-G7lSBQaOG6p24gxJDhuqd1IFTGsCAtIFBow6F0IFRyaeG7g24gxJDDtCBUaOG7iyDDgm4gUGjDug!5e0!3m2!1svi!2s!4v1650353934406!5m2!1svi!2s',
      data: [
        {
          title: [
            '28 Phan Bội Châu,',
            'Phường Hòa Thuận,',
            'Thành phố Tam Kỳ,',
            'Tỉnh Quảng Nam.',
          ],
          phone: '(84) 393 939 393',
          fax: '4000440174',
        },
      ],
    },
    {
      id: 'DN',
      label: 'Văn phòng đại diện tại Đà Nẵng',
      map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3225.0055201160344!2d108.23806314842774!3d16.003126420734528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c095b5d22ac0295!2zQ8O0bmcgdHkgw4JuIHBow7o!5e0!3m2!1svi!2sus!4v1650430739623!5m2!1svi!2sus',
      data: [
        {
          title: ['Hoà Quý', 'Ngũ Hành Sơn', 'Đà Nẵng'],
          phone: '(84) 797 797 797',
          fax: '4000440174-001',
        },
      ],
    },
  ];
  useEffect(() => {
    const result = add.filter((item) => item.id === selects);
    setAb(result);
    setMaps(result[0].map);
  }, [selects]);
  const handleSelects = (e) => {
    setSelects(e.target.value);
  };
  // const validatorAll = () => {
  //   const msg = {};
  //   if (isEmpty(name)) {
  //     msg.name = 'Vui lòng nhập tên của bạn!';
  //   }
  //   // ----check email
  //   if (isEmpty(email)) {
  //     msg.email = 'Vui lòng nhập Email của bạn!';
  //   } else if (!isEmail(email)) {
  //     msg.email = 'Vui lòng nhập đúng Email của bạn!';
  //   }
  //   if (isEmpty(phone)) {
  //     msg.phone = 'Vui lòng nhập SĐT của bạn!';
  //   }
  //   if (formValue.phone.length < 9) {
  //     msg.phone = 'Vui lòng nhập SĐT của bạn';
  //   }
  //   if (isEmpty(address)) {
  //     msg.address = 'Vui lòng nhập địa chỉ của bạn!';
  //   }

  //   setValidationMsg(msg);
  //   if (Object.keys(msg).length > 0) return false;
  //   return true;
  // };
  // const handleOnChange = (e) => {
  //   let { name, value } = e.target;
  //   setFormValue({ ...formValue, [name]: value });
  // };
  // const handleSubmit = () => {
  //   const isValid = validatorAll();
  //   if (!isValid) return;
  //   if (isValid) {
  //     const formData = {
  //       data: formValue,
  //     };
  //     axios
  //       .post('https://tipicicms.herokuapp.com/api/contact-forms', formData)
  //       .then(function (response) {
  //         setUserName(response.data.data.attributes.name);
  //         setOpenModal(true);
  //       })
  //       .catch(function (error) {
  //         alert('Đã có lỗi xảy ra. Vui lòng thử lại');
  //       });
  //     setFormValue({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       address: '',
  //       content: '',
  //     });
  //   }
  // };
  return (
    <div className={styles.address}>
      <div className={styles.mrb20}>
        <div className={styles.selection}>
          <select onChange={handleSelects}>
            {add &&
              add.map((data, index) => (
                <option key={index} value={data.id}>
                  {data.label}
                </option>
              ))}
          </select>
        </div>
      </div>
      <Grid container spacing={2} style={{ marginBottom: '10px' }}>
        <Grid item xs={12} sm={12} md={6}>
          {ab &&
            ab.map((data, index) => (
              <div className={styles.media} key={index}>
                <div className={styles.media_left}>
                  <img
                    src="https://www.novaland.com.vn/Data/Sites/1/media/Default/bullet.jpg"
                    alt=""
                  />
                </div>
                {ab[index].data &&
                  ab[index].data.map((e, i) => (
                    <div className={styles.media_body} key={i}>
                      {ab[index].data[i].title &&
                        ab[index].data[i].title.map((t, c) => (
                          <div key={c}>
                            {t}
                            <br />
                          </div>
                        ))}
                      <br />
                      <br />
                      ĐT: (84) {e.phone}
                      <br />
                      Fax: {e.fax}
                    </div>
                  ))}
              </div>
            ))}
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className={styles.mrb15}>
            <div className={styles.cskh}>
              <div className={styles.liststyle}>
                <img
                  src="https://www.novaland.com.vn/Data/Sites/1/media/Default/bullet.jpg"
                  alt=""
                />
              </div>
              <div className={styles.phone}>
                Tổng đài CSKH:
                <Link href={'tel:1900 63 6666'}>1900 63 6666</Link>
              </div>
            </div>
            <div className={styles.cskh}>
              <div className={styles.liststyle}>
                <img
                  src="https://www.novaland.com.vn/Data/Sites/1/media/Default/bullet.jpg"
                  alt=""
                />
              </div>
              <div className={styles.phone}>
                Thời gian làm việc: 7:00 - 22:00 (Hàng ngày, cả Thứ Bảy & CN)
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={styles.mail}>
        <h2>Mọi thắc mắc, ý kiến đóng góp xin vui lòng gửi về email:</h2>
        <TextField
          size="small"
          variant="outlined"
          // value={name || ''}
          // onChange={handleOnChange}
          name="name"
          type="text"
          label="Họ và tên"
          // error={validationMsg.name && true}
          // helperText={validationMsg.name}
          className={styles.text}
        />
        <TextField
          size="small"
          variant="outlined"
          // onChange={handleOnChange}
          name="phone"
          type="number"
          label="Điện thoại"
          // value={phone || ''}
          // error={validationMsg.phone && true}
          // helperText={validationMsg.phone}
          className={styles.textb}
        />
        <TextField
          size="small"
          variant="outlined"
          name="address"
          type="text"
          label="Địa chỉ"
          // onChange={handleOnChange}
          // value={address || ''}
          // error={validationMsg.address && true}
          // helperText={validationMsg.address}
          className={styles.text}
        />
        <TextField
          size="small"
          variant="outlined"
          name="email"
          type="email"
          label="Email"
          // onChange={handleOnChange}
          // value={email || ''}
          // error={validationMsg.email && true}
          // helperText={validationMsg.email}
          className={styles.textb}
        />
        <TextField
          variant="outlined"
          name="content"
          type="text"
          multiline
          rows={4}
          label="Nội Dung"
          // onChange={handleOnChange}
          // value={content || ''}
          // error={validationMsg.content && true}
          // helperText={validationMsg.content}
          className={styles.texta}
        />
        <Button>GỬI ĐI</Button>
        {/* <Button onClick={handleSubmit}>GỬI ĐI</Button> */}
        {/* <TransitionsModal
          userName={userName}
          setOpenModal={setOpenModal}
          openModal={openModal}
        /> */}
      </div>
    </div>
  );
}
