import React from "react";
import { connect } from 'react-redux'

const DisplayCurrentArticle = ( props ) => {
  debugger
  return (
    <>
      <div id="main-article-div" key={props.id}>
        <p id="article-title">{props.title}</p>
        <p id="article-body">{props.body}</p>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    currentArticle: state.currentArticle
  }
}

export default connect(mapStateToProps)(DisplayCurrentArticle)
