import styles from "./Footer.module.scss";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "../Icons";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>Name - Logo</h3>
        <ul>
          <li>
            <h4>COMPANY</h4>
            <Link href="#">About our company</Link>
            <Link href="#">Our previous works</Link>
          </li>
          <li>
            <h4>SERVICES</h4>
            <Link href="#">Services we provide</Link>
            <Link href="#">Request a quote</Link>
          </li>
          <li>
            <h4>HELP</h4>
            <Link href="#">Contact</Link>
            <div className={styles.social}>
              <Link href="#">
                <div>
                  <Facebook />
                </div>
              </Link>
              <Link href="#">
                <div>
                  <Twitter />
                </div>
              </Link>
              <Link href="#">
                <div>
                  <Instagram />
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
