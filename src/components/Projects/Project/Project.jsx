import React from 'react';
import style from "./../Projects.module.css";

function Project(props) {
    return (
        <div className={style.projectItem} style={{background: `${props.img}`}}>
            <a className={style.projectLink} href="link">watch the project</a>
            <div className={style.projectDescr}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <p className={style.projectDescrText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus excepturi facere, ipsum
                    quia veniam.
                </p>
            </div>
        </div>
    )
}

export default Project;