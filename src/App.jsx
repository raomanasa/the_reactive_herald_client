import React from "react";
import DisplayCurrentArticle from "./components/DisplayCurrentArticle";
import DisplaySideArticles from "./components/DisplaySideArticles";
import Navbar from "./components/Navbar";
import { Header, Container, Grid } from "semantic-ui-react";
import Login from "./components/Login"
import CreateArticle from "./components/CreateArticle"

const App = () => {
  return (
    <Container>
      <Login />
      <Header id="main-header">
        The Reactive Herald
      </Header>
      <Navbar />
      <Grid celled='internally'>
        <Grid.Column width={12}>
          <DisplayCurrentArticle />
          <CreateArticle />
        </Grid.Column>
        <Grid.Column width={4}>
          <DisplaySideArticles />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default App;
