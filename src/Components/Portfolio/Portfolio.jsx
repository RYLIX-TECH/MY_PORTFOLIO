import React from 'react'
import './Portfolio.css'
import { motion, spring } from 'framer-motion'
const Portfolio = () => {
  return (
    
    <div>
      <section  className='portfolio__container'  id='portfolio' >

      <h1 className='section__title'>Top Projects</h1>
      <div className="portfolio__content" >
        <div className="content__items">
            <motion.div
            initial={{opacity:0,Y:20}}
            transition={{duration:0.5,delay:0.2,type:'tween'}}
            whileInView={{opacity:1,x:0}}
            className="container__item">
              <div className="container__one">

              </div>
              <div className="visit__site">
                <a href="#">Financier
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
                </div> 
            </motion.div>
            <motion.div
             initial={{opacity:0,Y:100}}
             transition={{duration:1,delay:0.2,type:'tween'}}
             whileInView={{opacity:1,Y:0}}
             className="container__item">
              <div className="container__Two">

              </div>
              <div className="visit__site">
              <a href="#">Financier
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
                </div> 
            </motion.div>
            <motion.div
            initial={{opacity:0,Y:100}}
            transition={{duration:1.2,delay:0.3,type:'tween'}}
            whileInView={{opacity:1,Y:0}}
             className="container__item">
              <div className="container__Three">

              </div>
              <div className="visit__site">
              <a href="#">Financier
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
                </div> 
            </motion.div>
            <motion.div
            initial={{opacity:0,Y:100}}
            transition={{duration:1.4,delay:0.4,type:spring}}
            whileInView={{opacity:1,Y:0}} className="container__item">
              <div className="container__Four">

              </div>
              <div className="visit__site">
              <a href="#">Financier
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
                </div> 
            </motion.div>
           
        </div>
      </div>
      </section>
    </div>
  )
}

export default Portfolio
