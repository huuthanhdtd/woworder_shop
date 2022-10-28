import clsx from 'clsx';
import React, { useState } from 'react';
import { RiMessengerLine, RiCloseFill } from 'react-icons/ri';
import { FaFacebookMessenger } from 'react-icons/fa';
import contactImg from '../../assets/image/contact.svg';
import { GoMail } from 'react-icons/go';
import { SiZalo } from 'react-icons/si';
import { MdLocationOn } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import styles from './styles.module.scss';
import Link from 'next/link';
import messengers from '../../assets/image/messengers.svg';
import Image from 'next/image';

export default function ContactFixed() {
  const contact = [
    {
      name: 'Gọi ngay cho Khánh Bùi',
      icon: <BsTelephoneFill fontSize={25} />,
      link: 'tel:0986779777',
    },
    {
      name: 'Đóng góp ý kiến giao diện cho Khánh Bùi',
      icon: <GoMail fontSize={30} />,
      link: 'mailto:contact@gmail.com ',
    },
    {
      name: 'Nhận tư vấn qua zalo',
      icon: <SiZalo fontSize={30} />,
      link: 'http://zalo.me/0986779777',
    },
    {
      name: 'Xem địa chỉ doanh nghiệp',
      // icon: <RiMessengerLine fontSize={40} />,
      img: messengers.src,
      link: 'https://www.facebook.com/khanhbuiorder',
    },
  ];
  const [openContact, setOpenContact] = useState(false);
  const handleOpen = () => {
    if (openContact === true) {
      setOpenContact(false);
    } else {
      setOpenContact(true);
    }
  };

  const newTab = (link) => {
    const url = link;
    window.open(url);
  };

  return (
    <div className={styles.contact}>
      <div className={styles.bgcl}></div>
      <div
        className={clsx(styles.hoverContact, {
          [styles.active]: openContact == true,
        })}
        onClick={handleOpen}
      >
        Liên hệ
      </div>
      <div className={styles.animation}></div>
      <div className={styles.animation1}></div>
      <div className={styles.contactFixed} onClick={handleOpen}>
        {!openContact ? (
          <>
            <Image src={contactImg.src} width={20} height={20} />
          </>
        ) : (
          <RiCloseFill fontSize={20} />
        )}
      </div>

      <div
        className={clsx(styles.modal, {
          [styles.active]: openContact === true,
        })}
        onClick={handleOpen}
      ></div>
      <div
        className={clsx(styles.mes, { [styles.active]: openContact == true })}
      >
        <ul className={styles.ul_mes}>
          {contact?.map((data, index) => (
            <div key={index}>
              <li className={styles.li_mes} onClick={() => newTab(data.link)}>
                <div className={styles.icon}>{data.icon}</div>
                <img src={data?.img} />
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
