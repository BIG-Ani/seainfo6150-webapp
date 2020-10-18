import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const ArticleListItem = (props) => {

    const article = props.article;

    return (
        <>
            {/* this is an example of how you insert props into a react component */}
            <ul>
                <li>
                    <h1>{article.title}</h1>
                </li>

                <time dateTime={article.timeStamp}>{article.displayDate}</time>

                <p>{article.shortText}</p>
            </ul>
        </>
    );
};

export default ArticleListItem;
