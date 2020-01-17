import React from "react";
import { connect } from 'react-redux'
import { getCurrentArticle } from "../modules/getArticlesData";

const DisplayCurrentArticle = ( props ) => {
  
  const getArticleShowData = async (id) => {
    const article = await getCurrentArticle(id);

    if (article.error) {
      props.changeMessage(article.error)
    } else {
      props.changeCurrentArticle(article)
    }
  }

  if (props.currentArticleId) {
    getArticleShowData(props.currentArticleId)
  }

  return (
    <>
    {props.currentArticle ? (
      <div id="main-article-div" key={props.currentArticle.id}>
        <p id="article-title">{props.currentArticle.title}</p>
        <p id="article-body">{props.currentArticle.body}</p>
      </div>
    ) : (
      <p id="message">{props.message}</p>
    )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    currentArticle: state.currentArticle,
    currentArticleId: state.currentArticleId,
    message: state.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeMessage: message => {dispatch({type: 'CHANGE_MESSAGE', payload: message })},
    changeCurrentArticle: article => {dispatch({ type: 'CHANGE_ARTICLE', payload: article })},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCurrentArticle)
