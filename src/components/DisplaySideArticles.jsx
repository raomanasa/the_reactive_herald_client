import React from "react";

const DisplaySideArticles = ({ sideArticles }) => {
  let articlesList = sideArticles.map(x => {
    return (
        <div id={`side-articles-div-${x.id}`} key={x.id}>
          <p id="article-title">{x.title}</p>
          <p id="article-body">{x.body}</p>
        </div>
    );
  });

  return (
    (articlesList)
  );
};

export default DisplaySideArticles;
