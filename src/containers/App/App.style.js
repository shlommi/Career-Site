import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
`;

export const Image = styled.div`
  height: 716px;
  width: 100%;
  background-image: url(${require("../../assets/image-2.png")});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
`;
