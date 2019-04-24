import React from "react";
import {
  RecommendationsContainer,
  DivText,
  Button
} from "./RecommendationsBar.style";
import { Wrapper } from "../../theme/grid";
import { FlexDiv } from "../../theme/grid";

export default function RecommendationsBar() {
  return (
    <RecommendationsContainer>
      <Wrapper>
        <FlexDiv justify="space-between" align="center">
          <DivText>
            <h3>Get Personalized Job Recommendations</h3>
            <p>
              Import your profile to find opportunities tailored for your
              talents
            </p>
          </DivText>
          <Button>
            Connect with <span>LinkedIn</span>
          </Button>
        </FlexDiv>
      </Wrapper>
    </RecommendationsContainer>
  );
}
