import React from 'react';
import style from './Skills.module.css'

function Skills() {
    return (
        <div className={style.skills}>
            <div className={style.container}>
                <div className={style.sectionTitle}>My skills</div>
                <div className={style.skillsWrap}>

                    <div className={style.skillsItem}>
                        <div className={style.skillsTitle}>HTML & CSS <span>image</span></div>
                        <p>Lorem ipsum dolor sit amet,l vero. Assumenda dolorem doloribus incidunt magnam quos tempora
                            veniam!</p>
                    </div>

                    <div className={style.skillsItem}>
                        <div className={style.skillsTitle}>JavaScript<span>image</span></div>
                        <p>Lorem ipsum dolor sit amet,l vero. Assumenda dolorem doloribus incidunt magnam quos tempora
                            veniam!</p>
                    </div>

                    <div className={style.skillsItem}>
                        <div className={style.skillsTitle}>React<span>image</span></div>
                        <p>Lorem ipsum dolor sit amet,l vero. Assumenda dolorem doloribus incidunt magnam quos tempora
                            veniam!</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;
