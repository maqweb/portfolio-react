import React from 'react';
import style from './Footer.module.css'
import gitIcon from './../../assets/social-icons/github.svg'
import telegramIcon from './../../assets/social-icons/telegram.svg'
import linkedInIcon from './../../assets/social-icons/linkedin.svg'
import SocilaIcon from "./SocialIcon";


class Footer extends React.Component {
    state = {
        icons: [
            {
                icon: gitIcon,
                delay: 400,
                link: 'https://github.com/maqweb'
            },
            {
                icon: telegramIcon,
                delay: 600,
                link: 'https://t.me/balikhinv'
            },
            {
                icon: linkedInIcon,
                delay: 800,
                link: 'https://www.linkedin.com/in/vitaly-balikhin-a05596194/'
            },
        ]
    };

    render() {

        const iconElement = this.state.icons.map(i => {
            return <SocilaIcon icon={i.icon} delay={i.delay} link={i.link}/>
        });

        return (
            <div className={style.footer}>
                <div className={style.container}>

                    <div className={style.sectionTitle}>Balikhin Vitaly</div>

                    <div className={style.socialsWrap}>
                        {iconElement}
                    </div>

                    <div className={style.copyrights}>
                        © 2020 all rights reserved
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;
