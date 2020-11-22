import React from 'react';

import styles from './ArticleImage.module.css'

const ArticleImage = (props) => {

    return (
        <img src={props.url} alt={props.text} className={styles.articleImage}></img>
    );
}

export default ArticleImage;