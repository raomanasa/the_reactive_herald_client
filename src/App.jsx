import React, { Component } from "react";
import DisplayCurrentArticle from "./components/DisplayCurrentArticle";
import { getCurrentArticle, getArticles } from "./modules/getArticlesData";
import DisplaySideArticles from "./components/DisplaySideArticles";

class App extends Component {
  state = {
    sideArticles: null
  }

  componentDidMount() {
    this.getArticleShowData();
  }

  async getArticleShowData() {
    const articlesData = await getArticles();
    this.setState({
      sideArticles: articlesData.articles
    })
  }

  render() {
    let sideArticles = this.state.sideArticles;
    return (
      <>
        <DisplayCurrentArticle />
        
        {sideArticles ? (
          <DisplaySideArticles sideArticles={sideArticles} />
        ) : (
          <p id="side-message">Loading side articles...</p>
        )}
      </>
    );
  }
}

export default App;
