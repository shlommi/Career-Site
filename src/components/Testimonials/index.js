import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Wrapper, Div, FlexDiv } from "../../theme/grid";
import { twilightBlue, greyishBrown } from "../../theme/variables";
import TitleSection from "../TitleSection/TitleSection";
import { testimonialsInfo } from "./data";

export default class index extends Component {
  state = {
    testimonialsInfo: { ...testimonialsInfo[0] }
  };
  render() {
    const { img, name, jobTitle, info } = this.state.testimonialsInfo;

    return (
      <>
        <TitleSection title="team member stories" />
        <BackgroundImage>
          <Wrapper>
            <ArrowsDIv justify="space-between" align="center">
              <LeftArrow
                xmlns="http://www.w3.org/2000/LeftArrow"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                onClick={() =>
                  this.setState({
                    testimonialsInfo: { ...testimonialsInfo[0] }
                  })
                }
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    className="left-arrow"
                    fill="#0F4C97"
                    d="M26 .544L.544 26 26 51.456 51.456 26z"
                  />
                  <g stroke="#FFF" strokeWidth="0.9">
                    <path d="M25.14 19.399v14.023l-7.012-7.011 7.011-7.012z" />
                    <path strokeLinecap="square" d="M18.342 26.41h15.346" />
                  </g>
                </g>
              </LeftArrow>
              <RightArrow
                xmlns="http://www.w3.org/2000/RightArrow"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                onClick={() =>
                  this.setState({
                    testimonialsInfo: { ...testimonialsInfo[1] }
                  })
                }
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="#0F4C97"
                    d="M26 .544L51.456 26 26 51.456.544 26z"
                  />
                  <g stroke="#FFF" strokeWidth="0.9">
                    <path d="M26.366 19.514v14.782l6.57-7.39-6.57-7.392z" />
                    <path strokeLinecap="square" d="M32.583 27.4H18.291" />
                  </g>
                </g>
              </RightArrow>
              {this.state.testimonialsInfo === { ...testimonialsInfo[0] } ? (
                <RectanglesBar>
                  <div className="active" />
                  <div />
                  <div />
                  <div />
                </RectanglesBar>
              ) : (
                <RectanglesBar>
                  <div />
                  <div className="active" />
                  <div />
                  <div />
                </RectanglesBar>
              )}

              <ProfileDiv
                column="column"
                justify="space-between"
                align="center"
              >
                <img src={img} alt="copy-4" />
                <div className="hr-line" />
                <InfoWrapper
                  column="column"
                  justify="space-between"
                  align="center"
                >
                  <p className="header-name">{name}</p>
                  <p className="job-title">{jobTitle}</p>
                </InfoWrapper>
              </ProfileDiv>
              <BorderDiv />
              <TextDiv column="column" justify="center" align="center">
                <div className="wrapper-text">{info}</div>
              </TextDiv>
            </ArrowsDIv>
          </Wrapper>
        </BackgroundImage>
      </>
    );
  }
}

const hoverIn = keyframes`
  from {
        transform: rotate(0deg); transform-origin: center;
    }
    to {
        transform: rotate(360deg); transform-origin: center;
    }
`;

const fadeIn = keyframes`
  from {
        transform: scale(0.8); transform-origin: center;
        opacity: 0;
    }
    to {
        transform: scale(1); transform-origin: center;
        opacity:1;
    }
`;

const BackgroundImage = styled(Div)`
  background-image: url(${require("../../assets/bitmap-copy-3.jpg")});
  display: inline-block;
  width: 100%;
  height: 560px;
  margin-bottom: 100px;
`;

const ArrowsDIv = styled(FlexDiv)`
  position: relative;
  margin: 142px auto;
  width: 956px;
  height: 308px;
  background-color: #fff;

  svg path {
    fill: #0f4c97;
    cursor: pointer;
  }

  svg g[stroke="#FFF"] {
    transform: rotate(0deg);
  }

  svg:hover path {
    fill: #2da9dc;
  }
  svg:hover g[stroke="#FFF"] {
    animation: 0.4s ${hoverIn} cubic-bezier(0.36, 0.16, 0.14, 0.88);
  }
`;

const LeftArrow = styled.svg`
  position: absolute;
  left: -25px;
`;

const RightArrow = styled.svg`
  position: absolute;
  right: -25px;
`;

const RectanglesBar = styled.div`
  display: flex;
  width: 100%;
  height: 9px;
  position: absolute;
  justify-content: center;
  bottom: 0;
  margin-bottom: -22px;

  div {
    width: 9px;
    height: 9px;
    transform: rotate(-315deg);
    border: solid 1px #fff;
    margin-right: 10px;

    &.active {
      width: 9px;
      height: 9px;
      transform: rotate(-315deg);
      background-color: #fff;
    }
  }
`;

const ProfileDiv = styled(FlexDiv)`
  animation: 0.5s ${fadeIn} cubic-bezier(0.36, 0.16, 0.14, 0.88);
  width: 355px;
  height: 100%;
  margin-bottom: 120px;

  .hr-line {
    width: 80px;
    height: 1px;
    background-color: #d1d1d1;
  }
`;

const InfoWrapper = styled(FlexDiv)`
  .header-name {
    font-size: 26px;
    color: ${twilightBlue};
    font-family: "Calligraffitti", cursive;
    font-weight: bold;
  }

  .job-title {
    color: ${greyishBrown};
    font-size: 14px;
  }
`;

const BorderDiv = styled(FlexDiv)`
  height: 228px;
  width: 2px;
  background-color: #ededed;
  margin: 2px 0;
`;

const TextDiv = styled(FlexDiv)`
  width: 599px;
  height: 100%;

  .wrapper-text {
    width: 380px;
    height: 164px;
    color: ${greyishBrown};
    font-size: 24px;
    font-stretch: ultra-expanded;
    font-style: italic;
    font-weight: normal;
    line-height: 36px;
    margin: 67px auto;
  }
`;
