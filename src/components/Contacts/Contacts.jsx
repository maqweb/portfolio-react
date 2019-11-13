import React from 'react';
import style from './Contacts.module.css'

function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={style.container}>
                <div className={style.sectionTitle}>Contacts</div>

                <form className={style.form}>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="E-mail"/>
                    <textarea placeholder="Message"/>
                </form>

                <div className={style.buttonWrap}>
                    <button className={style.button}>Отправить</button>
                </div>

            </div>
        </div>
    );
}

export default Contacts;
