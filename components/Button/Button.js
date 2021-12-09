import styles from "./Button.module.scss";
import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <div className={styles.ButtonWrapper}>
      <Link href={`${link}`} passHref>
        <a className={styles.Button}>{text}</a>
      </Link>
    </div>
  );
};

export default Button;
