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

                <h2 className={styles.topGap}>About Me</h2>
                <p className={styles.about}>
                    I'm an aspiring software engineer who works at the intersection of ML, 
                    formal systems, and art. I love taking apart complexity and turning noise into structure.
                </p>
                <p className={styles.about}> 
                    Glenelg High School Class of 2024, future CS undergrad.
                </p>
                <h2 className={styles.topGap}>Projects & GitHub</h2>
                <PortfolioItem
                    title={"2048 Puzzle"}
                    image={'screenshots/2048.gif'}
                    description={"A reversal of the classic puzzle game 2048. In this project, the player must combine all of tiles into one to win."}
                    tags={["MVC", "Animation", "JavaScript/HTML/CSS"]}
                    link={"https://github.com/iesha-d/2048-puzzle"}
                /> 
                <PortfolioItem
                    title={"Minilisp"}
                    image={'screenshots/minilisp.png'}
                    description={"Designed Minilisp, a simple Lisp-like language, and wrote a lexer and parser which represent it as an abstract syntax tree."}
                    tags={["Compilers", "Programming Languages", "Parsing"]}
                    link={"https://github.com/iesha-d/minlisp"}
                    /> 
                <PortfolioItem
                    title={"Virtual Machine"}
                    image={'screenshots/vm.gif'}
                    description={"Built a VM for a simple physical CPU, along with a new instruction set, to learn about how instructions are executed and compiled by the hardware."}
                    tags={["Assembly", "CPU", "Emulation", "Virtual Machines"]}
                    link={"https://github.com/iesha-d/virtual-machine"}
                /> 
                <PortfolioItem
                    title={"Mandelbrot Generator"}
                    image={'screenshots/mandel.png'}
                    description={"Single and Multithreaded performance experiments in C++ for drawing a Mandelbrot. Outputs results as PNG."}
                    tags={["C++", "PNG Manipulation", "Computer Graphics", "Fractals"]}
                    link={"https://github.com/iesha-d/mandelbrot-generator"}
                /> 
                <PortfolioItem
                    title={"Weather Forecaster"}
                    image={'screenshots/weather.png'}
                    description={"An easy-to-use React/JS app which gives the weekly weather forecast for any latitude and longitude and renders a bar chart of temperatures."}
                    tags={["React", "UX", "APIs", "JavaScript"]}
                    link={"https://github.com/iesha-d/weather-forecaster"}
                /> 
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