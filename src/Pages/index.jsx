// Portfolio.jsx
import React from "react";
import styles from "./style.module.scss";
import Navbar from "../Layoutes/Navbar";
import Footer from "../Layoutes/Footer";
import Home from "./Home/index";
import About from "./About/index";
import Experience from "./Experience/index";
import Projects from "./Projects/index";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <Navbar />
      <main className={styles.mainContent}>
        <section id="home" className={styles.section}>
          <Home />
        </section>
        <section id="about" className={styles.section}>
          <About />
        </section>
        <section id="projects" className={styles.section}>
          <Projects />
        </section>
        <section id="experience" className={styles.section}>
          <Experience />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
