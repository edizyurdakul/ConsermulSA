import styles from "./Gallery.module.scss";
import NextImage from "next/image";

import React from "react";

const Gallery = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Gallery</h2>
      <div>
        <ul className={styles.container}>
          <li>
            <NextImage src={"/placeholder.png"} height={350} width={500} />
          </li>
          <li>
            <NextImage src={"/placeholder.png"} layout="fill" />
          </li>
          <li>
            <NextImage src={"/placeholder.png"} height={350} width={500} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
