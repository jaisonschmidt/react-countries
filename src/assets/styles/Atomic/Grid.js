import styled from "styled-components";

export const Flex = styled.div`
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
  display: flex;
  justify-content: space-between;
  width: ${props => (props.fullwidth ? "100%" : "auto")};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1170px;
  padding: 0 1rem;
  width: 100%;
`;
