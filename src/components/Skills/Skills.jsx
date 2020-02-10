import React from 'react';
import style from './Skills.module.css'
import SectionTitle from "../SectionTitle/SectionTItle";
import Skill from "./Skill/Skill";
import reactIcon from './../../assets/logo.svg';
import htmlIcon from './../../assets/code.svg';
import jsIcon from './../../assets/js.svg'
import adaptiveIcon from './../../assets/adaptive.svg'
import reduxIcon from './../../assets/Redux.svg'
import tsIcon from './../../assets/typescript.svg'


class Skills extends React.Component {
    state = {
        skills: [
            {
                title: 'React',
                icon: reactIcon,
                delay: 600,
                description: 'Lorem ipsum dolor sit amet,l vero. Assumenda dolorem doloribus incidunt magnam quos tempora veniam!'
            },
            {
                title: 'Redux',
                icon: reduxIcon,
                delay: 800,
                description: 'Lorem ipsum dolor sit amet,l vero. Assumenda dolorem doloribus incidunt magnam quos tempora veniam!'
            },
            {
                title: 'TypeScript',
                icon: tsIcon,
                delay: 1000,
                description: 'Lorem ipsum dolor sit amet,l vero. Assumenda dolorem doloribus incidunt magnam quos tempora veniam!'
            },
            {
                title: 'JavaScript',
                icon: jsIcon,
                delay: 1200,
                description: 'Lorem ipsum dolor sit amet,l vero. Assumenda dolorem doloribus incidunt magnam quos tempora veniam!'
            },
            {
                title: 'HTML & CSS',
                icon: htmlIcon,
                delay: 1400,
                description: 'Lorem ipsum dolor sit amet,l vero. Assumenda dolorem doloribus incidunt magnam quos tempora veniam!'
            },
            {
                title: 'Adaptive Layout',
                icon: adaptiveIcon,
                delay: 1600,
                description: 'Lorem ipsum dolor sit amet,l vero. Assumenda dolorem doloribus incidunt magnam quos tempora veniam!'
            },
        ]
    };

    render() {

        const skillElement = this.state.skills.map(s => {
            return <Skill title={s.title} icon={s.icon} delay={s.delay} description={s.description}/>
        });

        return (
            <div className={style.skills}>
                <div id="skills" className={style.container}>
                    <SectionTitle title={`my skills`}/>

                    <div className={style.skillsWrap}>
                        {skillElement}
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
