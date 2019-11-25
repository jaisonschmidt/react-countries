import React from "react";
import { CountryBoxWrap } from "./CountryBoxStyles";

const CountryBox = props => {
  const {
    country: { name }
  } = props;
  return <CountryBoxWrap>{name}</CountryBoxWrap>;
};

export default CountryBox;
