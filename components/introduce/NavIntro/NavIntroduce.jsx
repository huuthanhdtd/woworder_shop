import React, { useState } from "react";
import Link from "next/Link";
import styles from "./NavIntroduce.module.scss";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export default function NavIntroduce() {
  const nav = [
    {
      name: "giới thiệu chung",
      link: "/",
    },
    {
      name: "tầm nhìn- sứ mệnh",
      link: "/",
    },
    {
      name: "giá trị cốt lõi",
      link: "/",
    },
    {
      name: "Lịch sữ phát triển",
      link: "/",
    },
    {
      name: "Ban lãnh đạo",
      link: "/",
    },
    {
      name: "Giải thưởng",
      link: "/",
    },
    {
      name: "bộ uy tắc ứng xử",
      link: "/",
    },
  ];
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className={styles.Main}>
      <div className={styles.NavIntroduce}>
        <div className={styles.ModuleContent}>
          {nav &&
            nav.map((data, index) => (
              <div className={styles.container} key={index}>
                <ul>
                  <li>
                    {" "}
                    <Link href="/">{data.name}</Link>
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className={styles.test}>
        {" "}
        <div className={styles.btnWrapper} onClick={() => setIsMobile(true)}>
          <div className={styles.btnNav}>
            GIỚI THIỆU <MenuIcon />
          </div>
        </div>
      </div>
      <div
        className={styles.mobile}
        style={{
          transform: isMobile
            ? "translate(-1000px, -7px)"
            : "translate(0px, -7px)",
        }}
      >
        <div className={styles.Navmobile} style={{ position: "relative" }}>
          <div className={styles.iconClose} onClick={() => setIsMobile(false)}>
            <CloseIcon />
          </div>
          {nav &&
            nav.map((data, index) => (
              <ul key={index}>
                <Link href="/">
                  <li>{data.name}</li>
                </Link>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
}
