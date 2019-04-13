import styled, { css } from "styled-components";
import { FlexDiv } from "../../theme/grid";
import { white, black, greyishBrown } from "../../theme/variables";

export const NavigationContainer = styled(FlexDiv)`
  height: 84px;
  background-color: ${white};
  color: ${black};
  z-index: 99;
  position: relative;

  .main-nav {
    font-size: 16px;
    color: ${greyishBrown};
  }

  .sub-nav {
    font-size: 14px;
    color: ${greyishBrown};
  }
`;
export const DropdownDiv = styled.div`
  width: 100%;
  height: 427px;
  margin: 0 auto;
  background-color: ${white};
  position: absolute;
  z-index: -1;
  transform: translate(0, 0);
  bottom: 0;
  left: 0;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  ${({ dropDown }) =>
    dropDown &&
    css`
      transform: translate(0, 427px);
      opacity: 1;
    `}
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas: "input close";
  justify-items: end;
`;

export const CloseDiv = styled.div`
  width: 17px;
  height: 17px;
  font-size: 25px;
  color: #898989;
  grid-area: close;
  margin-top: 45px;
  position: absolute;
  right: 80px;
  cursor: pointer;
`;

export const SearchField = styled.div`
  position: relative;
  font-size: 22px;
  grid-area: input;
  margin-top: 45px;

  span svg {
    position: absolute;
    right: 5px;
    color: #4a4a4a;
    width: 22px;
    height: 22px;
    cursor: pointer;
  }

  input {
    width: 677px;
    padding-bottom: 20px;
    font-size: 22px;
    border: none;
    border-bottom: solid 1px #898989;
  }

  input::placeholder {
    font-size: 20px;
    color: #737373;
  }

  input:focus {
    outline: none;
  }
`;

export const Suggest = styled.div`
  width: 100%;
  flex: column;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li:first-child {
    margin-top: 32px;
  }

  .grey {
    font-size: 12px;
    font-weight: bold;
    color: #c6c6c6;
    letter-spacing: 0.2px;
  }
`;

export const Category = styled.li`
  font-size: 14px;
  font-weight: bold;
  margin-top: 8px;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: #4a4a4a;
  cursor: pointer;
`;

export const Logo = styled.div`
  background-image: url(${require("../../assets/logo-brand.png")});
  height: 55px;
  width: 120px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  color: ${greyishBrown};
  text-decoration: none;
  margin-left: 48px;
  font-size: 16px;
  font-stretch: normal;
  transform: scale(1);
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.3);
  }

  svg {
    margin-right: 7px;
    fill: #bada55;
  }

  &:hover > svg {
    cursor: pointer;
    transition: all 0.2s linear;
    transform: scale(1.3);
  }
`;
