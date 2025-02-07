import React from 'react'
import './Skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import { motion,} from "motion/react"



const Skills = () => {
  return (
    <motion.section  
    initial={{opacity: 0,  y:50}}
 whileInView={{opacity:1, y:0}}
 transition={{type:'spring',stiffness:"120",damping:"20" ,duration:1}}
 viewport={{once:false}}
    
    className='skills section' id='Skills'>
    <h2 className="section__title">Skills</h2>
    <span className="section__subtitle">My technical level</span>
    <div className="skills__container container grid">
    <Frontend/>
    <Backend/>
    </div>
    </motion.section>
  )
}

export default Skills
