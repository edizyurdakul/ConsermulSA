import styles from "./Numbers.module.scss";
const NumbersSecton = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <ul className={styles.container}>
          <li>
            <div className="display-1 --align-center">+200</div>
            <p>Description of the number. People always pay attention to numbers.</p>
          </li>
          <li>
            <div className="display-1 --align-center">20%</div>
            <p>Description of the number. People always pay attention to numbers.</p>
          </li>
          <li>
            <div className="display-1 --align-center">12k</div>
            <p>Description of the number. People always pay attention to numbers.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NumbersSecton;
