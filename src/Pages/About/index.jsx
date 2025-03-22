// About.jsx
import React from "react";
import styles from "./style.module.scss";
import profilePic from "../../Components/images/profile-pic.png";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.aboutContent}>
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrapper}>
              <div
                className={styles.profileImage}
                style={{ backgroundImage: `url(${profilePic})` }}
              ></div>
            </div>
            <div className={styles.profileText}>
              <h2>Hello, I’m Akbarshokh</h2>
              <p className={styles.description}>
                A passionate front-end developer with a drive for building
                clean, responsive, and user-friendly web applications. With
                experience in real-world projects, I enjoy transforming creative
                ideas into functional digital solutions.
              </p>
            </div>
          </div>
          <div className={styles.detailsGrid}>
            <h2 className={styles.subtitle}>Quick Facts</h2>
            <div className={styles.gridItems}>
              <div className={styles.gridItem}>
                <span className={styles.label}>Age</span>
                <span>16</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.label}>Location</span>
                <span>Uzbekistan</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.label}>Skills</span>
                <span>React, JavaScript, Android</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
