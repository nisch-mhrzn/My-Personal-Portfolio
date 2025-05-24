import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Scientist</h3>
              <p>
                I am an aspiring Data Scientist with experience in handling large datasets, performing data analysis, and creating insightful visualizations.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Enthusiast</h3>
              <p>
              Proficient in building, evaluating, and deploying machine learning models using Scikit-learn, TensorFlow, and other frameworks to solve real-world problems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
                      Skilled in data cleaning, exploration, and visualization using tools like Pandas, NumPy, Matplotlib, and Seaborn to uncover actionable insights.

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};