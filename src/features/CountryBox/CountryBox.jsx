import React from "react";
import { CountryBoxWrap } from "./CountryBoxStyles";

const CountryBox = props => {
  const {
    country: { name, flag }
  } = props;
  return (
    <CountryBoxWrap>
      <div className="imagewrap">
        <img src={flag} alt="" className="flag" />
      </div>
      <div className="countryname">{name}</div>
    </CountryBoxWrap>
  );
};

export default CountryBox;
