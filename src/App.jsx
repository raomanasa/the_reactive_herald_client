import React from "react";
import DisplayCurrentArticle from "./components/DisplayCurrentArticle";
import DisplaySideArticles from "./components/DisplaySideArticles";

const App = () => {
    return (
      <>
        <div class="ui internally celled grid">
          <div className="twelve wide column">
            <DisplayCurrentArticle />
          </div>
          <div className="four wide column">
            <DisplaySideArticles />
          </div>
        </div>
      </>
    );
  }

export default App;
