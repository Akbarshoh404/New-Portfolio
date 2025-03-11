import React from "react";

import Navabar from "../../Layoutes/Navbar";
import Footer from "../../Layoutes/Footer";

import styles from "./style.module.scss";

const Home = () => {
  return (
    <>
      <Navabar />

      <div className={styles.home}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.emojiContainer}>
              <p>👨‍💻</p>
            </div>
          </div>

          <div className={styles.right}>
            <p className={styles.p1}>Frontend Developer</p>

            <p className={styles.p2}>Mr.Akbarshokh</p>

            <p className={styles.p3}>
              Potřebujete vytvořit webové stránky ? Při tvorbě webových stránek
              zajišťuji celkový design od návrhu až po realizaci. Perfektní
              technickou stránku zajistišťuji též, aby všechno běželo přesně jak
              má. Kdyby by Vás mé portofilo přípradně zkušenosti zaujaly -
              napište mi !
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
