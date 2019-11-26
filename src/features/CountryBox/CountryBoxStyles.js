import styled from "styled-components";
import media from "styled-media-query";

export const CountryBoxWrap = styled.div`
  background: ${props => props.theme.scheme.$sicolor};
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  position: relative;
  width: 100%;

  ${media.greaterThan("small")`
    width: 49%;
  `}

  ${media.greaterThan("medium")`
    width: 24%;
  `}

  > a > .imagewrap {
    height: 160px;
    overflow: hidden;

    .flag {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }

  > a > .countryname {
    color: ${props => props.theme.scheme.$textcolor};
    font-size: 0.8rem;
    padding: 1rem;
  }

  > .btnfav {
    background: none;
    border: transparent;
    border-top: 1px solid ${props => props.theme.scheme.$thcolor};
    color: ${props => props.theme.scheme.$textcolor};
    font-size: 0.8rem;
    padding: 1rem;
    text-align: left;
    width: 100%;

    &:disabled {
      opacity: 0.2;
    }
  }
`;
