import { motion } from "framer-motion";
import styles from "./Contact.module.scss";

const Contact = () => {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }

  const ul = {
    hidden: { opacity: 0, y: 36 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25,
        delayChildren: 0.35,
        staggerChildren: 0.15,
      },
    },
  };

  const li = {
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className={styles.wrapper}>
      <motion.h1 initial={{ opacity: 0, y: 36 }} transition={{ transition: { delay: 0.15 } }} animate={{ opacity: 1, y: 0 }}>
        Get In Touch
      </motion.h1>
      <motion.form variants={ul} initial="hidden" animate="show" onSubmit={handleOnSubmit} className={styles.container}>
        <p>
          <motion.label variants={li} htmlFor="name">
            Name
          </motion.label>
          <motion.input variants={li} id="name" type="text" name="name" />
        </p>
        <p>
          <motion.label variants={li} htmlFor="email">
            Email
          </motion.label>
          <motion.input variants={li} id="email" type="text" name="email" />
        </p>
        <p>
          <motion.label variants={li} htmlFor="message">
            Message
          </motion.label>
          <motion.textarea variants={li} id="message" name="message" />
        </p>
        <p>
          <motion.button variants={li}>Submit</motion.button>
        </p>
      </motion.form>
    </div>
  );
};

export default Contact;
