import React, { useState } from "react";
import styles from "./style.module.scss";

const Navabar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>Mr.Akbarshokh</p>
        </div>

        <div className={styles.right}>
          {["Home", "Projects", "Experience", "About"].map((item) => (
            <p
              key={item}
              className={active === item ? styles.active : styles.inactive}
              onClick={() => setActive(item)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navabar;
