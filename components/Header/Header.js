import NextLink from "next/link";
import NextImage from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  const ul = {
    hidden: { opacity: 0, y: 36 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.25,
      },
    },
  };

  const li = {
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header className={styles.header}>
        <NextLink passHref href="/">
          <motion.a variants={li} initial="hidden" animate="show">
            <NextImage src={"/Logo.png"} width="150px" height="116px" />
          </motion.a>
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
              <motion.ul variants={ul} initial="hidden" animate="show">
                <motion.li variants={li}>
                  <NextLink href="/services">Services</NextLink>
                </motion.li>
                <motion.li variants={li}>
                  <NextLink href="/projects">Projects</NextLink>
                </motion.li>
                <motion.li variants={li}>
                  <NextLink href="/about">About</NextLink>
                </motion.li>
                <motion.li variants={li}>
                  <NextLink href="">Contact</NextLink>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </nav>
      </header>
      <div className={styles.divider}></div>
    </>
  );
};

export default Header;
