import React, { Component } from "react";
import { GlobalStyle } from "../../theme/globalStyle";
import { Wrapper } from "../../theme/grid";
import {
  Image,
  Overlay,
  MainHeader,
  SubHeader,
  DivWithBorder,
  BorderRight,
  BorderBottom,
  Header,
  FindJobsWrapper,
  Button
} from "./App.style";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import RecommendationBar from "../../components/RecommendationsBar/RecommendationsBar";
import ChatIcon from "../../components/ChatIcon/ChatIcon";
import RectanglesBar from "../../components/RectanglesBar/RectanglesBar";
import ChooseYourPathWidget from "../../components/ChooseYourPathWidget";
import Testimonials from "../../components/Testimonials";

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
      <React.Fragment>
        <GlobalStyle />
        <NavigationBar handleOverlayOnClick={this.handleOverlayOnClick} />
        <Overlay isDarken={this.state.isDarken}>
          <Image>
            <Wrapper>
              <DivWithBorder>
                <BorderRight />
                <BorderBottom />
                <RectanglesBar />
                <Header column="column" align="flex-start">
                  <MainHeader>Share your travel</MainHeader>
                  <SubHeader>experience with us</SubHeader>
                  <FindJobsWrapper justify="flex-start" align="center">
                    <input
                      type="text"
                      className="keyword-input"
                      placeholder="Keyword, Job Title or Job ID"
                    />
                    <input
                      type="text"
                      className="country-input"
                      placeholder="Country, State or City"
                    />
                    <Button>Find Jobs</Button>
                  </FindJobsWrapper>
                  <ChatIcon />
                </Header>
              </DivWithBorder>
            </Wrapper>
          </Image>
          <RecommendationBar />
          <ChooseYourPathWidget />
          <Testimonials />
        </Overlay>
      </React.Fragment>
    );
  }
}

export default App;
