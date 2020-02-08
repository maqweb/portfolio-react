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


function Skills() {
    return (
        <div className={style.skills}>
            <div className={style.container}>

                <SectionTitle title={`my skills`}/>

                <div className={style.skillsWrap}>

                    <Skill title={`TypeScript`}
                           icon={tsIcon}
                           description={`Lorem ipsum dolor sit amet,l vero. 
                           Assumenda dolorem doloribus incidunt magnam quos tempora veniam!`}/>

                    <Skill title={`React`}
                           icon={reactIcon}
                           description={`Lorem ipsum dolor sit amet,l vero. 
                           Assumenda dolorem doloribus incidunt magnam quos tempora veniam!`}/>

                    <Skill title={`Redux`}
                           icon={reduxIcon}
                           description={`Lorem ipsum dolor sit amet,l vero. 
                           Assumenda dolorem doloribus incidunt magnam quos tempora veniam!`}/>

                    <Skill title={`JavaScript`}
                           icon={jsIcon}
                           description={`Lorem ipsum dolor sit amet,l vero. 
                           Assumenda dolorem doloribus incidunt magnam quos tempora veniam!`}/>

                    <Skill title={`HTML & CSS`}
                           icon={htmlIcon}
                           description={`Lorem ipsum dolor sit amet,l vero. 
                           Assumenda dolorem doloribus incidunt magnam quos tempora veniam!`}/>

                    <Skill title={`Adaptive Layout`}
                           icon={adaptiveIcon}
                           description={`Lorem ipsum dolor sit amet,l vero. 
                           Assumenda dolorem doloribus incidunt magnam quos tempora veniam!`}/>

                </div>
            </div>
        </div>
    );
}

export default Skills;
