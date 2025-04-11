import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import shapeTwo from "../../assets/shape-2.png";
import shapeOne from "../../assets/shape-2.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1500 });

    // Fetch data from the Apps Script API
    fetch('https://script.google.com/macros/s/AKfycbwCQre1RBcHEGxt_7F7tGQKHBQ3DN8mFt5KaFkeFPH4oTJcdS5hnjgHCWcDem6KMAqBuQ/exec')
      .then(response => response.json())
      .then(data => {
        if (data && data.services) {
          setServices(data.services);
        }
      })
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  return (
    <section className="services section" id="services">
      <h2 className="section__title text-cs" data-aos="fade-down">Things I do</h2>
      <p className="section__subtitle" data-aos="fade-down">
        My <span>Services</span>
      </p>

      <Swiper
        spaceBetween={50}
        pagination={{ clickable: true }}
        breakpoints={{
          540: { slidesPerView: 1, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1200: { slidesPerView: 3, spaceBetween: 40 },
        }}
        modules={[Pagination]}
        className="mySwiper services__container container"
        data-aos="fade-right"
      >
        {services.map(({ name, title, description }, index) => (
          <SwiperSlide className="services__item card card-one" key={index}>
            <span className="services__subtitle text-cs">{name}</span>
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>

            <a href="#" className="link">
              Know More
              <FaArrowRight className='link__icon' />
            </a>
            <img src={shapeTwo} alt="" className="shape c__shape" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>
    </section>
  );
};

export default Services;
