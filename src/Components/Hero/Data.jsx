import React from 'react'
import Button from '../Button/Button'


/**
 * @function Data
 * @description A React component that renders the hero section data for a portfolio.
 * @returns {JSX.Element} A div containing the title, subtitle, description, and a Button component.
 */
const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">Anyanwu Franklin</h1>
        <h3 className='home__subtitle'> web Developer</h3>
        <p className="home__description">Passionate about creating clean, modern, and responsive websites that deliver exceptional user experiences. I specialize in front-end design and development, helping brands bring their ideas to life online.
        .</p>
        <Button/>
    </div>
  )
}

export default Data
