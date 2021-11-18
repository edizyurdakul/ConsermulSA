import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Button } from "../../../Button";
import { motion, useAnimation } from "framer-motion";
import styles from "./About.module.scss";

const About = () => {
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
  const divider = {
    hidden: { opacity: 0, y: 36 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25,
      },
    },
  };

  const animation = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      animation.start("show");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [inView]);

  return (
    <>
      <div className={styles.wrapper}>
        <motion.div ref={ref} variants={ul} animate={animation} className={styles.container}>
          <motion.div variants={li} className={styles.left}>
            <h2>Medium length title for building block</h2>
            <Button text="Button" />
          </motion.div>
          <motion.div variants={li} className={styles.right}>
            <p>
              Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special
              attention to the tone of voice. Try to win the customers' trust by being positive
            </p>
          </motion.div>
        </motion.div>
        <div>
          <motion.div variants={divider} animate={animation} className={styles.divider}></motion.div>
          <motion.ul variants={ul} animate={animation}>
            <motion.li variants={li}>
              <h3>First Advantage</h3>
              <p>Short text describing one of you product/service advantages. Try being creative</p>
            </motion.li>
            <motion.li variants={li}>
              <h3>Second Advantage</h3>
              <p>Short text describing one of you product/service advantages. Try being creative</p>
            </motion.li>
            <motion.li variants={li}>
              <h3>Third Advantage</h3>
              <p>Short text describing one of you product/service advantages. Try being creative</p>
            </motion.li>
            <motion.li variants={li}>
              <h3>Four Advantage</h3>
              <p>Short text describing one of you product/service advantages. Try being creative</p>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </>
  );
};

export default About;
