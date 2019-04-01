import React, { Component } from "react";
import { Image, Container } from "./App.style";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import RecommendationBar from "../../components/RecommendationsBar/RecommendationsBar";

class App extends Component {
  render() {
    return (
      <Container>
        <NavigationBar />
        <Image />
        <RecommendationBar />
      </Container>
    );
  }
}

export default App;
