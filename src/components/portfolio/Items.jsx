import React,{useState} from 'react';
import {FaArrowRight,FaGithub,FaLink} from 'react-icons/fa'
import shapeTwo from "../../assets/shape-2.png";
import {motion} from 'framer-motion';

const Items = ({projectItems}) => {
  const sortedx = projectItems.sort((a, b) => a.id - b.id);
  return (
    <>
    {sortedx.map((projectItems)=>{
      const {id, img, category, title, description} =projectItems;
      const [titlex, link1, link2] = title.split('|');
      return(
        <motion.div
          layout
          animate={{opacity: 1, scale: 1}}
          initial={{opacity: 0.8, scale: 0.6}}
          exit={{opacity: 0.8, scale: 0.6}}
          transition={{duration: 0.3}}
          className="portfolio__items card card-two" key={id}>
          <div className="portfolio__img-wrapper">
            <img src={img} alt="" className="portfolio__img" />
          </div>
          <span className="portfolio__category text-cs">{category}</span>
          <span className="po__title">
            <h3 className="portfolio__title">{titlex}</h3>
            {link1&&<a href={link1}><FaLink className='link__icon2'></FaLink></a>}
            {link2&&<a href={link2}><FaGithub className='link__icon2'></FaGithub></a>}
          </span>
          <p className="portfolio__description">{description}</p>

          {/* <a href="" className="link knowmore">
            Know More
            <FaArrowRight className='link__icon'></FaArrowRight>
          </a> */}


          <img src={shapeTwo} alt="" className="shape c__shape" />
        </motion.div>
      )
    })}
    </>
  )
}

export default Items