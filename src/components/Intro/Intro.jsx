import React from 'react';
import style from './Intro.module.css'

function Intro() {
    return (
        <div className={style.intro}>
            <div className={style.container}>

                <div className={style.greeting}>
                    <span>Hi There</span>
                    <span className={style.introTitle}>I am <br className={style.brStyle}/><span>Balikhin Vitaly</span></span>
                    <h1 className={style.titleDescription}>A front-end developer</h1>
                </div>

                <div className={style.photo}>
                     <img src="" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Intro;
