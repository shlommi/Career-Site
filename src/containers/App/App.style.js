import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  overflow-x: hidden;
`;

export const Image = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${require("../../assets/image-2.png")});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100%;
  z-index: -2;
`;

export const Overlay = styled.div`
  ${({ isDarken }) =>
    isDarken &&
    css`
      &:after {
        content: "";
        display: block;
        position: fixed; /* could also be absolute */
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.6);
      }
    `}
`;
