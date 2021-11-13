import styles from "./Testimonials.module.scss";

const Testimonials = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2>What our clients say</h2>
        <div>
          <ul className={styles.container}>
            <li>
              <h3>Name</h3>
              <p className={styles.subtitle}>Company, position</p>
              <p>
                "What a great experience! This service is a great time saver. Our team managed to reduce the time needed for
                paperwork by a third. Highly recommend this service"
              </p>
            </li>
            <li>
              <h3>Name</h3>
              <p className={styles.subtitle}>Company, position</p>
              <p>
                "What a great experience! This service is a great time saver. Our team managed to reduce the time needed for
                paperwork by a third. Highly recommend this service"
              </p>
            </li>
            <li>
              <h3>Name</h3>
              <p className={styles.subtitle}>Company, position</p>
              <p>
                "What a great experience! This service is a great time saver. Our team managed to reduce the time needed for
                paperwork by a third. Highly recommend this service"
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
