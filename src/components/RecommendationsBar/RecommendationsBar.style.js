import styled from "styled-components";
import { twilightBlue, white } from "../../theme/variables";

export const RecommendationsContainer = styled.div`
  color: ${white};
  width: 100%;
  background-color: ${twilightBlue};
  padding: 30px 0;
  margin-top: -17px;

  h3 {
    font-size: 24px;
  }

  p {
    font-size: 17px;
  }
`;

export const DivText = styled.div`
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 224px;
  height: 44px;
  background-color: ${white};
  color: #006ac3;
  padding: 12px 10px;
  border: none;

  span {
    font-weight: bold;
  }
`;
