import React from "react";

const DisplayCurrentArticle = (props) => {

  return (
    <>
      <div class="main-article-div">
        <p id="article-title">{props.title}</p>
        <p id="article-body">{props.body}</p>
      </div>
    </>
  );
};

export default DisplayCurrentArticle