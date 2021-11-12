import styles from "./CallToAction.module.scss";
import { Button } from "../../Button";

const CallToAction = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Medium Length title for building block</h2>
        </div>
        <div className={styles.right}>
          <p>Provide some assertive title that would persuade customers to take some action, e.g, making a call, etc.</p>
          <Button text="Button" />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
