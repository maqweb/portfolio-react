import React from 'react';
import style from './Projects.module.css'
import SectionTitle from "../SectionTitle/SectionTItle";

function Projects() {
    return (
        <div className={style.projects}>
            <div className={style.container}>

                <SectionTitle title={`my projects`}/>

                <div className={style.projectsWrap}>

                    <div className={style.projectItem}>
                        <a className={style.projectLink} href="link">watch the project</a>
                        <div className={style.projectDescr}>title project</div>
                    </div>

                    <div className={style.projectItem}>
                        <a className={style.projectLink} href="link">watch the project</a>
                        <div className={style.projectDescr}>title project</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;
