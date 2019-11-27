import React from 'react';
import style from './Intro.module.css'

function Intro() {
    return (
        <div className={style.intro}>
            <div className={style.container}>

                <div className={style.greeting}>
                    <span>Hi There</span>
                    <span>I am Vitaly Balikhin</span>
                    <span>A front-end developer</span>
                </div>

                <div className={style.photo}>
                    {/* <img src="" alt=""/> */}
                </div>
            </div>
        </div>
    );
}

export default Intro;
