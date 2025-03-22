import React from "react";
import Navbar from "../../Layoutes/Navbar/index";
import Footer from "../../Layoutes/Footer/index";
import Slider from "react-slick";
import styles from "./style.module.scss";

const Experience = () => {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Junior Frontend Developer",
      company: "Freelance",
      description:
        "Building responsive and dynamic web applications while continuously refining my skills in React, JavaScript, and modern UI frameworks. Collaborated with clients to deliver high-quality solutions that enhance user experience.",
    },
    {
      year: "2025 - Future",
      title: "Frontend Engineer",
      company: "Tech Innovators Inc.",
      description:
        "Aiming to contribute to large-scale projects, develop cutting-edge user interfaces, and work alongside industry professionals to push the boundaries of frontend development.",
    },
  ];

  const skills = [
    { name: "React.js", icon: "fab fa-react" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "CSS/SCSS", icon: "fab fa-css3-alt" },
    { name: "Node.js", icon: "fab fa-node" },
    { name: "TypeScript", icon: "fas fa-code" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "Firebase", icon: "fas fa-fire" },
    { name: "MongoDB", icon: "fas fa-database" },
    { name: "SQL", icon: "fas fa-table" },
    { name: "Kotlin", icon: "fab fa-android" },
    { name: "Java", icon: "fab fa-java" },
    { name: "Python", icon: "fab fa-python" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.experience}>
      <div className={styles.container}>
        <h1 className={styles.title}>Experience</h1>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <span className={styles.year}>{exp.year}</span>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.skills}>
          <h2 className={styles.skillsTitle}>Skills</h2>
          <Slider {...settings} className={styles.skillsCarousel}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillItemWrapper}>
                <div className={styles.skillItem}>
                  <i className={`${skill.icon} ${styles.skillIcon}`}></i>
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Experience;
