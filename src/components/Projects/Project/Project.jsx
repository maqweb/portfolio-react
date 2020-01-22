import React from 'react';
import style from "../Projects.module.css";

function Project(props) {
    return (
        <div className={style.projectItem} style={{background: `${props.img}` }}>
            <a className={style.projectLink} href="link">watch the project</a>
            <div className={style.projectDescr}>title project</div>
        </div>
    )
}

export default Project;