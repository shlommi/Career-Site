import styled, { css } from "styled-components";
import { skyBlue, white } from "../../theme/variables";
import { FlexDiv } from "../../theme/grid";

export const Image = styled.div`
  width: 100%;
  display: block;
  background-image: url(${require("../../assets/image-2.png")});
  background-position: cover;
  background-size: 100%;
  background-repeat: no-repeat;
  z-index: -2;
  margin: 0 auto;
`;

export const DivWithBorder = styled.div`
  display: inline-block;
  width: 100%;
  height: 603px;
  border: solid 18px ${white};
  border-right: none;
  border-bottom: none;
  position: relative;
  margin-top: 56px;
  margin-bottom: 56px;
`;
export const BorderRight = styled.div`
  position: absolute;
  width: 18px;
  height: 60%;
  background-color: ${white};
  right: 0;
  top: 0;
`;
export const BorderBottom = styled.div`
  position: absolute;
  width: 80%;
  height: 18px;
  background-color: ${white};
  bottom: 0;
  left: 0;
`;

export const Header = styled(FlexDiv)`
  margin-left: 65px;
  margin-top: 114px;
  width: 100%;
  letter-spacing: 0.5px;
`;

export const MainHeader = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Bad+Script|Calligraffitti");
  font-size: 65px;
  color: #2da9dc;
  font-family: "Calligraffitti", cursive;
  z-index: 3;
  margin-bottom: -20px;
`;

export const SubHeader = styled.h1`
  font-size: 60px;
  font-weight: 900;
  color: ${white};
  text-transform: uppercase;
  z-index: 1;
`;

export const FindJobsWrapper = styled(FlexDiv)`
  margin-top: 40px;
  input {
    width: 336px;
    height: 45px;
    background-color: ${white};
    color: ##686868;
    margin-right: 14px;
    border: none;
    outline: none;

    &::placeholder {
      padding: 2px 0 2px 15px;
      font-size: 14px;
    }
  }

  button {
    font-weight: 600;
    font-size: 16px;
    color: ${white};
    background-color: ${skyBlue};
    outline: none;
    border: none;
    width: 144px;
    height: 48px;
    padding: 2px;
  }
`;

export const Overlay = styled.div`
  ${({ isDarken }) =>
    isDarken &&
    css`
      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.6);
      }
    `}
`;
