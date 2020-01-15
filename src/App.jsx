import React, { Component } from "react";
import DisplayCurrentArticle from "./components/DisplayCurrentArticle";
import { getData } from "./modules/getData";

class App extends Component {
  state = {
    currentShowArticle: [],
    showArticleLoaded: false
  };

  componentDidMount() {
    this.getArticleShowData();
  }

  async getArticleShowData() {
    this.setState({
      currentShowArticle: await getData(),
      showArticleLoaded: true
    });
  }

  render() {
    let showArticleLoaded = this.state.showArticleLoaded
    let currentShowArticle = showArticleLoaded ? this.state.currentShowArticle.data : "Loading"
    debugger
    return (
      <>
        <DisplayCurrentArticle
          props={showArticleLoaded ? currentShowArticle : null }
        />
      </>
    );
  }
}

export default App;
