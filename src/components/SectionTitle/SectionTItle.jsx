import React from 'react';
import style from './SectionTitle.module.css'

function SectionTitle(props) {
    return (
            <div className={style.sectionBlock}>
                <h2 className={style.sectionTitle}>{props.title}</h2>
                <div className={style.line}></div>
            </div>
    );
}

export default SectionTitle;
