import React, { useEffect, useState } from 'react';
import './skills.css';
import shapeOne from "../../assets/shape-2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Skill icons
import pic1 from "../../assets/1.png";
import pic2 from "../../assets/2.png";
import pic3 from "../../assets/3.png";
import pic4 from "../../assets/4.png";
import pic5 from "../../assets/5.png";
import pic6 from "../../assets/6.png";
import pic7 from "../../assets/7.png";
import pic8 from "../../assets/8.png";
import pic9 from "../../assets/9.png";
import pic10 from "../../assets/10.png";
import pic11 from "../../assets/11.png";
import pic12 from "../../assets/12.png";
import pic13 from "../../assets/13.png";
import pic14 from "../../assets/14.png";
import pic15 from "../../assets/15.png";
import pic16 from "../../assets/16.png";
import pic17 from "../../assets/17.png";
import pic18 from "../../assets/18.png";
import pic19 from "../../assets/19.png";
import pic20 from "../../assets/20.png";
import pic21 from "../../assets/21.png";

const images = [
  pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11,
  pic12, pic13
];

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  
    fetch('https://script.google.com/macros/s/AKfycbwCQre1RBcHEGxt_7F7tGQKHBQ3DN8mFt5KaFkeFPH4oTJcdS5hnjgHCWcDem6KMAqBuQ/exec')
  .then(response => response.json())
  .then(data => {
    if (data && data.skills) {
      setSkills(data.skills);  // <-- FIXED HERE
    }
  })
  .catch(error => console.error('Error fetching skills:', error));

  }, []);
  

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title text-cs" data-aos="fade-down">Professional Skills</h2>
      <p className="section__subtitle" data-aos="fade-down">
        My <span>Talents</span>
      </p>

      <div className="skills__container container grid" data-aos="zoom-in-up">
        {skills.length === 0 ? (
          <p className="loading-text">Loading skills...</p>
        ) : (
          skills.map(({ name, percentage, description }, index) => (
            <div className="skills__item" key={index}>
              <div className="skills__title">
                <h3 className="skills__name">{name}</h3>
                <span className="skills__number">{percentage}<span>%</span></span>
              </div>
              <p className="skills__description">{description}</p>
              <div className="skills__bar">
                <span className="skills__percentage" style={{ width: `${percentage}%` }}>
                  <span></span>
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="skills_icons" data-aos="fade-up">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Skill icon ${index + 1}`} loading="lazy" />
        ))}
      </div>

      <div className="section__deco deco__left">
        <img src={shapeOne} alt="Decorative shape" className="shape" />
      </div>
    </section>
  );
};

export default Skills;
