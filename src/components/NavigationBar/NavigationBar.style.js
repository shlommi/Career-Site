import styled, { css } from "styled-components";
import { FlexDiv } from "../../theme/grid";
import { white, black, greyishBrown } from "../../theme/variables";

export const NavigationContainer = styled(FlexDiv)`
  height: 84px;
  padding: 0 88px 0 88px;
  margin: 0 auto;
  background-color: ${white};
  color: ${black};
  z-index: 99;
`;

export const WrapperLeft = styled(FlexDiv)`
  flex: 2;
`;

export const WrapperRight = styled(FlexDiv)`
  flex: 1;

  a {
    color: ${black};
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Logo = styled.div`
  background-image: url(${require("../../assets/logo-brand.png")});
  height: 55px;
  width: 120px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const MenuLinks = styled(FlexDiv)``;

export const Link = styled.a`
  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight};
    `}

  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft};
    `}

  text-decoration: none;
  cursor: pointer;
  color: ${greyishBrown};
  text-decoration: none;
  margin-left: 48px;
  font-size: 16px;
  font-weight: 450;
  font-stretch: normal;

  &:hover {
    transition: all 0.2s linear;
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
