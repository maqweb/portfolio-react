import React from 'react';
import style from './Contacts.module.css'
import SectionTitle from "../SectionTitle/SectionTItle";
import Button from "../Button/Button";
import {Fade} from "react-reveal";

function Contacts() {
    return (
        <div id="contacts" className={style.contacts}>
            <div className={style.container}>

                <SectionTitle title={`contacts`}/>

                <Fade left>
                    <form className={style.form}>
                        <input className={style.formInput} type="text" placeholder="Name"/>
                        <input className={style.formInput} type="text" placeholder="E-mail"/>
                        <textarea className={style.formText} placeholder="Message"/>
                    </form>
                    <Button title={`send message`}/>
                </Fade>
            </div>
        </div>
    );
}

export default Contacts;
