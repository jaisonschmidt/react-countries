import styled from 'styled-components';

export const DetailViewWrap = styled.div`
  display: flex;
  margin-top: 3rem;
  width: 100%;

  > .colimage {
    flex-grow: 1;
    max-width: 40%;

    > img {
      width: 100%;
    }
  }

  > .coldescription {
    color: ${props => props.theme.scheme.$textcolor};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 2rem;

    .countryname {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

  }
`;