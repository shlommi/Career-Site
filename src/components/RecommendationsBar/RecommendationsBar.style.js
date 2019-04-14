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
  cursor: pointer;
  transition: all 0.3 ease;

  &:active {
    box-shadow: 0px 22px 15px -19px rgba(0, 0, 0, 0.95);
    transform: scale(1.05);
  }

  span {
    font-weight: bold;
  }
`;
