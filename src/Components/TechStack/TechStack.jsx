import "./TechStack.css";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Grid, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import cssImage from "../../assets/css.png";
import htmlImage from "../../assets/html5.png";
import javascriptImage from "../../assets/javascript.png"; 
import phpImage from "../../assets/php.png";
import reactImage from "../../assets/react.png";
// Add more tech stack images here
 import nodeImage from "../../assets/nodedotjs.png";
 import mysql from "../../assets/mysql.png";
 import tailwind from "../../assets/tailwindcss.png";

const TechStack = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const techItems = [
    { image: cssImage, name: "CSS" },
    { image: htmlImage, name: "HTML" },
    { image: javascriptImage, name: "JavaScript" },
    { image: phpImage, name: "PHP" },
    { image: reactImage, name: "React" },
    { image: nodeImage, name: "Node.js" },
    { image: mysql, name: "MySql" },
    { image: tailwind, name: "TailWind" },
   
  ];

  return (
    <motion.div 
      className="tech__section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="section__title"
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tech Stack
      </motion.h2>
      <div className="tech-carousel-container">
        <Swiper
          grabCursor={true}
          modules={[Grid, FreeMode, Autoplay, Navigation]}
          grid={{
            rows: isMobile ? 1 : 2,
            fill: 'row'
          }}
          freeMode={{
            enabled: true,
            sticky: false,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          slidesPerView={isMobile ? 1 : 3}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2, grid: { rows: 2 } },
            768: { slidesPerView: 3, grid: { rows: 2 } },
            1024: { slidesPerView: 4, grid: { rows: 2 } }
          }}
          className="tech-swiper"
        >
          {techItems.map((tech, index) => (
            <SwiperSlide key={index} className="tech-slide">
              <motion.div 
                className="tech-card"
                whileHover={{ y: -5 }}
                transition={{ type: "tween", stiffness: 300 }}
              >
                <img 
                  src={tech.image} 
                  alt={tech.name} 
                  draggable="false" 
                  loading="lazy"
                />
                <motion.div 
                  className="tech-name"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {tech.name}
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default TechStack;