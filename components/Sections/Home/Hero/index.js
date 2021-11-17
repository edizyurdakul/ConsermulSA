import NextImage from "next/image";
import { Button } from "../../../Button";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

const HomeHero = () => {
  const ul = {
    hidden: { opacity: 0, y: 36 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25,
        delayChildren: 0.5,
        staggerChildren: 0.25,
      },
    },
  };

  const li = {
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0 },
  };

  const MButton = motion(Button);

  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <motion.div variants={ul} initial="hidden" animate="show" className={styles.heroContent}>
          <motion.h1 variants={li}>It's high time you told your story</motion.h1>
          <motion.p variants={li}>
            storytelling in business has become a field in its own right as industries has grown
          </motion.p>
          <MButton variants={li} text="Contact" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.25, x: 200 }}
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1, x: 0 }}
          className={styles.heroImage}
        >
          <NextImage src={"/placeholder.png"} layout="fill" />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
