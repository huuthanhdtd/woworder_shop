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
    },
    {
      title: "dự án",
      list: [
        {
          title: "bất động sản đô thị",
          link: "/",
        },
        {
          title: "bất động sản đô thị du lịch",
          link: "/",
        },
      ],
      link: "/",
    },
    {
      title: "quan hệ đầu tư",
      list: [
        {
          title: "thông tin về tập đoàn novaland",
          link: "/",
        },
        {
          title: "quản trị doanh nghiệp",
          link: "/",
        },
        {
          title: "công bố thông tin",
          link: "/",
        },
        {
          title: "đại hội đồng cổ đông",
          link: "/",
        },
        {
          title: "hoạt động nhà đầu tư",
          link: "/",
        },
        {
          title: "giá cổ phiếu và thông tin thị trường",
          link: "/",
        },
      ],
      link: "/",
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
      link: "/containers/News",
    },
    {
      title: "phát triển bền vững",
      list: [
        {
          title: "thông điệp novaland",
          link: "/",
        },
        {
          title: "hội đồng phát triển bền vững",
          link: "/",
        },
        {
          title: "quản trị tập đoàn",
          link: "/",
        },
        {
          title: "quản trị nguồn nhân lực",
          link: "/",
        },
        {
          title: "quản trị thương hiêu novaland",
          link: "/",
        },
        {
          title: "môi trường",
          link: "/",
        },
        {
          title: "hoạt động cộng đồng",
          link: "/",
        },
        {
          title: "thông tin phát triển bền vững",
          link: "/",
        },
      ],
      link: "/",
    },
    {
      title: "tuyển dụng",
      link: "/",
    },
    {
      title: "liên hệ",
      link: "/",
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
      <div
        className={styles.navSearch}
        onClick={() => setIsSearchBlock((prev) => !prev)}
      >
        <SearchIcon className={styles.icon} />
      </div>
      <span className={styles.navLanguage}>
        <p>EN</p>
      </span>
    </ul>
  )
}

export default HeaderNavBar
