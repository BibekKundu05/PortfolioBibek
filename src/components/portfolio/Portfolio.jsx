import React, { useState, useEffect} from 'react'
import List from './List';
import Items from './Items';
// import {projects} from '../../Data';
import './portfolio.css';
import { AnimatePresence } from 'framer-motion';
import shapeOne from "../../assets/shape-2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Portfolio = ({projects}) => {
  const allNavList = ['all',...new Set(projects.map((projects)=>projects.category))];
  const [projectItems, setMenuItems]=useState(projects);
  const [navList, setCategories]=useState(allNavList);
  
  const filterItems=(category)=>{
    if(category==='all'){
      setMenuItems(projects);
      return;
    }
    const newProjectItems=projects.filter((item) => item.category===category);
    setMenuItems(newProjectItems);
  };

  useEffect(()=>{
      AOS.init({duration:1000});
  },[]);

  return (
    <section className='portfolio section' id='work'>
      <h2 className="section__title text-cs" data-aos="fade-down">Portfolio</h2>
        <p className="section__subtitle" data-aos="fade-down">
            My <span>Cases</span>
        </p>

        <div className='btnsx' data-aos="zoom-in"><List list={navList} filterItems={filterItems}/></div>
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

export default Portfolio