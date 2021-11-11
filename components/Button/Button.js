import styles from "./Button.module.scss";

const Button = ({ text }) => {
  return (
    <div className={styles.ButtonWrapper}>
      <a className={styles.Button}>{text}</a>
    </div>
  );
};

export default Button;
