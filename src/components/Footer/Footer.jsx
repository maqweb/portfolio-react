import React from 'react';
import style from './Footer.module.css'

function Footer() {
  return (
    <div className={style.footer}>
        <div className={style.container}>

            <div className={style.sectionTitle}>Balikhin Vitaly</div>

            <div className={style.socialsWrap}>
                <div className={style.socialItem}>github</div>
                <div className={style.socialItem}>vk</div>
                <div className={style.socialItem}>telegram</div>
                <div className={style.socialItem}>linkedIn</div>
            </div>

            <div className={style.copyrights}>
                © 2019 all rights reserved
            </div>

        </div>
    </div>
  );
}

export default Footer;
