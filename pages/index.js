import Head from 'next/head'
import styles from '../styles/LayoutTest.module.css';
import { useState } from 'react';
import {
    LargePersonalInfoBox,
    SmallPersonalInfoFloat,
    SmallPersonalInfoHeader
} from './personal-info-box';
import {
    PortfolioItem
} from './portfolio-components';

export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.containerLarge}>
                <LargePersonalInfoBox />
            </div>

            <div className={styles.float}>
                <SmallPersonalInfoFloat />
            </div>

            {/* <div className={styles.containerSmall}>
                <SmallPersonalInfoHeader />
            </div> */}

            <div className={styles.contentContainer}>

                <h2>About Me</h2>
                <p className={styles.about}>
                    I'm an aspiring software engineer who's interested in AI and ML
                    and loves taking apart complex systems.
                    </p>
                   <p className={styles.about}> 
                    Glenelg High School Class of 2024, aiming for CS undergrad.
                    
                </p>
                <h2>Projects & GitHub</h2>
                <PortfolioItem
                    title={"2048 Puzzle"}
                    image={'screenshots/2048.gif'}
                    description={"A reversal of the classic puzzle game 2048. Here, the player must combine all the tiles into one."}
                    tags={["MVC", "JavaScript/HTML/CSS"]}
                    link={"https://github.com/iesha-d/2048-puzzle"}
                /> 
                <PortfolioItem
                    title={"Minilisp"}
                    image={'screenshots/minilisp.png'}
                    description={"Designed Minilisp, a simple Lisp-like language, and wrote a parser which represents it as a JS object."}
                    tags={["Compilers", "Programming Languages"]}
                    link={"https://github.com/iesha-d/minlisp"}
                    /> 
                <PortfolioItem
                    title={"Virtual Machine"}
                    image={'screenshots/vm.gif'}
                    description={"Built a VM to execute and compile commands in assembly."}
                    tags={["Fetching from APIs", "Vanilla JS"]}
                    link={"https://github.com/iesha-d/virtual-machine"}
                /> 
                <PortfolioItem
                    title={"Mandelbrot Generator"}
                    image={'screenshots/mandel.png'}
                    description={"Performance experiments in C++ for drawing a Mandelbrot."}
                    tags={["C++", "PNG Manipulation", "Computer Graphics"]}
                    link={"https://github.com/iesha-d/mandelbrot-generator"}
                /> 
                <PortfolioItem
                    title={"Weather Forecaster"}
                    image={'screenshots/weather.png'}
                    description={"An easy-to-use React/JS app which gives the weekly weather forecast for any latitude and longitude coordinates and draws a graph based on the forecast."}
                    tags={["Fetching from APIs", "Vanilla JS"]}
                    link={"https://github.com/iesha-d/weather-forecaster"}
                /> 
                <h2>Hobbies / EC</h2>
            </div>

            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
                * {
                box-sizing: border-box;
                }
            `}</style>
        </>
        
    )
}