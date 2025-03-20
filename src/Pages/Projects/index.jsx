import React from "react";
import Navabar from "../../Layoutes/Navbar";
import Footer from "../../Layoutes/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.scss";

const projectsData = [
  {
    id: 1,
    title: "Project One",
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com/username/project1",
    demo: "https://project1-demo.com",
  },
  {
    id: 2,
    title: "Project Two",
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com/username/project2",
    demo: "https://project2-demo.com",
  },
  {
    id: 3,
    title: "Project Three",
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com/username/project3",
    demo: "https://project3-demo.com",
  },
  {
    id: 4,
    title: "Project Four",
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com/username/project4",
    demo: "https://project4-demo.com",
  },
];

const Projects = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.projects}>
        <h1 className={styles.projectsTitle}>Projects</h1>
        <div className={styles.container}>
          <Slider {...settings}>
            {projectsData.map((project) => (
              <div key={project.id} className={styles.cardWrapper}>
                <div className={styles.card}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.cardImage}
                  />
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
      </div>
    </>
  );
};

export default Projects;
