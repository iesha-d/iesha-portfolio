import Head from 'next/head'
import styles from '../styles/PersonalInfoBox.module.css';
import { useState } from 'react';

export function LargePersonalInfoBox(props) {
    return (<>
        <div className={styles.headshot}></div>
        <div className={styles.nameInBox}>Iesha DeSilva</div>
        <div className={styles.bio}>
        </div>
        <div className={styles.socialsIcons}>
            <span className={styles.linkedIn}>
                <a href="https://www.linkedin.com/in/iesha-desilva-7bab35248"> 
                    <img src="/linkedin.svg">
                    </img>
                </a>
            </span>
            <span className={styles.github}>
                <a href="https://github.com/iesha-d">
                    <img src="/github.svg">
                    </img>
                </a>
            </span>
        </div>
    </>);
}

export function SmallPersonalInfoFloat(props) {
    return (<>
    <div className={styles.floatDiv}>
        <span className={styles.nameInFloat}>Iesha DeSilva</span>
        <span className={styles.emptySpaceFloat}> </span>
        <span>
            <a href="https://www.linkedin.com/in/iesha-desilva-7bab35248"> 
                <img src="/linkedin.svg">
                </img>
            </a>
        </span>
        <span className={styles.github}>
            <a href="https://github.com/iesha-d"> 
                <img src="/github.svg">
                </img>
            </a>
        </span>
    </div>
    </>);
}

export function SmallPersonalInfoHeader(props) {
    return (<>
        {/* <div>
            <img src='/silhouette.jpg' className={styles.smallHeadshot}>
            </img>
            erverv
            ervervwrf
            wfewr
    </div> */}
    
    </>);
}