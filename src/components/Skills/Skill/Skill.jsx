import React from 'react';
import style from './../Skills.module.css';

function Skill(props) {
    return (
        <div className={style.skillsItem}>
            <div className={style.skillPic}>
                <img className={props.title === 'React' ? style.reactIcon : style.skillIcon} src={props.icon} alt=""/>
            </div>
            <h3 className={style.skillTitle}>{props.title}</h3>
            <p className={style.skillDescr}>{props.description}</p>
        </div>
    )
}

export default Skill;