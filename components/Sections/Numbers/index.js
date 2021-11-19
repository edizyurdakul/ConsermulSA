import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./Numbers.module.scss";

const NumbersSecton = () => {
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
    <div ref={ref} className={styles.wrapper}>
      <div>
        <motion.ul variants={ul} animate={animation} className={styles.container}>
          <motion.li variants={li}>
            <div className="display-1 --align-center">+200</div>
            <p>Description of the number. People always pay attention to numbers.</p>
          </motion.li>
          <motion.li variants={li}>
            <div className="display-1 --align-center">20%</div>
            <p>Description of the number. People always pay attention to numbers.</p>
          </motion.li>
          <motion.li variants={li}>
            <div className="display-1 --align-center">12k</div>
            <p>Description of the number. People always pay attention to numbers.</p>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default NumbersSecton;
