import styles from "./Footer.module.scss";
import NextLink from "next/link";
import NextImage from "next/image";
import { Facebook, Twitter, Instagram } from "../Icons";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <NextLink passHref href="/">
          <a className={styles.logo}>
            <NextImage src={"/Logo.png"} width="150px" height="116px" />
          </a>
        </NextLink>
        <ul>
          <li>
            <h4>COMPANY</h4>
            <NextLink href="#">About our company</NextLink>
            <NextLink href="#">Our previous works</NextLink>
          </li>
          <li>
            <h4>SERVICES</h4>
            <NextLink href="#">Services we provide</NextLink>
            <NextLink href="#">Request a quote</NextLink>
          </li>
          <li>
            <h4>HELP</h4>
            <NextLink href="#">Contact</NextLink>
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
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
