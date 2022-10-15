import clsx from 'clsx';
import React, { useState } from 'react';
import { RiMessage2Line, RiCloseFill } from 'react-icons/ri';
import { GoMail } from 'react-icons/go';
import { SiZalo } from 'react-icons/si';
import { MdLocationOn } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function ContactFixed() {
  const contact = [
    {
      name: 'gọi ngay cho Khánh Bùi',
      icon: <AiFillPhone fontSize={20} />,
      link: 'tel:0987965512',
    },
    {
      name: 'nhận tư vấn qua zalo',
      icon: <SiZalo fontSize={20} />,
      link: 'http://zalo.me/0352998934',
    },
    {
      name: 'đóng góp ý kiến giao diện cho Khánh Bùi',
      icon: <GoMail fontSize={20} />,
      link: 'mailto:contact@gmail.com ',
    },
    {
      name: 'Xem địa chỉ doanh nghiệp',
      icon: <MdLocationOn fontSize={20} />,
      link: '/contact',
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

  return (
    <div className={styles.contact}>
      <div className={styles.animation}></div>
      <div className={styles.animation1}></div>
      <div className={styles.contactFixed} onClick={handleOpen}>
        {!openContact ? (
          <>
            <RiMessage2Line fontSize={20} />
            Liên hệ
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
              <Link href={data.link}>
                <li className={styles.li_mes}>
                  <div className={styles.icon}>{data.icon}</div>
                  <div className={styles.title}>{data.name}</div>
                </li>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
