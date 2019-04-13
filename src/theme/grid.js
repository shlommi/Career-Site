import styled, { css } from "styled-components";

export const Div = styled.div`
    ${({ marginTop }) =>
      marginTop &&
      css`
        margin-top: ${marginTop};
      `}
    ${({ marginRight }) =>
      marginRight &&
      css`
        margin-right: ${marginRight};
      `}
    ${({ marginBottom }) =>
      marginBottom &&
      css`
        margin-bottom: ${marginBottom};
      `}
    ${({ marginLeft }) =>
      marginLeft &&
      css`
        margin-left: ${marginLeft};
      `}
`;

export const Wrapper = styled(Div)`
  width: 1280px;
  margin: 0 auto;
  padding-left: 80px;
  padding-right: 80px;
`;

export const Container = styled(Div)`
  width: 100%;
  margin: 0 auto;
  padding-left: 80px;
  padding-right: 80px;
  background-color: yellow;
`;

export const FlexDiv = styled(Div)`
  display:flex;
 

  ${({ column }) =>
    column &&
    css`
      flex-direction: ${column};
    `}
  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}
  ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}
`;
