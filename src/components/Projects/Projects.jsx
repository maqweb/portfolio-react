import React from 'react';
import style from './Projects.module.css'
import SectionTitle from '../SectionTitle/SectionTItle';
import Project from './Project/Project';
import counterPic from './../../assets/projects/counter.png'
import todolistPic from './../../assets/projects/todolist.png'

function Projects() {
    return (
        <div className={style.projects}>
            <div className={style.container}>

                <SectionTitle title={`my projects`}/>

                <div className={style.projectsWrap}>
                    
                    <Project title={'Social Network'} />
                    <Project title={'To do list'} img={todolistPic} link={'https://maqweb.github.io/todolist-react/'}/>
                    <Project title={'Counter'} img={counterPic} link={'https://maqweb.github.io/counter-react/'}/>

                </div>
            </div>
        </div>
    );
}

export default Projects;
