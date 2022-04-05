import React, { useState } from "react"

import SearchIcon from "@material-ui/icons/Search"

import styles from "./NavBar.module.scss"
import Link from "next/link"
import clsx from "clsx"

function HeaderNavBar({ setIsSearchBlock, setIsNavBar }) {
  const navs = [
    {
      title: "trang chủ",
      link: "/",
    },
    {
      title: "giới thiệu",
      link: "/gioi-thieu",
      list: [
        {
          title: "giới thiệu chung",
          link: "/",
        },
        {
          title: "tầm nhìn - sứ mệnh",
          link: "/",
        },
        {
          title: "giá trị cốt lõi",
          link: "/",
        },
        {
          title: "lịch sử phát triển",
          link: "/",
        },
        {
          title: "ban lãnh đạo",
          link: "/",
        },
        {
          title: "giải thưởng",
          link: "/",
        },
        {
          title: "bộ quy tắt  ứng xử",
          link: "/",
        },
      ],
    },
    {
      title: "dự án",
      list: [
        {
          title: "dự án đá hoàn thành",
          link: "/",
        },
        {
          title: "dự án đang triển khai",
          link: "/",
        },
      ],
      link: "/du-an",
    },
    {
      title: "tin tức",
      list: [
        {
          title: "thông tin thị trường",
          link: "/containers/News",
        },
        {
          title: "thông tin novaland",
          link: "/containers/News",
        },
        {
          title: "thông tin báo chí",
          link: "/",
        },
        {
          title: "video",
          link: "/",
        },
      ],
      link: "/tin-tuc",
    },
    {
      title: "tuyển dụng",
      link: "/tuyen-dung",
    },
    {
      title: "liên hệ",
      link: "/lien-he",
    },
  ]

  const [navItemActive, setNavItemActive] = useState(0)
  const handleClickNavItem = (index) => {
    setIsNavBar(false)
    setNavItemActive(index)
  }

  const handleClickNavsItemLi = (i) => {
    if (i === 0) {
    }
    if (i === 1) {
    }
  }
  return (
    <ul className={styles.headerNav}>
      {navs.map((nav, index) => (
        <li className={styles.headerNavLi} key={index}>
          <Link href={nav.link}>
            <h4
              className={clsx({
                [styles.active]: index === Number(navItemActive),
              })}
              onClick={() => handleClickNavItem(index)}
            >
              {nav.title.toUpperCase()}
            </h4>
          </Link>
          {nav.list && (
            <span className={styles.rightIcon}>
              <i className="fas fa-chevron-right"></i>
            </span>
          )}
          <span
            className={clsx(styles.navItemLine, {
              [styles.active]: index === Number(navItemActive),
            })}
          ></span>
          {nav.list && (
            <ul className={styles.navsItem}>
              {navs[index].list.map((item, i) => (
                <li key={i} className={clsx(styles.navsItemLi)}>
                  <Link href={item.link}>
                    <h5 onClick={() => handleClickNavsItemLi(i)}>
                      {item.title.toUpperCase()}
                    </h5>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}

export default HeaderNavBar
