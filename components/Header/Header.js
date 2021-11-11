import NextLink from "next/link";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  return (
    <header className={styles.header}>
      <NextLink href="">Name - Logo</NextLink>
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
                <NextLink href="">Menu Item 1</NextLink>
              </li>
              <li>
                <NextLink href="">Menu Item 2</NextLink>
              </li>
              <li>
                <NextLink href="">Menu Item 3</NextLink>
              </li>
              <li>
                <NextLink href="">Menu Item 4</NextLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
