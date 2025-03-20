import React from "react";
import Navbar from "../../Layoutes/Navbar/index";
import Footer from "../../Layoutes/Footer/index";
import styles from "./style.module.scss";

const About = () => {
  return (
    <>
      <Navbar />
      <div className={styles.about}>
        <div className={styles.container}>
          <h1 className={styles.title}>About Me</h1>

          <div className={styles.aboutContent}>
            <div className={styles.profileCard}>
              <div className={styles.profileImage}></div>
              <div className={styles.profileText}>
                <h2>Hello, I’m [Your Name]</h2>
                <p className={styles.description}>
                  A teenage coding maestro with a knack for turning wild ideas
                  into sleek, functional digital creations. I’ve been coding
                  since I could type, diving into real projects and collecting
                  skills like a digital treasure hunter.
                </p>
              </div>
            </div>

            <div className={styles.detailsGrid}>
              <h2 className={styles.subtitle}>The Essentials</h2>
              <div className={styles.gridItems}>
                <div className={styles.gridItem}>
                  <span className={styles.label}>Age</span>
                  <span>Young & Ambitious</span>
                </div>
                <div className={styles.gridItem}>
                  <span className={styles.label}>Location</span>
                  <span>Digital Realm</span>
                </div>
                <div className={styles.gridItem}>
                  <span className={styles.label}>Passion</span>
                  <span>Code & Creativity</span>
                </div>
                <div className={styles.gridItem}>
                  <span className={styles.label}>Goal</span>
                  <span>Build the Future</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
