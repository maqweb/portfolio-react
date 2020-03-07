import React from 'react';
import style from './Projects.module.css'
import SectionTitle from '../SectionTitle/SectionTItle';
import Project from './Project/Project';
import counterPic from './../../assets/projects/counter.png'
import todolistPic from './../../assets/projects/todolist.png'
import networkPic from './../../assets/projects/network.png'
import todoBootstrapPic from './../../assets/projects/todo-bootstrap.png'
import jsGamePic from './../../assets/projects/js-game.png'

class Projects extends React.Component {
    state = {
        projects: [
            {
                title: 'Simple Counter',
                delay: 600,
                img: counterPic,
                link: 'https://maqweb.github.io/counter-react/',
                linkToCode: 'https://github.com/maqweb/counter-react',
                description: 'React, Redux, react-redux'
            },
            {
                title: 'To do list',
                delay: 800,
                img: todolistPic,
                link: 'https://maqweb.github.io/todolist-react/',
                linkToCode: 'https://github.com/maqweb/todolist-react',
                description: 'React, Redux, react-redux, login/logout, restAPI, Route, dispatch actions, redux-thunk, axios, connect'
            },
            {
                title: 'Social Network',
                delay: 1000,
                img: networkPic,
                link: 'https://maqweb.github.io/social-react/',
                linkToCode: 'https://github.com/maqweb/social-react',
                description: 'React, Redux, react-redux, login/logout, restAPI, Route, dispatch actions, redux-thunk, axios, connect, ' +
                    'reselect, HOC, HOOK'
            },
            {
                title: 'To do list with Bootstrap',
                delay: 1100,
                img: todoBootstrapPic,
                link: 'https://maqweb.github.io/todo-react-app/',
                linkToCode: 'https://github.com/maqweb/todo-react-app',
                description: 'React, localStorage'
            },
            {
                title: 'Simple JavaScript Game',
                delay: 1200,
                img: jsGamePic,
                link: 'https://maqweb.github.io/simple-js-game/',
                linkToCode: 'https://github.com/maqweb/simple-js-game',
                description: 'Native JavaScript'
            },
        ]
    };

    render() {

        const projectElement = this.state.projects.map(p => {
            return <Project title={p.title}
                            delay={p.delay}
                            key={p.title}
                            img={p.img}
                            link={p.link}
                            linkToCode={p.linkToCode}
                            description={p.description}/>
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
