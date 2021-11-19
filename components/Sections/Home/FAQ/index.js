import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./FAQ.module.scss";

const FrequentlyAskedQuestions = () => {
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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

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
      <motion.div variants={ul} animate={animation} ref={ref} className={styles.container}>
        <motion.h2 variants={li}>Frequently Asked Questions</motion.h2>
        <motion.h3 variants={li} className={styles.question}>
          What questions do your clients usually ask?
        </motion.h3>
        <motion.p variants={li} className={styles.answer}>
          Please provide a comprehensive answers to those questions. You will save lots of time and money by eliminating the
          neccesity to give constant support. You also will keep your clients' time they will quickly find answers to all their
          questions
        </motion.p>
        <motion.div variants={li} className={styles.divider}></motion.div>
      </motion.div>
      <motion.div variants={ul} animate={animation} className={styles.container}>
        <motion.h2 variants={li}>Frequently Asked Questions</motion.h2>
        <motion.h3 variants={li} className={styles.question}>
          What questions do your clients usually ask?
        </motion.h3>
        <motion.p variants={li} className={styles.answer}>
          Please provide a comprehensive answers to those questions. You will save lots of time and money by eliminating the
          neccesity to give constant support. You also will keep your clients' time they will quickly find answers to all their
          questions
        </motion.p>
        <motion.div variants={li} className={styles.divider}></motion.div>
      </motion.div>
      <motion.div variants={ul} animate={animation} className={styles.container}>
        <motion.h2 variants={li}>Frequently Asked Questions</motion.h2>
        <motion.h3 variants={li} className={styles.question}>
          What questions do your clients usually ask?
        </motion.h3>
        <motion.p variants={li} className={styles.answer}>
          Please provide a comprehensive answers to those questions. You will save lots of time and money by eliminating the
          neccesity to give constant support. You also will keep your clients' time they will quickly find answers to all their
          questions
        </motion.p>
        <motion.div variants={li} className={styles.divider}></motion.div>
      </motion.div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
