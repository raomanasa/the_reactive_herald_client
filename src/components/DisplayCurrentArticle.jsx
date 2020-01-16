import React from "react";

const DisplayCurrentArticle = ({ article }) => {
  return (
    <>
      <div id="main-article-div" key={article.id}>
        <p id="article-title">{article.title}</p>
        <p id="article-body">{article.body}</p>
      </div>
    </>
  );
};

export default DisplayCurrentArticle;
