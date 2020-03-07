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
                description: 'Class & function components, life cycle methods, HOC, HOOK, key, setState, props, PropTypes, axios, ' +
                    'controlled elements, ref;'
            },
            {
                title: 'Redux',
                icon: reduxIcon,
                delay: 800,
                description: 'combineReducers, reducer, dispatch, action, provider, connect, react-router-dom, redux-thunk;'
            },
            {
                title: 'TypeScript',
                icon: tsIcon,
                delay: 1000,
                description: 'typing props, create Interfaces, generics;'
            },
            {
                title: 'JavaScript',
                icon: jsIcon,
                delay: 1200,
                description: 'es5 / es6; Arrow functions, array methods, spread, destructuring, eventListener, delegation, ' +
                    'event propagation, promise, pure function, localStorage;'
            },
            {
                title: 'HTML & CSS',
                icon: htmlIcon,
                delay: 1400,
                description: 'knowledge of semantic tags, use prepros sass;'
            },
            {
                title: 'Adaptive Layout',
                icon: adaptiveIcon,
                delay: 1600,
                description: 'use flexbox, css grid, media queries, bootstrap3/4;'
            },
        ]
    };

    render() {

        const skillElement = this.state.skills.map(s => {
            return (
                <Skill title={s.title}
                       key={s.title}
                       icon={s.icon}
                       delay={s.delay}
                       description={s.description}
                />
            )
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
