import React from "react";
import styled from "styled-components";

export default function RectanglesBar() {
  return (
    <Wrapper>
      <div className=" active" />
      <div />
      <div />
      <div />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100px;
  height: 9px;
  position: absolute;
  bottom: 12%;
  left: 45%;

  div {
    width: 9px;
    height: 9px;
    transform: rotate(-315deg);
    border: solid 1px #ffffff;
    margin-right: 10px;

    &.active {
      width: 9px;
      height: 9px;
      transform: rotate(-315deg);
      background-color: #ffffff;
    }
  }
`;
