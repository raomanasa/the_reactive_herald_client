import React from "react";
import DisplayCurrentArticle from "./components/DisplayCurrentArticle";
import DisplaySideArticles from "./components/DisplaySideArticles";
import Navbar from "./components/Navbar"

const App = () => {
    return (
      <>
      <div className="ui main container">
        <div id="main-header" className="ui header aligned center">The Reactive Herald</div>
        <Navbar />
        <div class="ui internally celled grid">
          <div className="twelve wide column">
            <DisplayCurrentArticle />
          </div>
          <div className="four wide column">
            <DisplaySideArticles />
          </div>
        </div>

      </div>
      </>
    );
  }

export default App;
