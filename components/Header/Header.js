import NextLink from "next/link";
import styles from "./Header.module.scss";
import { useState } from "react";

const Header = () => {
  return (
    <header className={styles.header}>
      <NextLink href="">Name - Logo</NextLink>
      <nav>
        <div className={styles.menu}></div>
        <div className={styles.navigation}>
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
      </nav>
    </header>
  );
};

export default Header;
