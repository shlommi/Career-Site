import React, { Component } from "react";
import CardList from "./CardList";
import { Wrapper } from "../../theme/grid";
import TitleSection from "../TitleSection/TitleSection";

export default class index extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <TitleSection title="choose your path" />
          <CardList />
        </div>
      </Wrapper>
    );
  }
}
