import React, { Component } from "react";
import DisplayCurrentArticle from "./components/DisplayCurrentArticle";
import { getCurrentArticle, getArticles } from "./modules/getArticlesData";
import DisplaySideArticles from "./components/DisplaySideArticles";

class App extends Component {
  state = {
    currentArticle: null,
    message: "Loading...",
    sideArticles: null
  };

  componentDidMount() {
    this.getArticleShowData();
  }

  async getArticleShowData() {
    const article = await getCurrentArticle();

    if (article.error) {
      this.setState({
        message: article.error
      });
    } else {
      this.setState({
        currentArticle: article
      });
    }

    const articlesData = await getArticles();
    this.setState({
      sideArticles: articlesData.articles
    })
  }

  render() {
    let currentArticle = this.state.currentArticle,
      message = this.state.message,
      sideArticles = this.state.sideArticles;
    return (
      <>
        {currentArticle ? (
          <DisplayCurrentArticle />
        ) : (
          <p id="message">{message}</p>
        )}
        {sideArticles ? (
          <DisplaySideArticles sideArticles={sideArticles} />
        ) : (
          <p id="side-message">Loading...</p>
        )}
      </>
    );
  }
}

export default App;
