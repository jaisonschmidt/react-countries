import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.theme.scheme.$secolor};
  border: none;
  display: inline-block;
  padding: 6px 12px;
`;

export const ButtonRound = styled.button`
  background: none;
  border: 1px solid ${props => props.theme.scheme.$textcolor};
  border-radius: 5px;
  color: ${props => props.theme.scheme.$textcolor};
  cursor: pointer;
  display: inline-block;
  margin-bottom: ${props => (props.marginbottom ? props.marginbottom : "0")};
  margin-left: ${props => (props.marginleft ? props.marginleft : "0")};
  margin-right: 8px;
  margin-top: ${props => (props.margintop ? props.margintop : "0")};
  padding: 4px 8px;
`;
