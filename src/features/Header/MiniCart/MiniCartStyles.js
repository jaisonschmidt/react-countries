import styled from "styled-components";

export const MiniCartWrap = styled.div`
  background: none;
  border: none;
  margin-left: 12px;
  position: relative;
`;

export const HearthWrap = styled.div`
  color: ${props => props.theme.scheme.$textcolor};
  font-size: 30px;
`;

export const ContFavs = styled.div`
  align-items: center;
  color: ${props => props.theme.scheme.$sicolor};
  display: flex;
  font-size: 12px;
  height: 100%;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 0px;
  width: 100%;
`;
