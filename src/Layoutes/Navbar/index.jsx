import React, { useState } from "react";
import styles from "./style.module.scss";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (item) => {
    setActive(item);
    const sectionId = item.toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p onClick={() => handleNavigation("Home")}>Mr.Akbarshokh</p>
        </div>

        <button className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? "✕" : "☰"}
        </button>

        <div className={`${styles.right} ${isOpen ? styles.open : ""}`}>
          {["Home", "About", "Projects", "Experience"].map((item) => (
            <p
              key={item}
              className={active === item ? styles.active : styles.inactive}
              onClick={() => handleNavigation(item)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
