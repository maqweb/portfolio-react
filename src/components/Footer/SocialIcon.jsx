import React from 'react';
import style from "./Footer.module.css";

const SocilaIcon = (props) => {
    return (
        <div className={style.socialItem}>
            <a href="link">
                <img className={style.socialPic} src={props.icon} alt=""/>
            </a>
        </div>
    )
};

export default SocilaIcon;