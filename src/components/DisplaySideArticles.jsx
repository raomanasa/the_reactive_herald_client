import React from "react";
import { connect } from "react-redux";
import { getArticles } from "../modules/getArticlesData";

const DisplaySideArticles = props => {
  const getArticleShowData = async () => {
    const articlesData = await getArticles();
    props.changeSideArticlesData(articlesData);
  };

  if (!props.sideArticles) {
    getArticleShowData();
  }

  if (props.sideArticles && props.sideArticles.articles.length > 0) {
    props.changeCurrentArticleId(props.sideArticles.articles[0].id);
  }

  let articlesList;

  if (props.sideArticles && props.sideArticles.articles.length > 0) {
    let articlesList = props.sideArticles.articles.map(article => {
      return (
        <div id={`side-article-${article.id}`} key={article.id}>
          <p>{article.title}</p>
          <p>{article.body}</p>
        </div>
      );
    });
    return <div id="side-articles">{articlesList}</div>;
  }

  return (
    <>
      {!props.sideArticles ? (
        <p id="message">Loading...</p>
      ) : props.sideArticles.articles.length > 0 ? (
        articlesList
      ) : (
        <p id="error-message">No articles found</p>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    sideArticles: state.sideArticles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSideArticlesData: articlesData => {
      dispatch({ type: "CHANGE_ARTICLES_DATA", payload: articlesData });
    },
    changeCurrentArticleId: id => {
      dispatch({ type: "CHANGE_ARTICLE_ID", payload: id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplaySideArticles);
