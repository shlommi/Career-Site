import React, { Component } from "react";
import CardList from "./CardList";
import styled from "styled-components";
import { Wrapper } from "../../theme/grid";
import TitleSection from "../TitleSection/TitleSection";

export default class index extends Component {
  render() {
    return (
      <Wrapper>
        <LocalWrapper>
          <TitleSection title="choose your path" />
          <CardList />
        </LocalWrapper>
      </Wrapper>
    );
  }
}

const LocalWrapper = styled.div`
  height: 100vh;
`;
