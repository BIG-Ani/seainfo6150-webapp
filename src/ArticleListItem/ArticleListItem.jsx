import React, {useState} from "react";

import ToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";

import style from './ArticleListItem.module.css'

const ArticleListItem = (props) => {

    // dynamic text displaying status
    const [loadContent, setLoadContent] = useState({buttonText: 'Show more'});

    const article = props.article;

    const loadContentHandler = (showMore) => {
        if (showMore) {
            setLoadContent({
                buttonText: 'Show less',
                shortText: article.shortText,
                displayDate: article.displayDate
            });
        } else {
            setLoadContent({buttonText: 'Show more'});
        }
    }

    return (
        <div className={style.container}>
            <h1 className={style.title}>
                {article.title}
            </h1>

            <p>{loadContent.shortText}</p>
            <time className={style.displayTime} dateTime={article.timeStamp}>{loadContent.displayDate}</time>

            <ToggleButton btnText={loadContent.buttonText} loadContentHandler={loadContentHandler}/>

        </div>
    );
};

export default ArticleListItem;
