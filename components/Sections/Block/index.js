import NextImage from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./Block.module.scss";

export const Block = ({ title, paragraph }) => {
  const ul = {
    hidden: { opacity: 0, y: 36 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.25,
      },
    },
  };

  const li = {
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0 },
  };

  const animation = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      animation.start("show");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [inView]);

  return (
    <div className={styles.wrapper}>
      <motion.div ref={ref} variants={ul} animate={animation} className={styles.container}>
        <motion.div variants={li} className={styles.left}>
          <div className={styles.heroImage}>
            <NextImage src={"/placeholder.png"} layout="fill" />
          </div>
        </motion.div>
        <motion.div variants={li} className={styles.right}>
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const BlockReverse = ({ title, paragraph }) => {
  const ul = {
    hidden: { opacity: 0, y: 36 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.25,
      },
    },
  };

  const li = {
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0 },
  };

  const animation = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      animation.start("show");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [inView]);

  return (
    <div className={styles.wrapper}>
      <motion.div ref={ref} variants={ul} animate={animation} className={styles.container}>
        <motion.div variants={li} className={styles.left}>
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </motion.div>
        <motion.div variants={li} className={`${styles.right} ${styles.reverse}`}>
          <div className={styles.heroImage}>
            <NextImage src={"/placeholder.png"} layout="fill" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
