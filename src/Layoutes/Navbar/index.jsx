import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./style.module.scss";

const Navabar = () => {
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.slice(1) || "home";
    const activeItem = ["home", "projects", "experience", "about"].find(
      (item) => item === path.toLowerCase()
    );
    setActive(
      activeItem
        ? activeItem.charAt(0).toUpperCase() + activeItem.slice(1)
        : "Home"
    );
  }, [location.pathname]);

  const handleNavigation = (item) => {
    setActive(item);
    navigate(`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p onClick={() => handleNavigation("Home")}>Mr.Akbarshokh</p>
        </div>

        <div className={styles.right}>
          {["Home", "Projects", "Experience", "About"].map((item) => (
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

export default Navabar;
