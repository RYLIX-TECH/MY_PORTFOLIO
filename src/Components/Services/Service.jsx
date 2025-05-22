/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useState, memo } from 'react'
import { motion,} from "motion/react"

import "./Services.css";

const ServiceModal = memo(({ isOpen, onClose, title, description }) => (
  <div className={isOpen ? "services__modal active-modal " : "services__modal"}>
    <div className="services__modal-content">

      <i onClick={onClose} className="uil uil-times services__modal-close"></i>
      <h3 className="services__modal-title">{title}</h3>
      <p className="services__modal-description">{description}</p>
      <ul className="services__modal-services grid">

        <li className="services__modal-service">
          <i className="ul uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">I develop the user interface</p>
        </li>
        <li className="services__modal-service">
          <i className="ul uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Web page development</p>
        </li>
        <li className="services__modal-service">
          <i className="ul uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">I create UX element interaction</p>
        </li>
        <li className="services__modal-service">
          <i className="ul uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">I position your company brand</p>
        </li>
        <li className="services__modal-service">
          <i className="ul uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Design and mockups of products for companies</p>
        </li>
      </ul>
    </div>
  </div>
));

const ServiceCard = memo(({ icon, title, index, isActive, onToggle }) => (
  <motion.div 
  initial={{opacity:0, y:index-100}}
  inherit={{opacity:0}}
  animate={{ once:true ,opacity:1, y:0,}}
  transition={{duration:0.5, delay:index*0.1,
    type:'spring',
    stiffness:'200',
    damping:'20'
  }}
  className="service__content card">
            <div className="shine"></div>

    <div>
      <i className={`uil ${icon} services__icon`}></i>
      <h3 className='services__title'>{title}</h3>
    </div>
    <span className="services__button" onClick={() => onToggle(index)}>
      View More <i className="uil uil-arrow-right services__button-icon"></i>
    </span>
    <ServiceModal 
      isOpen={isActive}
      onClose={() => onToggle(0)}
      title={title}
      description="Worked with more than 3 years of experience providing quality work to clients and companies"
    />
  </motion.div>
));

const Service = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: "uil-web-grid",
      title: "Product Designer"
    },
    {
      icon: "uil-arrow",
      title: "UI/UX Designer"
    },
    {
      icon: "uil-edit",
      title: "Visual Designer"
    }
  ];

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className="services__container container grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            index={index + 1}
            isActive={activeTab === index + 1}
            onToggle={toggleTab}
          />
        ))}
      </div>
    </section>
  )
}

export default memo(Service)

