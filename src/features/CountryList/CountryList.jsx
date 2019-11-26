import React from "react";
import CountryBox from "../CountryBox/CountryBox";

const CountryList = props => {
  const { countries } = props;
  return (
    <>
      {countries.length > 0 &&
        countries.map((country, key) => (
          <CountryBox key={key} country={country} />
        ))}
    </>
  );
};

export default CountryList;
