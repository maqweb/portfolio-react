import React from 'react';
import style from "./Footer.module.css";
import {Fade} from "react-reveal";

const SocilaIcon = (props) => {
    return (
        <Fade bottom delay={props.delay}>
        <div className={style.socialItem}>
            <a href="link">
                <img className={style.socialPic} src={props.icon} alt=""/>
            </a>
        </div>
        </Fade>
    )
};

export default SocilaIcon;