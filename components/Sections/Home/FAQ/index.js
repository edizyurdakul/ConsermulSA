import styles from "./FAQ.module.scss";

import React from "react";

const FrequentlyAskedQuestions = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Frequently Asked Questions</h2>

        <h3 className={styles.question}>What questions do your clients usually ask?</h3>
        <p className={styles.answer}>
          Please provide a comprehensive answers to those questions. You will save lots of time and money by eliminating the
          neccesity to give constant support. You also will keep your clients' time they will quickly find answers to all their
          questions
        </p>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.container}>
        <h3 className={styles.question}>What questions do your clients usually ask?</h3>
        <p className={styles.answer}>
          Please provide a comprehensive answers to those questions. You will save lots of time and money by eliminating the
          neccesity to give constant support. You also will keep your clients' time they will quickly find answers to all their
          questions
        </p>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.container}>
        <h3 className={styles.question}>What questions do your clients usually ask?</h3>
        <p className={styles.answer}>
          Please provide a comprehensive answers to those questions. You will save lots of time and money by eliminating the
          neccesity to give constant support. You also will keep your clients' time they will quickly find answers to all their
          questions
        </p>
        <div className={styles.divider}></div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
