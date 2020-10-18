import React, { useEffect, useState } from "react";
import DynamicArticle from "../DynamicArticle/DynamicArticle";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = props => {

    const myArticles = props.articles;

    const articleList = myArticles.map((article) => (
        <ArticleListItem key={article.slug} article={article} />
    ))

    return (
        <>
            {articleList}
        </>
    )

}

export default ArticleList;