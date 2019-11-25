import styled from "styled-components";
import media from "styled-media-query";

export const CountryBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.greaterThan("medium")`
    width: 25%;
  `}

  > .image-wrap {
    height: 160px;
    overflow: hidden;

    img {
      height: 100%;
      object-fit: cover;
      width: 265px;
    }
  }

  > .country-name {
  }
`;
