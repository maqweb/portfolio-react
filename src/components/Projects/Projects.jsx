import React from 'react';
import style from './Projects.module.css'
import SectionTitle from '../SectionTitle/SectionTItle';
import Project from './Project/Project';
import counterPic from './../../assets/projects/counter.png'
import todolistPic from './../../assets/projects/todolist.png'
import networkPic from './../../assets/projects/network.png'

class Projects extends React.Component {
    state = {
        projects: [
            {
                title: 'Social Network',
                delay: 600,
                img: networkPic,
                // link:,
                description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus excepturi facere, ipsum quia veniam.'
            },
            {
                title: 'To do list',
                delay: 800,
                img: todolistPic,
                link: 'https://maqweb.github.io/todolist-react/',
                description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus excepturi facere, ipsum quia veniam.'
            },
            {
                title: 'Counter',
                delay: 1000,
                img: counterPic,
                link: 'https://maqweb.github.io/counter-react/',
                description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus excepturi facere, ipsum quia veniam.'
            },
        ]
    };

    render() {

        const projectElement = this.state.projects.map(p => {
            return <Project title={p.title} delay={p.delay} img={p.img} link={p.link} description={p.description}/>
        });

        return (
            <div id="projects" className={style.projects}>
                <div className={style.container}>

                    <SectionTitle title={`my projects`}/>

                    <div className={style.projectsWrap}>
                        {projectElement}
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
