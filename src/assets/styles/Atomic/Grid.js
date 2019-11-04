import styled from "styled-components";

export const Flex = styled.div`
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
  display: flex;
  justify-content: space-between;
  width: ${props => (props.fullwidth ? "100%" : "auto")};
`;
