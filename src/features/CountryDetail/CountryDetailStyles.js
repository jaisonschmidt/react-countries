import styled from "styled-components";
import media from "styled-media-query";

export const CountryDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  width: 100%;

  ${media.greaterThan("medium")`
    flex-direction: row;
    margin: 0;
    margin-top: 3rem;
  `}

  > .colimage {
    flex-grow: 1;
    width: 100%;

    ${media.greaterThan("medium")`
      max-width: 40%;
    `}

    > img {
      width: 100%;
    }
  }

  > .coldescription {
    color: ${props => props.theme.scheme.$textcolor};
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    ${media.greaterThan("medium")`
      margin-left: 2rem;
    `}

    .countryname {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
`;
