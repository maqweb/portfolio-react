import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import Footer from "./components/Footer/Footer";
import Particles from "react-particles-js";

const particlesOption = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        },
        line_linked: { /* связующие линии */
            "enable": true, /* включено/выключено */
            "distance": 130, /* расстояние между частицами, при котором проявляется линия */
            "color": "#ffffff", /* цвет */
            "opacity": 0.2, /* прозрачность */
            "width": 1 /* ширина */
        },
    },
    interactivity: { /* интерактивность */
        detect_on: "canvas", /* реакция на событие мыши в окне (window) или в объекте (canvas) */
        /* события */
        events: {
            "onhover": { /* по наведению */
                "enable": true, /* включено/выключено */
                "mode": "repulse" /* repulse (отталкивание частиц), grab (соединение связующих линий), bubble ('пузырение' частиц) */
            },
            "onclick": { /* по клику */
                "enable": true, /* включено/выключено */
                "mode": "push" /* push (добавление новых частиц), remove (удаление частиц),
                     bubble (временное изменение прозрачности частиц на непрозрачное и увеличение их в размере), repulse (отталкивание частиц) */
            }
        },

        "modes": { /* параметры видов событий */
            "bubble": { /* при onhover или onclick: mode: bubble */
                "distance": 100, /* расстояние от мышки до частиц, при котором происходит эффект */
                "size": 40, /* размер увеличения частиц */
                "duration": 2, /* продолжительность эффекта в секундах при клике */
                "opacity": 0.2, /* максимальная прозрачность */
                "speed": 3 /* скорость эффекта */
            },
            "repulse": { /* при onhover или onclick: mode: repulse */
                "distance": 80, /* расстояние отталкивания */
                "duration": 1 /* продолжительность отталкивания */
            },
            "push": { /* при onclick: mode: push */
                "particles_nb": 4 /* количество добавляемых частиц */
            },
        }

    },
    opacity: {
        value: 0.1
    }
};

function App() {
    return (
        <div className="App">
            <div className="mainWrapper">

                <Header/>
                <Particles className='particles' params={particlesOption}/>
                <Intro/>
                <Skills/>
                <Projects/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
