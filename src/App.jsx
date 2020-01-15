import React, { Component } from "react";
import DisplayCurrentArticle from "./components/DisplayCurrentArticle";
import { getData } from "./modules/getData";

class App extends Component {
  state = {
    article: this.getArticleShowData()
  };

  // componentDidMount() {
  //   this.getArticleShowData();
  // }

  async getArticleShowData() {
    this.setState({
      article: await getData()
    });
  }

  render() {
    return (
      <>
        <DisplayCurrentArticle
          title={this.state.article.data.title}
          body={this.state.article.data.body}
        />
      </>
    );
  }
}

export default App;
