import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";
import { FlexDiv } from "../../theme/grid";

export default class Card extends Component {
  state = {
    isHover: false
  };
  render() {
    const { img, text, num } = this.props;
    return (
      <LocalWrapper
        column="column"
        img={img}
        align="center"
        justify="flex-end"
        onMouseOver={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
      >
        <BottomText justify="center" isHover={this.state.isHover}>
          <p>
            {text} <span>( {num} )</span>
          </p>
        </BottomText>
        <AnimationElement
          justify="space-between"
          align="center"
          isHover={this.state.isHover}
        >
          <div className="line" />
          <div className="rectangle" />
          <div className="line" />
        </AnimationElement>
        {this.state.isHover && (
          <ParagraphDiv column="column" align="center" justify="space-between">
            <p>
              The vision for Hilton's Corporate team is to be a trusted business
              partner that servers as a catalyst in driving our company's
              mission.
            </p>
            <button>View Jobs</button>
          </ParagraphDiv>
        )}
      </LocalWrapper>
    );
  }
}

const translateUp = keyframes`
    from {
    transform: translate(0, 0);
  }

  to {
    transform:  translate(0px, -100px);
  }
`;

const translateDown = keyframes`
    from {
      transform:  translate(0px, -300px);
  }

  to {
    transform: translate(0, 0);
  }
`;

const fades = keyframes`
  0% {
    opacity: 1;
  }

  30% {
    opacity: 0.3;
  }
  60% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

const showParagraph = keyframes`
  0% {
    opacity: 0;
    transform:  translate(0, 0);
  }

  100% {
    opacity: 1;
    transform: translate(0px, -90px);
  }
`;

const LocalWrapper = styled(FlexDiv)`
  width: 408px;
  height: 460px;
  position: relative;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.6)
    ),
    ${({ img }) =>
      img &&
      css`
    url(${img})
  `};
  background-blend-mode: multiply;
  background-position: cover;
  background-size: 100%;
  background-repeat: no-repeat;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: all 0.3s linear;
  }

  &:hover:before {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const BottomText = styled(FlexDiv)`
  width: 216px;
  height: 24px;
  color: #fff;
  ${({ isHover }) =>
    isHover &&
    css`
      animation: ${translateUp} 0.3s cubic-bezier(0.25, 0.25, 0.25, 0.25)
        forwards;
    `}

  ${({ isHover }) =>
    !isHover &&
    css`
      animation: ${translateDown} 0.3s cubic-bezier(0.25, 0.25, 0.25, 0.25)
        forwards;
    `}
  p {
    font-weight: bold;
    font-size: 20px;
  }

  span {
    font-weight: lighter;
    font-size: 16px;
  }
`;

const AnimationElement = styled(FlexDiv)`
  width: 163px;
  height: 12px;
  margin: 16px 122px 40px 122px;

  animation: ${fades} 1s cubic-bezier(0.25, 0.25, 0.25, 0.25) infinite forwards,
    ${translateDown} 0.3s cubic-bezier(0.25, 0.25, 0.25, 0.25) forwards;

  ${({ isHover }) =>
    isHover &&
    css`
      animation: ${translateUp} 0.3s cubic-bezier(0.25, 0.25, 0.25, 0.25)
        forwards;
    `}

  .line {
    width: 65px;
    border: 1px solid rgba(255, 255, 255, 0.9);
    margin: 5px auto;
  }

  .rectangle {
    width: 8px;
    height: 8px;
    transform: rotate(-315deg);
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const ParagraphDiv = styled(FlexDiv)`
  padding: 2px;
  width: 246px;
  height: 160px;
  animation: ${showParagraph} 0.3s cubic-bezier(0.25, 0.25, 0.25, 0.25) forwards;

  p {
    color: #fff;
    text-align: center;
    margin: 0;
  }

  button {
    color: #fff;
    outline: none;
    border: 1px solid #fff;
    background-color: transparent;
    width: 160px;
    height: 40px;
    padding: 2px;
    transition: all 0.1s linear;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;
