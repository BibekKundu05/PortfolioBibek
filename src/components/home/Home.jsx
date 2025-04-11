import React from "react";
import profileImg from "../../assets/profile-img3.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello World! <span>My Name is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>Bibek</span> Kundu
          </h1>

          <div className="home__job">
            <span className="text-cs">I Am</span>
            <b className="typew">
              <Typewriter
                options={{
                  strings: ["Developer", "Designer", "Student"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </b>
          </div>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                Web
              </span>
              <span className="text-sm text-cs">
                <span>Developer</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">AI/ML</span>
              <span className="text-sm text-cs">
                <span>Engineer</span>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
            From India, I'm a Full Stack and Android Developer with a passion
            for Design. Currently pursuing B.Tech in CSE, I love to explore and
            create, always eager to discuss new ideas.
          </p>

          <div className="home__socials">
            <a
              href="https://www.linkedin.com/in/bibek-kundu/"
              className="home__social-link"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/BibekKundu05"
              className="home__social-link"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.instagram.com/iambibekkundu_07/"
              className="home__social-link"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="home__btns">
            <a
              href="https://pdf.ac/1AyHL3"
              target="_blank"
              className="btn text-cs"
            >
              <span className="btntxt">Download CV</span>
            </a>
            <a href="#skills" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>
      </div>
    </section>
  );
};

export default Home;
