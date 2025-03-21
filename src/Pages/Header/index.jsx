// Home.jsx
import React from "react";
import styles from "./style.module.scss";
import profileImage from "../../Components/icons/emoji.png";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imageContainer}>
            <img
              src={profileImage}
              alt="Profile"
              className={styles.profileImage}
            />
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.p1}>Frontend Developer</p>
          <p className={styles.p2}>Mr.Akbarshokh</p>
          <p className={styles.p3}>
            Do you need a website created? I handle the entire web development
            process, from design to implementation. I also ensure perfect
            technical execution so everything runs smoothly. If my portfolio or
            experience interests you, feel free to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
