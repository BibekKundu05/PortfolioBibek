import React, { useEffect, useState } from 'react';
import Card from './Card';
import './resume.css';
import shapeOne from "../../assets/shape-2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
  const [resumeData, setResumeData] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchData = async () => {
      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbyE1FckZSG2Op6tulWuHwzKniJVpXYkeXjBLq3PKS686vsjoeHStsfUMcrIv1LyGtRsOw/exec");
        const data = await response.json();

        if (Array.isArray(data.cv)) {
          setResumeData(data.cv);
        } else {
          console.error("Unexpected data format from Google Script:", data);
        }
      } catch (error) {
        console.error("Error fetching resume data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="resume section" id="resume">
      <h2 className="section__title text-cs">Resume</h2>
      <p className="section__subtitle">My <span>Story</span></p>

      <div className="resume__container container grid">
        <div className="resume__group">
          <div className="resume__items">
            {resumeData
              .filter(item => item.category === "left")
              .map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  description={item.description}
                />
              ))}
          </div>
        </div>

        <div className="resume__group">
          <div className="resume__items">
            {resumeData
              .filter(item => item.category === "right")
              .map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  description={item.description}
                />
              ))}
          </div>
        </div>
      </div>

      <div className="section__deco deco__left">
        <img src={shapeOne} alt="decorative" className="shape" />
      </div>
    </section>
  );
};

export default Resume;
