import React from "react";

const DisplayCurrentArticle = (props) => {

  return (
    <>
      <div key={props.data.id}>
        <p id="article-title">{props.data.title}</p>
        <p id="article-body">{props.data.body}</p>
      </div>
    </>
  );
};

export default DisplayCurrentArticle