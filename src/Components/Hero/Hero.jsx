/** @format */

import React from "react";
import "./home.css";
import Social from "./Social-fi.jsx";
import Data from "./Data";
import ScrollDown from "./ScrollDown.jsx";
import { motion } from "motion/react";
import Switch from '../Button/Switch'


const Hero = () => {
  return (
    <section className="home section" id="home">
      <Switch/>
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social className="social__hide"></Social>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.1,
            }}
            viewport={{ once: true, type: "tween" }}
            className="home__img"
          ></motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.1,
            }}
            viewport={{once:true}}
            className="data"
          >
            <Data />
          </motion.div>
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Hero;
