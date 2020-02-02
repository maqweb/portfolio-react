import React from 'react';
import style from './Footer.module.css'
import gitIcon from './../../assets/social-icons/github.svg'
import vkIcon from './../../assets/social-icons/vk.svg'
import telegramIcon from './../../assets/social-icons/telegram.svg'
import linkedInIcon from './../../assets/social-icons/linkedin.svg'
import SocilaIcon from "./SocialIcon";


function Footer() {
  return (
    <div className={style.footer}>
        <div className={style.container}>

            <div className={style.sectionTitle}>Balikhin Vitaly</div>

            <div className={style.socialsWrap}>

                <SocilaIcon icon={gitIcon}/>
                <SocilaIcon icon={vkIcon}/>
                <SocilaIcon icon={telegramIcon}/>
                <SocilaIcon icon={linkedInIcon}/>


                {/*<div className={style.socialItem}>github</div>
                <div className={style.socialItem}>vk</div>
                <div className={style.socialItem}>telegram</div>
                <div className={style.socialItem}>linkedIn</div>*/}
            </div>

            <div className={style.copyrights}>
                © 2019 all rights reserved
            </div>

        </div>
    </div>
  );
}

export default Footer;
