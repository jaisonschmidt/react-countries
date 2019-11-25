import styled from "styled-components";
import media from "styled-media-query";

export const CountryBoxWrap = styled.div`
  width: 100%;

  ${media.greaterThan("medium")`
    width: 25%;
  `}
`;
