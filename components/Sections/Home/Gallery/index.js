import NextImage from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./Gallery.module.scss";

const Gallery = () => {
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
    <div className={styles.wrapper}>
      <motion.h2 variants={heading} animate={animation}>
        Gallery
      </motion.h2>
      <div>
        <motion.ul ref={ref} variants={ul} animate={animation} className={styles.container}>
          <motion.li variants={li}>
            <NextImage src={"/placeholder.png"} width="100%" height="100%" layout="responsive" objectFit="cover" />
          </motion.li>
          <motion.li variants={li}>
            <NextImage src={"/placeholder.png"} layout="fill" objectFit="cover" />
          </motion.li>
          <motion.li variants={li}>
            <NextImage src={"/placeholder.png"} width="100%" height="100%" layout="responsive" objectFit="cover" />
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Gallery;
