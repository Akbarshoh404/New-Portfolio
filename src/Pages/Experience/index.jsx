import React from "react";

import Navbar from "../../Layoutes/Navbar/index";
import Footer from "../../Layoutes/Footer/index";

import styles from "./style.module.scss";

const Experience = () => {
  return (
    <>
      <Navbar />
      <div className={styles.experience}></div>
      <Footer />
    </>
  );
};

export default Experience;
