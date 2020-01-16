import React from "react";
import { connect } from 'react-redux'
import { getCurrentArticle } from "../modules/getArticlesData";

const DisplayCurrentArticle = ( props ) => {
  
  const getArticleShowData = async () => {
    const article = await getCurrentArticle();
    props.changeCurrentArticle(article)
  }
  getArticleShowData()

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

const mapDispatchToProps = dispatch => {
  return {
    // changeMessage: message => {dispatch({type: 'CHANGE_MESSAGE', payload: message })}
    changeCurrentArticle: article => {dispatch({ type: 'CHANGE_ARTICLE', payload: article })},

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCurrentArticle)
