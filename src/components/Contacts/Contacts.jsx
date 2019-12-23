import React from 'react';
import style from './Contacts.module.css'
import SectionTitle from "../SectionTitle/SectionTItle";
import Button from "../Button/Button";

function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={style.container}>

                <SectionTitle title={`contacts`}/>

                <form className={style.form}>
                    <input className={style.formInput} type="text" placeholder="Name"/>
                    <input className={style.formInput} type="text" placeholder="E-mail"/>
                    <textarea className={style.formText} placeholder="Message"/>
                </form>

                <Button title={`send message`}/>

            </div>
        </div>
    );
}

export default Contacts;
