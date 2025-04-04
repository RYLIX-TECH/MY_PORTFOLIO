import React, { useMemo } from 'react'
import './Portfolio.css'
import { motion } from 'framer-motion'

const Portfolio = () => {
  const projects = useMemo(() => [
    { id: 1, className: 'container__one', delay: 0.2 },
    { id: 2, className: 'container__Two', delay: 0.2 },
    { id: 3, className: 'container__Three', delay: 0.3 },
    { id: 4, className: 'container__Four', delay: 0.4 },
  ], []);

  return (
    <div>
      <section className='portfolio__container' id='portfolio'>
        <h1 className='section__title'>Top Projects</h1>
        <div className="portfolio__content">
          <div className="content__items">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 + index * 0.2, delay: project.delay, type: 'tween' }}
                whileInView={{ opacity: 1, y: 0 }}
                className="container__item"
              >
                <div className={project.className}></div>
                <div className="visit__site">
                  <a href="#">Financier
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
