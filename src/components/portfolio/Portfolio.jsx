import React, { useState, useEffect } from 'react'
import List from './List';
import Items from './Items';
import './portfolio.css';
import { AnimatePresence } from 'framer-motion';
import shapeOne from "../../assets/shape-2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [projectItems, setMenuItems] = useState([]);
  const [navList, setCategories] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyE1FckZSG2Op6tulWuHwzKniJVpXYkeXjBLq3PKS686vsjoeHStsfUMcrIv1LyGtRsOw/exec');
      const data = await response.json();

      const formattedProjects = data.projects.map(project => ({
        ...project,
        img: convertDriveLinkToThumbnail(project.img)
      }));

      setProjects(formattedProjects);
      setMenuItems(formattedProjects);

      const allNavList = ['all', ...new Set(formattedProjects.map(item => item.category))];
      setCategories(allNavList);

    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  const convertDriveLinkToThumbnail = (link) => {
    const fileIdMatch = link.match(/\/d\/(.*?)\//);
    const fileId = fileIdMatch ? fileIdMatch[1] : '';
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
  };

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(projects);
      return;
    }
    const newProjectItems = projects.filter((item) => item.category === category);
    setMenuItems(newProjectItems);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetchProjects();
  }, []);

  return (
    <section className='portfolio section' id='work'>
      <h2 className="section__title text-cs" data-aos="fade-down">Portfolio</h2>
      <p className="section__subtitle" data-aos="fade-down">
        My <span>Cases</span>
      </p>

      <div className='btnsx' data-aos="zoom-in">
        <List list={navList} filterItems={filterItems} />
      </div>

      <div className="portfolio__container container grid" data-aos="zoom-in">
        <AnimatePresence initial={false}>
          <Items projectItems={projectItems} />
        </AnimatePresence>
      </div>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>
    </section>
  )
}

export default Portfolio;
