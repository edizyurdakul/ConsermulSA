import { Button } from "../../Button";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./CallToAction.module.scss";

const CallToAction = () => {
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
    <div ref={ref} className={styles.wrapper}>
      <motion.div variants={ul} animate={animation} className={styles.container}>
        <motion.div variants={li} className={styles.left}>
          <h2>Medium Length title for building block</h2>
        </motion.div>
        <motion.div variants={li} className={styles.right}>
          <p>Provide some assertive title that would persuade customers to take some action, e.g, making a call, etc.</p>
          <Button text="Phone Call" link="tel:+507 6501-3102" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CallToAction;
