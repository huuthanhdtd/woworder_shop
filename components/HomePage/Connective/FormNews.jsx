import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ActionAlerts from './Alert';
import Progress from '../../Progress';
import ReCAPTCHA from 'react-google-recaptcha';
import clsx from 'clsx';

import Alert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

import styles from './Form.module.scss';

function FormNews() {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const [isSending, setIsSending] = React.useState(false);

  const [formValue, setFormValue] = useState({
    email: '',
  });
  const { email } = formValue;
  const [validationMsg, setValidationMsg] = useState({});
  const [isCaptCha, setIsCaptCha] = useState(true);
  const [captChaActive, setCaptChaActive] = useState(false);

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    if (name === 'email' && isEmail(value)) {
      setCaptChaActive(true);
    } else {
      setCaptChaActive(false);
    }
    setFormValue({ ...formValue, [name]: value });
  };

  const handleOnChangeCaptCha = (e) => {
    setIsCaptCha(!isCaptCha);
  };

  const validatorAll = () => {
    const msg = {};

    // ----check email
    if (isEmpty(email)) {
      msg.email = 'Vui lòng nhập Email của bạn!';
    } else if (!isEmail(email)) {
      msg.email = 'Vui lòng nhập đúng Email của bạn!';
    }
    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const handleSubmit = () => {
    const isValid = validatorAll();
    if (!isValid) return;
    if (isValid) {
      const formData = {
        data: formValue,
      };
      setIsSending(true);
      setCaptChaActive(false);
      axios
        .post(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/contact-forms`,
          formData
        )
        .then(function (response) {
          setIsSending(false);
          setOpenSuccess(true);
        })
        .catch(function (error) {
          setIsSending(false);
          setOpenError(true);
        });
      setFormValue({
        email: '',
      });
    }
  };
  return (
    <form action="" className={styles.form}>
      <TextField
        placeholder="Nhập email"
        size="small"
        fullWidth
        value={email || ''}
        onChange={handleOnChange}
        name="email"
        type="text"
        error={validationMsg.email && true}
        helperText={validationMsg.email}
      />
      {isSending && (
        <div className={styles.progress}>
          <Progress />
        </div>
      )}
      <ActionAlerts
        className={styles.alert}
        setOpenSuccess={setOpenSuccess}
        openSuccess={openSuccess}
        setOpenError={setOpenError}
        openError={openError}
      />
      {/* </div> */}
      <ReCAPTCHA
        className={clsx(styles.captCha, {
          [styles.active]: captChaActive === true,
        })}
        sitekey="6LebPlggAAAAAJDKxPlK6GcLEKnB8Ug6RkVct02h"
        onChange={handleOnChangeCaptCha}
      />

      <Button
        fullWidth
        className={styles.button}
        onClick={handleSubmit}
        disabled={isCaptCha === true && true}
      >
        <p className={styles.textButton}>Đăng ký</p>
        {/* <SendRoundedIcon className={styles.icon} /> */}
      </Button>
    </form>
  );
}

export default FormNews;
