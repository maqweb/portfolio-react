import React from 'react';
import style from './Intro.module.css'
import {Fade, Flip} from "react-reveal";

function Intro() {
    return (
        <div className={style.intro}>
            <div className={style.container}>

                <Fade left>
                    <div className={style.greeting}>
                        <span>Hi There</span>
                        <span className={style.introTitle}>I am <br
                            className={style.brStyle}/><span>Balikhin Vitaly</span></span>
                        <h1 className={style.titleDescription}>A front-end developer</h1>
                    </div>
                </Fade>

                <Flip right>
                    <div className={style.photoWrap}>
                        <div className={style.photo}>
                            <img src="" alt=""/>
                        </div>
                    </div>
                </Flip>

            </div>
        </div>
    );
}

export default Intro;
