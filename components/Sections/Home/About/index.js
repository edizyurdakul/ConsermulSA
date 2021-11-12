import styles from "./About.module.scss";
import { Button } from "../../../Button";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Medium length title for building block</h2>
          <Button text="Button" />
        </div>
        <div className={styles.right}>
          <p>
            Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special
            attention to the tone of voice. Try to win the customers' trust by being positive
          </p>
        </div>
      </div>
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
