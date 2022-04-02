import React, { useState } from "react"
import clsx from "clsx"

import Container from "@material-ui/core/Container"
import styles from "./style.module.scss"
import HeaderNavBar from "./NavBar"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import SearchIcon from "@material-ui/icons/Search"
import Image from "next/image"
import Logo from "../../public/logo_anphu.svg"

function Header() {
  const [isNavBar, setIsNavBar] = useState(false)
  const [isSearchBlock, setIsSearchBlock] = useState(false)
  const handleShowNav = () => {
    setIsNavBar(!isNavBar)
    if (isSearchBlock) {
      setIsSearchBlock(false)
    }
  }
  const handleCloseBars = () => {
    setIsNavBar(!isNavBar)
    if (isSearchBlock) {
      setIsSearchBlock(false)
    }
  }

  return (
    <div className={styles.headerNovalandMax}>
      <Container maxWidth="lg">
        <div className={styles.headerNovaland}>
          <div className={styles.logoImage}>
            <Image src={Logo} />
          </div>
          <div
            className={clsx(styles.headerContent, {
              [styles.showBars]: isNavBar,
            })}
          >
            <CloseIcon className={styles.closeIcon} onClick={handleCloseBars} />

            <span className={styles.numberPhone}>
              <h4>Tổng đài CSKH: </h4>
              <h3>1900 63 6666</h3>
            </span>
            <HeaderNavBar
              setIsNavBar={setIsNavBar}
              setIsSearchBlock={setIsSearchBlock}
            />
          </div>
          <MenuIcon
            className={clsx(styles.barIcon, {
              [styles.hidden]: isNavBar === true,
            })}
            onClick={handleShowNav}
          />
        </div>
      </Container>
    </div>
  )
}

export default Header
