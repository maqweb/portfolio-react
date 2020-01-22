import React from 'react';
import style from './Projects.module.css'
import SectionTitle from "../SectionTitle/SectionTItle";
import Project from "./Project/Project";

function Projects() {
    return (
        <div className={style.projects}>
            <div className={style.container}>

                <SectionTitle title={`my projects`}/>

                <div className={style.projectsWrap}>
                    
                    <Project img="img"/>
                    <Project/>
                    <Project/>

                </div>
            </div>
        </div>
    );
}

export default Projects;
