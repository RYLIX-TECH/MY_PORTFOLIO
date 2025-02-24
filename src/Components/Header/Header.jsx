import { useState,useRef, useEffect} from 'react'
import { motion } from "motion/react"
import "./Header.css"
const Header = () => {
    // ===========  toggle menu ====================//
    const[Toggle,showMenu] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                showMenu(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [Toggle]);

  return (
   <motion.header
   initial={{y: -100,opacity: 0}}
   animate={{y:0 ,opacity:1}}
         
         className="header">
    <nav  ref= {navRef}className="nav container">
        <a href="index.html" className="nav__logo">RYLIX</a>


        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list ">
                <li className="nav__item">
                    <a href="#home" className="nav__link active-link">
                        <i className="uil uil-estate nav__icon"></i>home
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#About" className="nav__link">
                        <i className="uil uil-user nav__icon"></i>About
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#Skills" className="nav__link">
                        <i className="uil uil-file nav__icon"></i>skill
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#services" className="nav__link">
                        <i className="uil uil-briefcase-alt nav__icon"></i> services
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#portfolio" className="nav__link">
                        <i className="uil uil-scenery nav__icon"></i>portfolio
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#contact" className="nav__link">
                        <i className="uil uil- nav__icon"></i>Contact
                    </a>
                </li>
                <li className="nav__item">
                    {/* <Switch /> */}
                </li>
                

            </ul>
            <i className="uil uil-times nav__close" onClick={()=>showMenu(!Toggle)}></i>
        </div>
        <div className="nav__toggle" onClick={()=>showMenu(!Toggle)}>
         <i className="uil uil-apps nav__toggle"></i>    
        </div>
    </nav>
   </motion.header>
  )
}

export default Header
