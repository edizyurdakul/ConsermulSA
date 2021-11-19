import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./Services.module.scss";

const Services = () => {
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
    <>
      <div ref={ref} className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <motion.h2 variants={heading} animate={animation}>
            Services
          </motion.h2>
          <div className={styles.content}>
            <motion.ul variants={ul} animate={animation}>
              <motion.li variants={li}>
                <div>Icon</div>
                <h3>First Service</h3>
                <p>Short text describing a feature of your service. Think how it can benefit your potential customer</p>
              </motion.li>
              <motion.li variants={li}>
                <div>Icon</div>
                <h3>Second Service</h3>
                <p>Short text describing a feature of your service. Think how it can benefit your potential customer</p>
              </motion.li>
              <motion.li variants={li}>
                <div>Icon</div>
                <h3>Third Service</h3>
                <p>Short text describing a feature of your service. Think how it can benefit your potential customer</p>
              </motion.li>
              <motion.li variants={li}>
                <div>Icon</div>
                <h3>Fourth Service</h3>
                <p>Short text describing a feature of your service. Think how it can benefit your potential customer</p>
              </motion.li>
              <motion.li variants={li}>
                <div>Icon</div>
                <h3>Fifth Service</h3>
                <p>Short text describing a feature of your service. Think how it can benefit your potential customer</p>
              </motion.li>
              <motion.li variants={li}>
                <div>Icon</div>
                <h3>Sixth Service</h3>
                <p>Short text describing a feature of your service. Think how it can benefit your potential customer</p>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
