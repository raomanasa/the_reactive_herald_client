import React from "react";
import DisplayCurrentArticle from "./components/DisplayCurrentArticle";
import DisplaySideArticles from "./components/DisplaySideArticles";
import Navbar from "./components/Navbar";
import { Header, Container, Grid } from "semantic-ui-react";
import LoginForm from "./components/LoginForm";
import { render } from "@testing-library/react";
import { authenticate } from './modules/auth';

const App = () => {
  render() {
    const { renderLoginForm, authenticated, message } = this.state;
    let renderLogin;
    switch(true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <button
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </button>
            <p>{message}</p>
          </>
        );
        break;
      case authenticated:
        renderLogin = (
          <p>Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}</p>
        );
        break;
    }


  return (
    <Container>
      <Header id="main-header">
        The Reactive Herald
      </Header>
      <Navbar />
      <button id="login">Login</button>
      <LoginForm />
      <Grid celled='internally'>
        <Grid.Column width={12}>
          <DisplayCurrentArticle />
        </Grid.Column>
        <Grid.Column width={4}>
          <DisplaySideArticles />
        </Grid.Column>
      </Grid>
    </Container>
  );
};
}
}

export default App;
