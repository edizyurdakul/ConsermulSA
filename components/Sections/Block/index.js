import styles from "./Block.module.scss";
import NextImage from "next/image";

export const Block = ({ title, paragraph }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.heroImage}>
            <NextImage src={"/placeholder.png"} layout="fill" />
          </div>
        </div>
        <div className={styles.right}>
          <h2>{title}</h2>

          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export const BlockReverse = ({ title, paragraph }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </div>
        <div className={`${styles.right} ${styles.reverse}`}>
          <div className={styles.heroImage}>
            <NextImage src={"/placeholder.png"} layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};
