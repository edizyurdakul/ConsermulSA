import styles from "./CommonHero.module.scss";
import { Button } from "../../Button";
import NextImage from "next/image";

const CommonHero = ({ title, paragraph, calltoaction }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1>{title}</h1>
          </div>
          <div className={styles.right}>
            <p>{paragraph}</p>
            <Button text={calltoaction} />
          </div>
        </div>
        <div className={styles.heroImage}>
          <NextImage src={"/placeholder.png"} layout="fill" />
        </div>
      </div>
    </>
  );
};

export default CommonHero;
