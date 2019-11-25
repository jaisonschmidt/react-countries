import React from "react";
import CountryBox from "../CountryBox/CountryBox";
import { Container } from "../../assets/styles/Lib";
import { LoadingCountries } from "./CountryListStyles";

const CountryList = props => {
  const { countries } = props;
  return (
    <Container>
      {countries.length > 0 &&
        countries.map((country, key) => (
          <CountryBox key={key} country={country} />
        ))}

      {countries.length === 0 && (
        <LoadingCountries>Carregando países...</LoadingCountries>
      )}
    </Container>
  );
};

export default CountryList;
