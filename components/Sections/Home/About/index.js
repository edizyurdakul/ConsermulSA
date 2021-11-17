import { Button } from "../../../Button";
import { motion } from "framer-motion";
import styles from "./About.module.scss";

const About = () => {
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

  return (
    <div className={styles.wrapper}>
      <motion.div variants={ul} initial="hidden" animate="show" className={styles.container}>
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
      <div className={styles.divider}></div>
      <div>
        <ul>
          <li>
            <h3>First Advantage</h3>
            <p>Short text describing one of you product/service advantages. Try being creative</p>
          </li>
          <li>
            <h3>Second Advantage</h3>
            <p>Short text describing one of you product/service advantages. Try being creative</p>
          </li>
          <li>
            <h3>Third Advantage</h3>
            <p>Short text describing one of you product/service advantages. Try being creative</p>
          </li>
          <li>
            <h3>Four Advantage</h3>
            <p>Short text describing one of you product/service advantages. Try being creative</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
