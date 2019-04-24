import React from "react";

import styled from "styled-components";
import { greyishBrown } from "../../theme/variables";
import { FlexDiv } from "../../theme/grid";

export default function TitleSection({ title }) {
  return (
    <LocalWrapper marginTop="120px" marginBottom="40px" justify="center">
      <h1>{title}</h1>
    </LocalWrapper>
  );
}

const LocalWrapper = styled(FlexDiv)`
  h1 {
    color: ${greyishBrown};
    font-size: 32px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.3;
  }
`;
