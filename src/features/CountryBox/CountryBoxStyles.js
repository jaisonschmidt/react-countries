import styled from "styled-components";
import media from "styled-media-query";

export const CountryBoxWrap = styled.div`
  background: ${props => props.theme.scheme.$sicolor};
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;

  ${media.greaterThan("medium")`
    width: 23%;
  `}

  > .imagewrap {
    height: 160px;
    overflow: hidden;

    .flag {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }

  > .countryname {
    color: ${props => props.theme.scheme.$textcolor};
    font-size: 0.8rem;
    padding: 1rem;
  }
`;
