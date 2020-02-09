import React from 'react';
import style from './Footer.module.css'
import gitIcon from './../../assets/social-icons/github.svg'
// import vkIcon from './../../assets/social-icons/vk.svg'
import telegramIcon from './../../assets/social-icons/telegram.svg'
import linkedInIcon from './../../assets/social-icons/linkedin.svg'
import SocilaIcon from "./SocialIcon";
import {Fade} from "react-reveal";


function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.container}>

                <div className={style.sectionTitle}>Balikhin Vitaly</div>

                <div className={style.socialsWrap}>

                    <Fade bottom delay={400}>
                        <SocilaIcon icon={gitIcon}/>
                    </Fade>
                    {/*<Fade bottom delay={1600}>
                        <SocilaIcon icon={vkIcon}/>
                    </Fade>*/}
                    <Fade bottom delay={600}>
                        <SocilaIcon icon={telegramIcon}/>
                    </Fade>
                    <Fade bottom delay={800}>
                        <SocilaIcon icon={linkedInIcon}/>
                    </Fade>

                </div>

                <div className={style.copyrights}>
                    © 2019 all rights reserved
                </div>

            </div>
        </div>
    );
}

export default Footer;
