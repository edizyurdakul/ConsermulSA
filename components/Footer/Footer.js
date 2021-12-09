import NextLink from "next/link";
import NextImage from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Facebook, Twitter, Instagram } from "../Icons";
import styles from "./Footer.module.scss";

const Footer = () => {
  const ul = {
    hidden: { opacity: 0, y: 36 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.25,
      },
    },
  };

  const li = {
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0 },
  };

  const animation = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      animation.start("show");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [inView]);
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NextLink passHref href="/">
            <a>
              <NextImage src={"/Logo.png"} width="150px" height="116px" />
            </a>
          </NextLink>
        </div>
        <motion.ul variants={ul} animate={animation} ref={ref}>
          <motion.li variants={li}>
            <h4>COMPANY</h4>
            <NextLink href="/about">About our company</NextLink>
            <NextLink href="/projects">Our previous works</NextLink>
          </motion.li>
          <motion.li variants={li}>
            <h4>SERVICES</h4>
            <NextLink href="/services">Services we provide</NextLink>
            <NextLink href="/contact">Request a quote</NextLink>
          </motion.li>
          <motion.li variants={li}>
            <h4>HELP</h4>
            <NextLink href="/contact">Contact</NextLink>
            <div className={styles.social}>
              <NextLink href="#">
                <div>
                  <Facebook />
                </div>
              </NextLink>
              <NextLink href="#">
                <div>
                  <Twitter />
                </div>
              </NextLink>
              <NextLink href="#">
                <div>
                  <Instagram />
                </div>
              </NextLink>
            </div>
          </motion.li>
        </motion.ul>
      </div>
    </footer>
  );
};

export default Footer;
