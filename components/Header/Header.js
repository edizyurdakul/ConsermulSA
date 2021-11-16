import NextLink from "next/link";
import NextImage from "next/image";
import styles from "./Header.module.scss";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  return (
    <>
      <header className={styles.header}>
        <NextLink passHref href="/">
          <a>
            <NextImage src={"/Logo.png"} width="150px" height="116px" />
          </a>
        </NextLink>
        <nav>
          <div
            onClick={() => {
              toggleMenu();
            }}
            className={styles.hamburgerWrapper}
          >
            <div className={openMenu == true ? `${styles.menu} ${styles.animate}` : `${styles.menu}`}></div>
          </div>
          <div className={openMenu == true ? `${styles.navigationWrapper} ${styles.animated}` : `${styles.navigationWrapper}`}>
            <div className={openMenu == true ? `${styles.navigation} ${styles.animated}` : `${styles.navigation}`}>
              <ul>
                <li>
                  <NextLink href="/services">Services</NextLink>
                </li>
                <li>
                  <NextLink href="/projects">Projects</NextLink>
                </li>
                <li>
                  <NextLink href="/about">About</NextLink>
                </li>
                <li>
                  <NextLink href="">Contact</NextLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className={styles.divider}></div>
    </>
  );
};

export default Header;
