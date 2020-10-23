import React, { useEffect, useState } from "react";

import ArticleListItem from "../ArticleListItem/ArticleListItem";

import style from './ArticleList.module.css'

const ArticleList = props => {

    const myArticles = props.articles;

    const articleList = myArticles.map((article) => (
        <ArticleListItem key={article.slug} article={article} />
    ))

    return (
        <div className={style.container}>
            {articleList}
        </div>
    )

}

export default ArticleList;