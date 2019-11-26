import styled from "styled-components";

export const HeaderWrap = styled.header`
  background: ${props => props.theme.scheme.$sicolor};
  color: ${props => props.theme.scheme.$textcolor};
  display: flex;
  justify-content: space-between;
  padding: 12px;
`;
