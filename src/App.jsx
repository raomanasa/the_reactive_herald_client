import React, { Component } from 'react';
import DisplayCurrentArticle from './components/DisplayCurrentArticle';

class App extends Component {

  render() {
    return (
      <>
      <DisplayCurrentArticle id="1"/>
      <div> the reactive herald
      </div>
      </>
    );
  }
}

export default App;