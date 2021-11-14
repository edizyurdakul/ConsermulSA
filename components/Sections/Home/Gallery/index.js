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
            <NextImage src={"/placeholder.png"} width="100%" height="100%" layout="responsive" objectFit="cover" />
          </li>
          <li>
            <NextImage src={"/placeholder.png"} width="100%" height="100%" layout="fill" objectFit="cover" />
          </li>
          <li>
            <NextImage src={"/placeholder.png"} width="100%" height="100%" layout="responsive" objectFit="cover" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
