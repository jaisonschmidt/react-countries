import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.theme.scheme.$secolor};
  border: none;
  display: inline-block;
  padding: 6px 12px;
`;

export const ButtonRound = styled.button`
  background: none;
  border: 1px solid ${props => props.theme.scheme.$prcolor};
  border-radius: 5px;
  color: ${props => props.theme.scheme.$prcolor};
  cursor: pointer;
  display: inline-block;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : "8px")};
  margin-right: 8px;
  margin-top: ${props => (props.marginTop ? props.marginTop : "0")};
  padding: 4px 8px;
`;
