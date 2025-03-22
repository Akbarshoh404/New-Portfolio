// Projects.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.scss";

import edurate from "../../Components/images/EduRate.png";
import zakovat from "../../Components/images/zakovat.png";
import tetra from "../../Components/images/tetra textile.jpg";
import cambridge from "../../Components/images/cambridge.png";
import core from "../../Components/images/core.png";

const projectsData = [
  {
    id: 1,
    title: "EduRate",
    image: edurate,
    github: "https://github.com/BFozilkhon/EduRate",
    demo: "https://edurate.uz",
  },
  {
    id: 2,
    title: "Zakovat",
    image: zakovat,
    github: "https://github.com/Akbarshoh404/Zakovat",
    demo: "https:/ict-zakovat.netlify.app",
  },
  {
    id: 3,
    title: "Tetra Textile",
    image: tetra,
    github: "https://github.com/Akbarshoh404/Tetra-Textile",
    demo: "https://tetra-textile.netlify.app",
  },
  {
    id: 4,
    title: "Cambridge",
    image: cambridge,
    github: "https://github.com/Akbarshoh404/Cambridge-Website",
    demo: "https://cambridge-lessons.netlify.app",
  },
  {
    id: 5,
    title: "Core Collection",
    image: core,
    github: "https://github.com/Akbarshoh404/Core-Collection",
    demo: "https://core-collection.netlify.app",
  },
];

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
          arrows: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px",
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className={styles.projects}>
      <h1 className={styles.projectsTitle}>Projects</h1>
      <div className={styles.container}>
        <Slider {...settings}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.cardImage}
                  />
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <div className={styles.cardLinks}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
