import styles from "./CommonHero.module.scss";
import { Button } from "../../Button";
import NextImage from "next/image";

const CommonHero = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1>It's time you told your story</h1>
          </div>
          <div className={styles.right}>
            <p>
              Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special
              attention to the tone of voice. Try to win the customers' trust by being positive
            </p>
            <Button text="Button" />
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
