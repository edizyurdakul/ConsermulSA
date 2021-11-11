import NextImage from "next/image";
import styles from "./Hero.module.scss";
import { Button } from "../../Button";

const HomeHero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>It's high time you told your story</h1>
          <p>storytelling in business has become a field in its own right as industries has grown</p>
          <Button text="Contact" />
        </div>
        <div className={styles.heroImage}>
          <NextImage src={"/placeholder.png"} layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
