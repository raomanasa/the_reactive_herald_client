import React from "react";

const DisplayCurrentArticle = (props) => {
  return (
    <>
      <div className="main-article-div">
        <p id="article-title">{props.id}</p>
        <p id="article-body">{props.id}</p>
      </div>
    </>
  );
};

export default DisplayCurrentArticle