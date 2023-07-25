import { useState } from 'react';
import styles from '../styles/PortfolioComponents.module.css';

export function PortfolioItem({
    image, title, description, tags, link
}) {
    let imgOrVideo = null;
    if (isImage(image)) {
        imgOrVideo = <img src={image}></img>
    } else {
        imgOrVideo = <video><source src={image} type="video/webm" /></video>
    }

    return (
    <div>
        <div className={styles.portfolioTitle}>{title}</div>
        <div className={styles.container}>
            <span className={styles.item}>
                {imgOrVideo}
            </span>
            <span className={styles.item}>
                <div className={styles.description}>{description}</div>
                <div className={styles.tags}>{
                    tags.map(t => <div className={styles.tag}>{t}</div>)
                }</div>
                <div className={styles.gitLink}><a href={link}>See the code &rarr;</a></div>
            </span>
        </div>
    </div>
    );
}

function isImage(url) {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];
    const extension = url.split('.').pop().toLowerCase();
    return imageExtensions.includes(extension);
}
  