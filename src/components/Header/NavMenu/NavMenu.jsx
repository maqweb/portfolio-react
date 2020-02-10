import React from 'react';
import style from './NavMenu.module.css'
import {Link} from "react-scroll";

function NavMenu() {
    return (
        <div className={style.navMenu}>

            <Link to="intro"
                  spy={true}
                  activeClass={style.active}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={style.link}>Main</Link>

            <Link to="skills"
                  spy={true}
                  activeClass={style.active}
                  smooth={true}
                  offset={-50}
                  duration={500} className={style.link}>Skills</Link>

            <Link to="projects"
                  spy={true}
                  activeClass={style.active}
                  smooth={true}
                  offset={-20}
                  duration={500} className={style.link}>Projects</Link>

            <Link to="contacts"
                  spy={true}
                  activeClass={style.active}
                  smooth={true}
                  offset={-10}
                  duration={500} className={style.link}>Contacts</Link>

        </div>
    );
}

export default NavMenu;
