import React from 'react';
import style from './../Skills.module.css';

function Skill(props) {
    return (
        <div className={style.skillsItem}>
            <div className={style.skillPic}>
                <img className={props.title === 'React' ? style.reactIcon : style.skillIcon} src={props.icon} alt=""/>
            </div>
            <p className={style.skillTitle}>{props.title}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Skill;