import React, { Component } from "react";
import { Image, Container, Overlay } from "./App.style";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import RecommendationBar from "../../components/RecommendationsBar/RecommendationsBar";

class App extends Component {
  state = {
    isDarken: false
  };

  handleOverlayOnClick = () => {
    this.setState(() => {
      return { isDarken: !this.state.isDarken };
    });
  };
  render() {
    return (
      <Container>
        <NavigationBar handleOverlayOnClick={this.handleOverlayOnClick} />
        <Overlay isDarken={this.state.isDarken}>
          <Image />
          <RecommendationBar />
        </Overlay>
      </Container>
    );
  }
}

export default App;
