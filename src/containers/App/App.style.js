import styled from "styled-components";

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
