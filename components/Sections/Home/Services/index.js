import styles from "./Services.module.scss";

import React from "react";

const Services = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <h2>Services</h2>
          <div className={styles.content}>
            <ul>
              <li>
                <div>Icon</div>
                <h3>First Service</h3>
                <p>Short text describing a feature of your service. Think how it can benefit your potential customer</p>
              </li>
              <li>
                <div>Icon</div>
                <h3>Second Service</h3>
                <p>Short text describing a feature of your service. Think how it can benefit your potential customer</p>
              </li>
              <li>
                <div>Icon</div>
                <h3>Third Service</h3>
                <p>Short text describing a feature of your service. Think how it can benefit your potential customer</p>
              </li>
              <li>
                <div>Icon</div>
                <h3>Fourth Service</h3>
                <p>Short text describing a feature of your service. Think how it can benefit your potential customer</p>
              </li>
              <li>
                <div>Icon</div>
                <h3>Fifth Service</h3>
                <p>Short text describing a feature of your service. Think how it can benefit your potential customer</p>
              </li>
              <li>
                <div>Icon</div>
                <h3>Sixth Service</h3>
                <p>Short text describing a feature of your service. Think how it can benefit your potential customer</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
