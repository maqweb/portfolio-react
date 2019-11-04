import React from 'react';
import style from './NavMenu.module.css'

function NavMenu() {
  return (
    <div className={style.navMenu}>
      <a href="1" className={style.link}>Main</a>
      <a href="1" className={style.link}>Skills</a>
      <a href="1" className={style.link}>Projects</a>
      <a href="1" className={style.link}>Contacts</a>
    </div>
  );
}

export default NavMenu;
