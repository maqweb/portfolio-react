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
                    
                    <Project title={'Social Network'}/>
                    <Project title={'To do list'}/>
                    <Project title={'Counter'}/>

                </div>
            </div>
        </div>
    );
}

export default Projects;
