import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>Name - Logo</h3>
        <ul>
          <li>
            <Link href="">About our company</Link>
            <Link href="">Our previous works</Link>
          </li>
          <li>
            <Link href="">Services we provide</Link>
            <Link href="">Request a quote</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
