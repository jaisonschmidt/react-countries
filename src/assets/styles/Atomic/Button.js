import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.theme.$secolor};
  border: none;
  display: inline-block;
  padding: 6px 12px;
`;

export const ButtonRound = styled.button`
  background: none;
  border: 1px solid ${props => props.theme.$prcolor};
  color: ${props => props.theme.$sicolor};
  border-radius: 5px;
  display: inline-block;
  padding: 4px 8px;
`;
