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

                    <Skill title={`React`}
                           icon={reactIcon}
                           delay={600}
                           description={`Lorem ipsum dolor sit amet,l vero. 
                           Assumenda dolorem doloribus incidunt magnam quos tempora veniam!`}/>


                    <Skill title={`Redux`}
                           icon={reduxIcon}
                           delay={800}
                           description={`Lorem ipsum dolor sit amet,l vero. 
                           Assumenda dolorem doloribus incidunt magnam quos tempora veniam!`}/>


                    <Skill title={`TypeScript`}
                           icon={tsIcon}
                           delay={1000}
                           description={`Lorem ipsum dolor sit amet,l vero. 
                           Assumenda dolorem doloribus incidunt magnam quos tempora veniam!`}/>


                    <Skill title={`JavaScript`}
                           icon={jsIcon}
                           delay={1200}
                           description={`Lorem ipsum dolor sit amet,l vero. 
                           Assumenda dolorem doloribus incidunt magnam quos tempora veniam!`}/>


                    <Skill title={`HTML & CSS`}
                           icon={htmlIcon}
                           delay={1400}
                           description={`Lorem ipsum dolor sit amet,l vero. 
                           Assumenda dolorem doloribus incidunt magnam quos tempora veniam!`}/>


                    <Skill title={`Adaptive Layout`}
                           icon={adaptiveIcon}
                           delay={1600}
                           description={`Lorem ipsum dolor sit amet,l vero. 
                           Assumenda dolorem doloribus incidunt magnam quos tempora veniam!`}/>

                </div>
            </div>
        </div>
    );
}

export default Skills;
