import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import Link from 'next/link';
import styles from './address.module.scss';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';
import TransitionsModal from './Modal';

export default function Address({ setMaps, contacts }) {
  const [selects, setSelects] = useState(1);
  const [openModal, setOpenModal] = React.useState(false);
  const [ab, setAb] = useState();
  const [validationMsg, setValidationMsg] = useState({});
  const [userName, setUserName] = useState('');
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    content: '',
  });
  const { name, email, phone, address, content } = formValue;
  const handleSelects = (e) => {
    setSelects(e.target.value);
  };
  useEffect(() => {
    const result = contacts.filter(
      (item) => item.attributes.priority === Number(selects)
    );
    const rs = result.sort(function (a, b) {
      return (
        parseInt(a.attributes.priority, 10) -
        parseInt(b.attributes.priority, 10)
      );
    });
    setAb(rs);
    setMaps(rs[0].attributes.locationURL);
  }, [selects]);

  const validatorAll = () => {
    const msg = {};
    if (isEmpty(name)) {
      msg.name = 'Vui lòng nhập tên của bạn!';
    }
    // ----check email
    if (isEmpty(email)) {
      msg.email = 'Vui lòng nhập Email của bạn!';
    } else if (!isEmail(email)) {
      msg.email = 'Vui lòng nhập đúng Email của bạn!';
    }
    if (isEmpty(phone)) {
      msg.phone = 'Vui lòng nhập SĐT của bạn!';
    }
    if (formValue.phone.length < 9) {
      msg.phone = 'Vui lòng nhập SĐT của bạn';
    }
    if (isEmpty(address)) {
      msg.address = 'Vui lòng nhập địa chỉ của bạn!';
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = () => {
    const isValid = validatorAll();
    if (!isValid) return;
    if (isValid) {
      const formData = {
        data: formValue,
      };
      axios
        .post('https://tipicicms.herokuapp.com/api/contact-forms', formData)
        .then(function (response) {
          setUserName(response.data.data.attributes.name);
          setOpenModal(true);
        })
        .catch(function (error) {
          alert('Đã có lỗi xảy ra. Vui lòng thử lại');
        });
      setFormValue({
        name: '',
        email: '',
        phone: '',
        address: '',
        content: '',
      });
    }
  };
  return (
    <div className={styles.address}>
      <div className={styles.mrb20}>
        <div className={styles.selection}>
          <select onChange={handleSelects}>
            {contacts &&
              contacts.map((data, index) => (
                <option key={index} value={data.attributes.priority}>
                  {data.attributes.name}
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
                <div className={styles.media_body}>
                  <div>
                    {data.attributes.address}
                    <br />
                  </div>
                  <br />
                  <br />
                  ĐT: {data.attributes.phone}
                  <br />
                  Fax: {data.attributes.fax}
                </div>
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
          value={name || ''}
          onChange={handleOnChange}
          name="name"
          type="text"
          label="Họ và tên"
          error={validationMsg.name && true}
          helperText={validationMsg.name}
          className={styles.text}
        />
        <TextField
          size="small"
          variant="outlined"
          onChange={handleOnChange}
          name="phone"
          type="number"
          label="Điện thoại"
          value={phone || ''}
          error={validationMsg.phone && true}
          helperText={validationMsg.phone}
          className={styles.textb}
        />
        <TextField
          size="small"
          variant="outlined"
          name="address"
          type="text"
          label="Địa chỉ"
          onChange={handleOnChange}
          value={address || ''}
          error={validationMsg.address && true}
          helperText={validationMsg.address}
          className={styles.text}
        />
        <TextField
          size="small"
          variant="outlined"
          name="email"
          type="email"
          label="Email"
          onChange={handleOnChange}
          value={email || ''}
          error={validationMsg.email && true}
          helperText={validationMsg.email}
          className={styles.textb}
        />
        <TextField
          variant="outlined"
          name="content"
          type="text"
          multiline
          rows={4}
          label="Nội Dung"
          onChange={handleOnChange}
          value={content || ''}
          error={validationMsg.content && true}
          helperText={validationMsg.content}
          className={styles.texta}
        />
        <Button onClick={handleSubmit}>GỬI ĐI</Button>
        <TransitionsModal
          userName={userName}
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      </div>
    </div>
  );
}
