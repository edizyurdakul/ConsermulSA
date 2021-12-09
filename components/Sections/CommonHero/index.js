import styles from "./CommonHero.module.scss";
import { Button } from "../../Button";
import NextImage from "next/image";
import { motion } from "framer-motion";

const CommonHero = ({ title, paragraph, calltoaction, noAction }) => {
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
    <>
      <div className={styles.wrapper}>
        <motion.div variants={ul} initial="hidden" animate="show" className={styles.container}>
          <motion.div variants={li} className={styles.left}>
            <h1>{title}</h1>
          </motion.div>
          <motion.div variants={li} className={styles.right}>
            <p>{paragraph}</p>
            {noAction === "true" ? null : <Button text={calltoaction} link="/contact" />}
          </motion.div>
        </motion.div>
        <motion.div variants={ul} initial="hidden" animate="show" className={styles.heroImage}>
          <NextImage src={"/placeholder.png"} layout="fill" />
        </motion.div>
      </div>
    </>
  );
};

export default CommonHero;
