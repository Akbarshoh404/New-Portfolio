import React from "react";
import Navbar from "../../Layoutes/Navbar/index";
import Footer from "../../Layoutes/Footer/index";
import styles from "./style.module.scss";

const Experience = () => {
  return (
    <>
      <Navbar />
      <div className={styles.experience}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.emojiContainer}>
              <p>💼</p>
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.p1}>Professional Journey</p>
            <p className={styles.p2}>My Experience</p>
            <div className={styles.experienceList}>
              <div className={styles.experienceItem}>
                <p className={styles.p3}>
                  <strong>Frontend Developer</strong> - TechCorp (2022-Present)
                  <br />
                  Developing responsive web applications using React and modern
                  JavaScript.
                </p>
              </div>
              <div className={styles.experienceItem}>
                <p className={styles.p3}>
                  <strong>Web Designer</strong> - Creative Solutions (2020-2022)
                  <br />
                  Designed user interfaces and prototypes for client websites.
                </p>
              </div>
              <div className={styles.experienceItem}>
                <p className={styles.p3}>
                  <strong>Junior Developer</strong> - StartUp Inc (2019-2020)
                  <br />
                  Assisted in building and maintaining company web presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Experience;
