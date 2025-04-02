import React, { useState } from 'react'
import'./About.css'
// import cv
import AboutImg from"../../assets/About1.jpg"
import AboutInfo from './About-info.jsx'
import { motion,} from "motion/react"

const About = () => {
  const [isBlurred,setIsBlurred] = useState(true);
  const handleHover = () =>{
    setIsBlurred(false)
  }
  return (
 <motion.section
 initial={{opacity: 0,  y:300}}
 whileInView={{opacity:1, y:0}}
 transition={{type:'spring',stiffness:"120",damping:"20",
  duration:'1'
 }}
 
 viewport={{once:true}}
  className="about section" id="About">
    <h2 className="section__title">About Me</h2>
    <span className="section__subtitle">My Introduction</span>
    <div className="about__container container grid">
        <motion.div
         initial={{opacity: 0,  y:300}}
         whileInView={{opacity:1, y:0 ,delay:1}}
         transition={{type:'spring',stiffness:"120",damping:"20",
          duration:'1'
         }}
         className="img__container">
        <img src={AboutImg} alt="" className={isBlurred ? "blurred":""}
        onMouseOver={handleHover} />
      
        </motion.div>
        <div className="about__data">
          <AboutInfo/>

            <p className="about__description">frontend developer, I create web pages with ui ux user interface i have years of experience and many clients are happy with my projects carried out</p>
          
            <a download ="" href="https://1drv.ms/w/s!AomcZBq8dYxnfNoudAnbIQiO5vQ?e=rZLjWI" className="button button--flex"> Download CV </a>
        </div>
    </div>
 </motion.section>
  )
}

export default About
