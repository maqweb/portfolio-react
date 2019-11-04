import React from 'react';
import style from './Skills.module.css'

function Skills() {
  return (
    <div className={style.skills}>
      <div className={style.container}>
        <div className={style.sectionTitle}>My skills</div>
        <div className={style.skillsWrap}>
          <div className={style.skillsItem}>HTML & CSS</div>
          <div className={style.skillsItem}>JavaScript</div>
          <div className={style.skillsItem}>React</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
