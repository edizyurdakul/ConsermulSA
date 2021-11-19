import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./Testimonials.module.scss";

const Testimonials = () => {
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
  const heading = {
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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

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
        <motion.h2 variants={heading} animate={animation}>
          What our clients say
        </motion.h2>
        <div>
          <motion.ul variants={ul} animate={animation} className={styles.container}>
            <motion.li variants={li}>
              <h3>Name</h3>
              <p className={styles.subtitle}>Company, position</p>
              <p>
                "What a great experience! This service is a great time saver. Our team managed to reduce the time needed for
                paperwork by a third. Highly recommend this service"
              </p>
            </motion.li>
            <motion.li variants={li}>
              <h3>Name</h3>
              <p className={styles.subtitle}>Company, position</p>
              <p>
                "What a great experience! This service is a great time saver. Our team managed to reduce the time needed for
                paperwork by a third. Highly recommend this service"
              </p>
            </motion.li>
            <motion.li variants={li}>
              <h3>Name</h3>
              <p className={styles.subtitle}>Company, position</p>
              <p>
                "What a great experience! This service is a great time saver. Our team managed to reduce the time needed for
                paperwork by a third. Highly recommend this service"
              </p>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
