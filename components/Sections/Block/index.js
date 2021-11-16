import styles from "./Block.module.scss";
import NextImage from "next/image";

const Block = ({ order }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.heroImage}>
            <NextImage src={"/placeholder.png"} layout="fill" />
          </div>
        </div>
        <div className={styles.right}>
          <p>
            Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special
            attention to the tone of voice. Try to win the customers' trust by being positive
          </p>
        </div>
      </div>
    </div>
  );
};

export default Block;
