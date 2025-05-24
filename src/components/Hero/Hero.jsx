import React from "react";
import { getImageUrl } from "../../utils";
import heroImage from "../../../assets/hero/heroImage.png";
import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Nischal </h1>
        <p className={styles.description}>
         Aspiring Data Scientist skilled in Python, SQL, and data visualization. Passionate about extracting insights and solving real-world problems through data.
        </p>
        <a href="mailto:nischal.maharjan1233@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/me.png")}
        alt="Hero Image of Me"
        className={styles.heroImg}
      ></img>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
