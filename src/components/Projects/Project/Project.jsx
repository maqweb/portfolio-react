import React from 'react';
import style from "./../Projects.module.css";
import {Zoom} from "react-reveal";

function Project(props) {
    return (
        <Zoom delay={props.delay}>
        <div className={style.projectItem} style={{backgroundImage: `url(${props.img})`}}>
            <a className={style.projectLink} href={props.link} rel="opener">watch the project</a>
            <div className={style.projectDescr}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <p className={style.projectDescrText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus excepturi facere, ipsum
                    quia veniam.
                </p>
            </div>
        </div>
        </Zoom>
    )
}

export default Project;